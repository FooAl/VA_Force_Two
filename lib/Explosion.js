import Entity from "./Entity";

export default class Explosion extends Entity{
    constructor(x,y){
        super(x,y);
        this.lifespan = 20;
        this.positions = [80, 150, 237, 325, 422];
    }

    render(ctx, spriteSheet){
        let sheetX;
        if(this.lifespan > 16){
            sheetX = this.positions[0];
        }else if(this.lifespan > 12){
            sheetX = this.positions[1];
        }else if(this.lifespan > 8) {
            sheetX = this.positions[2];
        }else if(this.lifespan > 4) {
            sheetX = this.positions[3];
        }else if(this.lifespan > 0) {
            sheetX = this.positions[4];
        }        
        ctx.drawImage(spriteSheet, sheetX, 801, 68, 76, this.x - 15, this.y + 15, 51, 57);
    }
}