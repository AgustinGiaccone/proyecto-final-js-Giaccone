function saludoDirecto(){
    alert("hola ", fullname)
}

function cambiarnombre(){
    fullname = prompt("ingresa un nuevo nombre:")

}

let age = 21

function unirNombre(){
    debugger
    let nombreConcatenado = "coder" + "house"
    console.log(nombreConcatenado)
}

function calcularunidades(){
    debugger
    let nroaleatorio = 45
    console.log(nroaleatorio)
}

const cerramosClase = function (){
    console.warn("Ya se termino la clase.")
}

cerramosClase()

const devolverresultado = (par1) => {
    return param1 * 1.25
}