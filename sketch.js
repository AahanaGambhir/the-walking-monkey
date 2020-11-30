
var monkey , monkey_running
var banana ,bananaImage,bananaGroup, obstacle, obstacleImage, stone
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 600);
  monkey = createSprite(80, 500, 20, 80)
  monkey.addAnimation("moving", monkey_running)
  monkey.scale = 0.15;
  
  ground = createSprite(300, 565, 600, 15);
  ground.velocityX = 2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  
  
}



function draw() {
background(255)
  
  if(keyDown("space")  && monkey.y > 450) {
    monkey.velocityY = -15
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  
  if(ground.x > 0) {
    ground.x = width/2;
  }
  
  monkey.collide(ground);
  
  food();
  obstacle();
  
  
  
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("Survival Time : " + survivalTime, 300, 50)
  
  
  
  drawSprites();
}

function food() {
  if(frameCount % 80 === 0){
  banana = createSprite(600, 400, 15, 15);
  banana.y = Math.round(random(150, 200));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 500;
  bananaGroup.add(banana);
  }
}

function obstacle(){
  if(frameCount % 300 === 0){
    stone = createSprite(600, 520, 15, 15);
    stone.x = Math.round(random(400, 500));
    stone.addImage(obstacleImage)
    stone.scale = 0.2;
    stone.lifetime = 200;
    stone.velocityX = -2
  }
  
}



