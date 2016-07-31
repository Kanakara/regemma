// create canvas
let canvas = <HTMLCanvasElement>document.getElementById('myCanvas');
let context = canvas.getContext("2d");

// get zombie image
let img = new Image();
img.src = "images\gifs-animados-zombies-7300787.gif";

// when all images loaded, start drawing
window.addEventListener('load', () => {
    context.drawImage(img, 0, 0);
});
let image = [1,1,1,1,1,1,1,1,1,1,1],
            [1,0,9,9,9,9,9,9,9,9,1],
            [1,0,9,9,9,9,9,9,9,9,1],
            [1,9,9,9,9,9,9,9,9,9,1],
            [1,9,9,9,9,9,9,9,9,9,1],
            [1,9,9,9,9,9,9,9,9,9,1],
            [1,9,9,9,9,9,9,9,9,9,1],
            [1,9,9,9,9,9,9,9,9,0,1],
            [1,1,1,1,1,1,1,1,1,1,1];


}
function drawBg()
{
  for(let r = 0; r < image.length; i++)
  {
      for(let c = 0; c < i[0].length; j++)
      {
        if(image[r][c] == 1)
          {
           
          }
        else if(image[r][c] ==9)
        {
           
        }
      }//for inner
  }//for outer
}
