const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;


function preload() {
    backgroundImg = loadImage("sprites/bg.png");
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   
    ground = new Ground(600,height,1200,20);
    box1 = new Box(700,220,70,70);
    box2 = new Box(920,220,70,70);
    log6 = new Log(810,280,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
 

    log7 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log8 = new Log(760,120,150, PI/7);
    log9 = new Log(870,120,150, -PI/7);
log0 = new Log(980,190,150, -PI/7);

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
 
    box1.display();
    box2.display();
    ground.display();
   
    log6.display();

    box3.display();
    box4.display();
   
    log7.display();

    box5.display();
    log8.display();
    log9.display();
   log0.display();

   
}

function mouseDragged(){
    Matter.Body.setPosition(box1.body,{x:mouseX,y:mouseY})
   }
