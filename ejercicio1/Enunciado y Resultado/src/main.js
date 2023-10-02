// console.log("Hola desde main.js")

// capturar el boton
const botonSumar = document.querySelector("#botonSumar")
const botonRestar = document.querySelector("#botonRestar")
const botonMultiplicar = document.querySelector("#botonMulti")
// Capturamos el evento click

botonSumar.addEventListener("click", sumar)
botonRestar.addEventListener("click", restar)
botonMultiplicar.addEventListener("click", multiplicar)
// función sumar: suma valores de los inputs y los muestra por consola

function sumar(event){
    // Capturo el elemento input
    const input1 = document.querySelector('#input1')
    //Capturo su valor
    const valorInput1 = input1.value
    const valorInputNum = parseInt(valorInput1)


    const input2 = document.querySelector('#input2')  
    const valorInput2 = input2.value
    const valorInputNum2 = parseInt(valorInput2)


    event.preventDefault()
    console.log('valor input1: ', valorInput1)
    console.log('valor input 2: ', valorInput2)
    const resultado=valorInputNum+valorInputNum2
    
    console.log("suma de los inputs: ", resultado)
    
    console.log("El resultado de la multiplicación es: ", resultado)

    document.querySelector("#resultadoFinal").value = resultado

}

function restar(event){
    event.preventDefault()

    const input1 = document.querySelector("#input1")
    const valorInput1 = input1.value
    const valorInputNum = parseInt(valorInput1)


    const input2 = document.querySelector("#input2")
    const valorInput2 = input2.value
    const valorInputNum2 = parseInt(valorInput2)


    const resultado = valorInputNum-valorInputNum2
    console.log("El resultado de la resta es: ", resultado)

    console.log("El resultado de la multiplicación es: ", resultado)

    document.querySelector("#resultadoFinal").value = resultado

}


function multiplicar(event){
    event.preventDefault()

    const input1 = document.querySelector("#input2")
    const valorInput1 = input1.value
    const valorInputNum = parseInt(valorInput1)

    const input2 = document.querySelector("#input2")
    const valorInput2 = input2.value
    const valorInputNum2 = parseInt(valorInput2)

    
    const resultado = valorInputNum * valorInputNum2
  

    console.log("El resultado de la multiplicación es: ", resultado)

    document.querySelector("#resultadoFinal").value = resultado

}