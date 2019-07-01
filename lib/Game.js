import EnemyBullet from "./EnemyBullet.js";

class Game{
    constructor(ctx){
        this.ctx = ctx;
        this.gameOver = false;
        this.bullets = [];
        this.spriteSheet = new Image();
        this.spriteSheet.src = "assets/SpriteSheet.png";
    }

    fillBullets(){
        for(let i = 0; i < 10; i++){
            let dx = (Math.random() * 2) - 1;
            let dy = (Math.random() * 2) - 1;
            const bullet = new EnemyBullet(this.ctx, this.spriteSheet, 300, 300, dx, dy);
            this.bullets.push(bullet);
        }
    }

    start(){
        setInterval(() => {this.render();}, 16);
    }

    render(){
            if(this.bullets.length === 0){
                this.fillBullets();
            }
            this.ctx.beginPath();
            this.ctx.rect(20, 20, 500, 680);
            this.ctx.fillStyle = "black";
            this.ctx.fill();
            this.ctx.closePath();
            for(let i = 0; i < this.bullets.length; i++){
                let bullet = this.bullets[i];
                if (bullet.destroyed === true) {
                    debugger
                    this.bullets.splice(i, 1);
                    i--;
                    debugger
                } 
                bullet.render();
            }
            // debugger
            this.ctx.drawImage(this.spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
            this.ctx.drawImage(this.spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);
    }
}

export default Game;