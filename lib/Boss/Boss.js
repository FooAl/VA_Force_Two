import Enemy from "../Enemy";
import Particle from "../Particle";
import act from "./bossActions";
import Explosion from "../Explosion";
import PowerUp from "../PowerUps";

export default class Boss extends Enemy{
    constructor(x, y, dx, dy, health){
        super(x, y, dx, dy, health);
        this.shotType = "single";
        this.moveType = "boss-1";
        this.points = 20000;
        this.height = 50;
        this.width = 50;
        this.speed = 8;
        const pickupsArray = [];
        for(let i = 0; i < 24; i++){
            pickupsArray.push("points");
        }

        this.pickups = pickupsArray;
        this.destroyed = false;
    }

    hit(particles, bullet, score, pickups, enemyArray, gameOver) {
        if (this.destroyed === false && bullet.destroyed === false) {
            for (let i = 0; i < 30; i++) {
                particles.push(new Particle(bullet.x + (Math.random() * 20), this.y + this.height, (Math.random() * 1.7) - 0.85, -Math.random() * 10,
                    (Math.random() * 24) + 24, "green"));
            }
            if (this.health < 0) {
                this.destroy(particles, score, enemyArray, gameOver);

                this.pickups.forEach(pickup => {
                    const randX = (Math.random() * 4) - 2;
                    const randY = (Math.random() * 4) - 2;
                    pickups.push(new PowerUp(this.x, this.y, randX * 2, randY * 2, pickup));
                });
            }
        }
    }

    burning(particles){
        for(let i = 0; i < 5; i++){
            particles.push(new Particle(this.x + (Math.random() * 20) + 9, this.y - 5, (Math.random() * 2) - 1, -Math.random() * 10,
                (Math.random() * 24) + 24, "smoke"));
        }
    }

    changePhase() {
        if (this.health <= 1000 && this.moveType === "boss-2") {
            this.lifespan = 0;
            this.moveType = "boss-3";
        }else if (this.health <= 2000 && this.moveType === "boss-1") {
            this.lifespan = 0;
            this.moveType = "boss-2";
        }
    }

    destroy(particles, score, enemyArray, gameOver){
        for(let i = 1; i < enemyArray.length; i++){
            enemyArray[i].destroy(particles, score);
        }
        score.addScore(this.score);
        particles.push(new Explosion(this.x, this.y));
        score.comboFreeze = false;
        this.destroyed = true;
        setTimeout(function(){gameOver[0] = true; }, 4000);
    }

    performAction(player, enemyBulletArray, enemyArray){
        act(this, player, enemyBulletArray, enemyArray);
    }

    render(ctx, spriteSheet, enemyBulletArray, player, enemyArray, particles) {
        if (this.destroyed === false && this.x > 0 && this.x + 20 < 540 &&
            this.y > 0 && this.y + 20 < 740) {
            ctx.drawImage(spriteSheet, 1164, 427, 72, 92, this.x - 8, this.y - 8, 54, 69);
        }
        if(this.health < 1000){
            this.burning(particles);
        }
        this.performAction(player, enemyBulletArray, enemyArray);
        this.changePhase();
        this.x += this.dx;
        this.y += this.dy;
        this.lifespan++;
    }

}