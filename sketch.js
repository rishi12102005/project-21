var wall,thickness ;
var bullet,weight,speed;




function setup(){
  createCanvas(2000,2000);
  thickness = random(22,83);

  bullet = createSprite(50,1000,20,5);
  bullet.shapeColor = "white";
  wall = createSprite(1500,1000,thickness,height/2);

  speed = random(223,321);
  weight = random(30,52)

 

}


 

function draw() {
  background("black");  

  bullet.velocityX = speed;
var Damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

if(Damage<=10){
  wall.shapeColor="Green"
}
else if(Damage>10){
  wall.shapeColor="red"
}

if(bullet.isTouching(wall)){
  bullet.velocityX = 0;
}
  drawSprites();
}
