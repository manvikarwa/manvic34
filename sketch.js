const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var b1,b2,b3,b4,b5,b6,b7,b8,b9,b10;
var ball;
var rope;

function setup(){
 var canvas= createCanvas(1200,400);
 engine = Engine.create();
 world = engine.world;

 ground = new Ground(600,height,1200,20);
 b1 = new Box(700,100,70,70);
 b2 = new Box(700,100,70,70);
 b3 = new Box(700,100,70,70);
 b4 = new Box(800,100,70,70);
 b5 = new Box(800,100,70,70);
 b6 = new Box(800,100,70,70);
 b7 = new Box(700,100,70,70);
 b8 = new Box(700,100,70,70);
 b9 = new Box(800,100,70,70);
 b10 = new Box(800,100,70,70);
 ball = new Ball(200,200,70,70);
 rope = new Rope(ball.body,{x:600, y:20});
}

function draw(){
 background("lightblue");
 Engine.update(engine);
 ground.display();
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();
 b10.display();
 ball.display();
 rope.display();



}

function mouseDragged(){
    Matter.body.setPosition(ball.body,{x:mouseX, y: mouseY});   
}

