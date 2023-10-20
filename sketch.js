let xBolinha = 400;
let yBolinha = 300;
let diametro = 20;
let raio = diametro/2
let velocidadeXbolinha = 4;
let velocidadeYbolinha = 4;
let xRaquete = 10;
let yRaquete = 265;
let larguraRaquete = 10;
let alturaRaquete = 100;
let velocidadeYraquete = 10;
let xRaqueteInimigo = 780;
let yRaqueteInimigo = 265;


let colisao = false;


function setup() {
  createCanvas(800, 600);
}



function draw() {
 
  background(0);
  criarBolinha();
  moverBolinha();
  borda();
  criarRaquete(xRaquete, yRaquete);
  criarRaquete(xRaqueteInimigo, yRaqueteInimigo);
  movimentoRaquete();
  colideRaqueteBolinha(xRaquete, yRaquete);
  colideRaqueteBolinha(xRaqueteInimigo, yRaqueteInimigo);
  movimentoRaqueteInimigo();

function criarBolinha(){
 
circle(xBolinha,yBolinha,diametro);

}



function moverBolinha(){
  xBolinha += velocidadeXbolinha;
  yBolinha += velocidadeYbolinha;
 
}

 
 
function borda(){
  if(xBolinha + raio > width || xBolinha - raio < 0){velocidadeXbolinha *= -1}
   if(yBolinha + raio > height || yBolinha - raio < 0){velocidadeYbolinha *= -1}
  }

 
function criarRaquete(x, y){
   
  rect(x, y, larguraRaquete, alturaRaquete);
   
  }
   
 
function movimentoRaquete(){
 
 if(keyIsDown(UP_ARROW)){yRaquete -= velocidadeYraquete}
if(keyIsDown(DOWN_ARROW)){yRaquete += velocidadeYraquete}
 
}
 
 
 
 
 
}

function colideRaqueteBolinha(x, y) {
   colisao = collideRectCircle(x, y, larguraRaquete, alturaRaquete, xBolinha, yBolinha, raio);
  if(colisao){
    velocidadeXbolinha *= -1;
  }
}

function movimentoRaqueteInimigo(){
  if(keyIsDown(87)){
    yRaqueteInimigo -= velocidadeYraquete
  }
  if(keyIsDown(83)){
    yRaqueteInimigo += velocidadeYraquete
  }
}