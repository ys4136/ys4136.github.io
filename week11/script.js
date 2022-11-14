var party = new Array() 
party[0] = new Image()
party[0].src = "https://cdn.glitch.global/ffd19a77-d2f9-4922-8660-ef6e5360b0b0/DANCEPARTY-01.png?v=1668297218576" // set image src property to image path, preloading image in the process
party[1] = new Image()
party[1].src = "https://cdn.glitch.global/ffd19a77-d2f9-4922-8660-ef6e5360b0b0/dance1-01.png?v=1668297213793"
party[2] = new Image()
party[2].src = "https://cdn.glitch.global/ffd19a77-d2f9-4922-8660-ef6e5360b0b0/dance2-01.png?v=1668297215845"

var discoball = new Image();
discoball.src = 'https://cdn.glitch.global/ffd19a77-d2f9-4922-8660-ef6e5360b0b0/disco_ball_rotating_300_wht.gif?v=1668011564345';


var step=0

function slideit(){
if (!document.images)
return
document.getElementById('slide').src = party[step].src
if (step<2)
step++
else
step=0

setTimeout("slideit()",100)
}


var count = 0;
//cricket
var cricket = document.getElementById('cricket')
cricket.play();
//drum
var drum = document.getElementById('drum');
var playPauseBTN1 = document.getElementById('playPauseBTN1');
function playPauseDrum(){
  if (count==0){
    count = 1;
    drum.play();  
    step=0
    slideit();
    cricket.pause();
  
  }else{
    count = 0;
    drum.pause();  
    step=5;
    cricket.play();
  }
}

//hiphop 
var hiphop = document.getElementById('hiphop');
var playPauseBTN2 = document.getElementById('playPauseBTN2');
function playPauseHiphop(){
  if (count==0){
    count = 1;
    hiphop.play();
    step=0
    slideit();
    cricket.pause();
  }else{
    count = 0;
    hiphop.pause();
    step=5;
    cricket.play();
  }
}
//melodicBeat
var melodicBeat = document.getElementById('melodicBeat');
var playPauseBTN3 = document.getElementById('playPauseBTN3');
function playPauseMelodicBeat(){
  if (count==0){
    count = 1;
    melodicBeat.play();
    step=0
    slideit();
    cricket.pause();
  }else{
    count = 0;
    melodicBeat.pause();
    step=5;
    cricket.play();
  }
}
//funk
var funk = document.getElementById('funk');
var playPauseBTN4 = document.getElementById('playPauseBTN4');
function playPauseFunk(){
  if (count==0){
    count = 1;
    funk.play();
    step=0
    slideit();
    cricket.pause();
  }else{
    count = 0;
    funk.pause();
    step=5;
    cricket.play();
  }
}
//electro Pop
var electroPop = document.getElementById('electroPop');
var playPauseBTN5 = document.getElementById('playPauseBTN5');
function playPauseElectroPop(){
  if (count==0){
    count = 1;
    electroPop.play();
    step=0
    slideit();
    cricket.pause();
  }else{
    count = 0;
    electroPop.pause();
    step=5;
    cricket.play();
  }
}
//east coast drum
var eastcoastDrum = document.getElementById('eastcoastDrum');
var playPauseBTN6 = document.getElementById('playPauseBTN6');
function playPauseEastcoastDrum(){
  if (count==0){
    count = 1;
    eastcoastDrum.play();
    step=0
    slideit();
    cricket.pause();
  }else{
    count = 0;
    eastcoastDrum.pause();
    step=5;
    cricket.play();
  }
}



