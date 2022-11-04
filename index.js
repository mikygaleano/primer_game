// juego piedra, papel o tijera
// opción maquina
function getRandom (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


// eligieron

function elegir (eleccion) {
    let opcion = '';
    if (eleccion == 1) {
        opcion = 'Piedra'
    }
    else if (eleccion == 2) {
        opcion = 'Papel'
    }
    else if (eleccion == 3) {
        opcion = 'Tijera'
    } else {
        opcion = 'Mala decición'
    }
    return opcion;
}

// combate 

function combate () {
    if (maquina == player) {
        alert('Empate');
    }
    else if (player == 1 && maquina == 3) {
        alert('Ganaste');
        ganado = ganado + 1;
    }
    else if (player == 2 && maquina == 1) {
        alert('Ganaste');
        ganado = ganado + 1;
    }
    else if (player == 3 && maquina == 2) {
        alert('Ganaste');
        ganado = ganado + 1;
    } else {
        alert('Perdiste');
        perdido = perdido + 1;
    }
}

var player = 0;
var maquina = 0;
var perdido = 0;
var ganado = 0;


window.addEventListener("load", () => {
    while (ganado < 3 && perdido < 3) {
        alert('Bienvenido al juego');
        alert('para piedra elige 1, para papel elige 2, para tijera elige 3');
        maquina = getRandom(3, 1);
        player = prompt('Elige por favor!!: ');
        alert(`Elegiste ${elegir(player)}`); 
        alert(`La maquina eligio ${elegir(maquina)}`);
        combate();
        }
    
        if (ganado > perdido) {
            alert('Ganaste campeón!!');
        } else {
            alert('Haz perdido, sigue intentando')
        }
    alert(`Ganaste ${ganado} veces, y perdiste ${perdido} veces`)
})