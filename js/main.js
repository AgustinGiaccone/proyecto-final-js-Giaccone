/*
se inicializan las constantes y variables
*/
const lista = document.querySelector('#listado')
var carritoAbierto = false
var total = 0
var carrito = []
const titulo = document.getElementById("titulo")
const listadoCarrito = document.getElementById("listadoCarrito")

/*se definen los botones que al hacer click otros elementos en pantalla
*/
const botonComprar = document.getElementById('botonCarrito')
    botonComprar.addEventListener("click", ()=> {
        document.getElementById('carrito').style.display = 'block'; })

const botonContador = document.getElementById('contadorCarrito')
    botonContador.addEventListener("click", ()=> {
        document.getElementById('carrito').style.display = 'block'; })

const botonCerrar = document.getElementById('cerrarCarrito')
    botonCerrar.addEventListener("click", ()=> {
        document.getElementById('carrito').style.display = 'none'; })

/* Recorre el array que obtine de productos.json,
crea la tarjeta utilizando los parametros de cada producto,
agrega eventos de click al elemento a "agregar al carrito"
que llama a la funcion agregarAlCarrito() pasando como parametro
los obtenidos en el array
*/
const mostrarProductos = async () => {
    const resp = await fetch('../productos.json')
    const data = await resp.json()
    data.forEach((producto) => {
        const row = document.createElement("div")
            row.className = "row"
        const fourColumns = document.createElement("div")
            fourColumns.className = "four columns"
        const card = document.createElement("div")
            card.className = "card"
        const img = document.createElement("img")
            img.src = `${producto.imagen}`
            img.className = "u-full-width"
        const infoCard = document.createElement("div")
            infoCard.className = "info-card"
        const h4 = document.createElement("h4")
            h4.innerText = `${producto.nombre}`
        const p1 = document.createElement("p")
            p1.innerText = `${producto.info}`
        const precio = document.createElement("p")
            precio.className = "precio"
            precio.innerText = `$ ${producto.precio}`
        const comprar = document.createElement("a")
            comprar.innerText = "Agregar al carrito"
            comprar.id = "pedido"
            comprar.addEventListener("click", ()=> {
                agregarAlCarrito(`${producto.nombre}`,`${producto.precio}`,`${producto.emoji}`)})
            row.appendChild(fourColumns)
            fourColumns.appendChild(card)
            card.appendChild(img)
            card.appendChild(infoCard)
            infoCard.appendChild(h4)
            infoCard.appendChild(p1)
            infoCard.appendChild(precio)
            infoCard.appendChild(comprar)
            lista.append(row)
            comprarBoton()
            botonVaciar()
            preciototal()
    })
}
/*
Recibe como argumento el nombre, precio y emoji del producto
cuando se agrega al carrito un producto.
suma el costo del producto, lo agrega a la array carrito,
actualiza el contador y crea el elemtento HTML en el div carrito
*/
function agregarAlCarrito(producto,precio,emoji) {
    mensajeAgregarCarrito(producto)
    sumarTotal(parseInt(precio))
    carrito.push(producto)
    contadorCarrito()
    const liNuevoProducto = document.createElement("li")
        liNuevoProducto.className = "collection-item red-text"
        liNuevoProducto.innerHTML = "<b>$" + precio + " " + producto + " " + emoji +"</b><b id=eliminarProducto class=textoRojo> X</b>"
        liNuevoProducto.id = producto
        listadoCarrito.append(liNuevoProducto)
        const eliminarProducto = document.querySelectorAll('b.textoRojo')
        eliminarProducto[eliminarProducto.length -1].addEventListener("click", ()=> { removerDelCarrito(producto,precio)
})}

/*
Elimina el producto selecionado en el carrito,
y descuenta el precio del producto eliminado
*/
function removerDelCarrito(producto,precio) {
    const productoAremover = document.getElementById(`${producto}`)
        productoAremover.remove()
        item = carrito.indexOf(producto)
        if (item >= 0) {
        carrito.splice(item, 1)
        contadorCarrito()
        sumarTotal(0-precio)
        }
}
/*
Modifica el atrubuto innertex del elemento con el id contadorCarrito
por la cantidad de elementos que tiene el array carrito.
Ejecuta las funciones que validan la cantidad de elementos en el carrito.
*/
function contadorCarrito(){
    document.getElementById('contadorCarrito').innerText = carrito.length;
    comprarBoton()
    botonVaciar()
    preciototal()
}

/*
Muestra en pantalla el elemento id botonComprar
cuando se encuentra algun elemento en el arrry carrito, y
genera un mensaje flotante al precionar este boton
*/
function comprarBoton(){
    const sweetComprar = document.getElementById('botonComprar')
if(carrito.length > 0){
    sweetComprar.style.display = 'block'
}else{
    sweetComprar.style.display = 'none'
}
sweetComprar.addEventListener('click', function(){
    Swal.fire({
        toast: false,
        icon: 'success',
        title: "Gracias por su compra, espero que la difrute",
        position: 'top',
        background:'rgb(12, 99, 70)',
        color: 'white',
        confirmButtonText: "Confirmar",
        preConfirm: () => {location.reload()
            }})
        }
    )}
/*
Muestra en pantalla el elemento id botonVaciar
cuando se encuentra algun elemento en el arrry carrito
*/
function botonVaciar(){
    const sweetVaciar = document.getElementById('botonVaciar')
if(carrito.length > 0){
    sweetVaciar.style.display = 'block'
}else{
    sweetVaciar.style.display = 'none'
}
}
/*
Recorre el array carrito y elimina cada uno de los elementos del DOM
que tienen como id el nombre del producto al iterar.
Vacia el array carrito, vacia la variable total y ejecuta contador
carrito para actualizar el contador.
*/
function vaciarCarrito(){
    carrito.forEach(producto => {
        document.getElementById(`${producto}`).remove()
    }
    )
    carrito=[]
    total=0
    contadorCarrito()
}
/*
suma los precios de los productos selecionados y lo modifica en el DOM.
*/
function sumarTotal(precio){
    total = total+precio
    document.getElementById("total").innerText="Total: $"+total
}
/*
Muestra en pantalla el elemento html "precio" cuando
el array carrito es mayor a cero
*/
function preciototal(){
    const total = document.getElementById('total')
if(carrito.length > 0){
    total.style.display = 'block'
}else{
    total.style.display = 'none'
}
}
/*
Muestra un mensaje flotante al agregar un producto al carrito.
*/
function mensajeAgregarCarrito(producto){
    let unidad = ""
    //se valida que producto se compra para usar el articulo correcto.
    if(producto == "Papas"){
        unidad = "unas"
    } else{
        unidad = "una"
    }
    Swal.fire({
        toast: true,
        icon: 'success',
        title: 'Se agrego '+ unidad + " " + producto.toLowerCase() +' al carrito',
        position: 'top',
        timer: 1500,
        showConfirmButton: false,
        background:'rgb(12, 99, 70)',
        color: 'white'
})
}

mostrarProductos()