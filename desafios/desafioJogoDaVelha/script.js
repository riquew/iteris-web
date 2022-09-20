function novaTela() {
  pincel.fillStyle = "#346b31";
  pincel.fillRect(0, 0, 800, 600);
  desenhaJogo(pincel, tela);
}


function desenhaJogo(giz, tela) {
    giz.strokeStyle = "#fbf7f5";
    giz.lineWidth = 10;

    // Linhas horizontais
    giz.moveTo(100, 200);
    giz.lineTo(700, 200);
    giz.stroke();

    giz.moveTo(100, 400);
    giz.lineTo(700, 400);
    giz.stroke();

    // Linhas verticais
    giz.beginPath();
    giz.moveTo(300, 50);
    giz.lineTo(300, 550);
    giz.stroke();

    giz.moveTo(500, 50);
    giz.lineTo(500, 550);
    giz.stroke();


    adcionaClique(tela);
}

function adcionaClique(tela) {
    tela.addEventListener("click", recebeClique);
}

function recebeClique(event) {
    let userX = event.pageX;
    let userY = event.pageY;
    let linha = verificaLinha(userY);
    let coluna = verificaColuna(userX)
    console.log(userX, userY)
    let coordenadas = {
        linha: linha,
        coluna: coluna,
    }
    desenhaJogada(coordenadas);
    countClick ++;
    (countClick > 4) ? checaVencedor() : 
    console.log(countClick);
    console.log(jogadasEfetuadas);
}

function verificaLinha(userY){
    let linha;
    if(userY <= 200) {
        linha = 0;
    } else if(userY <= 400 && userY > 200) {
        linha = 1;
    } else {
        linha = 2;
    }
    return linha;
}

function verificaColuna(userX) {
    let coluna;
    if(userX <= 300) {
        coluna = 0;
    } else if(userX <= 500 && userX > 300) {
        coluna = 1;
    } else {
        coluna = 2;
    }
    return coluna;
}

function desenhaJogada(coordenadas) {
    if(coordenadas.linha == 0 && coordenadas.coluna == 0) {
        (countClick % 2 == 0) ? registraXis(130, 180, 0) : registraCirculo(130, 180, 0);
    } else if(coordenadas.linha == 0 && coordenadas.coluna == 1) {
        (countClick % 2 == 0) ? registraXis(340, 180, 1) : registraCirculo(340, 180, 1);
    } else if(coordenadas.linha == 0 && coordenadas.coluna == 2) {
        (countClick % 2 == 0) ? registraXis(550, 180, 2) : registraCirculo(550, 180, 2);
    } else if(coordenadas.linha == 1 && coordenadas.coluna == 0) {
        (countClick % 2 == 0) ? registraXis(130, 360, 3) : registraCirculo(130, 360, 3);
    } else if(coordenadas.linha == 1 && coordenadas.coluna == 1) {
        (countClick % 2 == 0) ? registraXis(340, 360, 4) : registraCirculo(340, 360, 4);
    } else if(coordenadas.linha == 1 && coordenadas.coluna == 2) {
        (countClick % 2 == 0) ? registraXis(550, 360, 5) : registraCirculo(550, 360, 5);
    } else if(coordenadas.linha == 2 && coordenadas.coluna == 0) {
        (countClick % 2 == 0) ? registraXis(130, 540, 6) : registraCirculo(130, 540, 6);
    } else if(coordenadas.linha == 2 && coordenadas.coluna == 1) {
        (countClick % 2 == 0) ? registraXis(340, 540, 7) : registraCirculo(340, 540, 7);
    } else {
        (countClick % 2 == 0) ? registraXis(550, 540, 8) : registraCirculo(550, 540, 8);
    }
}

function registraXis(x, y, posicao) {
    pincel.beginPath()
    pincel.moveTo(x, y);
    pincel.lineTo(x + 120, y - 120);
    pincel.stroke();

    pincel.moveTo(x + 120, y);
    pincel.lineTo(x, y - 120);
    pincel.stroke();

    jogadasEfetuadas[posicao] = "X";
}

function registraCirculo(x, y, posicao) {
    pincel.beginPath();
    pincel.arc(x + 60, y - 60, 60, 0, 2 * Math.PI);
    pincel.stroke();
    jogadasEfetuadas[posicao] = "O";
}

function checaVencedor() {
    console.log('checando...')
    // linhas horizontais:
    if(jogadasEfetuadas[0] === jogadasEfetuadas[1] && jogadasEfetuadas[1] === jogadasEfetuadas[2]) {
        console.log('linha1')
        desenhaRiscoVitoria(100, 120, "h");
    } else if(jogadasEfetuadas[3] === jogadasEfetuadas[4] && jogadasEfetuadas[4] === jogadasEfetuadas[5]) {
        console.log('linha2')
        desenhaRiscoVitoria(100, 300, "h");
    } else if(jogadasEfetuadas[6] === jogadasEfetuadas[7] && jogadasEfetuadas[7] === jogadasEfetuadas[8]) {
        console.log('linha3')
        desenhaRiscoVitoria(100, 480, "h");

    // linhas verticais:
    } else if(jogadasEfetuadas[0] === jogadasEfetuadas[3] && jogadasEfetuadas[3] === jogadasEfetuadas[6]) {
        console.log('coluna1')
        desenhaRiscoVitoria(190, 30, "v");
    } else if(jogadasEfetuadas[1] === jogadasEfetuadas[4] && jogadasEfetuadas[4] === jogadasEfetuadas[7]) {
        console.log('coluna2')
        desenhaRiscoVitoria(400, 30, "v");
    } else if(jogadasEfetuadas[2] === jogadasEfetuadas[5] && jogadasEfetuadas[5] === jogadasEfetuadas[8]) {
        console.log('coluna3')
        desenhaRiscoVitoria(610, 30, "v");
    // diagonais: 
    } else if(jogadasEfetuadas[0] === jogadasEfetuadas[4] && jogadasEfetuadas[4] === jogadasEfetuadas[8]) {
        desenhaRiscoVitoria(100, 30, "d");
    } else if(jogadasEfetuadas[2] === jogadasEfetuadas[4] && jogadasEfetuadas[4] === jogadasEfetuadas[6]) {
        desenhaRiscoVitoria(700, 30, "di");
    }
}

function desenhaRiscoVitoria(x, y, sentido) {
    console.log("X: " + x + "Y: " + y)
    pincel.lineWidth = 15;
    pincel.strokeStyle = "#8b0000";

    pincel.beginPath();
    pincel.moveTo(x, y);
    if(sentido === "h") {
        pincel.lineTo(x + 600, y);
    } else if(sentido === "v") {
        pincel.lineTo(x, y + 550);
    } else if(sentido === "d") {
        pincel.lineTo(x + 600, y + 550);
    } else {
        pincel.lineTo(x - 600, y + 550);
    }
    pincel.stroke();
    tela.removeEventListener("click", recebeClique);
}

const tela = document.querySelector("canvas");
const pincel = tela.getContext("2d");
let jogadasEfetuadas = [0, 1, 2, 3, 4, 5, 6, 7, 8];
let countClick = 0;
novaTela();