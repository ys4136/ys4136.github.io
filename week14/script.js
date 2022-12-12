//game
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const startButton = document.querySelector('.startButton');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;
ctx.font = "50px Ariel";
let gameSpeed = 1;
let gameOver = false;
//retire
let retire = false;
let countdown = 0;


let canvasPosition = canvas.getBoundingClientRect();
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
   click: false,
};

canvas.addEventListener("mousemove", function (e) {
  mouse.click = true;
  mouse.x = e.x - canvasPosition.left;
  mouse.y = e.y - canvasPosition.top;
});
window.addEventListener("mouseup", function (e) {
mouse.click = false;
});

const playerLeft = new Image();
playerLeft.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEFLEFT-01.png?v=1670782102111";
const playerRight = new Image();
playerRight.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEFright-01.png?v=1670783219034";

class Player {
  constructor() {
    this.x = canvas.width;
    this.y = canvas.height / 2;
    this.radius = 50;
    this.angle = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.frame = 0;
    this.spriteWidth = 446;
    this.spriteHeight = 355;
  }

  update() {
    const dx = this.x - mouse.x;
    const dy = this.y - mouse.y;
    let theta = Math.atan2(dy,dx);
    this.angle = theta;
    if (mouse.x != this.x) {
      this.x -= dx / 40; //movement speed
    }
    if (mouse.y != this.y) {
      this.y -= dy / 40; //movement speed
    }
  }
  draw() {
   // if (mouse.click) {
   //   ctx.lineWidth = 0.2;
    //  ctx.beginPath();
    //  ctx.moveTo(this.x, this.y);
    //  ctx.lineTo(mouse.x, mouse.y);
   //   ctx.stroke();
  //  }
   // ctx.fillStyle = "orange";
   // ctx.beginPath();
   // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
   // ctx.fill();
  // ctx.closePath();
 //  ctx.fillRect(this.x,this.y,this.radius,10); //
    
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    
    if (this.x >= mouse.x){
    ctx.drawImage(playerLeft,this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 75, 0 - 62, this.spriteWidth/2.5, this.spriteHeight/2.5);
    }else{
      ctx.drawImage(playerRight,this.frameX * this.spriteWidth, this.frameY * this.spriteHeight, this.spriteWidth, this.spriteHeight, 0 - 75, 0 - 62, this.spriteWidth/2.5, this.spriteHeight/2.5);
    }
    ctx.restore();
    }
}

const player = new Player();

//sound sources
const bubblePop1 = document.createElement('audio');
bubblePop1.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/chewing_sound1.wav?v=1670774341931";
const bubblePop2 = document.createElement('audio');
bubblePop2.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/chewing_sound2.mp3?v=1670774598397";

//singer fish
const bubblesArray = [];
const bubbleImage = new Image();
bubbleImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEF-03.png?v=1670782046331";
class Bubble {
  constructor() {
    this.x = canvas.width + 50;
    this.y = Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false; //count each bubble once
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'; // sound (not working)
  }
  update() {
    this.x -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(bubbleImage,this.x - 68, this.y - 62, this.radius * 2.5, this.radius * 2.5);
  }
}

function handleBubbles() {
  if (gameFrame % 70 == 0 && !(gameFrame % 140 ==0 || gameFrame % 210 ==0|| gameFrame%350==0)) {
    bubblesArray.push(new Bubble());
  }
  for (let i = 0; i < bubblesArray.length; i++) {
    bubblesArray[i].update();
    bubblesArray[i].draw();
     if (bubblesArray[i].x < 0 - this.radius * 2) {
      bubblesArray.splice(i, 1);
       i--;
     }else if (bubblesArray[i].distance < bubblesArray[i].radius + player.radius) {
      if (!bubblesArray[i].counted) {
        if(bubblesArray[i].sound == "sound1"){
          bubblePop1.play();
        }else{
          bubblePop2.play();
        }
        score++;
        bubblesArray[i].counted = true; //count each bubble once
        bubblesArray.splice(i, 1);
        i--;
      }
    }
        }
  for (let i = 0; i < bubblesArray.length; i++) {
    
  }
  }

//student fish
const studentArray = [];
const studentImage = new Image();
studentImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEF-04.png?v=1670782046498";
class Student {
  constructor() {
    this.x = canvas.width + 50;
    this.y = Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false; //count each bubble once
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'; // sound (not working)
  }
  update() {
    this.x -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(studentImage,this.x - 68, this.y - 62, this.radius * 2.5, this.radius * 2.5);
  }
}

