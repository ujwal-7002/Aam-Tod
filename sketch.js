const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var tree;
var stone;
var mango1 ,mango2, mango3, mango4 , mango5; 
function preload()
{
	boy=loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(1300, 600);

   engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	tree = new Tree(600,500);
	ground = new Ground(width/2, 600, width, 20);
  stone = new Stone(200,200);
  mango1 = new mango(900,300); 
  mango2= new mango(1000,300);
  mango3= new mango(950, 250);
  mango4= new mango(900, 350);
  mango5= new mango(950, 350)
	
Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(220);
   image(boy ,200,340,200,300);
  ground.display();
  tree.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  drawSprites();
}



