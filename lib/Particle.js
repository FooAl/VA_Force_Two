import Entity from "./Entity";

export default class Particle extends Entity{
    constructor(x,y,dx,dy, lifespan = 32, color = "blue"){
        super(x,y,dx,dy);
        this.lifespan = lifespan;
        this.color = color;
    }

    render(ctx){
        let color;
        let size;
        if (this.color === "blue") {
            if (this.lifespan < 8) {
                color = "#234196";
                size = 1;
            } else if (this.lifespan < 16) {
                color = "#4eaaf5";
                size = 2;
            } else if (this.lifespan < 24) {
                color = "#a8ffff";

                size = 3;
            } else if (this.lifespan < 32) {
                color = "#ffffff";
                size = 4;
            }
        } else if (this.color === "purple") {
            if (this.lifespan < 8) {
                color = "#67599c";
                size = 1;
            } else if (this.lifespan < 16) {
                color = "#ad8ed4";
                size = 2;
            } else if (this.lifespan < 24) {
                color = "#f2c4ff";

                size = 3;
            } else if (this.lifespan < 32) {
                color = "#ffffff";
                size = 4;
            }
        } else if (this.color === "green") {
            if (this.lifespan < 12) {
                color = "#3c754c";
                size = 1;
            } else if (this.lifespan < 24) {
                color = "#3d915e";
                size = 2;
            } else if (this.lifespan < 36) {
                color = "#cfffd8";

                size = 3;
            } else if (this.lifespan < 48) {
                color = "#befac8";
                size = 4;
            }
        } else if (this.color === "smoke") {
            if (this.lifespan < 12) {
                color = "#42182e";
                size = 1;
            } else if (this.lifespan < 24) {
                color = "#592c39";
                size = 2;
            } else if (this.lifespan < 36) {
                color = "#a1554c";

                size = 3;
            } else if (this.lifespan < 48) {
                color = "#ed9f45";
                size = 4;
            }
        }
        ctx.beginPath();
        // ctx.globalAlpha = 0.5;
        ctx.rect(this.x, this.y, size, size);
        ctx.fillStyle = color;
        ctx.fill();
        ctx.closePath();
    }

}