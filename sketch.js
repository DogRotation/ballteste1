var teste;
function setup() {
  createCanvas(400,400);
  teste = createSprite(200,200,20,20);
}

function draw() 
{
  background(30);
drawSprites();
if(keyIsDown(UP_ARROW)){
teste.y = teste.y -2;
}
if(keyIsDown(DOWN_ARROW)){
 teste.y = teste.y + 2; 
}
if(keyIsDown(LEFT_ARROW)){
teste.x = teste.x -2;  
}
if(keyIsDown(RIGHT_ARROW)){
teste.x = teste.x + 2; 
}
}




