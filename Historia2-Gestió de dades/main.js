console.log("Funciona el main.js")


//Tasca1
function modificaNick(nick) {

    if (nick.trim() === "") {
    //Alert para indicar que no puede estar vacío
      alert("El nick no pot estar en blanc");
      //Devuelve null
      return null;
    } else {

      // Eliminamos espacios delante y detrás del texto
      nick = nick.trim();
      
      // Reemplazamos los espacios por "_"
      nick = nick.replace(/\s+/g, "_");
      
      // Convertimos en mayúsculas
      nick = nick.toUpperCase();

      //Devuelve Nick
      return nick;
    }
  }
  
function modificaData(data){

    //Hago el array de los meses

    const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
    
    //Split dos partes de fecha y hora
    const partes = data.split("T");

    //Split las partes de la fecha
    const fechaPartes = partes[0].split("/");

    //Split la hora
    const horaPartes = partes[1].split(":");
    
    //Indicamos que el primer split es el año
    const year = fechaPartes[0];

    //Mes
    const month = meses[parseInt(fechaPartes[1])];

    //Día
    const day = fechaPartes[2];

    //Partes horas
    const time = horaPartes[0] + ":" + horaPartes[1] + ":" + horaPartes[2];

    //Devolvemos valores a la consola
    return `${day} ${month} ${year} - ${time}`;

}
  
function modificaData2(objecteDate){
  
    const year = objecteDate.getFullYear().toString().slice(-2); // Obté els últims dos dígits de l'any
    const month = String(objecteDate.getMonth() + 1).padStart(2, "0"); // El mes comença des de 0
    const day = String(objecteDate.getDate()).padStart(2, "0");// Obtiene el día
    const hours = String(objecteDate.getHours()).padStart(2, "0"); //Obtiene las horsa
    const minutes = String(objecteDate.getMinutes()).padStart(2, "0");//Obtiene los minutos
    const seconds = String(objecteDate.getSeconds()).padStart(2, "0");//Obtiene los segundos

    //Devuelve los datos por consola
    return `${year}/${month}/${day}T${hours}:${minutes}:${seconds}`;
}

function dias(dataText){
    //Splitea el texto en dos partes
        const parts = dataText.split("T");
        //Si no son dos partes, mostrara el mensaje incorrecto
        if (parts.length !== 2) {
            return {
                error: true,
                missatge: "El format no és correcte"
              };
            }
      
        //Splitea en dos partes en fecha y luego en la hora
        const fecha = parts[0].split("/");
        const hora = parts[1].split(":");
      
        //Si la parte de fecha o la de hora no tiene 3 partes, muestra error
        if (fecha.length !== 3 || hora.length !== 3) {
            return {
                error: true,
                missatge: "El format no és correcte"
              };
            }

        //Constantes de valores año, mes, dia y horas, minutos segundos.
        const anio = parseInt(fecha[0]);
        const mes = parseInt(fecha[1]) - 1; // El mes comienza desde 0
        const dia = parseInt(fecha[2]);
        const horas = parseInt(hora[0]);
        const minutos = parseInt(hora[1]);
        const segundos = parseInt(hora[2]);
      
        //Los datos ingresados se comparan con la fecha actual y se hace el calculo para mostrar cuantos días han pasado
        const dataIngresada = new Date(anio, mes, dia, horas, minutos, segundos);
        const ahora = new Date();
        const diferencia = ahora - dataIngresada;
        const milisegundosPorDia = 1000 * 60 * 60 * 24;
        const diasTranscurridos = Math.floor(diferencia / milisegundosPorDia);
        
        //Devuelve la variable con el resultado
        return diasTranscurridos;
        
}



// Definimos un objeto 'ls' que contendrá dos métodos para gestionar datos en el almacenamiento local.
const ls = {

  // Este método 'setDades' toma un objeto 'dados' como argumento, lo convierte en una cadena JSON y lo almacena en el localStorage bajo la clave "tetris_dades".
  setDades(dades) {
    const json = JSON.stringify(dades);
    localStorage.setItem("tetris_dades", json);
    return true; // Devuelve true para indicar que los datos se han almacenado con éxito.
  },

  // Este método 'getDades' recupera los datos almacenados bajo la clave "tetris_dades" del localStorage. Si no hay datos, devuelve un objeto vacío.
  getDades() {
    const json = localStorage.getItem("tetris_dades");
    if (json === null) {
      return {}; // Si no hay datos, devuelve un objeto vacío.
    }
    return JSON.parse(json); // Si hay datos, los parsea desde JSON y los devuelve.
  },
};

// A continuación, se define un objeto 'dades' que contiene información de partidas y rankings.

// Luego, se llama al método 'setDades' del objeto 'ls' para almacenar los datos en el localStorage.
const dades = {
  partides: [
    {
      avatar: "imagen1.png",
      nick: "MANOLO",
      puntuacion: 124561,
      fecha: "23/12/05T12:12:00",
    },
    {
      avatar: "imagen2.png",
      nick: "PEDRA",
      puntuacion: 1561,
      fecha: "23/09/05T13:12:00",
    },
  ],
  ranking: [
    {
      avatar: "imagen1.png",
      nick: "MANOLO",
      puntuacion: 124561,
    },
    {
      avatar: "imagen2.png",
      nick: "PEDRA",
      puntuacion: 1561,
    },
  ],
};
ls.setDades(dades);

// Se recupera los datos almacenados llamando al método 'getDades' del objeto 'ls' y se almacenan en 'dadesRecuperades'.
const dadesRecuperades = ls.getDades();

// Finalmente, se imprime 'dadesRecuperades' en la consola.
console.log(dadesRecuperades);

// Se define un objeto 'partida' que contiene información de una partida individual.
const partida = {
  avatar: "imagen2.png",
  nick: "PEDRA",
  puntuacion: 1561,
  fecha: "23/09/05T13:12:00",
};


const registraPartida = (partida) => {
  // Captura les dades del localstorage
  const dades = ls.getDades();

  // Afegeix la partida a l'array partidas
  dades.partides.push(partida);

  // Desa les dades al localstorage
  ls.setDades(dades);
};

// Comprova que el localstorage s'ha actualitzat correctament
const dadesRecuperades2 = ls.getDades();
