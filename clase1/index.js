
// crear log de consola rapidamente, seleccionando nombre de variable + control + option + l
// comando para correr un archivo desde terminal usar el comando: node <nombre archivo>
// abrir paleta de comandos command + shift + P
// para usar quokka start on current file y se veran los logs en la salida de la terminal

// DECLARACION DE VARIABLES EN JS

// var - variable
var nombre = "sol";
console.log("🚀 ~ file:index.js:2 ~ nombre:", nombre)

var apellido = "Barboza";
console.log("🚀 ~ file: index.js:5 ~ apellido:", apellido)

// let (variables que pueden mutar)
let edad = 29;
console.log("🚀 ~ file: index.js:22 ~ edad:", edad)
edad = 30;
console.log("🚀 ~ file: index.js:22 ~ edad:", edad)

// const (constantes que mantienen su valor fijo)
const genero = "Femenino";
// genero = "Masculino";
console.log("🚀 ~ file: index.js:26 ~ genero:", genero)

// TIPOS DE DATOS EN JS
// Datos primitivos
// 1- strings o cadena de texto
let texto = "Cadena de texto";

// 2- number
let numero = "12345667";

// 3- bigInt
let numeroGrande = 2344e4;

// 4- boolean
let verdadero = true;

// 5- undefined
let undefined
console.log("🚀 ~ file: index.js:43 ~ undefined:", undefined)

// 6- null
let nulo = null;
console.log("🚀 ~ file: index.js:47 ~ nulo:", nulo)
// undefined == null - TRUE

// 7- symbol

// Datos complejos
// 8- Array
const array = ["a", "b", [134], 2, {}];
console.log("🚀 ~ file: index.js:55 ~ array:", array)
array[0] = 1;
array[5] = "c";
console.log("🚀 ~ file: index.js:55 ~ array:", array)

// 9- Objects
const persona = {
    dni: 55443789,
    nombre: "Juan Carlos",
    direccion: "Direccion CABA"
};
console.log("🚀 ~ file: index.js:66 ~ dni persona:", persona.dni)

// 10- Functions
function suma(param1, param2) {
console.log("Resultado de sumatoria: ", param1 + param2);
}

function saludar(msg) {
    console.log("🚀 ~ file: index.js:74 ~ saludar ~ msg:", msg);
}

suma(1,2);
saludar("Saludo!");

// Arrow functions
const hablar = (args) => {
    console.log("🚀 ~ file: index.js:83 ~ saludar ~ saludar:", hablar); 
};

hablar("Hola como estas?");












