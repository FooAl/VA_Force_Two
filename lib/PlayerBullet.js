import Entity from "./Entity";
import {isCollided} from "./utility";

export default class PlayerBullet extends Entity{
    constructor(x, y, dx, dy, damage){
        super(x,y,dx,dy);
        this.damage = damage;

        this.width = 20;
        this.height = 30;
        this.destroyed = false;
        this.speed = 20;
    }

    enemyCollide(enemies, particles, score, pickups){
        for(let i = 0; i < enemies.length; i++){
            const enemy = enemies[i];
            if(isCollided(this, enemy)){
                enemy.hit(particles, this, score, pickups);
                enemy.health -= this.damage;
                this.destroyed = true;
            }
        }
    }

    render(ctx, spriteSheet, enemies, particles, score, pickups){
        this.y -= this.speed * this.dy;
        this.x += this.speed * this.dx;
        
        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {
            this.destroyed = true;
        }

        this.enemyCollide(enemies, particles, score, pickups);

        if (this.destroyed === false) {
            ctx.drawImage(spriteSheet, 1076, 271, 20, 80, this.x, this.y - 42, 20, 80);
        }
    }
}