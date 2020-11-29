const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const render = Matter.render;
var paperobj,dustbinObj,groundObj;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	dustbinObj=new dustbinObj (1200,650)
	groundObj=new groundObj(200,450,40)
	paperobj-new paperobj(width/2,670,width,20)
	Engine.run(engine);

  var render= Render.create({
	  element:document.body,
	  engine:engine,
	  options:{
	 width:1200,
	 height:700,
	 wireFrames:false


	  }
  })
  
}

function draw() 
{
  rectMode(CENTER);
  background(230);
  
  dustbinObj.display();
  groundObj.display();
  paperobj.display();



  drawSprites();
 
}

function keyPressed ()
{

 if(keycode===up_Arrow){
 
  matter.body.applyForce(paperObject.body,paperObject.body.postion,{x:85,y:-85})

 }


}
