
let img;
function preload() {
  img = loadImage('00.png');
}
function setup() {
  var canvas = createCanvas(700, 400);
    canvas.parent('sketch-holder');
  image(img, 0, 0);
  
}
