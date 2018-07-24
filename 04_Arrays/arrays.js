//ARRAYS

let aDatos = ['Rosa', 'Javier', 'Nico', 'Pepe', 'Antonio']
console.log(typeof aDatos, aDatos)//object [ 'Rosa', 'Javier', 'Nico', 'Pepe', 'Antonio' ]

//Manipular un array
aDatos[0] = 'Daniel'//Suscriibiría la posición 0 anterior
console.log(aDatos)//[ 'Daniel', 'Javier', 'Nico', 'Pepe', 'Antonio' ]

//Añadir más nombres(truco)
aDatos[aDatos.length] = 'Luis'
console.log(aDatos)//[ 'Daniel', 'Javier', 'Nico', 'Pepe', 'Antonio', 'Luis' ]

//Truco más elegante
aDatos.push('Elena')
console.log(aDatos)//[ 'Daniel', 'Javier', 'Nico', 'Pepe', 'Antonio', 'Luis', 'Elena' ]

//Object instance of an Array
let aDatosFull = [
    {nombre: 'Jhony', profesion: 'Albañil'},
    {nombre: 'Raúl', profesion: 'Diseñador'},
    {nombre: 'Ramón', profesion: 'Jefe de ventas'},
]
console.log(aDatosFull)//[ { nombre: 'Jhony', profesion: 'Albañil' },
                       //{ nombre: 'Raúl', profesion: 'Diseñador' },
                       //{ nombre: 'Ramón', profesion: 'Jefe de ventas' } ]

//Añadir al objeto anterior
aDatosFull.push({nombre: 'Elena', profesion: 'Churrero'})
aDatosFull[0].apellido = 'Melavo'
aDatosFull[1].apellido = 'Verdú'
console.log(aDatosFull)