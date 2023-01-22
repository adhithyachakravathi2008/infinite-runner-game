var thief,thiefRunning ;
var bg,bgImg;
var run,runImg
var inv,invImg;
var obs



function preload(){
thiefRunning=loadAnimation("1.png","2.png","3.png");
bgImg=loadImage("bg.png");
runImg=loadAnimation("runner 1.png","runner.png");
invImg=loadImage("inv.png");
}

function setup() {
  createCanvas(2000,800)



  bg=createSprite(500,500);
  bg.addImage(bgImg);
  bg.velocityX = -4;
  
  
  thief = createSprite(500, 750, 20, 20);
  thief.addAnimation("running",thiefRunning);

   run=createSprite(100,650,40,40);
   run.addAnimation("runner",runImg);

   inv=createSprite(250,690,100,100);
   inv.addImage("ground",invImg);
  
}
function draw() {

  if (bg.x < 0){
    bg.x = bg.width/2;
  }
  
 

  bg.depth=thief.depth;
 thief.depth>bg.depth;
  
  bg.depth=inv.depth;
  inv.depth=+1;
 
  if (keyDown(UP_ARROW )) {
    run.velocityY=-10
  }
  run.velocityY = run.velocityY + 0.8
  inv.collide(run);
 drawSprites();
}