
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	
	var tree,ground,mango1,mango2,mango3,mango4,mango5,mango6,stone;

	ground = new BaseClass(600,height,1200,20);
    
   tree = new Mango(700,300,30,70);
    mango1= new Mango(700,280,20,20);
    mango2= new Mango(690,290,20,20);
	mango3= new Mango(680,280,20,20);
	mango4 = new Mango(670,270,20,20);
    mango5 = new Mango(660,260,20,20);
    mango6 = new Mango(650,250,20,20);

    stone =  new Stone(100,100);

    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  mango1.display();
  tree.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
 
}

function mouseDragged(){
	Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
   
   }
   
   
   function mouseReleased(){
	   slingShot.fly();
   


