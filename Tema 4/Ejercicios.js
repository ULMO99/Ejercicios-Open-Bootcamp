// Usando un if, crear una condición que compare si la variable numeroIf es positivo, negativo, o 0.
// Pista: Los números inferiores a 0 son negativos y los superiores, positivos.

function positivoNegativo(numeroIf) {
  if (numeroIf >= 0) {
    return `${numeroIf} es positivo`;
  } else {
    return `${numeroIf} es negativo`;
  }
}

// Crea un bucle While, este bucle tendrá que tener como condición que la variable numeroWhile sea inferior a 3, el bloque de código que tendrá el bucle deberá:
// Incrementar el valor de la variable en uno cada vez que se ejecute.
// Mostrarlo por pantalla cada vez que se ejecute.

var numeroWhile = 0;
function cicloWhile() {
  while (numeroWhile < 3) {
    numeroWhile++;
  }
  return numeroWhile;
}

// Para el bucle Do While, deberás crear la misma estructura que en el While, pero solo se debe ejecutar una vez.

function cicloDoWhile() {
  do {
    numeroWhile++;
  } while (numeroWhile < 1);
  return numeroWhile;
}

// Para el bucle For, crea una variable numeroFor, esta variable tendrá como valor 0 y su condición será que la variable sea igual o menor que 3, se irá incrementando en 1 su valor cada vez que se ejecute y deberá mostrarse por pantalla.

function cicloFor() {
  var numeroFor = 0;
  for (let i = 0; i < 3; i++) {
    numeroFor = i;
  }
  return numeroFor;
}
cicloFor();

// Por último, para el Switch, deberás crear la variable estacion, y distintos case para las cuatro estaciones del año. Dependiendo del valor de la variable estacion se deberá mandar un mensaje por consola informando de la estación en la que está. También habrá que poner un default para cuando el valor de la variable no sea una estación.

function switchCase(estacion) {
  switch (estacion) {
    case "invierno":
      return "Estamos en invierno";
    case "primavera":
      return "Estamos en primavera";
    case "verano":
      return "Estamos en verano";
    case "otoño":
      return "Estamos en otoño";
    default:
      return "No es una estación";
  }
}
