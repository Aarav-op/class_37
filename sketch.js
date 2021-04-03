var database;
var gameState = 0;
var distance = 0;
var playerCount = 0;
var allPlayers;
var form,game,player;

function setup(){
  createCanvas(400,400)
 database = firebase.database();
 game = new Game();
 game.getState();
 game.start();
}

function draw(){
if(playerCount===4){
  game.update(1)
}
if(gameState===1){
  clear();
  game.play();
}
}