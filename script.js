let primarios = ["yellow", "red", "blue"];
let hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
let btnPrimario = document.getElementById('btnPrimario');
let btnHex = document.getElementById('btnHex');
let color = document.querySelector('.color');
let iLista = [];

btnPrimario.onclick = coloresPrimarios;
btnHex.onclick = coloresHex;

function iRandomPrimarios () {
    let i = Math.floor(Math.random()*primarios.length);
    if (iLista[iLista.length - 1] == i) {
        return iRandomPrimarios ();
    } else {
        iLista.push(i);
        return i;
    }
}

function iRandomHex () {
    return Math.floor(Math.random()*hex.length);
}

function coloresPrimarios () {
    let i = iRandomPrimarios();
    color.textContent = primarios[i];
    document.body.style.backgroundColor = primarios[i];
}

function coloresHex () {
    let claveHex = '#';
    for (let i = 0; i < 6; i++) {
        claveHex += hex[iRandomHex()];
    }
    color.textContent = claveHex;
    document.body.style.backgroundColor = claveHex;
}