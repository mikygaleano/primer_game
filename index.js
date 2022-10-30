let jugador = 0,
opcion = 'Hola',
puntoPlayer = 0,
puntoMaquina = 0,
empate = 0;

function juego () {
    alert('vienvenido al juego de piedra, papel o tijera')
    alert('opciones: piedra : 1, papel: 2, tijera: 3')
    opcion = parseInt(prompt('Elije una opción valida, por favor: '))
    if (opcion < 1 || opcion > 3) {
        alert('opción invalida')
        opcion = parseInt(prompt('Elije una opción valida, por favor: '))
        }
    if (opcion == String()) {
        alert('opción invalida')
        opcion = parseInt(prompt('Elije una opción valida, por favor: '))
        } else {
            switch (opcion) {
                case 1: alert('Elegiste piedra');
    
                case 2: alert('Elegiste papel')
    
                case 3: alert('Elegiste tijera')
                }

        maquina = (Math.random()*(3 - 1) +1);
        maquina = Math.floor(maquina)
    
        switch (maquina) {
            case 1: alert('La maquina eligio piedra')
    
            case 2: alert('La maquina eligio papel')
    
            case 3: alert('La maquina eligio tijera')
        }
    }

    if (opcion == 1 && maquina == 3 || opcion == 2 && maquina == 1) {
        puntoPlayer = puntoPlayer + 1;
        alert(`un punto ${puntoPlayer = puntoPlayer + 1}`);
        }
    if (opcion == 3 && maquina == 1 || opcion == 1 && maquina == 2) {
        puntoMaquina = puntoMaquina + 1;
        alert(`un punto ${puntoMaquina = puntoMaquina + 1}`);
        } else {
        empate = empate + 1
        alert(`empate ${empate}`);
        }
        
};

let i = 0;
while (i < 3) {
    juego()
    if (puntoPlayer > puntoMaquina) {
        alert(`Ganaste campeon!! con ${puntoPlayer} puntos`);
        } else {alert(`Gano la maquina con ${puntoMaquina} puntos. Intentalo una vez más`);}
} i++;

