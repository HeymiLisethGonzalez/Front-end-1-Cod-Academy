window.addEventListener('load', () => {
    // alert("Bienvenido de NexDevs") // Muestra una alerta
    // let name = prompt("Cuál es tu nombre"); // Muestra un cuadro de dialogo (está dentro de una variable.)

    // console.log('Bienvenido ' + name) //Muestra los mensajes en consola en inspect del navegador

    // if (!name) {
    //     name = prompt("Cuál es tu nombre");
    // }

    // alert('Bienvenido ' + name);

    document.querySelector('.hero-content').classList.add('visible')
})

// var: se crea variables de forma global (no se recomienda.)
// let : se crea variables de forma local
// cost : se crea variables de forma constante.

// // Tipo de datos
// 'Soy comillas simples' // String
// "Soy comillas dobles" // String
// `Soy template literals` // String


// 0 // Number
// 0.5 // Number
// -5.7 // Number

// true // Boolean
// false // Boolean

// null //Null -> Existe pero no hay nada.
// const cuenta_bancaria = null;

// undefined // Undefined -> No existe.
// const no_existe_cuenta_bancaria = undefined

// NaN // Not a number -> Un dato que es no es un numero actúe como un número.
// // '5'+ 3 ->un string con un numero

// Number('5') // el string 5 ahora es un numero
// String(8) // el 8 ahora es un string
// Boolean(10) // el 10 ahora es un bool


// // OPERADORES
// 5 + 5 // suma
// 5 - 5 // resta
// 5 * 5 // multiplicacion
// 5 / 5 // division
// 5 % 5 // mod o residuo
// 5 ** 5 // exponencia


// // OPERADORES DE ASIGNACION
// let a = 5;
// a += 5 //a = a + 5
// a -= 5 //a = a - 5
// a *= 5 //a = a * 5
// a /= 5 //a = a / 5
// a %= 5 //a = a % 5
// a **= 5 //a = a ** 5

// //ARREGLOS O ARRAYS
// const arreglo = [1, 2, 3, 4, 5]
// arreglo[0] //1
// arreglo[1] //2
// arreglo[2] //3
// arreglo[3] //4
// arreglo[4] //5

// // Objetos
// const persona = {
//     "nombre":'Heymi',
//     "apellido":'G',
//     "edad":22,
// }

// persona[nombre]
// persona[apellido]
// persona[edad]


// // CONDICIONALES
// const tengo_permiso_de_mi_mama = false;
// const tengo_permiso_de_mi_papa = false;

// //if
// if (tengo_permiso_de_mi_mama) {
//     console.log('Si tengo permiso de mi mamá');
// } else if (tengo_permiso_de_mi_papa) {
//     console.log('Si tengo permiso de mi papá');
// } else {
//     console.log('No tengo permiso de mi mamá ni de mi papá.');
// }

// // && (Y->igual a and)
// if (tengo_permiso_de_mi_mama && tengo_permiso_de_mi_papa) {
//     console.log('Si salí a jugar.');
// }
// // ; || (O->or)
// if (tengo_permiso_de_mi_mama || tengo_permiso_de_mi_papa) {
//     console.log('Al menos tengo un permiso');
// }
// //. ! (negacion->not)
// if (!tengo_permiso_de_mi_mama) {
//     console.log('Si tengo permiso');
// }
// // switch
// const color = 'amarillo'
// switch (color) {
//     case 'rojo':
//         console.log("Si tengo permiso de mi mama ");
//         break;
//     case 'verde':
//         console.log("Si tengo permiso de mi papá");
//         break;
//     default:
//         console.log("No tengo permisos");
//         break;
// }


// // CICLOS
// // for ->para
// for (let n=0; n < 10; n++) {
//     console.log(n);
// }

// // while -> mientras
// while (i < 10) {
//     console.log(i);
//     i++;
// }

// // do while
// do {
//     console.log(i);
//     i++;
// } while (i<10);

// // forEach
// [].forEach(element => {
//     console.log(element)
// });

// // FUNCIONES
// function saludar() {
//     console.log('Hola');
// }

// const saludar = () => {
//     console.log('Hola');
// }