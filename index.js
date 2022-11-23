//juego piedra, papel o tijera


// variables

const $jugador = document.querySelector('#jugador'),
$maquina = document.querySelector('#maquina'),
$partida = document.querySelector('#partida'),
$piedra = document.querySelector('#piedra'),
$papel = document.querySelector('#papel'),
$tijera = document.querySelector('#tijera');



// funciones

function btnOpcion (opcion, jugada) {
    opcion.addEventListener('click', () => {
        $jugador.innerHTML = jugada;
        let opcion = Math.round(Math.random() * (3 - 1) + 1);
        switch (opcion) {
            case 1: $maquina.innerHTML = 'Piedra';
                break;
            case 2: $maquina.innerHTML = 'Papel';
                break;
            case 3: $maquina.innerHTML = 'Tijera';
            default:
                break;
    }
    })
};

// llamado 


if (btnOpcion) {
    btnOpcion($piedra, 'Piedra');
    btnOpcion($papel, 'Papel');
    btnOpcion($tijera, 'Tijera');
    }


