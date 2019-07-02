export default class Score{
    constructor(){
        this.score = 0;
        this.numberPositions = [1139, 1159, 1187, 1211, 1235, 1259, 1283, 1307, 1327, 1347];
    }

    resetScore(){
        this.score = 0;
    }

    addScore(points){
        this.score += points;
    }

    render(ctx, spriteSheet, player){
        //score
        let scoreString = this.score.toString();
        while (scoreString.length < 7) {
            scoreString = "0" + scoreString;
        }
        ctx.drawImage(spriteSheet, 1015, 110, 120, 32, 575, 230, 120, 32);
        for (let i = 0; i < scoreString.length; i++) {
            let number = scoreString[i];
            ctx.drawImage(spriteSheet, this.numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 230, 16, 32);
        }

        //lives
        ctx.drawImage(spriteSheet, 1015, 166, 120, 32, 575, 280, 120, 32);
        for (let i = 0; i < player.lives - 1; i++) {
            ctx.drawImage(spriteSheet, 1015, 353, 24, 24, 695 + (i * 28), 285, 24, 24);
        }
        ctx.drawImage(spriteSheet, 1163, 167, 120, 32, 575, 330, 120, 32);

        // power
        let powerString = player.power.toString();
        for (let i = 0; i < powerString.length; i++) {
            let number = powerString[i];
            ctx.drawImage(spriteSheet, this.numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 330, 16, 32);
        }
        ctx.drawImage(spriteSheet, 1162, 218, 120, 32, 575, 380, 120, 32);

        //combo
        ctx.drawImage(spriteSheet, 1166, 218, 4, 4, 720, 404, 4, 4);

        // let comboString = combo.mult.toFixed(2).toString();
        // for (let i = 0; i < comboString.length; i++) {
            // let number = comboString[i];
            // ctx.drawImage(spriteSheet, numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 380, 16, 32);
        // }

        //graze
        ctx.drawImage(spriteSheet, 1289, 218, 120, 32, 575, 430, 120, 32);
        // let grazeString = ((combo.maxMult - 2) * 100).toFixed(0).toString();
        // for (let i = 0; i < grazeString.length; i++) {
            // let number = grazeString[i];
            // ctx.drawImage(spriteSheet, numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 430, 16, 32);
        // }
    }
}