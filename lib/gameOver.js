export default function gameOver(renderer, ctx, spriteSheet, score, player, menuPos, inputs, gameStatus){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);

    score.render(ctx, spriteSheet, player);

    ctx.drawImage(spriteSheet, 113, 925, 121, 21, 220, 300, 121, 21);
    ctx.drawImage(spriteSheet, 120, 988, 108, 21, 227, 350, 108, 21);

    if(inputs.left){
        menuPos = 0;
    }else if(inputs.right){
        menuPos = 1;
    }

    if(inputs.z === true){
        if(menuPos === 0){
            player.lives = 3;
            gameStatus[0] = "game";
        }else{
            gameStatus[0] = "start";
        }
    }

    const pos = [217, 270];
    ctx.beginPath();
    ctx.rect(pos[menuPos], 340, 100, 100);
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