const hoy = new Date(2022, 06, 20)

console.log(hoy);

const cumpleaños = new Date(1996, 04, 09);

console.log(cumpleaños);

const mayorOMenor = hoy > cumpleaños;

console.log(mayorOMenor);

const diaNacimiento = cumpleaños.getDay();
const mesNacimiento = cumpleaños.getMonth() + 1;
const anioNacimiento = cumpleaños.getFullYear();

console.log(diaNacimiento);
