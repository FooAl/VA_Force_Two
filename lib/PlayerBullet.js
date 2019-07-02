import Entity from "./Entity";

export default class PlayerBullet extends Entity{
    constructor(x, y, dx, dy, damage){
        super(x,y,dx,dy);
        this.damage = damage;

        this.width = 20;
        this.height = 30;
        this.destroyed = false;
        this.speed = 20;
    }

    render(ctx, spriteSheet, playerBullets){
        
        this.y -= this.speed * this.dy;
        this.x += this.speed * this.dx;
        
        if (this.y > 720 || this.y < 0 || this.x < 0 || this.x > 530) {
            this.destroyed = true;
        }

        if (this.destroyed === false) {
            ctx.drawImage(spriteSheet, 1076, 271, 20, 80, this.x, this.y - 42, 20, 80);
        }
    }
}