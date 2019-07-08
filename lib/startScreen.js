export default function startScreen(renderer, ctx, spriteSheet, timer, score){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);

    ctx.drawImage(spriteSheet, 1011, 936, 348, 136, 90, 250, 348, 136);

    const numberPositions = [1139, 1159, 1187, 1211, 1235, 1259, 1283, 1307, 1327, 1347];
    
    for (let i = 0; i < 3; i++) {
        let highScore = score.highScores[i + 1].toString();
        while (highScore.length < 7) {
            highScore = "0" + highScore;
        }
        for (let k = 0; k < highScore.length; k++) {
            let number = highScore[k];
            ctx.drawImage(spriteSheet, 993, 1191 + (i * 24), 68, 20, 590, 90 + (i * 40), 68, 20);
            ctx.drawImage(spriteSheet, numberPositions[parseInt(number, 10)], 110, 16, 32, 668 + (k * 20), 90 + (i * 40), 16, 32);
        }
    }

    if(timer % 80 < 40){
        ctx.drawImage(spriteSheet, 996, 1117, 324, 28, 590, 500, 324, 28);
    }
    ctx.drawImage(spriteSheet, 996, 1161, 160, 20, 590, 50, 160, 20);



    window.requestAnimationFrame(renderer);
}