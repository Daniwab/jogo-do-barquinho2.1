var ship, ship_img
var sea, sea_img
function preload(){
  sea_img = loadImage("sea.png")
  ship_img = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png") 
}
function setup(){
  createCanvas(400,400);
  sea = createSprite(400, 100, 400, 80)
  sea.addImage(sea_img)
  ship = createSprite(150, 200, 50, 50)
  ship.addAnimation("barco", ship_img)
  ship.scale = 0.3
  
}

function draw() {
  background("blue");
    drawSprites();
    //fundo infinto
    if(sea.x <= 0){
      sea.x = width/2*3 
      
    }
   
}
