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

function cargarProductos() {
    listadoFrutas.innerHTML = ""
    for (const producto of productos) {
        const li = document.createElement("li")
              li.className = "collection-item blue-text"
              li.innerText = producto
              li.id = producto + "Prod"
              li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
              listadoFrutas.append(li)
    }
}

cargarProductos()

function agregarAlCarrito(prod) {
    
    if (prod.trim() !== "") {
        carrito.push(prod)
        guradoCarrito()
        const liNuevoProducto = document.createElement("li")
              liNuevoProducto.className = "collection-item red-text"
              liNuevoProducto.innerText = prod
              liNuevoProducto.id = prod + "EnCarrito"
              liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) }) 
              listadoCarrito.append(liNuevoProducto)
    }
}


function removerDelCarrito(prod) {
    const productoAremover = document.getElementById(`${prod}`)
          productoAremover.remove()
          item = carrito.indexOF(productoAremover.innerText)
          if (item >= 0) {
            carrito.splice(item, 1)
            guradoCarrito()
          }
}
function guradoCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}


function reuperoCarrito(){
    let miCarrito
    if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
        miCarrito.forEach(hambur => {
            carrito.push(hambur)
        });
    }
}

reuperoCarrito()
