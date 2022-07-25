const swa = () => {
    Swal.fire({
        title: 'Error!',
        text: 'No se encontro el servidor',
        icon: 'error',
        confirmButtonText: 'fail'
      })
}


const toastSA = (mensaje)=> {
    Swal.fire({
        icon: "success", //ICONO DE TILDE VERDE
        //icon: "error", //ICONO DE ERROR
        //icon:"warning",// LLAMADA DE ATENCION, PELIGRO
        //icon:"info",// LLAMADA DE ATENCION, PELIGRO
        //icon:"question",// LLAMADA DE ATENCION, PELIGRO
        title: mensaje,
        position: "top-end",
        showConfirmButton: true,
        toast: true,
        timer: 3500,
        timerProgressBar: true,
        background: "darkseagreen",
        color: "black"
    })
}

const FormSubm = (mensaje) => {
    Swal.fire({
        title: mensaje,
        confirmButtonText: "confirmar",
        timer:2500
    })
}