const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var Myengine,Myworld,Ground;
var ball;


function setup() {
  createCanvas(400,400);
  Myengine = Engine.create();
  Myworld = Myengine.world;
  
  var Ground_options = {
    isStatic:true
  }
  Ground = Bodies.rectangle(200,390,400,20,Ground_options);
  World.add(Myworld,Ground); 

  var ball_options = {
    restitution:1
  }
  ball = Bodies.circle(200,200,40,ball_options);
  World.add(Myworld,ball);



}

function draw() {
  background("black");  
  Engine.update(Myengine);
  rectMode(CENTER);
  rect(Ground.position.x,Ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,40,40);
}