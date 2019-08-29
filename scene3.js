function buildScreen3(){
screen3 = new createjs.Container();


var road = new createjs.Bitmap(preload.getResult("plain"));

var line = new createjs.Bitmap(preload.getResult("line"));
var stop = new createjs.Bitmap(preload.getResult("stop"));
var gear = new createjs.Bitmap(preload.getResult("gear"));
var road1 = new createjs.Bitmap(preload.getResult("high1"));
var white = new createjs.Bitmap(preload.getResult("white"));
var blue = new createjs.Bitmap(preload.getResult("blue"));
var yellow = new createjs.Bitmap(preload.getResult("yellow"));
var green = new createjs.Bitmap(preload.getResult("green"));
var button = new createjs.Bitmap(preload.getResult("forward"));
var board = new createjs.Bitmap(preload.getResult("board"));


cloudGroup = new createjs.Container();
for(var i =0 ; i < 4; i++)
{
var cloud = new createjs.Bitmap(preload.getResult("cloud"));
cloud.x = Math.floor((Math.random() * 250) - 1);
cloud.y = Math.floor((Math.random() * 150) - 1);
cloud.scaleX = 0.5;
cloud.scaleY = 0.5;
cloudGroup.addChild(cloud);
}



  var earthData = new createjs.Text("", "12px Times New Roman", "White");
   earthData.x = 0;
   earthData.y = 30;
   earthData.text = "It is mandatory to stop before the stop line";

road.x = -320;
road.y = 200;
road.scaleX = 1;
road.scaleY = 1;
line.x = 510;
line.y = 200;
stop.x = 485;
stop.y = 150;
gear.x = 0;
gear.y = 180;
button.x = 300;
button.y = 400;
board.x = 300.
board.y = 300;
green.x = 0;
green.y = 280;
green.scaleY = 3;
white.x = 520;
white.y = 200;

blue.x= 580;
blue.y = 0;




yellow.x = 530;
yellow.y = 400;

road1.x = 530;
road1.y = 0;
road1.scaleX = 2;


createjs.Tween.get(cloudGroup, { loop: false })
.call(addSound1)
.wait(6000)
.call(addSound2)
.call(x)
.to({x:700 }, 90000, createjs.Ease.linear)

createjs.Tween.get(gear, {loop: false}).to({x:380}, 8000);
createjs.Tween.get(white, {loop: false}).to({y:-100}, 10000);
createjs.Tween.get(yellow, {loop: false}).to({y:-100}, 15000);
createjs.Tween.get(blue, {loop: false}).to({y:600}, 10000);



var data = {
      images: [preload.getResult("bird")],
      frames: {width:100, height:100, count: 4, spacing: 0, margin: 0},
      animations: {

          fly:{
              frames: [1,2,3,4],
              speed: 0.1
          },

          fly1:{
           frames: [1,2,3,4],
           speed: 0.2
         }

      }
  };

  var spriteSheet = new createjs.SpriteSheet(data);
  var runSprite = new createjs.Sprite(spriteSheet, "bird");


    runSprite.scaleX = 0.8; runSprite.scaleY = 0.8;
    runSprite.x = 0; runSprite.y = 20;
    createjs.Tween.get(runSprite)
      .call(function(){
        runSprite.gotoAndPlay("fly");
      })
      .to({x: 900}, 30000)
      .call(function(){
        runSprite.gotoAndPlay("fly1");
      })


      function addSpeech1(){

          music = createjs.Sound.play("stopspeech", {loop:false});
          music.volume = 20;
      }


      function addSound1(){

          music2 = createjs.Sound.play("run", {loop:false});
          music2.volume = 20;
      }

      function addSound2(){

          music = createjs.Sound.play("brakes", {loop:false});
          music.volume = 20;
      }


      function x()
     {
      addSpeech1();
      createjs.Tween.get(earthData, { loop: false })
      .to({x:200, y:400 }, 3000, createjs.Ease.bounceIn)
     .to({x:300, y:400, scaleX: 2, scaleY: 2}, 3000, createjs.Ease.bounceOut)
     .to({x:100, y:400 }, 3000, createjs.Ease.bounceOut)
     .to({alpha: 0, x:500, y:350}, 3000, createjs.Ease.backIn)
     .wait(7000)
     .call(show)
     }


     function show()
     {
       screen3.addChild(button);
     }

     button.addEventListener("click", function(){

           stage.removeChild(screen3);
           buildScreen4();
           stage.addChild(screen4);
     });








screen3.addChild(road);
screen3.addChild(gear);
screen3.addChild(stop);
screen3.addChild(line);
screen3.addChild(road1);
screen3.addChild(yellow);
screen3.addChild(white);
screen3.addChild(blue);
screen3.addChild(green);
screen3.addChild(cloudGroup);
screen3.addChild(runSprite);
screen3.addChild(earthData);
screen3.addChild(board);

}
