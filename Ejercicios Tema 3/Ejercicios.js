// Primera parte:

// Crear una función con tres parámetros que sean números que se suman entre sí.

// Llamar a la función en el main y darle valores.

function suma (a, b, c) {
    return a + b + c;
}

suma(1, 2, 3);


// Segunda parte:

// Crear una clase coche.

// Dentro de la clase coche, una variable numérica que almacene el número de puertas que tiene.

// Una función que incremente el número de puertas que tiene el coche.

// Crear un objeto miCoche en el main y añadirle una puerta.

// Mostrar el número de puertas que tiene el objeto.

class Coche{
    constructor(){
        this.puertas = 4;
    }
    aumentarPuertas(){
        this.puertas++;
    }
}

let miCoche = {
    puertas: 4
}

miCoche.puertas;