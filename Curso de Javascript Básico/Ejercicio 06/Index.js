let listaSuper = ["huevos", "leche", "harina", "mantequilla", "cocoa"];
listaSuper.push("Aceite de Girasol");
listaSuper.pop();

let peliculas = [
  {
    título: "Interstellar",
    director: "Christopher Nolan",
    fecha: new Date(2014, 09, 26),
  },
  {
    título: "The Lord of the Rings: The Return of the King",
    director: "Peter Jackson",
    fecha: new Date(2003, 12, 17),
  },
  {
    título: "Logan",
    director: "James Mangold",
    fecha: new Date(2017, 03, 03),
  },
];

const peliculasNuevas = peliculas.filter(
  (pelicula) => pelicula.fecha > new Date(2010, 0, 1)
);

const directores = peliculas.map((pelicula) => {
  return pelicula.director;
});
const titulos = peliculas.map((pelicula) => {
  return pelicula.titulo;
});
const directores_titulos = directores.concat(titulos);
const directores_titulos_prop = [...directores, ...titulos];

console.log(directores_titulos);

console.log(directores_titulos_prop);
