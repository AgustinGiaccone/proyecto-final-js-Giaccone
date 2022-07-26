const promesa = Promise.resolve(prompt("un numero"))

promesa.then(nro => nro * 3)
       .then(nro => nro * 5)
       .then(nro => nro * 7)
       .then(nro => nro * 9)
       .then(nro => nro * 10)
       .then(nro => {
        if (nro > 30000) {
        Promise.reject("SOBRELIMITE")
        }})
        .then(nro => console.warn("solo me veras si no ahi error"))
        .catch(error => {
            console.error("ocurrio un error", error)
        })
        .finally(()=>{
            console.log("este codigo se ejecutara siempre")
        })























































