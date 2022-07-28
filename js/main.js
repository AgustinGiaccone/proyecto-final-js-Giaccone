const lista = document.querySelector('#listado')
var carritoAbierto = false

const pedirPosts = async () => {
    const resp = await fetch('../productos.json')
    const data = await resp.json()
    data.forEach((producto) => {
        const div1 = document.createElement("div")
            div1.className = "row"
        const div2 = document.createElement("div")
            div2.className = "four columns"
        const div3 = document.createElement("div")
            div3.className = "card"
        const img = document.createElement("img")
            img.src = `${producto.imagen}`
            img.className = "u-full-width"
        const div4 = document.createElement("div")
            div4.className = "info-card"
        const h4 = document.createElement("h4")
            h4.innerText = `${producto.nombre}`
        const p1 = document.createElement("p")
            p1.innerText = `${producto.info}`
        const precio = document.createElement("p")
            precio.className = "precio"
            precio.innerText = `$ ${producto.precio}`
        const comprar = document.createElement("a")
            comprar.addEventListener("click", ()=> { agregarAlCarrito(`${producto.nombre}`,`${producto.precio}`,`${producto.emoji}`)} )
            comprar.innerText = "Agregar al carrito"
            div1.appendChild(div2)
            div2.appendChild(div3)
            div3.appendChild(img)
            div3.appendChild(div4)
            div4.appendChild(h4)
            div4.appendChild(p1)
            div4.appendChild(precio)
            div4.appendChild(comprar)
            lista.append(div1)
            // li.innerText = `${post.producto}`
            // li.id = `${post.producto}` + "Prod"
            // li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
            // lista.append(li)
    })
}

pedirPosts()

// const productos = ["hamburguesa", "papita", "soda"]
var carrito = []
const titulo = document.getElementById("titulo")
// const listadoFrutas = document.getElementById("listadoFrutas")
const listadoCarrito = document.getElementById("listadoCarrito")


// titulo.innerText = "RESTO-BAR"

// const h1 = document.querySelector("h1")
//         h1.onclick = ()=> {
//             alert("Desea ir al Inicio?")
//         }
//         h1.addEventListener("click", ()=>{
//             alert("Desea ir al Inicio?")
//         })

// function operadorTernario (){
//     let userName = "RESTO-BAR"
// let mensaje = userName === "RESTO-BAR" ? "Bienvenid@ a nuestro Humilde " + userName : "No se reconoce el usuario."
//     alert (mensaje)
// }

// function cargarProductos() {
//     listadoFrutas.innerHTML = ""
//     for (const producto of productos) {
//         const li = document.createElement("li")
//               li.className = "collection-item blue-text"
//               li.innerText = producto
//               li.id = producto + "Prod"
//               li.addEventListener("click", ()=> { agregarAlCarrito(`${li.innerText}`) } )
//               listadoFrutas.append(li)
//     }
// }

// cargarProductos()

function agregarAlCarrito(producto,precio,emoji) {
    carrito.push(producto)
    contadorCarrito()
    // guradoCarrito()
    const liNuevoProducto = document.createElement("li")
        liNuevoProducto.className = "collection-item red-text"
        liNuevoProducto.innerText = " $" + precio + " " + producto + " " + emoji
        liNuevoProducto.id = producto
        liNuevoProducto.addEventListener("dblclick", ()=> { removerDelCarrito(`${liNuevoProducto.id}`) })
        listadoCarrito.append(liNuevoProducto)

}


function removerDelCarrito(producto) {
    const productoAremover = document.getElementById(`${producto}`)
        // productoAremover = "papas)"
        productoAremover.remove()
        item = carrito.indexOf(producto)
        if (item >= 0) {
        carrito.splice(item, 1)
        contadorCarrito()
        // guradoCarrito()
        }
}
function guradoCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}


// function reuperoCarrito(){
//     let miCarrito
//     if (miCarrito = JSON.parse(localStorage.getItem("carrito"))) {
//         miCarrito.forEach(hambur => {
//             carrito.push(hambur)
//         });
//     }
// }

// reuperoCarrito()

function contadorCarrito(){
    document.getElementById('contador_carrito').innerText = carrito.length;
}
contadorCarrito()

const botonComprar = document.getElementById('botonCarrito')
    botonComprar.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'block'; })

const botonContador = document.getElementById('contador_carrito')
    botonContador.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'block'; })

const botonCerrar = document.getElementById('cerrarCarrito')
    botonCerrar.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'none'; })