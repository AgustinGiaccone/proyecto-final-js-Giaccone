/*
//debugger

//OBJETO LITERAL

const names = "Agustin Giaccone"
const ages = 21
const country = "ARGENTINA"

const empleado1 = {
    names: "Thomas Shelby",
    position: "salesman",
    empresa: "Mutiny",
}

const empleado2 = {
    names: "Lautaro Ramires",
    position: "programmer",
    empresa: "Mutiny",
}

const empleado3 = {
    names: "Lionel Gomez",
    position: "music",
    empresa: "Mutiny",
}

const producto1 = {
    nombre: "Hamburguesa rellena de queso envuelto en tocino",
    info: hamburguesa rellena de queso cheddar y manchego, envuelta en tocino y bañada con salsa BBQ.
    precio: 800 
}

function saludar() {
    console.log ("hola", empleado1.names)
}

function Rename(){
    let NewName = prompt("ingrese nuevo nombre")
    empleado1.names = NewName
}

*/
document.addEventListener("DOMContentLoaded", ()=> {
    setTimeout(() => {
        obtenerContenidoUSR(URL)      
    }, 2000);
 })
//FUNCION CONSTRUCTORA

//const empleado1 = {
//    names: "Thomas Shelby",
//    position: "salesman",
//    empresa: "Mutiny",
//}

/*class Empleado {
    constructor(names, position) {
        this.names = names
        this.position = position
        this.empresa = "Mutiny"
    }
}

const empleado3 = new Empleado("jack frost", "Salesman")
const empleado4 = new Empleado("Bob Lee Swagger", "programmer")
const empleado5 = new Empleado("Ethan Hunt", "IT")
const empleado6 = new Empleado("joe goldberg", "CEO")
const empleado7 = new Empleado("Jane Doe", "vice president")

class Productosh {
    constructor(id, nombre, precio, ) {
        this.id = ID
        this.nombre = nombre
        //this.info = info
        this.precio = precio 
        this.descuento = 1.11
        this.stock = 100
    }
    PrecionconDescuento() { // DESCUENTO SOLO CON TARJETA
        let FinalPrice = this.precio / this.descuento
        return FinalPrice.toFixed(2)
    }
    descontarstock(cant) {
        //this.stock = this.stock - cant
        this.stock -= cant
    }
}*/
/*const producto1 = new Productosh("Hamburguesa rellena de queso envuelto en tocino", "hamburguesa rellena de queso cheddar y manchego, envuelta en tocino y bañada con salsa BBQ.", 800)
const producto2 = new Productosh("Hamburguesa de res clásica", "1 medallon de carne, 1 huevo, 4 rebanadas de queso, lechuga, tomate y cebolla.", 500)
const producto3 = new Productosh("Brochet de hamburguesa", "Nueva y mas divertida forma para difrutar una hamburguesa.", 500)
const producto4 = new Productosh("Hamburguesa de mar y tierra", "Una conbinacion de sabores del may y de la tierra. Tiene bifes de carne, camarones, queso chedar, tocino, paprika, aros de cebolla, lechuga", 800)
const producto5 = new Productosh("Hamburguesa a la parrilla con huevo estrellado", "Estas hamburguesas están envueltas en tocino y rellenas de huevo, lo cual las hace extra especiales y deliciosas.", 650)
const producto6 = new Productosh("Hamburguesa con Salsa de 3 Quesos", "Esta deliciosa Hamburguesa con Salsa de 3 Quesos es la receta perfecta para cocinar un platillo original.", 700)
const producto7 = new Productosh("Hamburguesa hawaiana", "Hamburguesa de carne de res con cebolla parrilladas con rodajas de piña y aderezo de aguacate", 850)
*/



// class Producto {
//     constructor(id, nombre, importe) {
//         this.id = id
//         this.nombre = nombre
//         this.importe = importe
//     }
//     precioFinal() {
//         return parseFloat((this.importe * IVA).toFixed(2))
//     }
// } 