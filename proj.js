var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var xPos = 0;
var yPos = 0;
var img = new Image();
img.src = 'images/eevee.png';
window.addEventListener('load', function () {
    ctx.drawImage(img, xPos, yPos, 45, 50);
    ctx.stroke();
});
function moveKey(direction) {
    if (direction.keyCode == 38) {
        yPos -= 10;
    }
    if (direction.keyCode == 40) {
        yPos += 10;
    }
    if (direction.keyCode == 37) {
        xPos -= 10;
    }
    if (direction.keyCode == 39) {
        xPos += 10;
    }
    canvas.width = canvas.width;
    canvas.height = canvas.height;
    ctx.drawImage(img, xPos, yPos, 45, 50);
}
;
document.onkeydown = moveKey;
var Map = (function () {
    function Map(theMap, difficulty) {
        this.theMap = theMap;
        this.difficulty = difficulty;
    }
    return Map;
}());
var aMap = [
    new Map("map1", "zombieSpd"),
    new Map("map2", "zombieSpd"),
    new Map("map3", "zombieSpd"),
    new Map("map4", "zombieSpd"),
    new Map("map5", "zombieSpd"),
];
var bMap = [];
var currentMap = [];
var canvasDis = document.getElementsByTagName('div');
for (var i = 0; i < 3; i++) {
    var mapGen = Math.floor(Math.random() * aMap.length);
    bMap.push(aMap[mapGen]);
    aMap.splice(mapGen, 1);
}
