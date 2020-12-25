const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground3;

var particles=[];
var plinkos=[];
var divisons=[];
var divisonHeight=300;
function preload(){


}

function setup() {
  createCanvas(500,850);
  engine = Engine.create();
    world = engine.world;
    
  ground3 = new Ground(750, 850, 1500, 50)

  for(var i =0;i<=width;i=i+80){
divisons.push(new Divison(i,height-divisonHeight/2,20,divisonHeight))
  }


  for (var j = 40; j <= width; j = j + 50){
    plinkos.push(new Plinko(j, 75));
  }
  for (var j = 15; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 155));
  }
  for (var j = 30; j <= width; j = j + 50){
    plinkos.push(new Plinko(j,235));
  }
  for (var j = 25; j <= width - 10; j = j + 50){
    plinkos.push(new Plinko(j, 315));
  }

  
}

function draw() {
  background("blue");
  Engine.update(engine);
  if (frameCount % 60 === 0){
    particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
  }
  //fill(rgb(135, 205, 236));
  ground3.display();
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
  
for (var i=0;i<divisons.length;i++){
  divisons[i].display();
}
for (var j = 0; j < plinkos.length; j++){
  plinkos[j].display();
}
  
}




