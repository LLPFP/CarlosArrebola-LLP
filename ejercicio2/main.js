
const botonFicha = document.querySelector("#botonFicha")

botonFicha.addEventListener("click", crearFicha)


function crearFicha(event){
    const nombreCompleto = document.querySelector('#nombreCompleto')

    const nombre = document.querySelector('#nombre')
    const valorNombre = nombre.value
    const apellido1 = document.querySelector('#apellido1')
    const valorApellido1 = apellido1.value
    const apellido2 = document.querySelector('#apellido2')
    const valorApellido2 = apellido2.value
    const dni = document.querySelector('#dni')
    const valorDni = dni.value
    const imagen = document.querySelector('#imagen')
    const valorImagen = imagen.value
    event.preventDefault()


    

    resultadoNombreCompleto = " " + valorNombre + " " + valorApellido1 + " " + valorApellido2
    console.log(resultadoNombreCompleto)

    document.querySelector("#nombreCompleto").innerHTML = resultadoNombreCompleto
    document.querySelector("#dniFinal").innerHTML = valorDni
    document.querySelector("img").setAttribute("src", valorImagen)


}