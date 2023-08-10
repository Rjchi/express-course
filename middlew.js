const express = require("express")

const app = express()

/*
Esto es una funcion middleware:

Con esto hacemos que express utilice la funcion
cualquier ruta de la aplicacion va a pasar por aqui primero
*/
app.use((req, res, next) => {
    console.log("Pasa por aqui primero")
    console.log(`Ruta: ${req.url} Metodo: ${req.method}`)

    // Con next() hacemos que continue su flujo normal
    next()
})

app.get("/profile", (req, res) => {
    res.send("Profile page")
})

app.listen(5000, () => console.log("PORT 5000"))