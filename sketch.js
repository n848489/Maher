const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



var pig2;
var box3;
var box4;




var bird1;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

   
    ground = new Ground(600,height,1200,20)
    
    pig2= new Pig (810,220)
    box3= new Box(700,240,70,70)
    box4= new Box (920,240,70,70)
   
    bird1= new Bird (100,100)
}

function draw(){
    background(0);
    Engine.update(engine);
    
    ground.display();
   
    pig2.display();
    box3.display();
    box4.display();
    
    bird1.display();
}