console.log("Funciona el main.js")


const botonFicha = document.querySelector("#botonFicha")

//Array
const bd = []


   
botonFicha.addEventListener("click", pintaTablas)



function recogerDatos(){

    const nombre = document.querySelector('#nombre')
    const valorNombre = nombre.value
    const apellido1 = document.querySelector('#ap1')
    const valorApellido1 = apellido1.value
    const apellido2 = document.querySelector('#ap2')
    const valorApellido2 = apellido2.value
    const dni = document.querySelector('#dni')
    const valorDni = dni.value
    const imagen = document.querySelector('#imagen')
    const valorImagen = imagen.value
    const apCompleto= valorApellido1+ " "+ valorApellido2


    const resultadoNombreCompleto = " " + valorNombre + " " + valorApellido1 + " " + valorApellido2

       

    // Creo el objeto con los valores
     const usuario = {
        valorNombre,
        apCompleto,
        valorDni,
        valorImagen
    }

       //Meto en el array el objeto usuario con el push
       bd.push(usuario)




    document.querySelector("#nombreCompleto").innerHTML = resultadoNombreCompleto
    document.querySelector("#dniFinal").innerHTML = valorDni
    document.querySelector("img").setAttribute("src", valorImagen)


   

}


    

function pintaTablas(event){
    recogerDatos()
    event.preventDefault()


    
    console.log(bd)

    //Creo la lista para empezar a hacer la ficha del usuario introducido, con un tr y un td con el valor = 1
    //Uso el bucle forEach para ir mostrando cada dato del usuario 
   
    
    let listado=``

    bd.forEach(element =>{
        listado+= `<tr><td>1</td>
        <td><img width="30" src="${element.valorImagen}" alt=""></td>
        <td>${element.valorNombre}</td>
        <td>${element.apCompleto}</td>
        <td>${element.valorDni}</td>
        </tr>`

    });

    document.querySelector('#fichas').innerHTML=listado




    
}