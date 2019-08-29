function buildScreen2(){
screen2 = new createjs.Container();
var road = new createjs.Bitmap(preload.getResult("road"));
var cyclist = new createjs.Bitmap(preload.getResult("cyclist"));
var car = new createjs.Bitmap(preload.getResult("car"));
var mountain = new createjs.Bitmap(preload.getResult("mountain"));
var car1 = new createjs.Bitmap(preload.getResult("car1"));
var button = new createjs.Bitmap(preload.getResult("forward"));
cloudGroup = new createjs.Container();

mountain.x = 0;
mountain.y = 200;

road.x = 0;
road.y = 0;

car1.x = 700;
car1.y = 340;

button.x = 430;
button.y = 200;

for(var i =0 ; i < 7; i++)
{
var cloud = new createjs.Bitmap(preload.getResult("cloud"));
cloud.x = Math.floor((Math.random() * 250) - 1);
cloud.y = Math.floor((Math.random() * 150) - 1);
cloudGroup.addChild(cloud);
}


  cyclist.x = 0;
  cyclist.y = 300;
  cyclist.regX = 10;
  cyclist.regY = 20;
  car.x = 0;
  car.y = 300;


  var earthData = new createjs.Text("", "12px Times New Roman", "White");
   earthData.x = 0;
   earthData.y = 30;
   earthData.text = "This is an example of how to give way to cyclist on road";

   function x()
 {
   addSpeech1();
   createjs.Tween.get(earthData, { loop: false })
   .to({x:300 }, 3000, createjs.Ease.bounceIn)
  .to({x:100, y:400, scaleX: 2, scaleY: 2}, 3000, createjs.Ease.bounceOut)
  .to({x:100, y:400 }, 3000, createjs.Ease.bounceOut)
  .to({alpha: 0, x:500, y:350}, 3000, createjs.Ease.backIn)
  .wait(10000)
  .call(show)
 }


  createjs.Tween.get(car1, { loop: false })
  .to({x:-200 }, 8000, createjs.Ease.linear)



 createjs.Tween.get(cloudGroup, { loop: false })
 .to({x:700 }, 80000, createjs.Ease.linear)

   createjs.Tween.get(car, { loop: false })
   .call(addSound1)
   .to({x:300 }, 8000, createjs.Ease.linear)
   .to({y:330 }, 3000, createjs.Ease.linear)
   .call(addSound1)
   .to({x:900 }, 5000, createjs.Ease.linear)



   var cycleanimation = createjs.Tween.get(cyclist, { loop: false, stop:true })
   .to({x:300 }, 9000, createjs.Ease.linear)
   .call(addSound2)
   .to({y:320 }, 1000, createjs.Ease.linear)
   .to({x:900 }, 5000, createjs.Ease.linear)
   .call(x)


   function show()
   {
     screen2.addChild(button);
   }




screen2.addChild(road);
screen2.addChild(cyclist);
screen2.addChild(car);
screen2.addChild(earthData);
screen2.addChild(cloudGroup);
screen2.addChild(mountain);
screen2.addChild(car1);


 function addSpeech1(){

     music = createjs.Sound.play("speech1", {loop:false});
     music.volume = 20;
 }


 function addSound1(){

     music2 = createjs.Sound.play("run", {loop:false});
     music2.volume = 20;
 }

 function addSound2(){

     music = createjs.Sound.play("bell", {loop:false});
     music.volume = 20;
 }

 button.addEventListener("click", function(){

       stage.removeChild(screen2);
       buildScreen3();
       stage.addChild(screen3);
 });


}
