import Player from "./Player.js";
import Score from "./Score.js";
import Level1 from "./level1";
import Star from "./Star";
import {enemyLoader} from "./utility";
import startScreen from "./startScreen";
import drawControls from "./drawControls";
import gameOverScreen from "./gameOver";
import winner from "./winner";


class Game{
    constructor(ctx, inputs){
        this.ctx = ctx;
        this.gameOver = ["start"];
        this.gameScreen = 0;
        this.levelTimer = 50;
        this.timeOut = 0;
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
        this.menuPosition = [0];
    }

    fillBackground(){
        for(let i = 0; i < 30; i++){
            let star = new Star((Math.random() * 500 + 20), (Math.random() * 680 + -680), Math.floor(Math.random() * 48))
            this.background.push(star);
        }
    }

    start(){
        window.requestAnimationFrame(this.render.bind(this));
    }

    render(){
        this.ctx.clearRect(0, 0, 960, 720);
        drawControls(this.ctx, this.spriteSheet, this.inputs);
        if(this.gameOver[0] === "game"){
            this.game();
            this.levelTimer++;
        }else if(this.gameOver[0] === "start"){
            this.fadeOut = 0;
            this.levelTimer++;
            startScreen(this.render.bind(this), this.ctx, this.spriteSheet, this.levelTimer, this.score);
            if(Object.values(this.inputs).includes(true) && this.levelTimer > 50){
                this.reset();
                this.player.spawn();
            }
        }else if(this.gameOver[0] === "lose"){
            gameOverScreen(this.render.bind(this), this.ctx, this.spriteSheet, 
            this.score, this.player, this.menuPosition, this.inputs, this.gameOver,
            this.timeOut);
            this.timeOut++;
        }else if(this.gameOver[0] === "win"){
            this.levelTimer = 0;
            winner(this.render.bind(this), this.ctx, this.spriteSheet, this.score, this.player,
             this.menuPosition, this.inputs, this.gameOver, this.timeOut, this.leveTimer);
            this.timeOut++;
        }
    }

    reset(){
        this.levelTimer = 0;
        this.gameOver[0] = "game";
        this.player.reset();
        this.player.power = 0;
        this.score.resetScore();
        this.level = new Level1();
        this.particles = [];
        this.playerBullets = [];
        this.enemies = [];
        this.enemyBullets = [];
        this.pickups = [];
        this.background = [];
        this.fadeOut = 1;
    }

    game(){
            enemyLoader(this.level, this.levelTimer, this.enemies, this.score);
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
                        this.particles, this.score, this.pickups, this.gameOver);
            }

            //enemy
            for(let i = 0; i < this.enemies.length; i++){
                const enemy = this.enemies[i];
                if(enemy.destroyed === true){
                    this.enemies.splice(i,1);
                    i--;
                }
                enemy.render(this.ctx, this.spriteSheet, this.enemyBullets, this.player,
                    this.enemies, this.particles);
            }

            //enemy bullets
            for(let i = 0; i < this.enemyBullets.length; i++){
                const bullet = this.enemyBullets[i];
                if (bullet.destroyed === true) {
                    this.enemyBullets.splice(i, 1);
                    i--;
                } 
                bullet.render(this.ctx, this.spriteSheet, this.player, this.score, 
                    this.particles, this.enemyBullets, this.gameOver);
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

            if(this.player.lives === 0 && this.gameOver[0] === "game"){
                this.menuPosition[0] = 0;
                this.timeOut = 0;
                this.gameOver[0] = "lose";
            }else{
            }
            
            window.requestAnimationFrame(this.render.bind(this));
            
        }

    
}

export default Game;
