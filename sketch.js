const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var spider
var back
var bg = "sprites/bg1.png";
var backgroundImg
var FRONT=0
var gameState= FRONT
var SERVE=1
// venom
var LEVEL1=2
// sand man 
var LEVEL2=3
// lizad man 
var LEVEL3=4
// rhino 
var LEVEL4=5
var END =6

var press,press1 ;
var loading;

function preload() {
 
    getBackgroundImg();
    back=loadImage("sprites/c5.png")
    
}

function setup(){
    var canvas = createCanvas(1200,500);
    engine = Engine.create();
    world = engine.world;

    ground=new Ground(600,470,1200,30)

    spider=new Spider(300,200,200,200)
    
    enemy=new Enemy(900,200,200,200)

    loading= new Load(700,430,1000,1000)
    
     press = createButton('Press');
     press.position(1050,350);

     press1 = createButton('Play');
     press1.position(1000,100);     

}

function draw(){
  
    //changing the game state to Serve
     press.mousePressed(()=>{
      
    gameState= SERVE 

      
  }); 

    //changing the game state to "Level1" mode
    press1.mousePressed(()=>{
      
        gameState= LEVEL1
      }); 


     if(gameState===FRONT){
     
     background(back);

     press.show();
     press1.hide();

    
    loading.display();
    
     }


      if (gameState===SERVE){
    
        background("yellow");
    
        press.hide();
        press1.show();

        textFont("Bodoni MT Black")
        textSize(35)
        fill("red")
        text("Read all the instructions carefully before playing the Game:-",30,70);
        


      }
      
      
if (gameState===LEVEL1){

    if(backgroundImg)
        background(backgroundImg);
        

        spider.display();
        ground.display(); 
        enemy.display(); 

}
      
       
Engine.update(engine);


  
}

function keyPressed(){

   //if(keyCode===32){

//}  

if(keyCode===49){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y})
spider.animation=loadAnimation("sprites/w4.png","sprites/w5.png","sprites/w6.png","sprites/w7.png") 

}

if(keyCode===50){

    Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y})
    spider.animation=loadAnimation("sprites/p1.png","sprites/p2.png","sprites/p3.png","sprites/p4.png","sprites/p5.png","sprites/p6.png","sprites/p7.png","sprites/p8.png","sprites/p9.png","sprites/p10.png")   
      
}

if(keyCode===51){

    Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y})
    spider.animation=loadAnimation("sprites/k1.png","sprites/k2.png","sprites/k3.png","sprites/k4.png","sprites/k5.png","sprites/k6.png","sprites/k7.png","sprites/k8.png","sprites/k9.png","sprites/k10.png")  
  
}

if(keyCode===52){

    Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y})
    spider.animation=loadAnimation("sprites/ki1.png","sprites/ki2.png","sprites/ki3.png")
  
}



if(keyCode===38){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y-20})
spider.animation=loadAnimation("sprites/s3.png")


}


if(keyCode===40){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x,y:spider.body.position.y+20})
spider.animation=loadAnimation("sprites/s1.png")

}

if(keyCode===39){

Matter.Body.setPosition(spider.body,{x:spider.body.position.x+20,y:spider.body.position.y})
spider.animation=loadAnimation("sprites/swa1.png","sprites/swa2.png","sprites/swa3.png","sprites/swa4.png")


}

if(keyCode===37){

    Matter.Body.setPosition(spider.body,{x:spider.body.position.x-20,y:spider.body.position.y})
    spider.animation=loadAnimation("sprites/e3.png") 
    
 }

 if(keyCode===81){
     
   // lizard man images 
    Matter.Body.setPosition(enemy.body,{x:enemy.body.position.x,y:enemy.body.position.y})
   enemy.animation0=loadAnimation("sprites/l1.png") 

}

if(keyCode===65){
  // venom images 
   Matter.Body.setPosition(enemy.body,{x:enemy.body.position.x,y:enemy.body.position.y})
   enemy.animation0=loadAnimation("sprites/vw1.png","sprites/vw2.png","sprites/vw3.png","sprites/vw4.png","sprites/vw5.png","sprites/vw6.png","sprites/vw7.png","sprites/vw8.png","sprites/vw9.png","sprites/vw10.png","sprites/vw11.png","sprites/vw12.png") 

}   

if(keyCode===90){

// sand man images 
Matter.Body.setPosition(enemy.body,{x:enemy.body.position.x,y:enemy.body.position.y})
enemy.animation0=loadAnimation("sprites/sr1.png") 

       
}

if(keyCode===17){

// rhino images 
   Matter.Body.setPosition(enemy.body,{x:enemy.body.position.x,y:enemy.body.position.y})
   enemy.animation0=loadAnimation("sprites/r1.png") 


}   

}



async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=6 && hour<=19){
        bg = "sprites/b2.png";
    }
    else{
        bg = "sprites/b3.png";
    }

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}