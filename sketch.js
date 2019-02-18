let cabeca;
let cabecaAltura;
let proporcao;

let ratio = 1.618;

let yOffset;

let ajuste1;
let ajuste2;
let tela;
let telaID;
let controleID;

let pontos = [];

let vertices = [];


function setup() {
  // put setup code here
  tela = createCanvas(300, 485);
  ajuste1 = createSlider(0, 10, 5, 0);
  ajuste2 = createSlider(0, 10, 5, 0);

  canvasID = select('#canvasHTML');
  controleID = select('#controleHTML');

  tela.parent(canvasID);
  ajuste1.parent(controleID);
  ajuste2.parent(controleID);

  yOffset = height / 10;

  cabecaAltura = height / 10;
  cabeca = createVector(cabecaAltura / 1.2, cabecaAltura);

  for (let i = 0; i < 22; i++) {
    pontos[i] = createVector(0, 0);
  }
  configurarPontos();
  for (let i = 0; i < pontos.length; i++) {
    vertices[i] = new Vertice(pontos[i].x, pontos[i].y);
  }
  strokeJoin(ROUND);

}

function configurarPontos() {
  pontos[0].x = 0;
  pontos[0].y = cabecaAltura * 0.5; // cabeça
  pontos[1].x = 0;
  pontos[1].y = cabecaAltura * 3.5; // pélvis
  pontos[2].x = -cabecaAltura * 0.7;
  pontos[2].y = cabecaAltura * 4 - cabecaAltura / 5 / 2; // bacia esquerda
  pontos[3].x = cabecaAltura * 0.7;
  pontos[3].y = cabecaAltura * 4 - cabecaAltura / 5 / 2; // bacia direita
  pontos[4].x = 0;
  pontos[4].y = cabecaAltura * 1;
  pontos[5].x = 0;
  pontos[5].y = cabecaAltura * 3; // espinha
  pontos[6].x = -cabecaAltura * 0.65;
  pontos[6].y = cabecaAltura * 6 - cabecaAltura / 4 / 2; // joelho esquerdo
  pontos[7].x = cabecaAltura * 0.65;
  pontos[7].y = cabecaAltura * 6 - cabecaAltura / 4 / 2; // joelho direito
  pontos[8].x = -cabecaAltura * 0.6;
  pontos[8].y = cabecaAltura * 8 - cabecaAltura / 3 / 2; // pé esquerdo
  pontos[9].x = cabecaAltura * 0.6;
  pontos[9].y = cabecaAltura * 8 - cabecaAltura / 3 / 2; // pé direito
  pontos[10].x = -cabecaAltura * 1;
  pontos[10].y = cabecaAltura * 1.75; // ombro esquerdo
  pontos[11].x = cabecaAltura * 1;
  pontos[11].y = cabecaAltura * 1.75; // ombro direito
  pontos[12].x = 0;
  pontos[12].y = cabecaAltura * 1.5; // base pescoço
  pontos[21].x = 0;
  pontos[21].y = cabecaAltura * 2.7; // externo
  pontos[17].x = -cabecaAltura * 0.5;
  pontos[17].y = cabecaAltura * 2.75; // costelas esquerda
  pontos[18].x = cabecaAltura * 0.5;
  pontos[18].y = cabecaAltura * 2.75; // costelas esquerda
  pontos[13].x = -cabecaAltura * 1.25;
  //pontos[13].y = cabecaAltura * 3 - (cabecaAltura / 3 / 2); // cotovelo esquerdo
  pontos[13].y = cabecaAltura * 3; // cotovelo esquerdo
  pontos[14].x = cabecaAltura * 1.25;
  //pontos[14].y = cabecaAltura * 3 - (cabecaAltura / 3 / 2); // cotovelo direito
  pontos[14].y = cabecaAltura * 3; // cotovelo direito
  pontos[15].x = -cabecaAltura * 1.1;
  pontos[15].y = cabecaAltura * 4; // pulso esquerdo
  pontos[16].x = cabecaAltura * 1.1;
  pontos[16].y = cabecaAltura * 4; // pulso direito
  pontos[19].x = -cabecaAltura * 1.;
  pontos[19].y = cabecaAltura * 4.7; // mão esquerda
  pontos[20].x = cabecaAltura * 1;
  pontos[20].y = cabecaAltura * 4.7; // mão direita
}

