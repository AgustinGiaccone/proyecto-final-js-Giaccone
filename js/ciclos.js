let limite = prompt ("ingrese un numero de 2 cifras:")
limite = parseInt(limite)

for(let e = 0; e < limite; e++){
    if (e == 15){
        continue
    }
    
    console.log("conteo de Nro.", e)
}

let repetir = true
do {
    let nro3 = parseInt(prompt("ingresar un numero mayor a 21"))
    if (nro3 >= 21){
        repetir = false
        console.log ("al fin!!!", nro3)
    }
}while(repetir )

let cerveza = prompt ("elija una cerveza")
switch (cerveza) {
    case "andes":
        console.log("si tenemos cerveza", cerveza)
        break;
    case "isenbeck":
        console.log("si tenemos cerveza", cerveza)
        break;
    case "miller":
        console.log("si tenemos cerveza", cerveza)
        break;
    case "imperial":
        console.log("si tenemos cerveza", cerveza)
        break;
    case "corona":
        console.log("si tenemos cerveza", cerveza)
        break;
    default :
        console.warn("no tenemos esa cerveza")
        break;
}

console.log("inicia proceso")

setTimeout (()=>{
    console.log("mitad de proceso")
}, 0)

console.log("fin Proceso")