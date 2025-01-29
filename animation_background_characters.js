'use strict';

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

ctx.font = "bold 16px monospace";
ctx.fillStyle = 'blue';

ctx.fillText('Hello World!', width / 2, height / 2);
