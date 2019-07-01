export default class Entity{
    constructor(ctx, spriteSheet, x, y, dx, dy){
        this.ctx = ctx;
        this.spriteSheet = spriteSheet;
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
    }

    render(){
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        this.ctx.fillStyle = "white";
        this.ctx.fill();
        this.ctx.closePath();
    }

}