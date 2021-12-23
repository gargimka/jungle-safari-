//var bg , bg2, bg3 ;
var bgimg , bg2img, bg3img ;
//var mango, pineapple,grapes,custard_apple,banana,apple;
var mangoimg, pineappleimg,grapesimg,custard_appleimg,bananaimg,appleimg;
//var flower_1, flower_2,flower_3,flower_4;
var flower_1img, flower_2img,flower_3img,flower_4img;
var score;
//var item1,item2,item3,item4;

function preload(){
bgimg=loadImage("images/background.jpg");
bg2img=loadImage ("images/background_2.jpg");
bg3img=loadImage("images/level_1.jpg");
mangoimg=loadImage("images/mango.png");
pineappleimg=loadImage("images/pineapple.png")
grapes=loadImage("images/grapes.png");
custard_appleimg=loadImage("images/custard_apple.png");
bananaimg=loadImage("images/banana.png");
appleimg=loadImage("images/apple.png");
flower_1img=loadImage("images/flower_1.png");
flower_2img=loadImage("images/flower_2.png");
flower_3img=loadImage("images/flower_3.png");
flower_4img=loadImage("images/flower_4.png");
lion=loadSound("images/lion.mp3");
playimg=loadImage("images/play.png");
level=loadImage("images/level.png");
level2=loadImage("images/level_2.png");
level3=loadImage("images/level_3.png");
level4=loadImage("images/level_4.png");
level5=loadImage("images/level_5.png");
level6=loadImage("images/level_6.png");
level7=loadImage("images/level_7.png");
level8=loadImage("images/level_8.png");
level9=loadImage("images/level_9.png");

leader=loadImage("images/leader.png");
animal=loadImage("images/ani.png")
heart=loadImage("images/heart.png");
points=loadImage("images/points.png");

monkey=loadImage("images/monkey.png");
monkey_1=loadImage("images/monkey_1.png");


}

function setup(){
  createCanvas(900,700);
  background(0);
  
  back=createSprite(450,350);
  back.addImage(bgimg);
  back.scale=0.18;

  
  
  play=createSprite(450,600,20,20);
  play.addImage(playimg);

  level_1 = createSprite(50,650,30,30);
  level_1.addImage(level);
  level_1.scale=0.2;
  level_1.visible=false;

  level_2=createSprite(150,650,30,30);
  level_2.addImage(level2);
  level_2.scale=0.2;
  level_2.visible=false;

  level_3=createSprite(250,650,30,30);
  level_3.addImage(level3);
  level_3.scale=0.2;
  level_3.visible=false;

  
  level_4=createSprite(350,650,30,30);
  level_4.addImage(level4);
  level_4.scale=0.2;
  level_4.visible=false;

  level_5=createSprite(450,650,30,30);
  level_5.addImage(level5);
  level_5.scale=0.2;
  level_5.visible=false;

  level_6=createSprite(550,650,30,30);
  level_6.addImage(level6);
  level_6.scale=0.2;
  level_6.visible=false;

  level_7=createSprite(650,650,30,30);
  level_7.addImage(level7);
  level_7.scale=0.2;
  level_7.visible=false;

  level_8=createSprite(750,650,30,30);
  level_8.addImage(level8);
  level_8.scale=0.2;
  level_8.visible=false;

  level_9=createSprite(850,650,30,30);
  level_9.addImage(level9);
  level_9.scale=0.2;
  level_9.visible=false;

  lead=createSprite(230,50,20,20)
  lead.addImage(leader);
  lead.visible=false;

  ani=createSprite(550,50,20,20);
  ani.addImage(animal);
  ani.visible=false;

  hearts=createSprite(700,50,20,20);
  hearts.addImage(heart);
  hearts.visible=false;

  point=createSprite(800,50,20,20);
  point.addImage(points);
  point.visible=false;  


  monkeyimg=createSprite(700,40,30,30);
  monkeyimg.addImage(monkey);
  monkeyimg.scale=0.3
  monkeyimg.visible=false;

  mango=createSprite(10,130,20,20);
  mango.addImage(mangoimg);
  mango.scale=0.15;
  mango.visible=false;

  grape=createSprite(40,190,20,20);
  grape.addImage(grapes);
  grape.scale=0.03;
  grape.visible=false;

  pineapple=createSprite(10,250,20,20);
  pineapple.addImage(pineappleimg);
  pineapple.scale=0.3;
  pineapple.visible=false;
  
  custard=createSprite(40,310,20,20);
  custard.addImage(custard_appleimg);
  custard.scale=0.4;
  custard.visible=false;

  apple=createSprite(10,370,20,20);
  apple.addImage(appleimg);
  apple.scale=0.05;
  apple.visible=false;

  banana=createSprite(40,430,20,20);
  banana.addImage(bananaimg);
  banana.scale=0.25;
  banana.visible=false;
 
  flow=createSprite(10,490,20,20);
  flow.addImage(flower_1img);
  flow.scale=0.15;
  flow.visible=false;

  flow2=createSprite(40,550,20,20);
  flow2.addImage(flower_2img);
  flow2.scale=0.05;
  flow2.visible=false;

  flow3=createSprite(10,610,20,20);
  flow3.addImage(flower_3img);
  flow3.scale=0.25;
  flow3.visible=false;

  flow4=createSprite(40,670,20,20);
  flow4.addImage(flower_4img);
  flow4.scale=0.05;
  flow4.visible=false;

  score=0;
 
}

