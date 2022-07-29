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

/* recorre el array que obtine de productos.json,
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
                agregarAlCarrito(`${producto.nombre}`,`${producto.precio}`,`${producto.emoji}`),
                Swal.fire({
                    toast: true,
                    icon: 'success',
                    title: 'Se agrego una/ '+`${producto.nombre}`+' al carrito',
                    position: 'top',
                    timer: 1500,
                    showConfirmButton: false,
                    background:'rgb(12, 99, 70)',
                    color: 'black'
            })} )
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
recibe como argumento el nombre, precio y emoji del producto
cuando se agrega al carrito un producto.
suma el costo del producto, lo agrega a la array carrito,
actualiza el contador y crea el elemtento HTML en el div carrito
*/
function agregarAlCarrito(producto,precio,emoji) {
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
elimina el producto selecionado en el carrito,
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

function contadorCarrito(){
    document.getElementById('contadorCarrito').innerText = carrito.length;
    comprarBoton()
    botonVaciar()
    preciototal()
}

/*
se define el boton comprar los producto generenado un sweetalert
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
        toast: true,
        icon: 'success',
        title: 'Gracias por su compra espero que la difrute',
        position: 'top',
        // timer: 2500,
        background:'rgb(12, 99, 70)',
        color: 'white'
    })})
}
/*
se define el borton vaciar que se ejeuta junto con la funcion vaciarCarrito()
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
elimina todo los productos que se encuantran el el carrito
*/
function vaciarCarrito(){
    carrito.forEach(producto => {
        document.getElementById(`${producto}`).remove()
        carrito=[]
    }
    )
    total=0
    contadorCarrito()
}
/*
suma los precios de los productos selecionados
*/
function sumarTotal(precio){
    total = total+precio
    document.getElementById("total").innerText="Total: $"+total
}
/*
se muestra en pantalla el precio obtenidos por los productos siempre y cuando se encuenten en el carrito
*/
function preciototal(){
    const total = document.getElementById('total')
if(carrito.length > 0){
    total.style.display = 'block'
}else{
    total.style.display = 'none'
}
}

mostrarProductos()