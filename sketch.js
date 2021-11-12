var gameState="assemble";

var homebg,rocket,p1,p2,p3,p4;

var takeoff,takeoffbutton,arrow,arrowimg;

var bg1img,bg2img,bg3img,rocketimg,p1img,p2img,p3img,p4img;

let shape1,shape2,shape3,shape4,shape5;

var l1,l2,l3,l4;

function preload(){
bg3img=loadAnimation("images/bg3.gif");
bg1img=loadImage("images/bg1.jpg");
bg2img=loadImage("images/bg2.jpg")
arrowimg=loadImage("images/arrow1.gif");
takeoffbutton=loadImage("images/takeofff.png");
p1img=loadImage("images/centerbody.png");
p2img=loadImage("images/leftbody.png");
p3img=loadImage("images/rightbody.png");
p4img=loadImage("images/topbody.png");
rocketimg=loadImage("images/rocketbody.png");
}



function setup() {
    
    createCanvas(windowWidth,windowHeight);
 
    if(gameState==="assemble"){
    shape1 = new Draggable(20, 160, 190, 260);
 
    shape2 = new Draggable(1200, 100, 60, 325);
    shape2.image=loadImage("images/leftbody.png");
 
    shape3 = new Draggable(350, 150, 90, 230);
    shape3.image=loadImage("images/topbody.png");
   
    shape4 = new Draggable(1050, 100, 60, 325);
    shape4.image=loadImage("images/rightbody.png");
    
  //  console.log(shape3.x);

   l1=createSprite(560,410,10,400);
  //  l1.addAnimation("btt",arrowimg)
   l2=createSprite(775,410,10,400);
   l3=createSprite(667.5,210,225,10);
   l4=createSprite(667.5,610,225,10);

   

    }



  // 

  // homebg=createSprite(680);
  //   homebg.y=-2600;
  //   homebg.addImage(homebgimg);
  // homebg.scale=1.45;
  //  homebg.velocityY=2;
  //  homebg.depth=rocket.depth;
  //  rocket.depth=rocket.depth+1;
}

function draw(){
  background(bg1img);



 if (gameState==="assemble"){


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

 

    textSize(25);
    fill("blue");
    text("centerbody",100,150);
    text("topbody",400,140);
    text("leftbody",1000,100);
    text("rightbody",1200,100);
    
    textSize(40);
    fill("red");
    textFont("algerian")
    text("DRAG ALL THE PARTS IN THIS BOX AND MAKE A ROCKET ",190,40);
    
    
    
    
    

 

 


if(shape1.x<=584&&shape2.x<=725&&shape3.x<=626&&shape4.x<=578){
  gameState="homescreen";
}

 }

 if(gameState==="homescreen"){
  var bg2 =createSprite(windowWidth/2,-2500);
  bg2.addImage(bg2img);
  bg2.scale=1.4;

  rocket=createSprite(670,450);
   rocket.addImage(rocketimg);
 rocket.scale=0.2;


 takeoff=createSprite(670,40);
 takeoff.addImage(takeoffbutton);
 takeoff.scale=0.15;

 arrow=createSprite(580,40);
 arrow.addAnimation("button",arrowimg);
 arrow.scale=0.5;

//  if (mouseIsOver(takeoff)) {
//   takeoff.visible=false;
//   arrow.visible=false;
// bg2.velocityY=-4;

// } else {
//   takeoff.visible=true;
//   arrow.visible=true;
// bg2.velocityY=0;

// }



 



 l1.destroy();
l2.destroy();
l3.destroy();
l4.destroy();


 }
// if(keyWentDown("UP_ARROW")){
//   homebg.velocityY=15;
//   // rocket.x=rocket.x+0;
//   //  rocket.velocityY=-18;
// // star.velocityY=-15;
//   rocket.addImage(rocket2img);
//   rocket.scale=0.9;


// }


// if(keyWentUp("UP_ARROW")){
//   homebg.velocityY=2;
//   rocket.addImage(rocketimg);
//   rocket.scale=0.23;

// }

// if(keyDown("LEFT_ARROW")){
//   rocket.x=rocket.x-10;
//   // homebg.x=-1;
// }
// if(keyDown("RIGHT_ARROW")){
//   rocket.x=rocket.x+10;
// }





// }



// if(homebg.y>=4200){
//   gameState=2;
//   homebg.destroy();
// }

// if(gameState===2){
// star=createSprite(680);
//   star.addAnimation("bg2",starimg);
// star.scale=2.6;
//  star.y=380;
//  star.depth=rocket.depth;
//   rocket.depth=rocket.depth+1;
// // //  star.velocityY=2;

// star.velocityY=0;

// if(keyDown("LEFT_ARROW")){
//   rocket.x=rocket.x-10;
//   // homebg.x=-1;
// }
// if(keyDown("RIGHT_ARROW")){
//   rocket.x=rocket.x+10;
// }


// }
// // star=createSprite(690);
// // 








// Asteroid1();
drawSprites();


}



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




// function Asteroid1(){
//    if(frameCount%100===0){
//   var ast1=createSprite(400,10,15,15);
//   ast1.addImage(a1img);
//   ast1.scale=0.35;
//   ast1.x=Math.round(random(50,1400));
//    ast1.velocityY= 14;
// //  ast1.rotationSpeed=4;
//     ast1.setLifetime=200;
    
    
  //  sword.depth=bomb2.depth
  //   sword.depth=sword.depth+1;
  //   bomb2Group.add(bomb1);
  //   bomb2Group.add(bomb2);
  // 
  //  }
  
// }