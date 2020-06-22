var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var rubberband;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	t = false;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	ground = new Ground(20);

	paper = new Paper(100, 100, 30);

	Engine.run(engine);
	dustbin  = new Dustbin(650, 590, 150, 180, 10);
	rubberband = new Rubberband(paper.body, {x:150, y:300});
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  stroke("grey");
  ground.display();
  dustbin.display();
  if(t){
	Matter.Body.setPosition(paper.body, {x:mouseX, y:mouseY});
	}
	rubberband.display();
	paper.display();
}
function mouseDragged(){

t = true;

}
function mouseReleased(){
 t = false;
 rubberband.fly();
}



