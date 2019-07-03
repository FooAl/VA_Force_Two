import Player from "./Player.js";
import Score from "./Score.js";
import Level1 from "./level1";
import Star from "./Star";
import {enemyLoader} from "./utility";
import startScreen from "./startScreen";
import drawControls from "./drawControls";


class Game{
    constructor(ctx, inputs){
        this.ctx = ctx;
        this.gameOver = true;
        this.gameScreen = 0;
        this.levelTimer = 0;
        this.particles = [];
        this.playerBullets = [];
        this.enemies = [];
        this.enemyBullets = [];
        this.pickups = [];
        this.background = [];
        this.spriteSheet = new Image();
        this.spriteSheet.src = "assets/SpriteSheet.png";
        this.player = new Player(0, 0);
        this.score = new Score();
        this.inputs = inputs;
        this.level = new Level1();
    }

    fillBackground(){
        for(let i = 0; i < 40; i++){
            let star = new Star((Math.random() * 500 + 20), (Math.random() * 680 + -680), Math.floor(Math.random() * 48))
            this.background.push(star);
        }
    }

    start(){
        // this.player.spawn();
        // setInterval(() => {this.render();}, 16);
        window.requestAnimationFrame(this.render.bind(this));
    }

    render(){
        this.ctx.clearRect(0, 0, 960, 720);
        drawControls(this.ctx, this.spriteSheet, this.inputs);
        
        if(this.gameOver === false){
            this.game();
        }else{
            this.levelTimer++;
            startScreen(this.render.bind(this), this.ctx, this.spriteSheet, this.levelTimer);
            if(Object.values(this.inputs).includes(true)){
                this.levelTimer = 0;
                this.gameOver = false;
                this.player.spawn();
            }
        }
    }

    game(){
            enemyLoader(this.level, this.levelTimer, this.enemies);
            if(this.background.length === 0){
                this.fillBackground();
            }

            //background
            this.ctx.beginPath();
            this.ctx.rect(20, 20, 500, 680);
            this.ctx.fillStyle = "black";
            this.ctx.fill();
            this.ctx.closePath();

            //background elements
            for(let i = 0; i < this.background.length; i++){
                this.background[i].render(this.ctx, this.spriteSheet);
            }

            //powerups
            for (let i = 0; i < this.pickups.length; i++) {
                const pickup = this.pickups[i];
                if (pickup.destroyed === true) {
                    this.pickups.splice(i, 1);
                    i--;
                }
                pickup.render(this.ctx, this.spriteSheet, this.player, this.score);
            }
            
            //player
            this.player.render(this.ctx, this.spriteSheet, this.inputs, 
                    this.particles, this.playerBullets);

            //player bullets
            for(let i = 0; i < this.playerBullets.length; i++){
                const bullet = this.playerBullets[i];
                if(bullet.destroyed === true){
                    this.playerBullets.splice(i,1);
                    i--;
                }
                bullet.render(this.ctx, this.spriteSheet, this.enemies, 
                        this.particles, this.score, this.pickups);
            }

            //enemy
            for(let i = 0; i < this.enemies.length; i++){
                const enemy = this.enemies[i];
                if(enemy.destroyed === true){
                    this.enemies.splice(i,1);
                    i--;
                }
                enemy.render(this.ctx, this.spriteSheet, this.enemyBullets, this.player);
            }

            //enemy bullets
            for(let i = 0; i < this.enemyBullets.length; i++){
                const bullet = this.enemyBullets[i];
                if (bullet.destroyed === true) {
                    this.enemyBullets.splice(i, 1);
                    i--;
                } 
                bullet.render(this.ctx, this.spriteSheet, this.player, this.score, 
                    this.particles, this.enemyBullets);
            }

            //particles
            for(let i = 0; i < this.particles.length; i++){
                const particle = this.particles[i];
                if(particle.dx !== undefined){
                    particle.x += particle.dx;
                    particle.y += particle.dy;
                }
                particle.lifespan--;
                if(particle.lifespan <= 0){
                    this.particles.splice(i, 1);
                    i--;
                }
                particle.render(this.ctx, this.spriteSheet);
            }

            

            this.score.render(this.ctx, this.spriteSheet, this.player);

            this.ctx.drawImage(this.spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
            this.ctx.drawImage(this.spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);
            window.requestAnimationFrame(this.render.bind(this));
            this.levelTimer++;
        }

    
}

export default Game;