export function isCollided(source, target) {
    if ((source.y + source.height) < target.y ||
        source.y > (target.y + target.height) ||
        (source.x + source.width) < target.x ||
        source.x > (target.x + target.width)) {
        return false;
    } else {
        return true;
    }
}

export function enemyLoader(level, levelTime, enemyArray) {
    let enemyLevelArray = level.enemies[levelTime];
    if (enemyLevelArray != undefined) {
        enemyLevelArray.forEach(enemy => {
            enemyArray.push(enemy);
            // if (enemy.boss === true) {
                // combo.freeze = true;
            // }
        });
    }
}