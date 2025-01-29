"use strict";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const fontSize = () => 16;
let y =  0;

ctx.font = `bold ${fontSize()}px monospace`;
ctx.fillStyle = "blue";

ctx.fillText("H", 50, y);

const animation = () => {
    requestAnimationFrame( animation );
    y += 1;
    ctx.clearRect(0, 0, width, height);
    ctx.fillText("H", 50, y);
};

animation();
