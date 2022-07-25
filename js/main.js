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
              liNuevoProducto.className = "collection-item green-text"
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