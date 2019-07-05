import Enemy from "./Enemy.js";

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
            355: [  new Enemy(140, -50, 0, 4,  10, "double", "pause-left", 150, points),
                    new Enemy(380, -50, 0, 4, 10, "double", "pause-right", 150, points)],
            360: [  new Enemy(160, 0, 0, 4, 10, "single", "pause-left", 50, points),
                    new Enemy(360, 0, 0, 4, 10, "single", "pause-right", 50, points)],
            365: [  new Enemy(180, -50, 0, 4, 10, "double", "pause-left", 150, points),
                    new Enemy(340, -50, 0, 4, 10, "double", "pause-right", 150, points)],
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
            2300: [ new Enemy(260, 0, 0, 4, 900, "spread", "stay- ", 300, life)],
            2500: [ this.createCurve(120, 0, "right"),],
            2510: [ this.createCurve(120, 0, "right"),],
            2520: [ this.createCurve(120, 0, "right"),],
            2525: [ this.createCurve(400, -40, "left")],
            2530: [ this.createCurve(120, 0, "right"),],
            2535: [ this.createCurve(400, -40, "left")],
            2545: [ this.createCurve(400, -40, "left"),],
            2555: [ this.createCurve(400, -40, "left"),],

            2800: [ this.createCurve(120, 0, "right"),],
            2810: [ this.createCurve(120, 0, "right"),],
            2820: [ this.createCurve(120, 0, "right"),],
            2825: [ this.createCurve(400, -40, "left")],
            2830: [ this.createCurve(120, 0, "right"),],
            2835: [ this.createCurve(400, -40, "left")],
            2845: [ this.createCurve(400, -40, "left"),],
            2855: [ this.createCurve(400, -40, "left"),],

            3200: [ this.createCurve(120, 0, "right"),],
            3210: [ this.createCurve(120, 0, "right"),],
            3220: [ this.createCurve(120, 0, "right"),],
            3225: [ this.createCurve(400, -40, "left")],
            3230: [ this.createCurve(120, 0, "right"),],
            3235: [ this.createCurve(400, -40, "left")],
            3245: [ this.createCurve(400, -40, "left"),],
            3255: [ this.createCurve(400, -40, "left"),],

            // //wave 6
            // 3500: [new Enemy(251, 0, 2000, "boss1", "boss", 20000, true, boss)]

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
        return new Enemy(x, y, 0, 4, 10, "single", moveType, 50, points)
    }

    createStraight(x,y, direction){
        let points = ["points", "points", "points", "powerup"];
        let moveType;
        if (direction === "left") {
            moveType = "straight-left";
        } else if (direction === "right") {
            moveType = "straight-right";
        }
        return new Enemy(x, y, 0, 4, 10, "single", "straight-right", 50, points);
    }
}