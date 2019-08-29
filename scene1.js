function buildScreen1(){
  //initialize the container and the assests
   screen1 = new createjs.Container();
   var road = new createjs.Bitmap(preload.getResult("plain"));
   var car = new createjs.Bitmap(preload.getResult("car"));
   var button = new createjs.Bitmap(preload.getResult("forward"));

   road.x = 0;
   road.y = 320;
   car.x = 10;
   car.y = 260;
   road.scaleX = 3;
   button.x = 430;
   button.y = 200;

  //initialize the screendata
  var screen1Data = new createjs.Text("", "30px Times New Roman", "black");
  screen1Data.x = 30;
  screen1Data.y = 200;
  screen1Data.text = "Welcome Everyone !";

  //Tween method for the car
 createjs.Tween.get(car, { loop: false })
 .to({x:900 }, 5000, createjs.Ease.linear)
 .wait(1000)
 .call(inTro)
 .wait(15000)
 .call(show)
//function for the introduction
  function inTro() {
     screen1.addChild(screen1Data);
     addSpeech1();
}

//Intialize the audio
function addSpeech1(){
      music1 = createjs.Sound.play("audio1", {loop:false});
      music1.volume = 20;
  }

  button.addEventListener("click", function(){

        stage.removeChild(screen1);
        buildScreen2();
        stage.addChild(screen2);
  });

function show()
{
  screen1.addChild(button);
}

//Adding the contents into the container
screen1.addChild(road);
screen1.addChild(car);

}
