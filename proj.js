var canvas = document.getElementById('myCanvas');
var context = canvas.getContext("2d");
var img = new Image();
img.src = "images\gifs-animados-zombies-7300787.gif";
window.addEventListener('load', function () {
    context.drawImage(img, 0, 0);
});
