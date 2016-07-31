var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext("2d");
var img = new Image();
window.addEventListener('load', function () {
    img.src = 'BrainEaterRegEmma\images\cat.gif';
    ctx.drawImage(img, 0, 0);
});
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
