// create canvas
let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

let width=550;
let height=750;
let playerImg = new Image();
playerImg.src = 'images/eevee.png';
let enemyImg = new Image()
enemyImg.src = 'images/gir.png';
//player eevee!
let player = {
  xPos:0,
  yPos:0,
};



//Enemy Gir!!
let enemyList = {};

Enemy('g1',550,750,10,15);
Enemy('g2',250,450,10,15);
Enemy('g3',50,250,10,15);
Enemy('g4',250,50,10,15);

function Enemy(id,xPos:number,yPos:number,spdX:number,spdY:number)
 {
let enemy = {
  xPos:xPos,
  spdX:spdX,
  yPos:yPos,
  spdY:spdY,
  id:id,
};
  enemyList[id] = enemy
}



//when all images loaded, start drawing
window.addEventListener('load', () => {
    ctx.drawImage(playerImg, player.xPos, player.yPos, 50, 50);
});

function movePlayer(direction) {
      if (direction.keyCode == 38) {
        player.yPos-=10;
        }
      if (direction.keyCode == 40) {
        player.yPos+=10;
      }
      if (direction.keyCode == 37) {
        player.xPos-=10;
      }
      if (direction.keyCode == 39) {
        player.xPos+=10;
      }
      canvas.width = canvas.width;
      canvas.height = canvas.height;
      ctx.drawImage(playerImg, player.xPos, player.yPos, 50, 50);
    };
document.onkeydown = movePlayer;

setInterval(update, 100);

//creating a move speed for the enemies to move
function updateMove(move) {
    move.xPos += move.spdX;
    move.yPos += move.spdY;
    ctx.drawImage(enemyImg, move.xPos, move.yPos, 50, 50);
//making it to where the enemies will not move out of the canvas
if (move.xPos < 0 || move.xPos > width) {
  move.spdX = -move.spdX;
  }
if (move.yPos < 0 || move.yPos > height) {
  move.spdY = -move.spdY;
  }
};

function update(){
  ctx.clearRect(0, 0, width+50, height+50);
//cycles through the enemy list so that they will constantly move
    for(let i in enemyList){
    updateMove(enemyList[i]);
  }
};

//Map generator - it will be three difficulty settings, easy, med, & hard.
class Map {
  constructor (public theMap:string, public difficulty:string){
      }
}
 let aMap = [
    new Map(`map1`, `zombieSpd`),
    new Map(`map2`, `zombieSpd`),
    new Map(`map3`, `zombieSpd`),
    new Map(`map4`, `zombieSpd`),
    new Map(`map5`, `zombieSpd`),
];
// console.log(aQuestion);
let bMap = []; //the 3 maps we will cycle through
let currentMap = []; // this empty array that will only display the actually map you are on.

// gets the div element where we will place the map on the page
let canvasDis = document.getElementsByTagName('div');


for (let i=0; i < 3; i++) {
  let mapGen = Math.floor(Math.random()*aMap.length);
  bMap.push(aMap[mapGen]);
  aMap.splice(mapGen, 1);

}

// function displayQ() {
// for (let i=0; i < bMap.length; i++){
//         currentMap.push(bMap[i].question + typeChecker(bMap[i]));
//         console.log(currentMap[i]);
//     }
// canvasDis[0].innerHTML = currentMap[0];
//
// }


// displayQ();
