
/*x=-200;
y=200
var p1X=150;
var p1Y=10;
var p2X=218;
var p2Y=305;
var p3X=900;
var p3Y=305;
var p4X=900;
var p4Y=50;
*/
function preload(){
  darkimg=loadImage("outline.png");
homebgimg=loadImage("1bg.jpg");
p1img=loadImage("centerbody.png");
p2img=loadImage("leftbody.png");
p3img=loadImage("rightbody.png");
p4img=loadImage("topbody.png");
rocketimg=loadImage("rocketbody.png");



}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 
  
 // p1=rect(p1X,p1Y,120,120);
 // p2=rect(p2X,p2Y,120,120);
 // p3=rect(p3X,p2Y,120,120);
 // p4=rect(p4X,p4Y,120,120);
 
//  dark=createSprite(452,317);
//  dark.addImage(darkimg);
//  dark.scale=0.69;
//  dark.width=700;
// dark.height=340;
//  dark.depth=-10;
 
//  var rocket=createSprite(windowWidth/2,320,100,150);
//  rocket.addImage(rocketimg);
//  rocket.scale=0.3;
// dark.depth=shape1.depth;
//  shape1.depth=shape1.depth+1;

shape1 = new Draggable(20, 160, 225, 365);
 


shape2 = new Draggable(1200, 100, 65, 450);
shape2.image=loadImage("leftbody.png");
//  shape2.depth=shape1.depth;
//  shape1.depth=shape1.depth+1;


shape3 = new Draggable(350, 150, 110, 340);
shape3.image=loadImage("topbody.png");

shape4 = new Draggable(1050, 100, 65, 450);
shape4.image=loadImage("rightbody.png");

}



function draw(){
  background(homebgimg);

  shape1.display();
  shape1.over();
    shape1.update();
    shape1.show();
    shape2.over();
    shape2.update();
    shape2.show();
    shape2.display();
    shape3.over();
    shape3.update();
    shape3.show();
    shape3.display();
    shape4.over();
    shape4.update();
    shape4.show();
    shape4.display();
//image(p1img,p1X,p1Y,230,300 );
//image(p2img,p2X,p2Y,100,350 );
//image(p3img,p3X,p3Y,100,350 );
//image(p4img,p4X,p4Y,100,350 );
drawSprites();
}

/*function mouseDragged() {
	var diff = p1X - mouseX;
  x = x - diff;
  p1X = mouseX;

  var dif=p1Y- mouseY
  y = y - dif;
  p1Y = mouseY;

  var di = p2X - mouseX;
  x = x - di;
  p2X = mouseX;

  var di=p2Y- mouseY
  y = y - di;
  p2Y = mouseY;
 
  // var diff = p3X - mouseX;
  // x = x - diff;
  // p3X = mouseX;

  // var dif=p3Y- mouseY
  // y = y - dif;
  // p3Y = mouseY;

  // var diff = p4X - mouseX;
  // x = x - diff;
  // p4X = mouseX;

  // var dif=p4Y- mouseY
  // y = y - dif;
  // p4Y = mouseY;

}*/

function mousePressed() {
  shape1.pressed();
  shape2.pressed();
  shape3.pressed();
  shape4.pressed();
}

function mouseReleased() {
  shape1.released();
  shape2.released();
  shape3.released();
  shape4.released();
}
