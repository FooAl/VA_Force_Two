import Entity from "./Entity";

export default class Star extends Entity{
    constructor(x,y, state){
        super(x,y);
        this.state = state;
        this.sheetPos = [1012, 1032, 1056];
    }

    render(ctx, spriteSheet){
        this.state++;
        if (this.state === 48) {
            this.state = 0;
        }
        this.y += 1;
        if (this.y > 730) {
            this.y = 0;
        }

        let pos = 0;
        if (this.state> 24) {
            
        } else if (this.state> 20) {
            ctx.drawImage(spriteSheet, 1012, 30, 20, 28, this.x, this.y, 20, 28);
        } else if (this.state> 16) {
            ctx.drawImage(spriteSheet, 1032, 30, 20, 28, this.x, this.y, 20, 28);
        } else if (this.state> 8) {
            ctx.drawImage(spriteSheet, 1056, 30, 20, 28, this.x, this.y, 20, 28);
        } else if (this.state> 4) {
            ctx.drawImage(spriteSheet, 1032, 30, 20, 28, this.x, this.y, 20, 28);
        } else if (this.state> 0) {
            ctx.drawImage(spriteSheet, 1012, 30, 20, 28, this.x, this.y, 20, 28);
        }
    }
}