export default function winScreen(renderer, ctx, spriteSheet, score, player, menuPos, inputs, gameStatus, timer){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);

    score.render(ctx, spriteSheet, player);

    // ctx.drawImage(spriteSheet, 113, 925, 121, 21, 220, 300, 121, 21);
    // ctx.drawImage(spriteSheet, 120, 988, 108, 21, 227, 350, 108, 21);
    ctx.font = "30px Verdana";
    ctx.fillText("You win!", 200, 300);
    ctx.fillText(`Your score: ${score.score}`, 140, 350);

    if(Object.values(inputs).includes(true) && timer > 100){
        score.checkHighScore(score.score);
        gameStatus[0] = "start";
    }
    window.requestAnimationFrame(renderer);
}   