function handleStudent() {
  if (gameFrame % 30 == 0 && !(gameFrame % 60==0 || gameFrame %90==0 || gameFrame %120==0 || gameFrame %180==0|| gameFrame %210==0|| gameFrame %240==0|| gameFrame %270==0|| gameFrame %300==0)){
    studentArray.push(new Student());
  }
  for (let i = 0; i < studentArray.length; i++) {
    studentArray[i].update();
    studentArray[i].draw();
     if (studentArray[i].x < 0 - this.radius * 2) {
      studentArray.splice(i, 1);
       i--;
     }else if (studentArray[i].distance < studentArray[i].radius + player.radius) {
      if (!studentArray[i].counted) {
        if(studentArray[i].sound == "sound1"){
          bubblePop1.play();
        }else{
          bubblePop2.play();
        }
        score++;
        studentArray[i].counted = true; //count each bubble once
        studentArray.splice(i, 1);
        i--;
      }
    }
        }
  for (let i = 0; i < studentArray.length; i++) {
    
  }
  }

//firefighter fish
const firefighterArray = [];
const firefighterImage = new Image();
firefighterImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEF-02.png?v=1670782046221";
class Firefighter {
  constructor() {
    this.x = canvas.width + 50;
    this.y = Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false; //count each bubble once
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'; // sound (not working)
  }
  update() {
    this.x -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(firefighterImage,this.x - 68, this.y - 62, this.radius * 2.5, this.radius * 2.5);
  }
}

function handleFirefighter() {
  if (gameFrame % 120 == 0 && !(gameFrame % 240 ==0 || gameFrame % 480 ==0)) {
    firefighterArray.push(new Firefighter());
  }
  for (let i = 0; i < firefighterArray.length; i++) {
    firefighterArray[i].update();
    firefighterArray[i].draw();
     if (firefighterArray[i].x < 0 - this.radius * 2) {
      firefighterArray.splice(i, 1);
       i--;
     }else if (firefighterArray[i].distance < firefighterArray[i].radius + player.radius) {
      if (!firefighterArray[i].counted) {
        if(firefighterArray[i].sound == "sound1"){
          bubblePop1.play();
        }else{
          bubblePop2.play();
        }
        score++;
        firefighterArray[i].counted = true; //count each bubble once
        firefighterArray.splice(i, 1);
        i--;
      }
    }
        }
  for (let i = 0; i < firefighterArray.length; i++) {
    
  }
  }

//robber fish
const robberArray = [];
const robberImage = new Image();
robberImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEF-05.png?v=1670782046621";
class Robber {
  constructor() {
    this.x = canvas.width + 50;
    this.y = Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false; //count each bubble once
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'; // sound (not working)
  }
  update() {
    this.x -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(robberImage,this.x - 68, this.y - 62, this.radius * 2.5, this.radius * 2.5);
  }
}

function handleRobber() {
  if (gameFrame % 60 == 0 && !(gameFrame % 120==0 || gameFrame %180==0|| gameFrame %300==0|| gameFrame %360==0)){
    robberArray.push(new Robber());
  }
  for (let i = 0; i < robberArray.length; i++) {
    robberArray[i].update();
    robberArray[i].draw();
     if (robberArray[i].x < 0 - this.radius * 2) {
      robberArray.splice(i, 1);
       i--;
     }else if (robberArray[i].distance < robberArray[i].radius + player.radius) {
      if (!robberArray[i].counted) {
        if(robberArray[i].sound == "sound1"){
          bubblePop1.play();
        }else{
          bubblePop2.play();
        }
        score++;
        robberArray[i].counted = true; //count each bubble once
        robberArray.splice(i, 1);
        i--;
      }
    }
        }
  for (let i = 0; i < robberArray.length; i++) {
    
  }
  }

//police fish
const policeArray = [];
const policeImage = new Image();
policeImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/CHEF-06.png?v=1670782046775";
class Police {
  constructor() {
    this.x = canvas.width + 50;
    this.y = Math.random() * canvas.height;
    this.radius = 50;
    this.speed = Math.random() * 5 + 1;
    this.distance;
    this.counted = false; //count each bubble once
    this.sound = Math.random() <= 0.5 ? 'sound1' : 'sound2'; // sound (not working)
  }
  update() {
    this.x -= this.speed;
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    this.distance = Math.sqrt(dx * dx + dy * dy);
  }
  draw() {
    // ctx.fillStyle = "red";
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // ctx.fill();
    // ctx.closePath();
    // ctx.stroke();
    ctx.drawImage(policeImage,this.x - 68, this.y - 62, this.radius * 2.5, this.radius * 2.5);
  }
}

function handlePolice() {
  if (gameFrame % 280 == 0) {
    policeArray.push(new Police());
  }
  for (let i = 0; i < policeArray.length; i++) {
    policeArray[i].update();
    policeArray[i].draw();
     if (policeArray[i].x < 0 - this.radius * 2) {
      policeArray.splice(i, 1);
       i--;
     }else if (policeArray[i].distance < policeArray[i].radius + player.radius) {
      if (!policeArray[i].counted) {
        if(policeArray[i].sound == "sound1"){
          bubblePop1.play();
        }else{
          bubblePop2.play();
        }
        score++;
        policeArray[i].counted = true; //count each bubble once
        policeArray.splice(i, 1);
        i--;
      }
    }
        }
  for (let i = 0; i < policeArray.length; i++) {
    
  }
  }


