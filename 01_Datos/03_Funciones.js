/*
  JavaScript (@Oracle) -> ECMAScript -> ES6 / ES2015
 */

 // variable global -> hiting
 // let autor = 'Daniel'

 function saludar(pUser){
     const SALUDO = 'Hola'
     console.log(SALUDO, pUser)//Hola Daniel
    //variable local a la función
    let autor = 'Alberto'
    console.log(`dentro de la funcion se encuentra la variable ${autor}`)//dentro de la funcion se encuentra la variable Alberto
 }

 function sumar(a, b){
     let resultado = a + b
     console.log(resultado)//18
 }

 function dividir(a, b){
    let resultado = a / b
    console.log(resultado)//16.666666666666668
 }

 function dividirCondicional(d,f){
    let resultado
    if(f != 0){
        resultado = d / f
    }
    else{
        resultado = 'No se puede dividir por cero'
    }
    console.log(resultado)//No se puede dividir por cero
 }

 saludar('Daniel')
 sumar(10, 8)
 dividir(50, 3)
 dividirCondicional(6,0)

 

 /* Dos tipos de funciones
    - Funciones puras, sin "side effects" -> retornan datos
    - Funciones con efectos
    - Funcion Main
*/


//PURAS
function sumar(a,b) {
    let resultado = a+b
    return resultado;
}
//CON EFECTOS
function mostrar(pDato) {
    console.log(pDato)
}
//MAIN
function main() {
    let resultado = sumar(2,5)
    mostrar(resultado)
    mostrar(sumar(45, 172354))
}

main()
