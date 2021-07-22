
var canvas,bg;
var together;
var cat, tomImg1,tomImg2;
var mouse, jerryImg1,jerryImg2;

function preload() {
    bg = loadImage("garden.png");
    tomImg1= loadAnimation("cat1.png");
    tomImg2=loadAnimation("cat2.png","cat3.png");
    tomImg3= loadAnimation("cat4.png");
    jerryImg1=loadAnimation("mouse1.png");
    jerryImg2= loadAnimation("mouse2.png","mouse3.png");
    jerryImg3=loadAnimation("mouse4.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", tomImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("jerryStanding", jerryImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);

    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", tomImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", jerryImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", tomImg2);
        cat.changeAnimation("tomRunning");
        
        mouse.addAnimation("jerryTeasing", jerryImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerryTeasing");
    }
}