
//debugger
//let claseN2 = "control de flujo"
let claseN2 =prompt("ingrese su clase:")
if (claseN2 =="control de flujo"){
    console.log ("bienvenido", claseN2)
} else{
    console.warn("no se reconoce el usuario")
}

//IF - ELSE IF
let edad = prompt("ingrese su edad")

if (edad <= 16){
    console.error("no podes tomar, sos menor de edad")
} else if (edad < 18){
    console.warn("te falta un año de edad para poder tomar")
} else if(edad >= 18){
    console.log("podes tomar")
}

let confirmar = confirm("usted pagara en efectivo?")

if (confirmar){
    console.log("pago a realizar en efectivo")
} else {
    console.log("pago a realizar con tarjeta")
}

let usuario = prompt("ingrese su usuario:")
let password = prompt("ingrese su contraseña:")

if(usuario =="agustin" && password == "1234") {
    console.log("bienvenido a mi restobar")
} else {
    console.error("no se reconoce el usuario y/o contraseña")
}

