
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var landscape
var Tree;
var Rock;
var mango1;



function preload()
{

	landscape = loadImage("BackgroundI.jpg");



	
}

function setup() {
	createCanvas(1350,600);


	engine = Engine.create();
	world = engine.world;

	Tree=new tree(1000,400,400,450);
	Rock=new Stone(200,200);
	mango1 = new mango(700,320,70,70);
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(landscape);



  Tree.display();
  Rock.display();
  mango1.display();


  
  drawSprites();
 
}



