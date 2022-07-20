const persona = {
  nombre: "Ulises",
  apellido: "Moreno",
  edad: 26,
  altura: 1.85,
  eresDesarrollador: true,
};

var edad = persona.edad;

const array = [
  {
    ...persona
  },
  {
    nombre: "Mayte",
    apellido: "Arce",
    edad: 25,
    altura: 1.6,
    eresDesarrollador: false,
  },
  {
    nombre: "Félix",
    apellido: "Aguirre",
    edad: 26,
    altura: 1.85,
    eresDesarrollador: false,
  },
];

const arrayOrdenado = array.sort((a, b) => b.edad - a.edad);

console.log(arrayOrdenado);