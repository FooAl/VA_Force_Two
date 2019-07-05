import Entity from "./Entity";
import Particle from "./Particle";
import PlayerBullet from "./PlayerBullet";
import Explosion from "./Explosion";

export default class Player extends Entity{
    constructor(x, y){
        super(x, y);
        this.lives = 3;
        this.invuln = false;
        this.invulnTimer = 0;
        this.power = 0;
        this.controllable = true;
        this.protectTimer = 0;
        this.state = 0;
        this.option = 0;
        this.weapon = 0;
        this.shootTimer = 0;
        this.height = 4;
        this.width = 4;

        this.optionPos = [1076, 1112, 1180, 1148];
    }

    spawn(){
        this.y = 850;
        this.x = 270;
        this.invuln = true;
        this.controllable = false;
    }

    boost(particles) {
        for (let i = 0; i < 5; i++) {
            particles.push(new Particle(this.x - 2, this.y + 15, (Math.random() * 1.5) - 0.75, Math.random()));
        }
    }
    
    shoot(inputs, bullets){
        if (inputs.z && this.shootTimer % 8 === 0){
            if(this.power < 10){
                this.power_one(bullets);
            }else if(this.power >= 10 && this.power < 25){
                this.power_two(inputs, bullets);
            }else{
                this.power_three(inputs, bullets);
            }
            this.shootTimer = 0;
        }
        this.shootTimer++;
    }

    power_one(bullets){
        bullets.push(new PlayerBullet(this.x - 10, this.y - 50, 0, 1, 4));
    }

    power_two(inputs, bullets) {
        let power = 4;
        let dx = 20;
        let pos = -10;
        if(inputs.shift){
            power = 5;
            dx = 10;
        }
        bullets.push(new PlayerBullet(this.x + pos + dx, this.y - 50, 0, 1, power));
        bullets.push(new PlayerBullet(this.x + pos - dx, this.y - 50, 0, 1, power));
    }

    power_three(inputs, bullets){
        let power1 = 4;
        let power2 = 3;
        let dx1 = 20;
        let dx2 = 45;
        let pos = -10;
        if (inputs.shift) {
            power1 = 5;
            power2 = 4;
            dx1 = 10;
            dx2 = 35;
        }

        bullets.push(new PlayerBullet(this.x + pos + dx1, this.y - 50, 0, 1, power1));
        bullets.push(new PlayerBullet(this.x + pos - dx1, this.y - 50, 0, 1, power1));
        bullets.push(new PlayerBullet(this.x + pos + dx2, this.y, 0, 1, power2));
        bullets.push(new PlayerBullet(this.x + pos - dx2, this.y, 0, 1, power2));
    }

    explode(enemyBullets, particles, score){
        this.spawn();
        enemyBullets.forEach(bullet => {
            bullet.disappate(particles);
            bullet.destroyed = true;
        });
        // particles.push(new Explosion(this.x, this.y - 30));
        this.lives--;
        this.protectTimer = 100;
        score.comboTimer = 0;
        if(this.power > 10){
            this.power -= 10;
        }else if (this.power < 10 && this.power > 0){
            this.power = 0;
        }
    }
    

    move(inputs, particles){
        let speed;
        if(inputs.shift === true){
            speed = 3;
        }else{
            speed = 7;
        }
        if (this.controllable === true) {
            if (inputs.right && this.x < 460) {
                this.x += speed;
                this.state = 1; 
            } else if (inputs.left && this.x > 80) {
                this.x -= speed;
                this.state = -1;
            } else {
                this.state = 0;
            }
            if (inputs.down && this.y < 650) {
                this.y += speed;
            } else if (inputs.up && this.y > 80) {
                this.y -= speed;
                this.boost(particles);
            }
        }
    }




    draw(ctx, spriteSheet){
        if (this.invuln === false || this.invulnTimer % 10 >= 5) {
            if (this.state === 0) {
                ctx.drawImage(spriteSheet, 1237, 264, 72, 84, this.x - 27, this.y - 42, 54, 63);
            } else if (this.state === -1) {
                ctx.drawImage(spriteSheet, 1153, 264, 61, 84, this.x - 22.5, this.y - 42, 45, 63);
            } else if (this.state === 1) {
                ctx.drawImage(spriteSheet, 1329, 264, 61, 84, this.x - 22.5, this.y - 42, 45, 63);
            }
        }
    }

    drawOptions(inputs, ctx, spriteSheet){
        let x1 = 31;
        let x2 = -55;
        if(inputs.shift){
            x1 = 21;
            x2 = -45;
        }
        let sprite = Math.floor(this.option / 6);
        ctx.drawImage(spriteSheet, this.optionPos[sprite], 375, 24, 20, this.x + x1, this.y + 20, 24, 20);
        ctx.drawImage(spriteSheet, this.optionPos[sprite], 375, 24, 20, this.x + x2, this.y + 20, 24, 20);
        this.option++;
    }

    render(ctx, spriteSheet, inputs, particles, bullets){
        if (this.invuln === true && this.controllable === false) {
            this.invulnTimer++;
            this.y -= 3;
            if (this.invulnTimer === 75) {
                this.invuln = false;
                this.invulnTimer = 0;
                this.controllable = true;
            }
        }
        if(this.protectTimer > 0){
            this.protectTimer--;
        }

        this.move(inputs, particles);
        this.shoot(inputs, bullets);
        this.draw(ctx, spriteSheet);
        // if(this.power >= 0){
            // this.drawOptions(inputs, ctx, spriteSheet);
        // }

        // ctx.beginPath();
        // ctx.arc(this.x, this.y, 4, 0, Math.PI*2);
        // ctx.fillStyle = "white";
        // ctx.fill();
        // ctx.closePath();
    }
}