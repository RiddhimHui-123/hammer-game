
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hammer=new Hammer(380,1000,20,30)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
 
  Engine.update(engine);

hammer.display()

  drawSprites();
 

}



