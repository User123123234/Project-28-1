
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
var tree, boy;
var bird, sling;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bird=new Bird(100,500)
sling=new SlingShot(bird.body,{x:100, y:500})
tree= new Tree(600,350)
boy= new Boy(100,500)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 tree.x = 600;
 tree.y = 350;





boy.display()
tree.display()
bird.display()
sling.display()

mouseDragged
mouseReleased

  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sling.fly();
}


