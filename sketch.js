var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	ground = new Ground(20);

	paper = new Paper(60, 500, 30);

	Engine.run(engine);
    dustbin  = new Dustbin(650, 590, 150, 180, 10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  stroke("grey");
  paper.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x:30,y:-50} );
	}
}



