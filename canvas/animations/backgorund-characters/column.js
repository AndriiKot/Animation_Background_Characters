import lettersA from "../../../characters/a.js";

export class Column {
  constructor(ctx, fontSize, x, hightCanvas) {
    this.ctx = ctx;
    this.fontSize = fontSize;
    this.x = x;
    this.y = 0;
    this.letters = lettersA();
    this.hightCanvas = hightCanvas;
  }
  drawSymbol() {
    if (this.y === 0 && Math.random() < 0.99) {
      return;
    }
    const charactersIndex = Math.floor(Math.random() * this.letters.length);
    const symbol = this.letters[charactersIndex];

    this.ctx.fillText(symbol, this.x, this.y);
    if (this.y >= this.hightCanvas) this.y = 0;
    this.y += this.fontSize;
  }
}
