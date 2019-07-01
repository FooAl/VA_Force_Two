import Game from "./Game";

document.addEventListener("DOMContentLoaded", () => {
    let canvas = document.getElementById("board");
    let ctx = canvas.getContext("2d");

    let game = new Game(ctx);
    game.start();
});