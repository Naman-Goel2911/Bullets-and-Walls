var wall, thickness;
var bullet, speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);

  thickness = random(22, 83);

  wall = createSprite(1500, 200, thickness, 200);

  speed = random(223, 321);
  weight = random(30, 52); 

  bullet = createSprite(50, 200, 20, 10);
  bullet.velocityX = speed;

  damage = Math.round(0.5*weight*speed*speed/(thickness*thickness*thickness));
}

function draw() {
  background(0, 0, 0);  

  wall.shapeColor = color(80, 80, 80);
  bullet.shapeColor = color("white");


  bullet.collide(wall);

  if(damage > 0 && damage < 10)
  {
     bullet.shapeColor = color("green");
  }

  else if(damage >= 10)
  {
      bullet.shapeColor = color("red");
  }

  drawSprites();

  textSize(25);
  fill("white");
  text("Damage = " + damage, 650, 200);
}