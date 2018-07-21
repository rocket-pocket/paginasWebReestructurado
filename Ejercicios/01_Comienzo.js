//FIZZBUZZ
//imprimir números del 1 - 100 y en los que al ser divididos por 3 su resto sea 0
//imprimir: Fizz, y en los que al dividir por 5 su resto sea 0 imprimir Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz')
    }else if (i % 5 == 0) {
        console.log('Buzz')
    } else {
        console.log(i)
    }
}

//MINIMUN
//Funcion que coje dos argumentos y retorne los minimos
function min(a, b){
    if (a < b) {
        return a
    }else{
        return b
    }    
}
console.log(min(10, 20))
console.log(min(10, -10))

//IS EVEN
function isEven(a){
    if(a % 2 == 0){
        return true
    }
    else{
        return false
    }
}
console.log(isEven(50))
console.log(isEven(75))
console.log(isEven(-1)) 

//BEAN COUNTING



    



