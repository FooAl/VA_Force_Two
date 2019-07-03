export default class Score{
    constructor(){
        //score
        this.score = 0;
        this.numberPositions = [1139, 1159, 1187, 1211, 1235, 1259, 1283, 1307, 1327, 1347];
        
        //combo
        this.comboTimer = 0;
        this.comboLife = 400;
        this.combo = 1.00;
        this.minCombo = 1.00;
        this.maxCombo = 2.00;
        this.comboFreeze = false;
    }

    resetScore(){
        this.score = 0;
    }

    addScore(points){
        this.score += points;
    }

    addCombo(val){
        if (this.comboFreeze === false) {
            if(this.combo < this.maxCombo - val){
                this.combo += val;
            }else if(this.combo > this.maxCombo - val && this.combo < this.maxCombo){
                this.combo = this.maxCombo;
            }
        }
    }

    resetComboTimer(){
        this.comboTimer = this.comboLife;
    }

    increaseCombo(val){
        if(this.comboFreeze === false){
            this.minCombo += val;
            this.maxCombo += val;
            if(this.combo < this.minCombo){
                this.combo = this.minCombo;
            }
        }
    }

    subtractCombo(){
        if(this.comboTimer <= 0 && this.combo > this.minCombo){
            this.combo -= 0.01;
        }
    }

    draw(ctx, spriteSheet, player){
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

        let comboString = this.combo.toFixed(2).toString();
        for (let i = 0; i < comboString.length; i++) {
            let number = comboString[i];
            ctx.drawImage(spriteSheet, this.numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 380, 16, 32);
        }

        //graze
        ctx.drawImage(spriteSheet, 1289, 218, 120, 32, 575, 430, 120, 32);
        let grazeString = ((this.maxCombo - 2) * 100).toFixed(0).toString();
        for (let i = 0; i < grazeString.length; i++) {
            let number = grazeString[i];
            ctx.drawImage(spriteSheet, this.numberPositions[parseInt(number, 10)], 110, 16, 32, 695 + (i * 20), 430, 16, 32);
        }

        let comboPercent = (this.comboTimer / this.comboLife) * -164;
        ctx.beginPath();
        ctx.fillStyle = "#7ad7ff";
        ctx.rect(496, 700, 20, comboPercent);
        ctx.fill();
        ctx.closePath();
        ctx.drawImage(spriteSheet, 535, 757, 32, 164, 488, 536, 32, 164);
    }

    render(ctx, spriteSheet, player){
        this.draw(ctx, spriteSheet, player);

        if(this.comboTimer > 0){
            this.comboTimer--;
        }
        this.subtractCombo();
    }
}