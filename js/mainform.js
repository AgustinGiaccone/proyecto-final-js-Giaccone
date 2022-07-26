const focoEnCampos = ()=> {
    const campos = document.querySelectorAll("input")
    for (let campo of campos) {
        if (campo.type != "submit") {
            campo.addEventListener("focus", ()=> campo.className = "fondo-inputs")
            campo.addEventListener("blur", ()=> campo.className = "")
        }
    }
}

document.addEventListener("submit", (e)=> {
    e.preventDefault()
    guardarDatosDeUsr()
    FormSubm("Formulario enviado.")
   
})
function guardarDatosDeUsr() {
    const datosDeUsr = {
        nombre: inputNombre.value,
        telefono: inputTelefono.value,
        email: inputEmail.value
    }
    let str = JSON.stringify(datosDeUsr)
    localStorage.setItem("datosDeUsr", str)
}
function recuperoDatosDeUsr(){
    if (localStorage.getItem("datosDeUsr")) {
        const datosDeUsr = JSON.parse(localStorage.getItem("datosDeUsr"))
                inputNombre.value = datosDeUsr.nombre
                inputTelefono.value = datosDeUsr.telefono 
                inputEmail.value = datosDeUsr.email               
    }
    const carrito =JSON.parse(localStorage.getItem("carrito"))
    document.querySelector("#productosComprados").innerText = carrito.join(" - ")
}
recuperoDatosDeUsr()

inputNombre.addEventListener("keyup", (event)=> {
    datosDeInput = event.target.value
    console.log(datosDeInput)
})

inputNombre.addEventListener("keypress", (event)=> {
    if (event.key = "tab") {
        console.log("Presionó la tecla tab desde", event.target.id)
    }
})

focoEnCampos()