function draw() {
  // put drawing code here
  background(100);
  push();
  translate(width / 2, yOffset);

  noFill();
  strokeWeight(10);
  stroke(250, 170, 10);
  beginShape();
  vertex(vertices[19].posicao().x, vertices[19].posicao().y);
  vertex(vertices[15].posicao().x, vertices[15].posicao().y);
  vertex(vertices[13].posicao().x, vertices[13].posicao().y);
  vertex(vertices[10].posicao().x, vertices[10].posicao().y);
  vertex(vertices[12].posicao().x, vertices[12].posicao().y);
  vertex(vertices[11].posicao().x, vertices[11].posicao().y);
  vertex(vertices[14].posicao().x, vertices[14].posicao().y);
  vertex(vertices[16].posicao().x, vertices[16].posicao().y);
  vertex(vertices[20].posicao().x, vertices[20].posicao().y);
  endShape();

  beginShape();
  vertex(vertices[17].posicao().x, vertices[17].posicao().y);
  vertex(vertices[10].posicao().x, vertices[10].posicao().y);
  vertex(vertices[12].posicao().x, vertices[12].posicao().y);
  vertex(vertices[11].posicao().x, vertices[11].posicao().y);
  vertex(vertices[18].posicao().x, vertices[18].posicao().y);
  vertex(vertices[21].posicao().x, vertices[21].posicao().y);

  vertex(vertices[17].posicao().x, vertices[17].posicao().y);
  endShape();


  beginShape();
  vertex(vertices[1].posicao().x, vertices[1].posicao().y);
  //vertex(vertices[5].posicao().x, vertices[5].posicao().y);
  vertex(vertices[21].posicao().x, vertices[21].posicao().y);
  endShape();
  beginShape();
  vertex(vertices[12].posicao().x, vertices[12].posicao().y);
  vertex(vertices[4].posicao().x, vertices[4].posicao().y);
  endShape();


  beginShape();
  vertex(vertices[8].posicao().x, vertices[8].posicao().y);
  vertex(vertices[6].posicao().x, vertices[6].posicao().y);
  vertex(vertices[2].posicao().x, vertices[2].posicao().y);
  vertex(vertices[1].posicao().x, vertices[1].posicao().y);
  vertex(vertices[3].posicao().x, vertices[3].posicao().y);
  vertex(vertices[7].posicao().x, vertices[7].posicao().y);
  vertex(vertices[9].posicao().x, vertices[9].posicao().y);
  endShape();

  ellipse(vertices[0].posicao().x, vertices[0].posicao().y, cabeca.x, cabeca.y); // cabeça



  for (let i = 0; i < vertices.length; i++) {


    vertices[i].efeito();
    vertices[i].atualizar();
    if (i != 0 && i != 5) {
      vertices[i].exibir();
    }
  }

  pop();
}

///////////////////
class Vertice {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.ace = createVector(0, 0);
    this.efx = createVector(0, 0);
    this.posOriginal = createVector(x, y);
  }

  efeito() {
    //this.efx.x += random(-1, 1);
    if (this.efx.x > 1 * width / 2) {
      this.efx.x = -width / 2;
    } else {
      this.efx.x += 0.5;
    }
    5
    if (this.efx.y > 1 * height) {
      this.efx.y = 0;
    } else {
      this.efx.y += 1;
    }
    strokeWeight(1);
    // line(-width / 2, this.efx.y, width / 2, this.efx.y);
    // line(this.efx.x, 0 - yOffset, this.efx.x, height);

    this.dir = p5.Vector.sub(this.efx, this.pos);
    let distancia = this.dir.mag();
    let potencia = 0;
    if (distancia < 100) {
      potencia = map(distancia, 0, 50, 0, 1);
    } else {
      potencia = 0;
    }
    this.dir.setMag(potencia);
    this.ace = this.dir;

    this.resistencia = p5.Vector.sub(this.posOriginal, this.pos);
    this.resistencia.setMag(ajuste1.value());

    //console.log(this.efx.y);
  }
  atualizar() {
    this.ace.add(this.resistencia);
    this.vel.add(this.ace);
    this.vel.limit(ajuste2.value());
    this.pos.add(this.vel);
    //this.vel.mult(0);
  }

  posicao() {
    return this.pos;
  }
  exibir() {
    stroke(250,220,100);
    strokeWeight(10);
    point(this.pos.x, this.pos.y);
  }
}



// ellipse(pontos[0].x, pontos[0].y, cabeca.x, cabeca.y); // cabeça
// //ellipse(pontos[1].x, pontos[1].y, cabecaAltura);// pélvis
// ellipse(pontos[2].x, pontos[2].y, cabecaAltura / 5); // bacia esquerda
// ellipse(pontos[3].x, pontos[3].y, cabecaAltura / 5); // bacia direita
// //line(pontos[4].x, pontos[4].y, pontos[5].x, pontos[5].y); // espinha
// ellipse(pontos[6].x, pontos[6].y, cabecaAltura / 4); // joelho esquerdo
// ellipse(pontos[7].x, pontos[7].y, cabecaAltura / 4); // joelho direito
// ellipse(pontos[8].x, pontos[8].y, cabecaAltura / 3); // pé esquerdo
// ellipse(pontos[9].x, pontos[9].y, cabecaAltura / 3); // pé direito
// ellipse(pontos[10].x, pontos[10].y, cabecaAltura / 5); // ombro esquerdo
// ellipse(pontos[11].x, pontos[11].y, cabecaAltura / 5); //ombro direito
// ellipse(pontos[13].x, pontos[13].y, cabecaAltura / 5, cabecaAltura / 3); // cotovelo esquerdo
// ellipse(pontos[14].x, pontos[14].y, cabecaAltura / 5, cabecaAltura / 3); // cotovelo direito
// ellipse(pontos[15].x, pontos[15].y, cabecaAltura / 6); // pulso esquerdo
// ellipse(pontos[16].x, pontos[16].y, cabecaAltura / 6); // pulso direito