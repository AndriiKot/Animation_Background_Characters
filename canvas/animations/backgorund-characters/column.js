"use strict";
const pathDataLetters = "../../../characters/letters.json";

let alphabet = [];

function loadLetters() {
  return fetch(pathDataLetters)
    .then((response) => response.json())
    .then((data) => {
      alphabet = data;
    })
    .catch((error) => console.error("Ошибка при загрузке JSON:", error));
}

export class Column {
  constructor(ctx, fontSize, x, hightCanvas) {
    this.ctx = ctx;
    this.fontSize = fontSize;
    this.x = x;
    this.y = 0;
    this.hightCanvas = hightCanvas;
  }

  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.99) {
      return;
    }
    const alphabetIndex = Math.floor(Math.random() * Object.keys(alphabet).length);
    const key = Object.keys(alphabet)[alphabetIndex];
    const letters = alphabet[key] || [];
    const charactersIndex = Math.floor(Math.random() * letters.length);
    const symbol = letters[charactersIndex] || 'A';

    this.ctx.fillText(symbol, this.x, this.y);
    if (this.y >= this.hightCanvas) this.y = 0;
    this.y += this.fontSize;
  }
}

loadLetters();

