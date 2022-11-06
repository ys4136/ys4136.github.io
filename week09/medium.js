console.log("the message!")
let theVariable = "ys"
let theother = 4136

console.log(theVariaible + theother)

//init p5.js
function setup(){
    console.log("p5 is here!");
    createCanvas(1500,800);
    background(57, 100, 243);
}
function draw() {
  
  
}

function mousePressed(){
  fish();
}

function fish() {
  clrR = random(0, 255);
  bl = random(0, 255);
  gn = random(0, 255);
  fill(clrR, gn, bl);
 /*x = random(35, 360);
  y = random(15, 360);*/
  x = mouseX;
  y = mouseY;
  size = random(10, 50);
  ellipse (x, y, size);
//eye
  fill(0)
  a = x-size/4;
  b = y-size/4;
  c = random(3,5);
  ellipse (a, b, c);
//tail
  clrG = random(0, 255);
  clrB = random(0, 255);
  fill(100, clrG, clrB);
  X1= x + size/2.3;
  Y1 = y + size/4;
  X2 = x + size;
  Y2 = y + size;
  X3 = x + size;
  Y3 = y - size/2;
  triangle(X1, Y1, X2, Y2, X3, Y3 );
//bubble
  fill (122, 247, 255)
  bx1 = x - size;
  by1 = y - size;
  bs1 = size/4;
  ellipse (bx1, by1, bs1);
  bx2 = x - size;
  by2 = y - size/2;
  bs2 = size/8;
  ellipse (bx2, by2, bs2);
  bx3 = x - size;
  by3 = y - size * 1.5;
  bs3 = size/2;
  ellipse (bx3, by3, bs3);
  
}