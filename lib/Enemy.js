import Entity from "./Entity";
import Particle from "./Particle";
import Enemybullet from "./EnemyBullet";

export default class Enemy extends Entity{
    constructor(x,y,dx,dy, health, shotType = "single", moveType = "straight"){
        super(x,y,dx,dy);
        this.height = 20;
        this.width = 20;
        this.health = health;
        this.score = 100;
        this.destroyed = false;
        this.lifespan = 0;
        this.shotType = shotType;
        this.moveType = moveType;
        // this.pickups = pickups;
        this.state = 0;
    }  

    hit(particles, bullet, score){
        if(this.destroyed === false && bullet.destroyed === false){
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(bullet.x + (Math.random() * 20), this.y + this.height, (Math.random() * 1.7) - 0.85, -Math.random() * 10,
                    (Math.random() * 24) + 24, "green"));
            }
            if(this.health < 0){
                this.destroyed = true;
                score.addScore(this.score);

                //add powerups
            }
        }
    }

    render(ctx, spriteSheet){
        if (this.destroyed === false && this.x > 0 && this.x + 20 < 540 &&
            this.y > 0 && this.y + 20 < 740) {
                ctx.drawImage(spriteSheet, 1164, 427, 72, 92, this.x - 8, this.y - 8, 36, 46);
        }
        
        this.x += this.dx;
        this.y += this.dy;
        
    }
}