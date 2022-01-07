const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var score= 0;

var dog,bone;
var dogImg,boneImg;
var ground, invisibleGround;
var bonesGroup;

function preload(){
  dogImg = loadImage("dog.jpg");
  boneImg = loadImage("bone.jpg");
}


function setup() {
  createCanvas(400,400);

  dog = createSprite(550,130,20,50);
  dog.addImage(dogImg);
  dog.scale =0.4;
  
  ground = createSprite(200,180,800,20);
  ground.shapeColor="brown";
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  bonesGroup = new Group();

  engine = Engine.create();
  world = engine.world;
  
}


function draw() {
  background(51);
  Engine.update(engine);
  textSize(23);
  text("Score: " + score,30,40);
  
    ground.velocityX = 6;
  
    if (ground.x > 390){
      ground.x = ground.width/2;
    }
  
    dog.collide(invisibleGround);
    spawnBones();
    if(bonesGroup.isTouching(dog)){
    textSize(25);
    text("Bone eaten :) ", 350,40);
    score = score + Math.round(getFrameRate()/60);
    }
    drawSprites();
}

function spawnBones() {
  //write code here to spawn the bones
  if (frameCount % 90 === 0) {
    bone = createSprite(30,160,40,10);
    bone.addImage(boneImg);
    bone.scale =0.1 ;
    bone.velocityX = 3;
    
     //assign lifetime to the variable
    bone.lifetime = 150;
    
    bonesGroup.add(bone);
  }
}
