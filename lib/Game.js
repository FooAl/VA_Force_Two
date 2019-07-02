import EnemyBullet from "./EnemyBullet.js";
import Player from "./Player.js";

class Game{
    constructor(ctx, inputs){
        this.ctx = ctx;
        this.gameOver = false;
        this.particles = [];
        this.playerBullets = [];
        this.enemyBullets = [];
        this.spriteSheet = new Image();
        this.spriteSheet.src = "assets/SpriteSheet.png";
        this.player = new Player(0, 0);
        this.inputs = inputs;
    }

    fillBullets(){
        for(let i = 0; i < 10; i++){
            let dx = (Math.random() * 2) - 1;
            let dy = (Math.random() * 2) - 1;
            const bullet = new EnemyBullet(300, 300, dx, dy);
            this.enemyBullets.push(bullet);
        }
    }

    start(){
        this.player.spawn();
        // setInterval(() => {this.render();}, 16);
        window.requestAnimationFrame(this.render.bind(this));
    }

    render(){
            if(this.enemyBullets.length === 0){
                this.fillBullets();
            }

            //background
            this.ctx.beginPath();
            this.ctx.rect(20, 20, 500, 680);
            this.ctx.fillStyle = "black";
            this.ctx.fill();
            this.ctx.closePath();


            //player
            this.player.render(this.ctx, this.spriteSheet, this.inputs, this.particles);

            //player bullets
            for(let i = 0; i < this.playerBullets.length; i++){
                const bullet = this.playerBullets[i];
                if(bullet.destroyed === true){
                    this.playerBullets.splice(i,1);
                    i--;
                }
                bullet.render(this.ctx, this.spriteSheet);
            }


            //enemy bullets
            for(let i = 0; i < this.enemyBullets.length; i++){
                const bullet = this.enemyBullets[i];
                if (bullet.destroyed === true) {
                    this.enemyBullets.splice(i, 1);
                    i--;
                } 
                bullet.render(this.ctx, this.spriteSheet);
            }

            //particles
            for(let i = 0; i < this.particles.length; i++){
                const particle = this.particles[i];
                particle.x += particle.dx;
                particle.y += particle.dy;
                particle.lifespan--;
                if(particle.lifespan === 0){
                    this.particles.splice(i, 1);
                    i--;
                }
                particle.render(this.ctx);
            }
            this.ctx.drawImage(this.spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
            this.ctx.drawImage(this.spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);
            window.requestAnimationFrame(this.render.bind(this));
        }

    
}

export default Game;