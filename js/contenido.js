const contenidoDOM = document.querySelector("#contenido")
const cargandoDOM = document.querySelector("#cargando")

const URL = `js/usuarios.json`
//const URL = 'http://localhost:3050/trailerflix/'
//const URL = `https://api.algunservidorremoto.com.au/pelis.json`

/*
AJAX

const xhr = new XMLHttpRequest()

$.AJAX()

FETCH()

*/
const retornoCardContenido = (contenido)=> {
    //debugger
    const{nombre, apellido, edad} = contenido
    return `<ul class="usuariort">
    <li>${nombre}</li>
    <li>${apellido}</li>
    <li>${edad}</li>
    </ul>`
 }
 
 const retornoCardError = ()=> {
    return `<div class="center white-text"> 
                <br><br><br><br> 
                <h4>El contenido parece no estar disponible. Intente nuevamente en unos minutos.</h4> 
                <br><br> 
                <i class="large material-icons">sentiment_very_dissatisfied</i> 
                <br><br> 
            </div>`
 }
 

 
          const obtenerContenidoUSR = (URL) => {
            let cardsAmostrar = ""
            // debugger
            fetch(URL)
            .then((response)=> response.json() )
            .then((data)=>{
                 console.table(data)
                })
        }
        //             for (contenido of  data)
        //                 cardsAmostrar += retornousrt(contenido)
        //                 URL.innerHTML= cardsAmostrar
        //     })
        //     .catch((error)=> URL.innerHTML= retornoCardError)
         






















































