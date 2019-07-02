import Entity from "./Entity";
import Particle from "./Particle";

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
    }

    spawn(){
        this.y = 850;
        this.x = 270;
        this.invuln = true;
        this.controllable = false;
    }

    boost(particles) {
        for (let i = 0; i < 10; i++) {
            particles.push(new Particle(this.x - 2, this.y + 15, (Math.random() * 1.5) - 0.75, Math.random()));
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
                // debugger
                this.boost(particles);
            }
        }
    }

    shoot(){
        
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

    render(ctx, spriteSheet, inputs, particles){
        if (this.invuln === true && this.controllable === false) {
            this.invulnTimer++;
            this.y -= 3;
            if (this.invulnTimer === 75) {
                this.invuln = false;
                this.invulnTimer = 0;
                this.controllable = true;
            }
        }
        this.move(inputs, particles);
        this.draw(ctx, spriteSheet);
    }
}