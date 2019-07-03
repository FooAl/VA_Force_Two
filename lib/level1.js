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
            150: [new Enemy(120, 0, 0, 4, 10, "triple", "straight", 50, points),],
            160: [  new Enemy(120, 0, 0, 4, 10, "triple", "straight", 50, points),],
            170: [new Enemy(120, 0, 0, 4, 10, "triple", "straight", 50, points),],
            175: [new Enemy(400, -20, 0, 4, 10, "triple", "straight", 50, points),],
            180: [  new Enemy(120, 0, 0, 4, 10, "triple", "straight", 50, points),],
            185: [  new Enemy(400, -20, 0, 4, 10, "triple", "straight", 50, points),],
            190: [new Enemy(120, 0, 0, 4, 30, "triple", "straight", 50, points),],
            195: [new Enemy(400, -20, 0, 4, 10, "triple", "straight", 50, points),],
            205: [  new Enemy(400, -20, 0, 4, 10, "triple", "straight", 50, points),],
            215: [new Enemy(400, -20, 0, 4, 30, "triple", "straight", 50, points),],


            // // wave 2
            // 350: [new Enemy(120, 0, 10, "single", "downPauseLeft", 50, false, points),
            // new Enemy(400, 0, 10, "single", "downPauseRight", 50, false, points)],
            // 355: [new Enemy(140, -50, 10, "double", "downPauseLeft", 150, false, points),
            // new Enemy(380, -50, 10, "double", "downPauseRight", 150, false, points)],
            // 360: [new Enemy(160, 0, 10, "single", "downPauseLeft", 50, false, points),
            // new Enemy(360, 0, 10, "single", "downPauseRight", 50, false, points)],
            // 365: [new Enemy(180, -50, 10, "double", "downPauseLeft", 150, false, points),
            // new Enemy(340, -50, 10, "double", "downPauseRight", 150, false, points)],
            // 370: [new Enemy(200, 0, 10, "single", "downPauseLeft", 50, false, points),
            // new Enemy(320, 0, 10, "single", "downPauseRight", 50, false, points)],
            // 380: [new Enemy(240, 0, 10, "single", "downPauseLeft", 50, false, points),
            // new Enemy(280, 0, 10, "single", "downPauseRight", 50, false, points)],
            // // wave 3
            // 600: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),],
            // 620: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),],
            // 640: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),],
            // 660: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),],
            // 680: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),
            // new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 700: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),
            // new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 720: [new Enemy(0, 200, 10, "single", "lineRight", 50, false, points),
            // new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 740: [new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 760: [new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 780: [new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // 800: [new Enemy(500, 240, 10, "single", "lineLeft", 50, false, points),],
            // // wave 4
            // 950: [new Enemy(260, 0, 300, "shotgun", "middleStay", 300, false, powerup)],
            // 1150: [new Enemy(120, -40, 300, "shotgun", "middleStay", 300, false, powerup)],
            // 1350: [new Enemy(400, -40, 300, "shotgun", "middleStay", 300, false, powerup)],

            // // wave 5
            // 2300: [new Enemy(260, 0, 600, "spread", "middleStay", 300, false, life)],
            // 2500: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2510: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2520: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2525: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 2530: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2535: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 2545: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],
            // 2555: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],

            // 2800: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2810: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2820: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2825: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 2830: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 2835: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 2845: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],
            // 2855: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],

            // 3200: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 3210: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 3220: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 3225: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 3230: [new Enemy(120, 0, 20, "single", "curveRight", 50, false, points),],
            // 3235: [new Enemy(400, -20, 20, "single", "curveLeft", 50, false, points),],
            // 3245: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],
            // 3255: [new Enemy(400, -20, 10, "single", "curveLeft", 50, false, points),],

            // //wave 6
            // 3500: [new Enemy(251, 0, 2000, "boss1", "boss", 20000, true, boss)]

        };
    }
}