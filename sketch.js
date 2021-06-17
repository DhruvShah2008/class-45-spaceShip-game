var goodShip,goodShipImg;
var villianShip,villianShipImg;
var backGroundImg;

function preload(){

    goodShipImg = loadImage("images/goodShip.png");    
villianShip = loadImage("images/vs1.png");
backGroundImg = loadImage("images/spaceBg.jpeg")

}

function setup(){
createCanvas(1200,600);

goodShip = createSprite(150,290,50,50);
goodShip.addImage(goodShipImg);
goodShip.scale = 0.2;

villianShip = createSprite(1050,290,50,50);
villianShip.addImage(villianShipImg);
villianShip.scale = 0.2;


}

function draw(){
     background(backGroundImg)

     drawSprites();
}