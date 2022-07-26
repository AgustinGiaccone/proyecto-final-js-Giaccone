
// toastSA ("BIENVENIDO A MI PAGINA WEB")

// let NombreCompleto
// let nombre = "coder"
// let apellido = "house"
// let esp = " "
// let años = 21
// let año = 2021
// let plataforma = nombre + apellido
// const curso = "javascrips"

// let Nro1 = 20
// let Nro2 = 60

// let resultado1 = Nro1 / Nro2
// let resultado2

// let NombreUsuario = prompt("INGRESA TU NOMBRE")
// let apellidoUsuario = prompt("INGRESE SU APELLIDO")
// NombreCompleto = NombreUsuario + esp + apellidoUsuario
// alert("Bienvenido: " + NombreUsuario + esp + apellidoUsuario)

// resultado2 = confirm("Estas seguros que deseas continuar?")

// console.log("Hola: ", plataforma)
// console.info("nombre ingresado:", NombreCompleto)
// console.warn("este mensaje requiere de atencion")
// console.error("ahora si estas en problemas")

const productos = ['Hamburguesa Rellena De Queso Envuelta En Tocino', 'Brochet de hamburguesa', 'Hamburguesa de mar y tierra', 'Hamburguesa a la parrilla con huevo estrellado', 'Hamburguesa con Salsa de 3 Quesos', 'Hamburguesa hawaiana']
const carrito = []
const titulo = document.getElementById("titulo")
const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.getElementById("listadoCarrito")

titulo.innerText = "RESTO-BAR"

const h1 = document.querySelector("h1")
        h1.onclick = ()=> {
            alert("Desea ir al Inicio?")
        }
        h1.addEventListener("click", ()=>{
            alert("Desea ir al Inicio?")
        })

function operadorTernario (){
    let userName = "RESTO-BAR"
let mensaje = userName === "RESTO-BAR" ? "Bienvenid@ a nuestro Humilde " + userName : "No se reconoce el usuario."
    alert (mensaje)
}