var player = 0;
var maquina = 0;
var perdido = 0;
var ganado = 0;
var empatado = 0;

// opción maquina
function getRandom (max, min) {
    return Math.floor(Math.random() * (max - min) + min);
}

// combates
function partidas () {
    // 1 piedra, 2 papel, 3 tijera
    player = prompt('Elige por favor!!: ');
    if (maquina == player) {
        alert('Eligieron lo mismo')
        alert('Empate');
    }
    else if (player == 1 && maquina == 3) {
        ganado = ganado + 1;
        alert('Elegiste piedra')
        alert('La maquina eligio tijera')
        alert('Ganaste');
    }
    else if (player == 2 && maquina == 1) {
        ganado = ganado + 1;
        alert('Elegiste papel')
        alert('La maquina eligio piedra')
        alert('Ganaste');
    }
    else if (player == 3 && maquina == 2) {
        ganado = ganado + 1;
        alert('Elegiste tijera')
        alert('La maquina eligio papel')
        alert('Ganaste');
    } 
    // maquina
    else if (maquina == 3 && player == 2) {
        perdido = perdido + 1;
        alert('Elegiste papel')
        alert('La maquina eligio tijera')
        alert('Perdiste');
    }
    else if (maquina == 2 && player == 1) {
        perdido = perdido + 1;
        alert('Elegiste piedra')
        alert('La maquina eligio papel')
        alert('Perdiste');
    } else {
        perdido = perdido + 1;
        alert('Elegiste tijera')
        alert('La maquina eligio piedra')
        alert('Ganaste');
    }
}


// resultado
function resultado () {
    if (ganado > perdido) {
        alert('Ganaste campeón!!');
    } else {
        alert('Haz perdido, sigue intentando')
    }
}


alert('Bienvenido al juego');
alert('para piedra elige 1, para papel elige 2, para tijera elige 3');
getRandom(maquina, 3, 1);
partidas();
resultado();