//Repeating backgrounds
const background1 = new Image();
const background2 = new Image();
const background3 = new Image();
const background4 = new Image();
background1.src ="https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/background%20website-01.png?v=1670783077207";
background2.src ="https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/background%20website-02.png?v=1670783072809";
background3.src="https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/background%20website-03.png?v=1670783074295";
background4.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/background%20website-04.png?v=1670783075753";

const BG = {
  x1: 0,
  x2: canvas.width,
  y: 0,
  width:canvas.width,
  height: canvas.height
}

function handleBackground(){
  if(score<=20){
  BG.x1 -= gameSpeed;//(makes the background moves to the left)
  if (BG.x1 < -BG.width ) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;//(fills in the empty area)
  if (BG.x2 < -BG.width ) BG.x2 = BG.width;
  ctx.drawImage(background1, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background1, BG.x2, BG.y, BG.width, BG.height);
  } else if (
    score>20, score<=40){
    BG.x1 -= gameSpeed;//(makes the background moves to the left)
  if (BG.x1 < -BG.width ) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;//(fills in the empty area)
  if (BG.x2 < -BG.width ) BG.x2 = BG.width;
  ctx.drawImage(background2, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background2, BG.x2, BG.y, BG.width, BG.height);
  }else if (score>41, score<=60){
    BG.x1 -= gameSpeed;//(makes the background moves to the left)
  if (BG.x1 < -BG.width ) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;//(fills in the empty area)
  if (BG.x2 < -BG.width ) BG.x2 = BG.width;
  ctx.drawImage(background3, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background3, BG.x2, BG.y, BG.width, BG.height);
  }else{
    BG.x1 -= gameSpeed;//(makes the background moves to the left)
  if (BG.x1 < -BG.width ) BG.x1 = BG.width;
  BG.x2 -= gameSpeed;//(fills in the empty area)
  if (BG.x2 < -BG.width ) BG.x2 = BG.width;
  ctx.drawImage(background4, BG.x1, BG.y, BG.width, BG.height);
  ctx.drawImage(background4, BG.x2, BG.y, BG.width, BG.height);
  }
}

//enemies
const enemyImage = new Image();
enemyImage.src = "https://cdn.glitch.global/8c9a91ae-2ec3-47e8-a08b-69675dfa7201/SHARK-07.png?v=1670782314408";

class Enemy {
  constructor(){
    this.x = canvas.width + 200;
    this.y = Math.random * (canvas.height - 150) + 90;
    this.radius = 90;
    this.speed = Math.random() * 2 + 2;
    //if animates the fish
    this.frame = 0;
    this.frameX = 0;
    this.frameY = 0;
    this.spriteWidth = 418; //width of entire spritesheet image/number of columns
    this.spriteHeight = 330; //height of spriteshee image/number of rows
  }
  draw(){
    // ctx.fillstyle = 'red';
    // ctx.beginPath();
    // ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 4.5);
    // ctx.fill()
    ctx.drawImage(enemyImage, this.x - 115, this.y - 125, this.radius*3, this.radius*3);
  }
  update(){
    this.x -= this.speed;
    if(this.x < 0 - this.radius * 3){
      this.x = canvas.width + 200;
      this.y = Math.random() * (canvas.height - 150) +90
      this.speed = Math.random() * 2 + 2;
    }
  //collision
    const dx = this.x - player.x;
    const dy = this.y - player.y;
    const distance = Math.sqrt(dx * dx + dy * dy);
    if (distance < this.radius + player.radius){
      handleGameover();
    }
  }
}

const enemy1 = new Enemy()
function handleEnemies(){
  enemy1.draw();
  enemy1.update();
  
}

function handleRetire(){
if(score == 80){
  ctx.fillstyle = 'white';
  ctx.font = ctx.font.replace(/\d+px/, "60px");
  ctx.fillText('Congratulations! You Retired!', 50, 140);
  retire = true;
  setTimeout(function(){
   window.location.reload(1);
}, 2000);
}
}
function handleGameover(){
    ctx.fillstyle = 'white';
  ctx.font = ctx.font.replace(/\d+px/, "45px");
  ctx.fillText('OOPS, you died. You reached score: ' + score, 55, 250);
  gameOver = true;
}

// animation
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  handleBackground();
  handleBubbles();
  handleStudent();
  handleFirefighter();
  handleRobber();
  handlePolice();
  player.update();
  player.draw();
  handleEnemies();//make sure enemy runs
  handleRetire();
   ctx.fillStyle = "orange";
  ctx.fillText("Score: " + score, 10, 50);
  gameFrame++;
  if(gameOver == false) {
    requestAnimationFrame(animate);
  }
}


//animate();

window.addEventListener('resize', function(){
  canvasPosition = canvas.getBoundingClientRect();
})

function startGame() {
  document.querySelector('.startButton').style.display = 'none'; 
animate();

}


startButton.addEventListener("click", startGame);
