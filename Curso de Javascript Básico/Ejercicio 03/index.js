function factorialFor(iNumero) {
  var iFactorial = 1;
  for (let i = 2; i <= iNumero; i++) {
    iFactorial = iFactorial * i;
  }
  return iFactorial;
}
console.log(factorialFor(10));

function factorialWhile(iNumero) {
  var iFactorial = 1;
  while (iNumero > 1) {
    iFactorial = iFactorial * iNumero;
    iNumero--;
  }
  return iFactorial;
}
console.log(factorialWhile(10));

function factorialDoWhile(iNumero) {
  var iFactorial = 1;
  do {
    iFactorial = iFactorial * iNumero;
    iNumero--;
  } while (iNumero > 1);
  return iFactorial;
}

console.log(factorialDoWhile(10));
