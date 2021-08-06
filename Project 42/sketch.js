var bgImg;
var spacecraft = [spacecraft1, spacecraft2, spacecraft3, spacecraft4];
var hasDocked = false;
var iss = null;


function preload(){
  bgImg = loadImage("../Docking-undocking/spacebg.jpg");
  iss = loadImage("Docking-undoccking/iss.png");
  spacecraft1 = loadImage("Docking-undocking/spacecraft1.png");
  spacecraft2 = loadImage("Docking-undocking/spacecraft2.png");
  spacecraft3 = loadImage("Docking-undocking/spacecraft3.png");
  spacecraft4 = loadImage("Docking-undocking/spacecraft4.png");
}


function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 200, 50, 50);
  iss.setAnimation("iss.png");

  spacecraft = createSprite(400, 100, 25, 25);
  spacecraft.setAnimation("spacecraft1.png");



  if(!hasDocked){
    spacecraft.x = Math.round(random(10,60));


    if (keyDown("RIGHT_ARROW")) {
      spacecraft.x = spacecraft.x + 2;
      this.image.setAnimation("spacecraft4.png");
    }
    
    if (keyDown("LEFT_ARROW")) {
        spacecraft.x = spacecraft.x - 2;
        this.image.setAnimation("spacecraft3.png");
    }

    if (keyDown("UP_ARROW")) {
      spacecraft.y = spacecraft.y + 2;
      this.image.setAnimation("spacecraft2.png");
    }

    if (keyDown("DOWN_ARROW")) {
      spacecraft.y = spacecraft.y - 2;
      this.image.setAnimation("spacecraft1.png");
    }

}

if(spacecraft.isTouching(iss)){
  stroke(1);
  textSize(24);
  textColor("White");
  text("Docking Successful!", 400, 100);
  
  }
  
}

function draw() {
  background(bgImg);  
  drawSprites();
}