/**TIPOS DE DATOS:
 * -string
 * -number
 * -boolean
 * -object
 * -undefined
  */


//TIPOS DE DATOS CON EJEMPLOS:
var nombre = 'Daniel' //--> STRING
var edad = 32 //--> NUMBER
var isEstudiante = false //--> BOOLEAN
var sinDefinir
var persona = { //--> OBJECT
    nombre: 'Javier',
    edad: 34,
    isEstudiante: true
}

console.log(nombre, typeof nombre)//Daniel string
console.log(edad, typeof edad)//2 'number'
console.log(isEstudiante, typeof isEstudiante)//false 'boolean'
console.log(sinDefinir, typeof sinDefinir)//undefined 'undefined'
console.log(persona, typeof persona)//{ nombre: 'Javier', edad: 34, isEstudiante: true } 'object'

//Para acceder a las propiedades de un objeto
console.log(persona.edad, typeof persona.edad)//34 'number'


/* Tipos de datos
- ELEMENTALES
    - number
    - string
    - boolean
- REFERENCIADOS
    - object
    - undefined ¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿¿ ¿no debería pertenecer a los elementales? ?????????????????
*/

//ELEMENTALES
//son inmutables
//se utiliazan por valor

function aumentar(pIndice){
    pIndice += 1
    return pIndice
}

let indice = 1     // --> esta variable está en ambito global
indice = 8         // --> la variable anterior recoge el nuevo valor

aumentar(indice)         //  --> invocacion de la función aumentar que recoge como argumento la variable global 
console.log(aumentar(indice))//9
console.log(indice, typeof indice)//8 'number'

//Operaciones con elementales

let a = 5
let b = a
a += 5

console.log(a)//10
console.log(b)//5

//TIPOS REFERENCIADOS
//SON MUTABLES
//SE UTILIZAN POR REFERENCIA

let oLibro = {                       
    titulo: 'Matilda',
    loTengo: true,
    autor: {
        nombre: 'Roal',
        apellido: 'Dhal',
        isVivo: true,
    },
    indice: 1
}
//sería lo mismo que esto:
/*  let oLibro = {
    titulo: 'Matilda',
    loTengo: true,
    autor: {nombre: 'Roal', apellido: 'Dhal', isVivo: true, },
    indice: 1
}  */

console.log(oLibro)/* { titulo: 'Matilda',
                        loTengo: true,
                        autor: { nombre: 'Roal', apellido: 'Dhal', isVivo: true },
                        indice: 1 } */








