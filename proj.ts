// create canvas
let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
let ctx = canvas.getContext("2d");

// get cat image
let img = new Image();

//when all images loaded, start drawing
window.addEventListener('load', () => {

    img.src = 'BrainEaterRegEmma\images\cat.gif';
    ctx.drawImage(img, 0, 0);

});

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
