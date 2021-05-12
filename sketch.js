var canvas;
var music;
var edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
surface1= createSprite(100,550,180,30)
surface1.shapeColor='red'
surface2= createSprite(300,550,180,30)
surface2.shapeColor='yellow'
surface3= createSprite(500,550,180,30)
surface3.shapeColor='blue'
surface4= createSprite(700,550,180,30)
surface4.shapeColor='purple'

ball=createSprite(random(20,750),100,40,40)

ball.velocityX=6
ball.velocityY=9
    //create 4 different surfaces
edges=createEdgeSprites();


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    ball.bounceOff(edges)

drawSprites();

if(surface1.isTouching(ball)&&ball.bounceOff(surface1)){
    ball.shapeColor='red'

}
if(surface2.isTouching(ball)&&ball.bounceOff(surface2)){
    ball.shapeColor='yellow'

}if(surface3.isTouching(ball)&&ball.bounceOff(surface3)){
    ball.shapeColor='blue'

}
if(surface4.isTouching(ball)&&ball.bounceOff(surface4)){
    ball.shapeColor='purple'

}





    //add condition to check if box touching surface and make it box
}
