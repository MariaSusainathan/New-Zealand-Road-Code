function buildScreen5(){
screen5 = new createjs.Container();
var night = new createjs.Bitmap(preload.getResult("night"));
var road = new createjs.Bitmap(preload.getResult("plain"));
var moon = new createjs.Bitmap(preload.getResult("moon"));
var speed = new createjs.Bitmap(preload.getResult("speed"));
var button = new createjs.Bitmap(preload.getResult("forward"));
var car = new createjs.Bitmap(preload.getResult("gear"));

night.x = 0;
night.y = 0;
road.x = 0;
road.y = 350;
road.scaleY = 1.5;
moon.x = 50;
moon.y = 50;
speed.x = 500;
speed.y = 270;
car.x = -150;
car.y = 320;
button.x = 300;
button.y = 400;
addSound1();
createjs.Tween.get(car, {loop: false}).to({x:700}, 15000)
.call(x)
createjs.Tween.get(moon, {loop: false}).to({x:700}, 30000)

  var earthData = new createjs.Text("", "12px Times New Roman", "White");
   earthData.x = 0;
   earthData.y = 30;
   earthData.text = "Always maintain the speed limit";




function x()
{
addSpeech1();
screen5.addChild(earthData);
createjs.Tween.get(earthData, { loop: false })
.to({x:200, y:400 }, 3000, createjs.Ease.bounceIn)
.to({x:300, y:400, scaleX: 2, scaleY: 2}, 3000, createjs.Ease.bounceOut)
.to({x:100, y:400 }, 3000, createjs.Ease.bounceOut)
.to({alpha: 0, x:500, y:350}, 3000, createjs.Ease.backIn)
.wait(5000)
.call(show)
}

function addSpeech1(){

    music = createjs.Sound.play("rightspeed", {loop:false});
    music.volume = 20;
}


     function show()
     {
       screen5.addChild(button);
     }


     button.addEventListener("click", function(){

           stage.removeChild(screen5);
           stage.addChild(screen4);
     });

     function addSound1(){

         music2 = createjs.Sound.play("run", {loop:false});
         music2.volume = 20;
     }


screen5.addChild(night);
screen5.addChild(road);
screen5.addChild(moon);
screen5.addChild(speed);
screen5.addChild(car);


}
