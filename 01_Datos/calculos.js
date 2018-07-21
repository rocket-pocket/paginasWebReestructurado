//calcular el área de un circulo
function calcularCirculo(radio){
    let circulo = Math.PI*radio*radio
    return circulo
}
function mostrar(circulo){
    let mensaje = 'el resultado es: '
    console.log(mensaje, circulo)//el resultado es:  28.274333882308138
}
function main(){
    let radio = 3
    let circulo = calcularCirculo(radio)
    mostrar(circulo)
}
main()
//*************************************** */

