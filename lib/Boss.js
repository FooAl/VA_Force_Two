import Enemy from "./Enemy";
import Particle from "./Particle";

export default class Boss extends Enemy{
    constructor(x, y, dx, dy, health){
        super(x, y, dx, dy, health);
        this.shotType = "single";
        this.moveType = "boss";
        this.points = 20000;
        this.height = 50;
        this.width = 50;

        const pickupsArray = [];
        for(let i = 0; i < 24; i++){
            pickupsArray.push("points");
        }

        this.pickups = pickupsArray
        this.destroyed = false;
    }

    burning(particles){
        for(let i = 0; i < 5; i++){
            particles.push(new Particle(this.x + (Math.random() * 20) + 9, this.y - 5, (Math.random() * 2) - 1, -Math.random() * 10,
                (Math.random() * 24) + 24, "smoke"));
        }
    }

    render(ctx, spriteSheet, enemyBulletArray, player) {
        if (this.destroyed === false && this.x > 0 && this.x + 20 < 540 &&
            this.y > 0 && this.y + 20 < 740) {
            ctx.drawImage(spriteSheet, 1164, 427, 72, 92, enemy.x - 8, enemy.y - 8, 54, 69);
        }
        this.performAction(player, enemyBulletArray)
        this.x += this.dx;
        this.y += this.dy;
        this.lifespan++;
    }

}