export function fadeOut(ctx, fadeValue){
    ctx.beginPath();
    ctx.globalAlpha = fadeValue;
    ctx.rect(20, 20, 500, 680);
    ctx.rect(570, 228, 300, 240);
    ctx.rect(575, 50, 348, 136);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.globalAlpha = 1;
}

export function fadeIn(ctx, fadeValue){
    ctx.beginPath();
    ctx.globalAlpha = fadeValue;
    ctx.rect(570, 228, 300, 240);
    ctx.rect(575, 50, 348, 136);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    ctx.globalAlpha = 1;
}

