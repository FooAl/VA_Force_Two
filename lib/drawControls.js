export default function drawControls(ctx, spriteSheet, inputs){
    if (inputs.right === false) {
        ctx.drawImage(spriteSheet, 1283, 656, 60, 60, 864, 620, 60, 60);
    } else if (inputs.right === true) {
        ctx.drawImage(spriteSheet, 1288, 834, 60, 60, 864, 620, 60, 60);
    }
    if (inputs.up === false) {
        ctx.drawImage(spriteSheet, 1215, 589, 60, 60, 794, 550, 60, 60);
    } else if (inputs.up === true) {
        ctx.drawImage(spriteSheet, 1220, 766, 60, 60, 794, 550, 60, 60);
    }
    if (inputs.down === false) {
        ctx.drawImage(spriteSheet, 1215, 656, 60, 60, 794, 620, 60, 60);
    } else if (inputs.down === true) {
        ctx.drawImage(spriteSheet, 1220, 834, 60, 60, 794, 620, 60, 60);
    }
    if (inputs.left === false) {
        ctx.drawImage(spriteSheet, 1147, 656, 60, 60, 724, 620, 60, 60);
    } else if (inputs.left === true) {
        ctx.drawImage(spriteSheet, 1152, 834, 60, 60, 724, 620, 60, 60);
    }
    if (inputs.z === false) {
        ctx.drawImage(spriteSheet, 1007, 656, 60, 60, 584, 620, 60, 60);
    } else if (inputs.z === true) {
        ctx.drawImage(spriteSheet, 1012, 834, 60, 60, 584, 620, 60, 60);
    }
    // if(xPressed === false){
    //     ctx.drawImage(spriteSheet, 1007, 656, 60, 60, 654, 620, 60, 60);
    // }
    if (inputs.shift === false) {
        ctx.drawImage(spriteSheet, 1007, 564, 124, 60, 584, 540, 124, 60);
    } else if (inputs.shift === true) {
        ctx.drawImage(spriteSheet, 1012, 742, 124, 60, 584, 540, 124, 60);
    }

    ctx.drawImage(spriteSheet, 1011, 936, 348, 136, 90, 250, 348, 136);

    ctx.drawImage(spriteSheet, 748, 952, 48, 10, 803, 684, 48, 10);
    ctx.drawImage(spriteSheet, 748, 937, 48, 10, 589, 684, 48, 10);
    ctx.drawImage(spriteSheet, 748, 925, 48, 10, 624, 600, 48, 10);
}