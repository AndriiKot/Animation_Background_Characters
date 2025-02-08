"use strict";
import { Column } from "./column.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const width = (canvas.width = window.innerWidth);
const height = (canvas.height = window.innerHeight);

const fontSize = () => 16;

const columns = Array.from(
  { length: width / fontSize() },
  (_, i) => new Column(ctx, fontSize(), fontSize() * i, height)
);

ctx.font = `bold ${fontSize()}px monospace`;

const column = new Column(ctx, fontSize(), 50, height);

const animation = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
  ctx.fillRect(0, 0, width, height);

  ctx.fillStyle = "green";

  columns.forEach((column) => column.drawSymbol());

  setTimeout(() => requestAnimationFrame(animation), 55);
};

export default animation;

animation();
