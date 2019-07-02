import Game from "./Game";

document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("board");
    const ctx = canvas.getContext("2d");

    const game = new Game(ctx, inputs);
    game.start();

    document.addEventListener("keydown", keyHandleDown, false);
    document.addEventListener("keyup", keyHandleUp, false);
});

const inputs = {
    left: false,
    right: false,
    up: false,
    down: false,
    shift: false,
    z: false
};

function keyHandleDown(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        event.preventDefault();
        inputs.right = true;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        event.preventDefault();
        inputs.left = true;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        event.preventDefault();
        inputs.up = true;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        event.preventDefault();
        inputs.down = true;
    } else if (e.key == "Shift") {
        inputs.shift = true;
    } else if (e.key == "z") {
        inputs.z = true;
    }
}

function keyHandleUp(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        event.preventDefault();
        inputs.right = false;
    } else if (e.key == "Left" || e.key == "ArrowLeft") {
        event.preventDefault();
        inputs.left = false;
    } else if (e.key == "Up" || e.key == "ArrowUp") {
        event.preventDefault();
        inputs.up = false;
    } else if (e.key == "Down" || e.key == "ArrowDown") {
        event.preventDefault();
        inputs.down = false;
    } else if (e.key == "Shift") {
        inputs.shift = false;
    } else if (e.key == "z") {
        inputs.z = false;
    }
}