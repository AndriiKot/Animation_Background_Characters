import lettersA from "../../../characters/a.js";

export class Column {
  constructor(ctx, fontSize, x) {
    this.ctx = ctx;
    this.fontSize = fontSize;
    this.x = x;
    this.y = 0;
    this.letters = lettersA();
  }
  drawSymbol() {
    const charactersIndex = Math.floor(Math.random() * this.letters.length);
    const symbol = this.letters[charactersIndex];

    this.ctx.fillText(symbol, this.x, this.y);
    this.y += this.fontSize;
  }
}
