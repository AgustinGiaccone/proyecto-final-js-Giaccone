const lista = document.querySelector('#listado')
var carritoAbierto = false
var total = 0

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
            comprar.id = "pedido"
            comprar.addEventListener("click", ()=> { agregarAlCarrito(`${producto.nombre}`,`${producto.precio}`,`${producto.emoji}`),
            Swal.fire({
                toast: true,
                icon: 'success',
                title: 'Se agrego al carrito',
                // animation: false,
                position: 'top',
                timer: 1500,
                showConfirmButton: false,
            })} )
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
            comprarBoton()
            botonVaciar()
            preciototal()
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
    sumarTotal(parseInt(precio))
    carrito.push(producto)
    contadorCarrito()
    // guradoCarrito()
    const liNuevoProducto = document.createElement("li")
        liNuevoProducto.className = "collection-item red-text"
        liNuevoProducto.innerHTML = "<b>$" + precio + " " + producto + " " + emoji +"</b><b id=eliminarProducto class=textoRojo> X</b>"
        liNuevoProducto.id = producto
        listadoCarrito.append(liNuevoProducto)
        const eliminarProducto = document.querySelectorAll('b.textoRojo')
        eliminarProducto[eliminarProducto.length -1].addEventListener("click", ()=> { removerDelCarrito(producto,precio)
        
})}


function removerDelCarrito(producto,precio) {
    const productoAremover = document.getElementById(`${producto}`)
        // productoAremover = "papas)"
        productoAremover.remove()
        item = carrito.indexOf(producto)
        if (item >= 0) {
        carrito.splice(item, 1)
        contadorCarrito()
        sumarTotal(0-precio)
        // guradoCarrito()
        }
}
function guradoCarrito() {
    if (carrito.length > 0) {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }
}

function contadorCarrito(){
    document.getElementById('contador_carrito').innerText = carrito.length;
    comprarBoton()
    botonVaciar()
    preciototal()
}
// contadorCarrito()

const botonComprar = document.getElementById('botonCarrito')
    botonComprar.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'block'; })

const botonContador = document.getElementById('contador_carrito')
    botonContador.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'block'; })

const botonCerrar = document.getElementById('cerrarCarrito')
    botonCerrar.addEventListener("click", ()=> { document.getElementById('carrito').style.display = 'none'; })

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
        title: 'Gracias por su compra, espero que la difrute',
        // animation: false,
        position: 'top',
        timer: 2500,
    })})
}

function botonVaciar(){
    const sweetVaciar = document.getElementById('botonvaciar')
if(carrito.length > 0){
    sweetVaciar.style.display = 'block'
}else{
    sweetVaciar.style.display = 'none'
}
}

function vaciarCarrito(){
    carrito.forEach(producto => {
        document.getElementById(`${producto}`).remove()
        carrito=[]
    }
    )
    total=0
    contadorCarrito()
}

function sumarTotal(precio){
    total = total+precio
    document.getElementById("total").innerText=total
}

function preciototal(){
    const total = document.getElementById('total')
if(carrito.length > 0){
    total.style.display = 'block'
}else{
    total.style.display = 'none'
}
}



// const sweetAgregado = document.getElementById("pedido").addEventListener('click', function(){
//     Swal.fire({
//         title: 'se agrego al carrito',
//         timer: 2000,
//     })})



    // document.querySelector(".material-icons").addEventListener('click', function(){
    //     Swal.fire("Our First Alert");
    //   });