import Entity from "./Entity";
import {calcDistance, isCollided} from "./utility";

export default class PowerUp extends Entity{
    constructor(x,y, dx, dy, type){
        super(x,y, dx, dy);
        this.type = type;
        this.destroyed = false;
        this.points = 200;
        this.height = 12;
        this.width = 12;
        this.lifespan = 0;
    }

    draw(ctx, spriteSheet){
        if(this.destroyed === false && this.x > -5 && this.x + 6 < 540 && 
                this.y > -5 && this.y + 6 < 740) {
            switch (this.type) {
                case "points":
                    ctx.drawImage(spriteSheet, 1015, 277, 24, 24, this.x, this.y, 18, 18);
                    break;
                case "powerup":
                    ctx.drawImage(spriteSheet, 1015, 318, 24, 24, this.x, this.y, 18, 18);
                    break;
                case "life":
                    ctx.drawImage(spriteSheet, 1015, 359, 24, 24, this.x, this.y, 24, 24);
            }
        }
    }

    update(player){
        const length = calcDistance(this.x, this.y, player.x, player.y);
        let directionX = player.x - 10 - this.x;
        let directionY = player.y  - 10 - this.y;

        if (this.lifespan === 25) {
            this.dx = 0;
            this.dy = 4;
        } else if (player.y < 200) {
            this.dx = directionX / length * 10;
            this.dy = directionY / length * 10;
        } else if (length < 100 && this.lifespan > 25) {
            this.dx = directionX / length * 6;
            this.dy = directionY / length * 6;
        } else if (this.lifespan > 25) {
            this.dx = 0;
            this.dy = 4;
        }
    }

    playerCollision(player, score){
        if(isCollided(this, player) && this.destroyed === false){
            this.destroyed = true;
            if (this.type === "points") {
                score.addScore(Math.floor(this.points * score.combo));
            } else if (this.type === "powerup") {
                if (player.power < 40) {
                    player.power += 1;
                } else {
                    score.addScore(Math.floor(50 * score.combo));
                }
            } else if (this.type === "life") {
                player.lives++;
            }
            if (score.comboTimer < 390) {
                score.comboTimer += 10;
            } else if (score.comboTimer > 390 && score.comboTimer < score.comboLife) {
                score.comboTimer = score.comboLife;
            }
        }
    }

    render(ctx, spriteSheet, player, score){
        this.lifespan++;
        this.update(player);
        this.playerCollision(player, score);
        this.x += this.dx;
        this.y += this.dy;
        this.draw(ctx,spriteSheet);

        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {
            this.destroyed = true;
        }
    }

}