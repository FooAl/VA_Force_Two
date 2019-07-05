import {calcDirection} from "../utility";
import shoot from "../enemyProjectiles";
import Enemy from "../Enemy";

export default function bossAction(enemy, player, enemyBulletArray, enemyArray){
    switch(enemy.moveType){
        case "boss-1":
            enemy.dy = 5;
            enemy.dx = 0;
            if (enemy.y === 100) {
                enemy.dy = 0;
            }
            if(enemy.lifespan > 50){
                if (enemy.lifespan % 10 === 0) {
                    enemy.shotType = "double-0.2";
                    shootTarget(enemy, enemyBulletArray, player);
                }
                if (enemy.lifespan % 75 === 0) {
                    enemy.shotType = "single";
                    shootTarget(enemy, enemyBulletArray, player);
                }
            }
            
            if (enemy.x + 14 > player.x - 5 && enemy.x + 14 < player.x + 5) {
                enemy.dx = 0;
            }else if(enemy.x + 14 > player.x){
                enemy.dx -= 1;
            } else if (enemy.x + 14 < player.x) {
                enemy.dx += 1;
            }
            break;

        case "boss-2":
            if(enemy.lifespan === 1){
                pointToPoint(enemy, 251, 100);
                enemy.lifespan = 2;
            }

            if(enemy.x > 246 && enemy.x < 254){
                enemy.dx = 0;
                enemy.dy = 0;
                if(enemy.lifespan % 50 === 0){
                    let direction = Math.floor(Math.random() * 2);
                    if(direction === 0){
                        pointToPoint(enemy, 80, 160);
                        enemy.lifespan = 2;
                    }else{
                        pointToPoint(enemy, 440, 160);
                        enemy.lifespan = 2;
                    }
                }
            }

            if((enemy.x > 75 && enemy.x < 85) || (enemy.x > 435 && enemy.x < 445)){
                enemy.dx = 0;
                enemy.dy = 0;
                if(enemy.lifespan % 50 === 0){
                    enemy.shotType = "spread";
                    shootTarget(enemy, enemyBulletArray, player);
                }

                if(enemy.lifespan === 300){
                    pointToPoint(enemy, 251, 100);
                    enemy.lifespan = 2;
                }

                if (enemy.lifespan === 30 || enemy.lifespan === 55 || enemy.lifespan === 80) {
                    let x;
                    let direction;
                    if (enemy.x > 251) {
                        x = 120;
                        direction = "curve-right";
                    } else {
                        x = 400;
                        direction = "curve-left";
                    }

                    enemyArray.push(new Enemy(x, 0, 0, 4, 10, "single", direction, 0, ["powerup", "powerup"]));
                }  
            }
            break;

            case "boss-3":
                if (enemy.lifespan === 1) {
                    enemy.shotType = "circle";
                    pointToPoint(enemy, 251, 100);
                    enemyArray.push(new Enemy(100, 100, 0, 0, 10, "circle", "turret", 0, []));
                    enemyArray.push(new Enemy(380, 100, 0, 0, 10, "circle", "turret", 0, []));
                    enemy.lifespan = 2;
                }
                

                if (enemy.x > 246 && enemy.x < 254) {
                enemy.dx = 0;
                enemy.dy = 0;
                    if (enemy.lifespan % 25 === 0 && enemy.lifespan > 50) {
                        shootTarget(enemy, enemyBulletArray, player);
                    }
                }
            break;
    }

    function shootTarget(enemy, enemyBulletArray, player) {
        shoot(enemy.shotType, enemyBulletArray, [enemy.x + 20, enemy.y + 20],
            [player.x, player.y], player);
    }

    function pointToPoint(enemy, targetX, targetY) {
        const direction = calcDirection(enemy.x, enemy.y, targetX, targetY);
        enemy.dx = direction[0] * enemy.speed;
        enemy.dy = direction[1] * enemy.speed;
    }
}