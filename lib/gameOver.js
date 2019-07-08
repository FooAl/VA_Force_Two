export default function gameOver(renderer, ctx, spriteSheet, score, player, menuPos, inputs, gameStatus, timer){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);

    score.render(ctx, spriteSheet, player);

    ctx.drawImage(spriteSheet, 113, 925, 121, 21, 220, 300, 121, 21);
    ctx.drawImage(spriteSheet, 120, 988, 108, 21, 227, 350, 108, 21);
    if(timer > 50){
        if(inputs.left){
            menuPos[0] -= 1;
            if(menuPos[0] === -1){
                menuPos[0] = 1;
            }
            inputs.left = false;
        }
        if(inputs.right){
            menuPos[0] += 1;
            if(menuPos[0] === 2){
                menuPos[0] = 0;
            }
            inputs.right = false;
        }
    
        if(inputs.z === true){
            if(menuPos[0] === 0){
                player.lives = 3;
                player.power = 40;
                gameStatus[0] = "game";
                score.score = 0;
                score.combo = 1.00;
                score.minCombo = 1.00;
                score.maxCombo = 2.00;
            }else{
                gameStatus[0] = "start";
                score.checkHighScore(score.score);
                inputs.z = false;
            }
        }
    }
    

    const pos = [215, 290];
    ctx.beginPath();
    ctx.rect(pos[menuPos], 340, 70, 40);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();
    window.requestAnimationFrame(renderer);
}