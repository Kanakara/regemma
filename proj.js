var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var width = 550;
var height = 750;
var playerImg = new Image();
playerImg.src = 'images/eevee.png';
var enemyImg = new Image();
enemyImg.src = 'images/gir.png';
var player = {
    xPos: 0,
    yPos: 0,
};
var enemyList = {};
Enemy('g1', 550, 750, 10, 15);
Enemy('g2', 250, 450, 10, 15);
Enemy('g3', 50, 250, 10, 15);
Enemy('g4', 250, 50, 10, 15);
function Enemy(id, xPos, yPos, spdX, spdY) {
    var enemy = {
        xPos: xPos,
        spdX: spdX,
        yPos: yPos,
        spdY: spdY,
        id: id,
    };
    enemyList[id] = enemy;
}
window.addEventListener('load', function () {
    ctx.drawImage(playerImg, player.xPos, player.yPos, 50, 50);
});
function movePlayer(direction) {
    if (direction.keyCode == 38) {
        player.yPos -= 10;
    }
    if (direction.keyCode == 40) {
        player.yPos += 10;
    }
    if (direction.keyCode == 37) {
        player.xPos -= 10;
    }
    if (direction.keyCode == 39) {
        player.xPos += 10;
    }
    canvas.width = canvas.width;
    canvas.height = canvas.height;
    ctx.drawImage(playerImg, player.xPos, player.yPos, 50, 50);
}
;
document.onkeydown = movePlayer;
setInterval(update, 100);
function updateMove(move) {
    move.xPos += move.spdX;
    move.yPos += move.spdY;
    ctx.drawImage(enemyImg, move.xPos, move.yPos, 50, 50);
    if (move.xPos < 0 || move.xPos > width) {
        move.spdX = -move.spdX;
    }
    if (move.yPos < 0 || move.yPos > height) {
        move.spdY = -move.spdY;
    }
}
;
function update() {
    ctx.clearRect(0, 0, width + 50, height + 50);
    for (var i in enemyList) {
        updateMove(enemyList[i]);
    }
}
;
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
