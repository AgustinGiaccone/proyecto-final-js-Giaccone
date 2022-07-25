
//FUNCION SIMPLE

function calcular() {
    let primernumero = prompt("ingrese el primer numero")
    let segundonumero = prompt("ingrese elsegundo numero")
    let result = parseFloat(primernumero) + parseFloat (segundonumero)
        console.log("resultado de la operacion:", result)   
}
calcular()

//FUNCION CON PARAMETRO

function calcular(parametro1, parametro2){
    console.log("resultado", parseFloat(parametro1) * parseFloat(parametro2))

}

function numero_final(){
    
    let primernumero = prompt("ingresa el primer numero")
    let segundonumero = prompt("ingrese el seundo numero")
        calcular(primernumero, segundonumero)
}

numero_final()

// FUNCIONES CON PARAMETRO Y RETORNO

function calcular(){
    debugger

    let primernumero = prompt("ingresa el primer numero")
    let segundonumero = prompt("ingrese el seundo numero")
    let resultado = realizar_calculo(primernumero, segundonumero)
        console.log("resultado:", resultado)
}

function realizar_calculo(param1, param2){
    let resulta = parseFloat(param1) - parseFloat(param2)
    return resulta
}

function calcular(){
    //debugger

    let primernumero = prompt("ingresa el primer numero")
    let segundonumero = prompt("ingrese el seundo numero")
    let operador = prompt("seleciona su operador:(suma(+), resta(-), multiplicacion(*), divicion(/))")
    let resultary = realizarelcalculo(primernumero, segundonumero, operador)
        console.log("resultado", resultary )
}

function realizarelcalculo(parametro1, parametro2, parametro3){
    switch (parametro3) {
        case "+":
            return parseInt(parametro1) + parseInt(parametro2)
        case "-":
            return parseInt(parametro1) - parseInt(parametro2)
        case "*":
            return parseInt(parametro1) * parseInt(parametro2) 
        case "/":
            return parseInt(parametro1) / parseInt(parametro2)        
        default:
            return "error"
    }
}
 
let  fullname = "agustin giaccone"

let nroaleatorio = 12345.89


