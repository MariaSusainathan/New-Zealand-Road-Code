function buildScreen4(){
screen4 = new createjs.Container();
var night = new createjs.Bitmap(preload.getResult("night"));
var road = new createjs.Bitmap(preload.getResult("plain"));
var moon = new createjs.Bitmap(preload.getResult("moon"));
var speed = new createjs.Bitmap(preload.getResult("speed"));
var wrong = new createjs.Bitmap(preload.getResult("wrong"));
var right = new createjs.Bitmap(preload.getResult("right"));
var button = new createjs.Bitmap(preload.getResult("forward"));
night.x = 0;
night.y = 0;
road.x = 0;
road.y = 350;
road.scaleY = 1.5;
moon.x = 50;
moon.y = 50;
speed.x = 500;
speed.y = 270;
right.x = 200;
right.y = 380;
wrong.x = 430;
wrong.y = 390;
button.x = 300;
button.y = 400;

var screen1Data = new createjs.Text("", "24px Times New Roman", "white");
screen1Data.x = 300;
screen1Data.y = 360;
screen1Data.text = "Speed Limit";


     right.addEventListener("click", function(){

           stage.removeChild(screen4);
           buildScreen5();
           stage.addChild(screen5);
     });

     wrong.addEventListener("click", function(){

           stage.removeChild(screen4);
           buildScreen6();
           stage.addChild(screen6);
     });

     button.addEventListener("click", function(){

           stage.removeChild(screen4);
           buildScreen7();
           stage.addChild(endingScreen);
     });


screen4.addChild(night);
screen4.addChild(road);
screen4.addChild(moon);
screen4.addChild(speed);
screen4.addChild(screen1Data);
screen4.addChild(right);
screen4.addChild(wrong);
screen4.addChild(button);
}
