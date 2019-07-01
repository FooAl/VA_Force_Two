import Entity from "./Entity.js";


export default class EnemyBullet extends Entity{
    constructor(ctx, spriteSheet, x, y, dx, dy, speed = 5, type = "normal"){
        super(ctx, spriteSheet, x, y, dx, dy);
        this.speed = speed;
        this.type = type;
        this.lifespan = 0;
        this.graze = false;
        this.destroyed = false;
    }

    render() {
        this.x += this.dx;
        this.y += this.dy;
        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {
            this.destroyed = true;
        }
        this.ctx.drawImage(this.spriteSheet, 1111, 463, 20, 20, this.x - 10, this.y - 10, 20, 20);
    }
    
}