import Entity from "./Entity";
import Particle from "./Particle";
import Explosion from "./Explosion";
import PowerUp from "./PowerUps";
import Actions from "./enemyActions";

export default class Enemy extends Entity{
    constructor(x,y,dx,dy, health, shotType = "single", moveType = "straight-down", points, pickups = "points"){
        super(x,y,dx,dy);
        this.height = 20;
        this.width = 20;
        this.health = health;
        this.score = points;
        this.destroyed = false;
        this.lifespan = 0;
        this.shotType = shotType;
        this.moveType = moveType;
        this.pickups = pickups;
        this.state = 0;
        this.speed = 4;
        this.invuln = false;
    }  

    hit(particles, bullet, score, pickups){
        if(this.destroyed === false && bullet.destroyed === false){
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(bullet.x + (Math.random() * 20), this.y + this.height, (Math.random() * 1.7) - 0.85, -Math.random() * 10,
                    (Math.random() * 24) + 24, "green"));
            }
            if(this.health < 0){
                this.destroy(particles, score);
                
                this.pickups.forEach(pickup => {
                    const randX = (Math.random() * 4) - 2;
                    const randY = (Math.random() * 4) - 2;
                    pickups.push(new PowerUp(this.x, this.y, randX * 2, randY * 2, pickup));
                });
            }
        }
    }

    destroy(particles, score){
        this.destroyed = true;
        score.addScore(this.score);
        score.addCombo(0.10);
        score.resetComboTimer();
        particles.push(new Explosion(this.x, this.y));
    }

    performAction(player, enemyBulletArray){
        Actions(this, player, enemyBulletArray);
    }

    render(ctx, spriteSheet, enemyBulletArray, player){
        if (this.destroyed === false && this.x > 0 && this.x + 20 < 540 &&
            this.y > 0 && this.y + 20 < 740 && this.invuln === false) {
                ctx.drawImage(spriteSheet, 1164, 427, 72, 92, this.x - 8, this.y - 8, 36, 46);
        }

        if (this.y > 920 || this.y < -200 || this.x < -200 || this.x > 730) {
            this.destroyed = true;
        }

        this.performAction(player, enemyBulletArray);
        this.x += this.dx;
        this.y += this.dy;
        this.lifespan++;
    }
}