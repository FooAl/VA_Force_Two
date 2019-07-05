import Entity from "./Entity.js";
import Particle from "./Particle";
import {rotatePosition, isCollided, calcDistance, calcDirection} from "./utility";


export default class EnemyBullet extends Entity{
    constructor(x, y, dx, dy, speed = 5, type = "linear"){
        super(x, y, dx, dy);
        this.speed = speed;
        this.type = type;
        this.height = 10;
        this.width = 10;
        this.lifespan = 0;
        this.graze = false;
        this.destroyed = false;
        this.target = [0, 0];
    }

    detectCollision(player, particles, enemyBulletArray, score){
        if(isCollided(this, player)){
            this.destroyed = true;
            player.explode(enemyBulletArray, particles, score);
        }
    }

    detectGraze(player, score){
        if (calcDistance(this.x, this.y, player.x, player.y) < 50 && this.graze === false) {
            this.graze = true;
            score.increaseCombo(0.01);
        }
    }

    disappate(particles){
        for (let i = 0; i < 20; i++) {
            particles.push(new Particle(this.x, this.y, (Math.random() * 2) - 1, (Math.random() * 2) - 1, 32, "purple"));
        }
    }

    render(ctx, spriteSheet, player, score, particles, enemyBulletArray){
        this.x += this.dx;
        this.y += this.dy;
        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {
            this.destroyed = true;
        }
        ctx.drawImage(spriteSheet, 1111, 463, 20, 20, this.x - 10, this.y - 10, 20, 20);
        this.detectGraze(player, score);
        this.detectCollision(player, particles, enemyBulletArray, score);

        //uncomment to draw paths
        // ctx.beginPath();
        // ctx.strokeStyle = "white";
        // ctx.moveTo(this.x, this.y);
        // ctx.lineTo(this.target[0], this.target[1]);
        // ctx.stroke();
    }
    

    bulletBehavior(x, y){
        switch(this.type){
            case "linear":
                this.targetLinearMovement(x, y);
                break;
            case "shotgun":
                this.targetLinearMovement(x, y, "sg");
                break;
        }
    }

    targetLinearMovement(targetX, targetY, type) {
        let directions = calcDirection(this.x, this.y, targetX, targetY);
        if (type === "sg") {
            directions[0] += (Math.random() * 0.2) - 0.1;
            directions[1] += (Math.random() * 0.2) - 0.1;
        }
        this.dx = directions[0] * this.speed;
        this.dy = directions[1] * this.speed;
    }

}