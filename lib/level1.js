import Enemy from "./Enemy.js";
import Boss from "./Boss/Boss.js";

export default class Level1 {
    constructor() {
        let points = ["points", "points", "points", "powerup"];
        let points2 = ["points", "points", "powerup", "powerup", "powerup"];
        let powerup = ["powerup", "powerup", "powerup", "points", "points", "points", "points"];
        let life = ["life", "powerup", "powerup", "powerup", "points", "points", "points", "points"];
        let boss = ["points", "points", "points", "points", "points", "points", "points", "points",
            "points", "points", "points", "points", "points", "points", "points", "points",
            "points", "points", "points", "points", "points", "points", "points", "points",
            "points", "points", "points", "points", "points", "points", "points", "points"];
        this.enemies = {
            // wave 1
            150: [  this.createCurve(120, 0, "right"),],
            160: [  this.createCurve(120, 0, "right"),],
            170: [  this.createCurve(120, 0, "right"),],
            175: [  this.createCurve(400, -40, "left"),],
            180: [  this.createCurve(120, 0, "right"),],
            185: [  this.createCurve(400, -40, "left"),],
            190: [  new Enemy(120, 0, 0, 4, 30, "triple", "curve-right", 50, points),],
            195: [  this.createCurve(400, -40, "left"),],
            205: [  this.createCurve(400, -40, "left"),],
            215: [  new Enemy(400, -40, 0, 4, 30, "triple", "curve-left", 50, points),],


            // wave 2
            350: [  new Enemy(120, 0, 0, 4, 10, "single", "pause-left", 50, points),
                    new Enemy(400, 0, 0, 4, 10, "single", "pause-right", 50, points)],
            355: [  new Enemy(140, -50, 0, 4,  10, "double-0.1", "pause-left", 150, points),
                    new Enemy(380, -50, 0, 4, 10, "double-0.1", "pause-right", 150, points)],
            360: [  new Enemy(160, 0, 0, 4, 10, "single", "pause-left", 50, points),
                    new Enemy(360, 0, 0, 4, 10, "single", "pause-right", 50, points)],
            365: [  new Enemy(180, -50, 0, 4, 10, "double-0.1", "pause-left", 150, points),
                    new Enemy(340, -50, 0, 4, 10, "double-0.1", "pause-right", 150, points)],
            370: [  new Enemy(200, 0, 0, 4, 10, "single", "pause-left", 50, points),
                    new Enemy(320, 0, 0, 4, 10, "single", "pause-right", 50, points)],
            380: [  new Enemy(240, 0, 0, 4, 10, "single", "pause-left", 50, points),
                    new Enemy(280, 0, 0, 4, 10, "single", "pause-right", 50, points)],
            
            // wave 3
            600: [  this.createStraight(0, 200, "right"),],
            620: [  this.createStraight(0, 200, "right"),],
            640: [  this.createStraight(0, 200, "right"),],
            660: [  this.createStraight(0, 200, "right"),],
            680: [  this.createStraight(0, 200, "right"),
                    this.createStraight(500, 240, "left"),],
            700: [  this.createStraight(0, 200, "right"),
                    this.createStraight(500, 240, "left"),],
            720: [  this.createStraight(0, 200, "right"),
                    this.createStraight(500, 240, "left"),],
            740: [  this.createStraight(500, 240, "left"),],
            760: [  this.createStraight(500, 240, "left"),],
            780: [  this.createStraight(500, 240, "left"),],
            800: [  this.createStraight(500, 240, "left"),],
            
            

            // wave 4
            950: [  new Enemy(260, 0, 0, 4, 300, "shotgun", "stay-", 300, powerup)],
            1150: [ new Enemy(120, -40, 0, 4, 300, "shotgun", "stay-", 300, powerup)],
            1350: [ new Enemy(400, -40, 0, 4, 300, "shotgun", "stay-", 300, powerup)],

            // // wave 5
            2100: [ new Enemy(260, 0, 0, 4, 900, "spread", "stay- ", 300, life)],
            2300: [ this.createCurve(120, 0, "right"),],
            2310: [ this.createCurve(120, 0, "right"),],
            2320: [ this.createCurve(120, 0, "right"),],
            2325: [ this.createCurve(400, -40, "left")],
            2330: [ this.createCurve(120, 0, "right"),],
            2335: [ this.createCurve(400, -40, "left")],
            2345: [ this.createCurve(400, -40, "left"),],
            2355: [ this.createCurve(400, -40, "left"),],

            2600: [ this.createCurve(120, 0, "right"),],
            2610: [ this.createCurve(120, 0, "right"),],
            2620: [ this.createCurve(120, 0, "right"),],
            2625: [ this.createCurve(400, -40, "left")],
            2630: [ this.createCurve(120, 0, "right"),],
            2635: [ this.createCurve(400, -40, "left")],
            2645: [ this.createCurve(400, -40, "left"),],
            2655: [ this.createCurve(400, -40, "left"),],

            3000: [ this.createCurve(120, 0, "right"),],
            3010: [ this.createCurve(120, 0, "right"),],
            3020: [ this.createCurve(120, 0, "right"),],
            3025: [ this.createCurve(400, -40, "left")],
            3030: [ this.createCurve(120, 0, "right"),],
            3035: [ this.createCurve(400, -40, "left")],
            3045: [ this.createCurve(400, -40, "left"),],
            3055: [ this.createCurve(400, -40, "left"),],

            // //wave 6
            3300: [new Boss(251, 0, 0, 4, 3000)]

        };

    }

    createCurve(x, y, direction){
        let points = ["points", "points", "points", "powerup"];
        let moveType;
        if(direction === "left"){
            moveType = "curve-left";
        }else if(direction === "right"){
            moveType = "curve-right";
        }
        return new Enemy(x, y, 0, 4, 10, "single", moveType, 50, points);
    }

    createStraight(x,y, direction){
        let points = ["points", "points", "points", "powerup"];
        let moveType;
        if (direction === "left") {
            moveType = "straight-left";
        } else if (direction === "right") {
            moveType = "straight-right";
        }
        return new Enemy(x, y, 0, 4, 10, "single", moveType, 50, points);
    }
}