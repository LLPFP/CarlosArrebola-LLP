console.log("Funciona el main.js")

const partidas = [
    {
        avatar: 'https://www.svgrepo.com/show/384672/account-avatar-profile-user-7.svg',
        nick: 'Juan',
        puntos: 255,
        fecha:'25 Enero 2023',
    },
    {
        avatar: 'https://www.svgrepo.com/show/384679/account-avatar-profile-user-3.svg',
        nick: 'Ennard',
        puntos: 540,
        fecha: '04 de Febrero 2023',
    },
    {
        avatar: 'https://www.svgrepo.com/show/384680/account-avatar-profile-user-4.svg',
        nick: 'Cookie',
        puntos: 821,
        fecha: '15 de Junio 2023',
    }
]



const datosPartida={
    avatar: 'https://www.svgrepo.com/show/384675/account-avatar-profile-user-2.svg',
    nick: 'Marcos',
    puntos: 444,
    fecha: '25 de Septiembre 2023',
}


function insertarNuevaPartida(datosPartida){
    console.log("Guardando partida")
    partidas.push(datosPartida)
    console.log("Datos partida:    "+
    " Avatar: " +datosPartida.avatar+
    " Nick: "+ datosPartida.nick +
    " Puntos: " +datosPartida.puntos +
    " Fecha: " + datosPartida.fecha)

}


function pintaDatosPartida(datosPartida){
    console.log("Datos partida:    "+
    " Avatar: " +datosPartida.avatar+
    " Nick: "+ datosPartida.nick +
    " Puntos: " +datosPartida.puntos +
    " Fecha: " + datosPartida.fecha)

    
    let text
    if (confirm(`¿Guardar partida?
    Nick: ${datosPartida.nick} 
    Puntos: ${datosPartida.puntos} 
    Fecha: ${datosPartida.fecha}`) == true) {
        
    insertarNuevaPartida(datosPartida)
    pintaTabla(partidas)

    } else {

    console.log("Oki doki, partida no guardada :).")
    }

   
}

function pintaRanking(){

    const ranking = `<h2 class="text-center text-light">Ranking</h2>
    <table class="table table-dark align-middle">
        <theader>
            <tr class="bg-dark">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </theader>
        <tbody>
            <tr>
                <td class="fs-2">1</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">2</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
            <tr>
                <td class="fs-2">3</td>
                <td><img src="" alt="avatar" /></td>
                <td>ANDER</td>
                <td>1255</td>
            </tr>
        </tbody>
        <tfoot></tfoot>
    </table>`

    // console.log(ranking)

    document.querySelector("#ranking").innerHTML=ranking

}


 

function pintaTabla(partidas){

    let tablaP=`<h2 class="text-center text-light">Partidas</h2>
    <div class="input-group mb-3">
        <input
            type="text"
            class="form-control"
            placeholder="Buscador"
            aria-label="Buscador"
            aria-describedby="button-addon2"
        />
        <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
        >
            <i class="bi bi-x-lg"></i>
        </button>
    </div>

    
    <table class="table table-dark">
        <theader>
            <tr>
                <td></td>
                <td>Nick <i class="bi bi-arrow-up-square"></i></td>
                <td>Puntuación <i class="bi bi-arrow-up-square"></i></td>
                <td>Fecha <i class="bi bi-arrow-up-square"></i></td>
            </tr>
        </theader>

        <tbody>`

        partidas.forEach(datos => {
            tablaP+= `<tr>
            <td><img style="width:30px"src="${datos.avatar}" alt="avatar" /></td>
            <td>${datos.nick}</td>
            <td>${datos.puntos}</td>
            <td>${datos.fecha}</td>
        </tr>`
            
        });


    tablaP+=`</tbody>
    <tfoot>
    </tfoot>
    </table>`


    // console.log(tablaP)

    document.querySelector("#partidas").innerHTML=tablaP


}



