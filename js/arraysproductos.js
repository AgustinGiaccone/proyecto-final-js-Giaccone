function listarProductos() {
    console.table(productos)
} 

function agregarProducto() {
    debugger
    let id = creoID()
    let nombre = prompt("Ingresa el nombre del producto:")
    let precio = parseInt(prompt("Ingresa el precio:"))
        productos.push(new Producto(id, nombre, precio))
}

function listarProductos() {
    productos.forEach( (producto)=> {
        console.log(producto.nombre)
    });
}

function buscarProducto() {
    let aBuscar = prompt("Ingrese el nombre del producto a buscar:")
        debugger
        let resultado = productos.find((producto)=> producto.id === parseInt(aBuscar)) 
        if (resultado !== undefined) {
            console.clear()
            console.table(resultado) 
        }

    }

function filtrarProducto (){
        let aBuscar = prompt("Ingrese el nombre del producto a buscar:")
        let resultado = productos.filter((producto)=> producto.nombre.includes(aBuscar))    
            if (resultado !== undefined) {
                console.clear()
                console.table(resultado)
            }
    }
function existeProducto (){
    let aBuscar = prompt("Ingrese el codigo del producto a buscar:")
    let resultado = productos.some((producto)=> producto.id === parseInt(aBuscar))    
        if (resultado === true) {
            console.log("El producto si existe")
        } else{
            console.error("el producto no existe")
        }
    }

function proyectarIncremento(porc) {
    debugger
    let proyeccion = productos.map((producto)=> {
        return {
            id: producto.id,
            nombre: producto.nombre,
            importe: producto.importe,
            proyeccion:(producto.importe * porc) 
        }
    })
    console.table(proyeccion)
}

function selecionCarrito(){
    console.clear()
    debugger
    let sumatotal = carrito.reduce((acc, producto)=> acc + producto.importe, 0)
    console.log("total del carrito", sumatotal)
}

function creoID() {
    return parseInt(Math.random() * 10000)
}

//FUNCION QUE SE USA PARA LLENAR AUTOMÁTICAMENTE EL ARRAY DE OBJETOS A USAR
function generadorAutomatico() {
    productos.push(new Producto(1234, "Hamburguesa rellena de queso envuelto en tocino", 800))
    productos.push(new Producto(2345, "Hamburguesa de res clásica", 500))
    productos.push(new Producto(3456, "Brochet de Hamburguesa", 500))
    productos.push(new Producto(4567, "Hamburguesa de mar y tierra", 800))
    productos.push(new Producto(5678, "Hamburguesa a la parrilla con huevo estrellado", 650))
    productos.push(new Producto(6789, "Hamburguesa con Salsa de 3 Quesos", 700))
    productos.push(new Producto(7890, "Hamburguesa hawaiana", 850))
    
}
generadorAutomatico()

function generarCarrito() {
    carrito.push(new Producto(1234, "Hamburguesa rellena de queso envuelto en tocino", 800))
    carrito.push(new Producto(2345, "Hamburguesa de res clásica", 500))
    carrito.push(new Producto(3456, "Brochet de hamburguesa", 500))
}
generarCarrito()