//PRIMER EJERCICIO
const palta = document.querySelector('.img-palta')

palta.addEventListener('click', () => {
    if(palta.style.border == '2px solid red'){
        console.log("condicion 1")
        palta.style.border = 'none'
    }
    else{
        console.log("condicion 2")
        palta.style.border = '2px solid red'
    }
})

//SEGUNDO EJERCICIO
// Si el total de stickers es  menor o igual =< a 10 debe indicar cuantos stickers llevo
// Si el total de stickers es mayor > a 10 debe indicar "Llevas demasiados stickers"

const input1 = document.querySelector('#sticker-uno')
const input2 = document.querySelector('#sticker-dos')
const input3 = document.querySelector('#sticker-tres')
const btnVerificar = document.querySelector('.btn-sticker')
const respuestaParrafo = document.querySelector('.parrafo-sticker')

btnVerificar.addEventListener('click', () => {
   const suma = Number(input1.value) + Number(input2.value) + Number(input3.value)

   console.log(input1.value)
   console.log(input2.value)
   console.log(input3.value)

   if(suma <= 10){
    respuestaParrafo.innerHTML = 'Llevas ' +  suma + ' stickers'
   } else {
    respuestaParrafo.innerHTML = 'Llevas demasiados stickers'
   }
})

//TERCER EJERCICIO

// Elementos DOM
const select1 = document.querySelector('#primera-opcion')
const select2 = document.querySelector('#segunda-opcion')
const select3 = document.querySelector('#tercera-opcion')
const respuestaClave = document.querySelector('.parrafo-clave')
const btnIngresar = document.querySelector('.btn-opciones')

//Claves
const clave_1 = '911'
const clave_2 = '714'

btnIngresar.addEventListener('click', () => {
    const clave = select1.value + select2.value + select3.value
    if (clave === clave_1) {
        respuestaClave.innerHTML = 'Contraseña 1 correcta'
    } else if (clave === clave_2) {
        respuestaClave.innerHTML = 'Contraseña 2 correcta'
    } else {
        respuestaClave.innerHTML = 'Contraseña incorrecta'
    }
    console.log(select1.value)
})