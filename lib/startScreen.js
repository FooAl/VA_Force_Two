export default function startScreen(renderer, ctx, spriteSheet, timer){
    ctx.drawImage(spriteSheet, 7, 3, 540, 720, 0, 0, 540, 720);
    ctx.drawImage(spriteSheet, 558, 5, 420, 720, 540, 0, 420, 720);
    
    if(timer % 80 < 40){
        ctx.drawImage(spriteSheet, 996, 1117, 324, 28, 590, 500, 324, 28);
    }
    ctx.drawImage(spriteSheet, 996, 1161, 160, 20, 590, 50, 160, 20);



    window.requestAnimationFrame(renderer);
}