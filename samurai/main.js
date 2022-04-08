


//Licensing Information is given in license.md




let tree = [];
let leaves = [];
let leftFace = [];
let rightFace = [];
let fragment = [];
let count=0;


let r;
let g;
let d;
let c;
let randColor;


r = Math.floor(fxrand()*50)+200;
g = Math.floor(fxrand()*255);
d = Math.floor(fxrand()*155)+100;
c = Math.floor(fxrand()*255);

l = Math.floor(fxrand()*255);
m = Math.floor(fxrand()*255);
n = Math.floor(fxrand()*255);

za = 0;
ba = 0;
da = Math.floor((fxrand()*100)+150);
na = Math.floor((fxrand()*100)+150);

randColor = function()
{
    return [r,g,d];
}

randStuff = function(){
   return [l,m,n];
}

rando = function(){
   return [za,ba,da];
}

inner = function(){
   return [r,0,da,na]
}

bgd = rando();
let faceColor = randColor();
let innerFace = inner();
let innerColor = randStuff();




function setup() {
  createCanvas(600,600);
  const a = createVector(width/2, height-200);
  const b = createVector(width/2, height - 350);
  root = new Branch(a,b);
  tree[0] = root;
  makeTree();

display(); 
frameRate(20);

}





function display(){
   background(0);

   
   showTree();
   makeArmour(); //armour function 
   showLeaf();

   const leftEye = new Eye(225, 280);
   const x = 600-225;
   const y = 280;
   const rightEye = new Eye(x, y);
   

   leftEye.showPoint();
   rightEye.showPoint();


   leftRPoint = new Eye (250,280);
   leftLPoint = new Eye (200,280);


   makeEye();
   makeInnerEye();
   makeFace();
   makeEyebrow();


   makeFragment();
   makeMouth();

}

let angle = 0;

function draw() {
   //   background(0);
   makeInnerEye();
  }



function makeFace(){
   stroke(255);
   strokeWeight(5);
   fill(inner());
   // noFill();
   beginShape();
   vertex(185, 350);
   vertex(295, 320);
   vertex(300,405);
   vertex(205, 450);
   vertex(185, 350);
   endShape(CLOSE);

   beginShape();
   vertex(600-185, 350);
   vertex(600-295, 320);
   vertex(600-300, 405);
   vertex(600-205, 450);
   vertex(600-185, 350);
   endShape(CLOSE);
}

function makeEyebrow(){
   stroke(255);
   fill(r,g,d, 150);
   beginShape();
   vertex(159.5, 212);
   vertex(182.5, 187);
   vertex(237.5, 187);
   vertex(295.5, 247);
   endShape(CLOSE);
 
   beginShape();
   vertex(600-159.5, 212);
   vertex(600-182.5, 187);
   vertex(600-237.5, 187);
   vertex(600-295.5, 247);
   endShape(CLOSE);
}



function makeMouth(){
   stroke('black');
   fill('white');
   beginShape();
   vertex(260, 470);
   vertex(230-15, 445-10);
   quadraticVertex(270, 450, 260, 470)
   endShape();
   beginShape();
   vertex(600-260, 470);
   vertex(600-230+15, 445-10);
   quadraticVertex(600-270, 450, 600-260, 470)
   endShape();

   stroke('black');
   strokeWeight(0.5)
   let x= 260;
   let y= 265;
   let z= 269;
   //Teeth 
   for(let i=0; i<15; i++){
   beginShape()
   vertex(x,470);
   vertex(y,460);
   vertex(z,470);
   x+=5;
   y+=5;
   z+=5;
   console.log(x);
   endShape()
   }

   //Top Teeth 
   strokeWeight(3);
   stroke('black');
   fill('white');
   beginShape();
   vertex(260, 430); //260, 430
   vertex(240-40, 470+20);//240, 470
   quadraticVertex(270, 450, 260, 430)
   endShape();
   //Otherside
   beginShape();
   vertex(600-260, 430);
   vertex(600-240+40, 470+20);
   quadraticVertex(600-270, 450, 600-260, 430)
   endShape();


   let j=263;

   stroke('black');
   
   strokeWeight(2);
   //Top High Teeth
   point(265, 440);
   for(let i=0; i<15; i++){
      rect(j,430, 5, 20);
      j+=5;
      }

}
