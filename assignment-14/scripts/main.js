var c = document.getElementById("fake-logo");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.stroke();
ctx.font = "30px Arial";
ctx.strokeText("Round Box", 150, 50);
ctx.font = "30px Arial";
ctx.strokeText("Publishing", 150, 80);