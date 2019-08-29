function buildScreen6(){
screen6 = new createjs.Container();
var night = new createjs.Bitmap(preload.getResult("night"));
var road = new createjs.Bitmap(preload.getResult("plain"));
var moon = new createjs.Bitmap(preload.getResult("moon"));
var speed = new createjs.Bitmap(preload.getResult("speed"));
var police = new createjs.Bitmap(preload.getResult("police"));
var car = new createjs.Bitmap(preload.getResult("gear"));
var button = new createjs.Bitmap(preload.getResult("forward"));

night.x = 0;
night.y = 0;
road.x = 0;
road.y = 350;
road.scaleY = 1.5;
moon.x = 50;
moon.y = 50;
police.x = -500;
police.y = 320;
speed.x = 500;
speed.y = 270;
car.x = 0;
car.y = 340;
button.x = 300;
button.y = 400;


var earthData = new createjs.Text("", "12px Times New Roman", "White");
 earthData.x = 0;
 earthData.y = 30;
 earthData.text = "Overspeeding on the road is a crime";

createjs.Tween.get(moon, {loop: false}).to({x:500}, 30000)
addSound1();
createjs.Tween.get(car, {loop: false}).to({x:500}, 5000)
.wait(2000)
createjs.Tween.get(police, {loop: false}).to({x:500}, 5000)
.call(x)

function x()
{
addSpeech1();
screen6.addChild(earthData);
createjs.Tween.get(earthData, { loop: false })
.to({x:200, y:400 }, 3000, createjs.Ease.bounceIn)
.to({x:300, y:400, scaleX: 2, scaleY: 2}, 3000, createjs.Ease.bounceOut)
.to({x:100, y:400 }, 3000, createjs.Ease.bounceOut)
.to({alpha: 0, x:500, y:350}, 3000, createjs.Ease.backIn)
.wait(7000)
.call(show)
}


function addSpeech1(){

    music = createjs.Sound.play("overspeed", {loop:false});
    music.volume = 20;
}

function addSound1(){

    music = createjs.Sound.play("siren", {loop:false});
    music.volume = 20;
}


     function show()
     {
       screen6.addChild(button);
     }


     button.addEventListener("click", function(){

           stage.removeChild(screen6);
           stage.addChild(screen4);
     });


screen6.addChild(night);
screen6.addChild(road);
screen6.addChild(moon);
screen6.addChild(police);
screen6.addChild(speed);
screen6.addChild(car);


}
