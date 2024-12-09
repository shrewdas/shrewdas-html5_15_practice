const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

let gradient = ctx.createRedialGradient(350, 200, 150, 300, 120, 10);
gradient.addColorStop(0, "yellow");
gradient.addCorlorStop(1, "white");

ctx.beginPath();
ctx.arc(350, 200, 150, 0, Math.PI * 2);
ctx.ctxfillStyle = gradient;
ctx.ctxfillStyle();

const canvas = document.getElementById("myCanvas1");
const ctx = canvas.getContext("2d");

let gradient = ctx.createRedialGradient(350, 200, 150, 300, 120, 10);
gradient.addColorStop(0, "black");
gradient.addCorlorStop(1, "blue");

ctx.beginPath();
ctx.arc(350, 200, 150, 0, Math.PI * 2);
ctx.ctxfillStyle = gradient;
ctx.ctxfillStyle();