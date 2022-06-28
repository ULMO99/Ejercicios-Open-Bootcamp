// Crear clase Persona.
// Crear las variables privadas edad, nombre y telefono de la clase Persona.
// Crear gets y sets de cada propiedad.
class Persona {
  constructor(nombre, edad, telefono) {
    this.nombre = nombre;
    this.edad = edad;
    this.telefono = telefono;
  }
  mostrarNombre() {
    return this.nombre;
  }
  mostrarEdad() {
    return this.edad;
  }
  mostrarTelefono() {
    return this.telefono;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }
  setEdad(edad) {
    this.edad = edad;
  }
  setTelefono(telefono) {
    this.telefono = telefono;
  }
  getNombre() {
    return this.nombre;
  }
  getEdad() {
    return this.edad;
  }
  getTelefono() {
    return this.telefono;
  }
}

// Crear un objeto persona en el main.
let persona = {
    nombre: this.nombre,
    edad: this.edad,
    telefono: this.telefono
}

// Utiliza los gets y sets para darle valores a las propiedades edad, nombre y telefono, por último muéstralas por consola.
function setElement (nombre, edad, telefono) {
    persona.nombre = nombre;
    persona.edad = edad;
    persona.telefono = telefono;
}
function getElement() {
    console.log(persona.nombre);
    console.log(persona.edad);
    console.log(persona.telefono);
}