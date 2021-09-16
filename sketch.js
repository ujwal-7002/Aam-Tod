const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var tree;
var stone;
var mango1 ,mango2, mango3, mango4 , mango5;
var Cons; 
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
  mango1 = new mango(1000,150,20); 
  mango2= new mango(1100,180,20);
  mango3= new mango(1050, 100,20);
  mango4= new mango(850, 250,20);
  mango5= new mango(1150, 250,20);
  Cons= new launcher(stone.body,{x:243,y:420});
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
  Cons.display();  
  drawSprites()
  detectCollision(stone,mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body, { x: 200, y: 200});

}
function mouseReleased() {
  Cons.fly();
}

function detectCollision(lstone,lmango){
  mangoBodyPosition-lmango.body.position
  stoneBodyPosition=lstone.body.position

  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
    if(distance<-lmango.r+lstone.r)
    {
      Matter.Body.setStatic(lmango.body,false);
    }
}