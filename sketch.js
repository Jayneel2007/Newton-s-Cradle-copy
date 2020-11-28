
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(450,150,750,20)

	bobObject1 = new Bob(150,600,150)
	bobObject2 = new Bob(300,600,150)
	bobObject3 = new Bob(450,600,150)
	bobObject4 = new Bob(600,600,150)
	bobObject5 = new Bob(750,600,150)

	//rope1 = new Rope(bobObject1,roof.body,-BobDiameter*2,0)

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("GREEN");

  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  

  drawSprites();
 
}



