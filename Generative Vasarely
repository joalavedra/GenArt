let r = 1;
let g = 1;
let b = 1;

let vp = 1;
let hp = 1;

function setup() {
  createCanvas(1500, 500);
  background(220);
  frameRate(30);
  noStroke();
  rectMode(CENTER)
}

function draw() {
  
  r=random(10,15);
  g=random(1,20);
  b=random(1,20);
  fill( r*hp, g*hp, b*hp);
  rect (25 * hp, 25 * vp, 50, 50);
  
  r=random(1,20);
  g=random(1,20);
  b=random(15,20);
  fill( r*vp,g*vp,b*vp);
  circle(25 * hp, 25 * vp, 42, 42);
  
  hp = hp + 2;
  
  if (hp > 59){
    vp=vp + 2;
    hp=1
  }
}
