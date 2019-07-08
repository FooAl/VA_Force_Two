export default function gameOver(renderer, ctx, spriteSheet, score, player, menuPos, inputs, gameStatus){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);

    score.render(ctx, spriteSheet, player);

    ctx.drawImage(spriteSheet, 113, 925, 121, 21, 220, 300, 121, 21);
    ctx.drawImage(spriteSheet, 120, 988, 108, 21, 227, 350, 108, 21);

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
            gameStatus[0] = "game";
        }else{
            gameStatus[0] = "start";
        }
    }
    

    const pos = [215, 290];
    ctx.beginPath();
    ctx.rect(pos[menuPos], 340, 70, 40);
    ctx.strokeStyle = "white";
    ctx.stroke();
    ctx.closePath();

    // ctx.beginPath();
    // ctx.globalAlpha = 0.5;
    // ctx.rect(570, 228, 300, 240);
    // ctx.fillStyle = "black";
    // ctx.fill();
    // ctx.closePath();
    // ctx.globalAlpha = 1;
    window.requestAnimationFrame(renderer);
}