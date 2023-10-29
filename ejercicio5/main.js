console.log("Funciona el main.js")

//capto los botones
const btnJg1 = document.querySelector("#btnJugador1")
const btnJg2 = document.querySelector("#btnJugador2")

// let para permitir modificaciones
let fichaJg1 = 1;  
let fichaJg2 = 1;  
let retroceso= 1;

const ficha1=`<div id="fichaJg1" class="ficha jugador1"></div>`
const ficha2=`<div id="fichaJg1" class="ficha jugador2"></div>`




//Capto el evento click para moverFicha
btnJg1.addEventListener("click", moverFicha1)
btnJg2.addEventListener("click", moverFicha2)




//Función dadoRandom que genera un numero aleatorio entre 1-6 para mover la ficha
function dadoRandom1(){
    let dado= Math.floor(Math.random()*(6))+1
    fichaJg1=fichaJg1+dado

}

//Función dadoRandom que genera un numero aleatorio entre 1-6 para mover la ficha
function dadoRandom2 (){
    let dado2= Math.floor(Math.random()*(6))+1
    fichaJg2=fichaJg2+dado2

}




function moverFicha1(){

    let posicion= `#casillas1 #c${fichaJg1}`

    //Dejamos vació la primera casilla
    document.querySelector(posicion).innerHTML=''
    
    //Cargamos la función dadoRandom1 que genera un nuevo movimiento al jugador
    dadoRandom1();
    
    //SI el jugador no ha llegado a la casilla 20 todavía, imprime la ficha en la nueva posición
    if(fichaJg1<20){
        posicion= `#casillas1 #c${fichaJg1}`
        document.querySelector(posicion).innerHTML=ficha1
    }

    //SI la ficha sobrepasa la casilla 20, retrocede la cantidad que ha marcado el random hacia atrás con tal de seguir tirando hasta llegar al 20 exactos
    if(fichaJg1>20){
        fichaJg1=fichaJg1-19
        posicion= `#casillas1 #c${fichaJg1}`
        document.querySelector(posicion).innerHTML=ficha1

    }

    //Si ficha jg1 es igual a la posición de ficha 2, retrocede
    if(fichaJg1==fichaJg2){
        posicion= `#casillas2 #c${fichaJg2}`
        document.querySelector(posicion).innerHTML=''
        fichaJg2 = 1
        posicion= `#casillas2 #c${numCasillaF2}`
        document.querySelector(posicion).innerHTML = ficha2
    }


    //Si la ficha jg1 llega a 20 gana.
    if(fichaJg1==20){
        alert("¡Felicidades jugador 1, has ganado!")
        window.location.reload()
    }

}


function moverFicha2(){

    let posicion= `#casillas2 #c${fichaJg2}`
    //Dejamos vació la primera casilla
    document.querySelector(posicion).innerHTML=''
    
    //Cargamos la función dadoRandom2 que genera un nuevo movimiento al jugador
    dadoRandom2();
    
    //SI el jugador no ha llegado a la casilla 20 todavía, imprime la ficha en la nueva posición
    if(fichaJg2 < 20){
        posicion= `#casillas2 #c${fichaJg2}`
        document.querySelector(posicion).innerHTML=ficha2
    }   



    if(fichaJg2>20){
        fichaJg2=fichaJg2-19
        posicion= `#casillas2 #c${fichaJg2}`
        document.querySelector(posicion).innerHTML=ficha2

    }

    if(fichaJg2==fichaJg1){
        posicion= `#casillas1 #c${fichaJg1}`
        document.querySelector(posicion).innerHTML=''
        fichaJg1 = 1
        posicion= `#casillas1 #c${fichaJg1}`
        document.querySelector(posicion).innerHTML = ficha1
    }


    //Si la ficha jg2 llega a 20 gana.

    if(fichaJg2==20){
        alert("¡Felicidades jugador 2, has ganado!")
        window.location.reload()
    }


}