function draw(){

  if(mousePressedOver(play)){
    Sound1();
    play.destroy()
    back.addImage(bg2img);
    level_1.visible=true;
    level_2.visible=true;
    level_3.visible=true;
    level_4.visible=true;
    level_5.visible=true;
    level_6.visible=true;
    level_7.visible=true;
    level_8.visible=true;
    level_9.visible=true;
    ani.visible=true;
    hearts.visible=true;
    point.visible=true;
    lead.visible=true;

  }

  if (mousePressedOver(level_1)){
     console.log("123");

     level_1.destroy();
     level_2.destroy();
     level_3.destroy();
     level_4.destroy();
     level_5.destroy();
     level_6.destroy();
     level_7.destroy();
     level_8.destroy();
     level_9.destroy();
     ani.destroy();
     hearts.destroy();
     point.destroy();
     lead.destroy();

     back.addImage(bg3img);
     back.scale=0.75;

     block=createSprite(450,100,900,20);
     block.shapeColor="green";
     
     item1=createSprite(301,50,10,10);
     item1.addImage(flower_3img);
     item1.scale=0.25

     item2=createSprite(401,50,10,10);
     item2.addImage(appleimg);
     item2.scale=0.05

     item3=createSprite(501,53,10,10);
     item3.addImage(bananaimg);
     item3.scale=0.25

     item4=createSprite(601,50,10,10);
     item4.addImage(mangoimg);
     item4.scale=0.15
     
     monkeyimg.visible=true;
     monkeyimg.velocityX=Math.random(-5,5);
     monkeyimg.velocityY=Math.random(-5,5);
  

     if(World.frameCount % 10===0){
      
     console.log("hello");

     mango.visible=true;
     mango.velocityX=2;

     grape.visible=true;
     grape.velocityX=2

     pineapple.visible=true;
     pineapple.velocityX=2;

     custard.visible=true;
     custard.velocityX=2;

     apple.visible=true;
     apple.velocityX=2;

     banana.visible=true;
     banana.velocityX=2;

     flow.visible=true;
     flow.velocityX=2;

     flow2.visible=true;
     flow2.velocityX=2;

     flow3.visible=true;
     flow3.velocityX=2;

     flow4.visible=true;
     flow4.velocityX=2;
     }
      if(mousePressedOver(flow3)){
        item1.visible=false
        flow3.destroy();
        score=score+1;
      }

      if(mousePressedOver(apple)){
        item2.visible=false
        apple.destroy();
        score=score+1;
      }
      if(mousePressedOver(banana)){
        item3.visible=false
        banana.destroy();
        score=score+1;
      }
      if(mousePressedOver(mango)){
        item4.visible=false
        mango.destroy();
        score=score+1;
      }




  }


  drawSprites();
  textSize(25);
  fill("black");
  text("Score:"+score,50,50);

}


function Sound1(){
  lion.play();
  
}

