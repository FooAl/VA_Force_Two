import Enemybullet from "./EnemyBullet";
import {rotate} from "./utility";

export default function shoot(shotType, enemyBulletArray, origin, target, player){
    switch (shotType) {
        case "single":
            const bullet = new Enemybullet(origin[0], origin[1], 0, 0, 5, "linear");
            bullet.bulletBehavior(target[0], target[1], player);
            enemyBulletArray.push(bullet);
            break;
        case "double":
            for(let i = 0; i < 2; i++){
                const bullet = new Enemybullet(origin[0], origin[1], 0, 0, 5, "linear");
                let rad = 0.1;
                if(i === 1){
                    rad *= -1;
                }
                const newTarget = rotate(origin[0], origin[1], target[0], target[1], rad);
                bullet.target = newTarget;
                bullet.bulletBehavior(newTarget[0], newTarget[1]);
                enemyBulletArray.push(bullet);
            }
            break;
        case "triple":
            for (let i = 0; i < 3; i++){
                const bullet = new Enemybullet(origin[0], origin[1], 0, 0, 5, "linear");
                let rad = 0;
                if(i === 1){
                    rad = 0.2;
                }else if(i === 2){
                    rad = -0.2;
                }
                const newTarget = rotate(origin[0], origin[1] - 10, target[0], target[1], rad);
                bullet.target = newTarget;
                bullet.bulletBehavior(newTarget[0], newTarget[1]);
                enemyBulletArray.push(bullet);
            }
            break;
        case "shotgun":
            for(let i = 0; i < 10; i++){
                const bullet = new Enemybullet(origin[0], origin[1], 0, 0, 5, "shotgun");
                bullet.bulletBehavior(target[0], target[1], player);
                enemyBulletArray.push(bullet);
            }
            break;
        case "spread":
            for(let i = 0; i < 5; i++){
                
            }

    }
}