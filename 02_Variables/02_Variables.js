/** Declaracion */
var saludo
/** Inicializacion */
saludo = 'Hola'
/** Declaracion + Inicializacion */
var user = 'Mundo'

/* VARIABLES GLOBALES */
// var global = 12
// let global = 12
// global = 12

function calcular(pDato) {
    // si se inicializa una variable SIN DECLARAR
    // dentro de una función
    // se crea como variable global
    global = 14
    global = global + pDato
    // global += pDato
    return global;
}
//console.log(calcular(13))//27
//console.log(calcular(10)) //24
//console.log(global) //24 -->  ¿¿¿¿¿¿si comentamos los dos c.log anteriores
                            // y dejamos solo console.log(global)
                            // es undefined y yo entiendo que está 
                            //en global y debería encontrarla???????????


/* VARIABLES LOCALES */
function aumentar() {
    var local = 2
    let tambienLocal = 3
    const LOCAL = 4

    console.log(local) // 2
    console.log(tambienLocal) // 3
    console.log(LOCAL) // 4
}

aumentar()
// console.log(local) // undefined
// console.log(tambienLocal) // undefined
// console.log(LOCAL) // undefined

/* VARIABLES LOCALES con AMBITO de BLOQUE */

function disminuir() {
    if (true) {
        var local = 2
        let tambienLocal = 3
        const LOCAL = 4
        tambienLocal += 2
        // LOCAL += 1 // error de asignación
        console.log(local) // 2
        console.log(tambienLocal) // 5
        console.log(LOCAL) // 4
    }

    console.log(local) // 2
    console.log(tambienLocal)// undefined -> por que lleva el LET por delante
    console.log(LOCAL)// undefined -> por que es constante y solo existe en el primer bloque
}
disminuir()
//console.log(local) // undefined
// console.log(tambienLocal) // undefined
// console.log(LOCAL) // undefined