// global variables
var stage;
var preload;
var loadingScreen;
var screen1;
var screen2;
var screen3;
var screen4;
var music;
var cloudGroup;
function init(){

  canvas = document.getElementById("slide");
	stage = new createjs.Stage(canvas);
  createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);
  preloadAssets();
}


function preloadAssets(){
  //loadingScreen - Creating a container and adding the content
  loadingScreen = new createjs.Container();
  var label = new createjs.Text("Visual Effects and Animation", "44px Calibri");
  var label1 = new createjs.Text("Name: Maria Susainathan", "28px Calibri");
  var label2 = new createjs.Text("Student ID: 19480493", "28px Calibri");
  var label3 = new createjs.Text("Topic: Driving in New Zealand", "28px Calibri");
  var label4 = new createjs.Text("Assignment 1 2D Animation", "28px Calibri");

  label.x = 100;
  label.y = 100;

  label1.x = 200;
  label1.y = 200;

  label2.x = 200;
  label2.y = 240;

  label3.x = 200;
  label3.y = 280;

  label4.x = 200;
  label4.y = 320;



  loadingScreen.addChild(label);
  loadingScreen.addChild(label1);
  loadingScreen.addChild(label2);
  loadingScreen.addChild(label3);
  loadingScreen.addChild(label4);
  stage.addChild(loadingScreen);
  //preloading the required files
  preload = new createjs.LoadQueue();
  preload.installPlugin(createjs.Sound);
  preload.loadFile({id:"road",src:"road1.png"});
  preload.loadFile({id:"cyclist",src:"cyclist.png"});
  preload.loadFile({id:"car",src:"c.png"});
  preload.loadFile({id:"city",src:"city.png"});
  preload.loadFile({id:"cloud",src:"cloud.png"});
  preload.loadFile({id:"destination",src:"thunder.mp3"});
  preload.loadFile({id:"race",src:"car.mp3"});
  preload.loadFile({id:"speech1",src:"cyclist.mp3"});
  preload.loadFile({id:"plain",src:"plain.png"});
  preload.loadFile({id:"audio1",src:"new.mp3"});
  preload.loadFile({id:"mountain",src:"mountain.png"});
  preload.loadFile({id:"bell",src:"bike.mp3"});
  preload.loadFile({id:"run",src:"run.mp3"});
  preload.loadFile({id:"real",src:"real.png"});
  preload.loadFile({id:"car1",src:"c1.png"});
  preload.loadFile({id:"stop",src:"stop1.png"});
  preload.loadFile({id:"line",src:"line.png"});
  preload.loadFile({id:"forward",src:"forward.png"});
  preload.loadFile({id:"gear",src:"gear.png"});
  preload.loadFile({id:"wheels",src:"wheels.png"});
  preload.loadFile({id:"high",src:"high.png"});
  preload.loadFile({id:"high1",src:"high1.png"});
  preload.loadFile({id:"white",src:"white.png"});
  preload.loadFile({id:"blue",src:"blue.png"});
  preload.loadFile({id:"yellow",src:"yellow.png"});
  preload.loadFile({id:"green",src:"green.png"});
  preload.loadFile({id:"house",src:"house.png"});
  preload.loadFile({id:"bird",src:"bird.png"});
  preload.loadFile({id:"stopspeech",src:"stopspeech.mp3"});
  preload.loadFile({id:"driving",src:"driving.mp3"});
  preload.loadFile({id:"brakes",src:"brakes.mp3"});
  preload.loadFile({id:"board",src:"board.png"});
  preload.loadFile({id:"night",src:"night.png"});
  preload.loadFile({id:"moon",src:"moon.png"});
  preload.loadFile({id:"speed",src:"speed.png"});
  preload.loadFile({id:"police",src:"police.png"});
  preload.loadFile({id:"right",src:"right.png"});
  preload.loadFile({id:"wrong",src:"wrong.png"});
  preload.loadFile({id:"rightspeed",src:"rightspeed.mp3"});
  preload.loadFile({id:"overspeed",src:"overspeed.mp3"});
  preload.loadFile({id:"siren",src:"siren.mp3"});

  preload.on("complete", preloadComplete, this);
}

function preloadComplete(event){

  console.log("preload finished");
  stage.removeChild(loadingScreen);
  addAudio();
  buildScreen1();
  stage.addChild(screen1);
}

function addAudio(){

    music = createjs.Sound.play("race", {loop:false});
    music.volume = 20;
}
