import {calcDirection, rotate} from "./utility";
import shoot from "./enemyProjectiles";


export default function enemyAction(enemy, player, enemyBulletArray){
    const instructions = enemy.moveType.split("-");
    switch(instructions[0]){
        case "straight":
            switch(instructions[1]){
                case "down":
                    pointToPoint(enemy, enemy.x, enemy.y + 1);
                    break;
                case "up":
                    pointToPoint(enemy, enemy.x, enemy.y - 1);
                    break;
                case "left":
                    pointToPoint(enemy, enemy.x - 1, enemy.y);
                    break;
                case "right":
                    pointToPoint(enemy, enemy.x + 1, enemy.y);
                    break;
            }
            if (enemy.lifespan % 200 === 0) {
                shootTarget(enemy, enemyBulletArray, player);
            }
            break;

        case "curve":
            if(enemy.lifespan >= 60 && enemy.lifespan < 80){
                instructions[1] === "left" ? enemy.dx -= 0.2 : enemy.dx += 0.2;
                enemy.dy -= 0.2;
            }else if(enemy.lifespan === 80){
                instructions[1] === "left" ? enemy.moveType = "straight-left" : enemy.moveType = "straight-right";
            }
            if (enemy.lifespan === 70) {
                shootTarget(enemy, enemyBulletArray, player);
            }
            break;
        
        case "pause":
            enemy.dy = 5;
            enemy.dx = 0;
            if(enemy.lifespan > 290){
                if(instructions[1] === "left"){
                    enemy.dy = -5;
                }else{
                    enemy.dx = 5;
                }
            }else if(enemy.lifespan > 30){
                enemy.dy = 0;
            }
            if (enemy.lifespan % 100 === 0 && enemy.lifespan > 40) {
                shootTarget(enemy, enemyBulletArray, player);
            }
            break;

        case "stay":
            enemy.dy = 3;
            enemy.dx = 0;
            if(enemy.lifespan > 1000){
                enemy.dy = -3;
            }else if (enemy.lifespan > 40){
                enemy.dy = 0;
            } 
            if (enemy.lifespan % 50 === 0 && enemy.lifespan > 40) {
                shootTarget(enemy, enemyBulletArray, player);
            }
            break;

    }

    function shootTarget(enemy, enemyBulletArray, player){
        shoot(enemy.shotType, enemyBulletArray, [enemy.x + 10, enemy.y + 10],
            [player.x, player.y], player);
    }



    //set dx and dy moving towards a point
    function pointToPoint(enemy, targetX, targetY){
        const direction = calcDirection(enemy.x, enemy.y, targetX, targetY);
        enemy.dx = direction[0] * enemy.speed;
        enemy.dy = direction[1] * enemy.speed;
    }

}