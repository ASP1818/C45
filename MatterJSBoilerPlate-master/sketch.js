const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var girl_1;
var termpoline_1;

function preload()
{
	girl_1 = loadImage("girl_jump.png");
    termpoline_1 = loadImage("trampoline.jpg");
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	girl = createSprite(400, 330, 10, 10);
	girl.addImage("gril", girl_1);
	girl.scale = 0.75;

	trempoline = createSprite(400, 600, 20, 20);
	trempoline.addImage("trampoline", termpoline_1);
	trempoline.scale = 0.20;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



