//true or false if two objects are collided
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


//loads enemies into the level
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

//calculates distance from source to target
export function calcDistance(sourceX, sourceY, targetX, targetY){
    const directionX = targetX - sourceX;
    const directionY = targetY - sourceY;
    const length = Math.sqrt(directionX * directionX + directionY * directionY);
    return length;
}

//calculate Radians from source to target
export function calcRad(sourceX, sourceY, targetX, targetY) {
    const distanceX = targetX - sourceX;
    const distanceY = -targetY - sourceY;
    const rad = Math.atan2(distanceY, distanceX);
    return rad;
}

//rotates a point around an anchor by radians
export function rotate(anchorX, anchorY, rotateX, rotateY, rad){
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    const distanceX = rotateX - anchorX;
    const distanceY = rotateY - anchorY;
    const newX = (cos * distanceX) + (sin * distanceY) + anchorX;
    const newY = (cos * distanceY) - (sin * distanceX) + anchorY;
    return [newX, newY];
}

//generate a dx and dy from source to target between -1 and 1 
export function calcDirection(sourceX, sourceY, targetX, targetY) {
    let directionX = targetX - sourceX;
    let directionY = targetY - sourceY;
    const len = Math.sqrt(directionX * directionX + directionY * directionY);
    directionX /= len;
    directionY /= len;
    return [directionX, directionY];
}

//from a source position, using the player as an anchor, 
//rotate a different position around the player based on positions of source and anchor
//target is a tuple
export function rotatePosition(sourceX, sourceY, anchor, target) {
    let unrotatedPoint = target;
    let rad = calcRad(sourceX, sourceY, anchor[0], anchor[1]);
    let rotatedPoint = rotate(anchor[0], anchor[1], unrotatedPoint[0], unrotatedPoint[1], rad);
    let result = calcDirection(sourceX, sourceY, rotatedPoint[0], rotatedPoint[1]);
    return result;
}