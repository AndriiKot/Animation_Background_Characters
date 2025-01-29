"use strict";
import { Column } from "./column.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const fontSize = () => 16;

ctx.font = `bold ${fontSize()}px monospace`;

const column = new Column(ctx, fontSize(), 50, height);

const animation = () => {
  ctx.fillStyle = "black";
  ctx.clearRect(0, 0, width, height);

  ctx.fillStyle = "yellow";

  column.drawSymbol();

  setTimeout(() => requestAnimationFrame(animation), 50);
};

animation();
