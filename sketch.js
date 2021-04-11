var dataBase;
var gameState = 0;
var playerCount;
var game,form,player;

function setup(){
    createCanvas(500,500);
    dataBase = firebase.database()
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
}
