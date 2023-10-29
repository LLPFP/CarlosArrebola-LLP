
//Capto todos los botones del html
const btnEnviar1 = document.querySelector("#btnEnviarEj1")
const btnMayus=document.querySelector("#btnMayus")
const btnMinus=document.querySelector("#btnMinus")
const btnBuscar=document.querySelector("#btnBuscar")
const btnNombre=document.querySelector("#btnConvertirNombre")
const btnFecha=document.querySelector("#btnConvertirFecha")
const btnContraseña=document.querySelector("#btnContraseña")
const btnEmoticon=document.querySelector("#btnEmoticon")

//Capto el evento click para ejecutar las funciones
btnEnviar1.addEventListener("click", ej1)
btnMayus.addEventListener("click", ej2Mayus)
btnMinus.addEventListener("click", ej2Minus)
btnBuscar.addEventListener("click", buscadorPalabras)
btnNombre.addEventListener("click", ej3Nombre)
btnFecha.addEventListener("click", ej3Fecha)
btnContraseña.addEventListener("click", ej4)
btnEmoticon.addEventListener("click", ej5)




//Primer ejercicio
function ej1(){
    //Capto los numeros introducidos y luego genero un numero random entre los dos.
    const num1=document.querySelector("#num1").value
    const num1Int=parseInt(num1)
    const num2=document.querySelector("#num2").value
    const num2Int=parseInt(num2)

    //Aquí se hace el random
    let random = Math.floor(Math.random()*(num2Int-num1Int+1))+num1Int
    console.log(random)
    //Lo inserto en el html
    document.querySelector("#numeroAleatorio").innerHTML=random
}

//Segundo ejercicio
function ej2Mayus(){    
    //Capto el texto introducido
    let textoAnalizar=document.querySelector("#textoRecuadro").value
    //Lo transformo en mayusculas
    const nuevoTexto =textoAnalizar.toUpperCase()

    //Lo muestro
    console.log(nuevoTexto)
    document.querySelector("#textoResultado").innerHTML=nuevoTexto;

    //Cuento las palabras a partir de los espacios que hayan en el recuadro
    const contarPalabras= nuevoTexto.split(" ").length
    //Se muestran las palabras
    document.querySelector("#palabrasContador").innerHTML=contarPalabras
}

function ej2Minus(){
    //Capto el texto introducido
    let textoAnalizar=document.querySelector("#textoRecuadro").value
    //Lo transformo en minusculas
    const nuevoTexto = textoAnalizar.toLowerCase()


    //Lo muestro
    console.log(nuevoTexto)
    document.querySelector('#textoResultado').innerHTML=nuevoTexto;

    //Cuento las palabras a partir de los espacios que hayan en el recuadro
    const contarPalabras= nuevoTexto.split(" ").length
    //Se muestran las palabras
    document.querySelector("#palabrasContador").innerHTML=contarPalabras
}

function buscadorPalabras() {
    // Obtener la palabra a encontrar del elemento con id "inputBuscar"
    const palabraAEncontrar = document.querySelector("#inputBuscar").value;
    console.log(palabraAEncontrar); // Imprimir la palabra a buscar en la consola

    // Obtener el texto en el que se realizará la búsqueda del elemento con id "textoRecuadro"
    const textoBuscar = document.querySelector("#textoRecuadro").value;
    console.log(textoBuscar); // Imprimir el texto en la consola

    // Realizar la búsqueda y contar coincidencias de la palabra en el texto
    // Utiliza el método split para dividir el texto en subcadenas y contar coincidencias
    console.log('Match!: ', textoBuscar.split(`${palabraAEncontrar}`).length - 1);

    // Almacenar el número de coincidencias en la variable coincidencias
    const coincidencias = textoBuscar.split(`${palabraAEncontrar}`).length - 1;

    // Actualizar el contenido del elemento con id "contadorCoincidencias" con el número de coincidencias
    document.querySelector("#contadorCoincidencias").innerHTML = coincidencias;
}



//Tercer ejercicio
function ej3Nombre(){
    //Capto el nombre
    const nombreUpper=document.querySelector("#nombreCaptar").value
    //Lo convierto en mayúsculas
    const nuevoNombre =nombreUpper.trim().toUpperCase()


    //El nombre final, hacemos el replace de los espacios vacíos por un guión.
    const nombreFinal= nuevoNombre.replace(" ", '-');


    //Lo muestro
    console.log(nombreFinal)

    document.querySelector("#nombreConvertido").innerHTML=nombreFinal;

}


function ej3Fecha(){
    //Capto la fecha introducida
    const nuevaFecha=document.querySelector("#fechaCaptar").value

    //Reemplazo las "/" por "-"
    const fechaFinal= nuevaFecha.replaceAll("/", '-');

    //Lo muestro
    console.log(fechaFinal)

    document.querySelector("#fechaConvertido").innerHTML=fechaFinal;

}

//Ejercicio 4
function ej4(){
    //Creo las letras para la contraseña
    let contra = '';

    //Bucle para que vaya captando un numero aleatorio el cual usaremos para que escoga que letra captar
 
    for(i=0;i<=9;i++){
        const random=Math.floor(Math.random()*26)
        const mayus=Math.random() < 0.5
        const letraRandomizada= mayus ? 65:97
        contra+=String.fromCodePoint(random+letraRandomizada)

    }

    //Se muestra por el input
    const inputRes= document.getElementById("pass")
    inputRes.value=contra

}

//Ejercicio 5
function ej5(){

        // Lista de emoticonos
        const primEmoticon=0x1F600;
        const ultEmoticon=0x1F3F4;

        //Random de emojis principio a final
        const emoticonRand = Math.floor(Math.random() * (primEmoticon - ultEmoticon + 1)) + primEmoticon
        //CodePoint 
        const emojiEscogido = String.fromCodePoint(emoticonRand)
    
        document.querySelector("#emoticon").innerHTML = emojiEscogido
      


}