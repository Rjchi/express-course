// asi se crea un servidor con express js

const express = require("express");

const app = express()

app.get("/", (req, res) => {
    // Con el segundo parametro especificamos de donde viene el archivo index.html
    res.sendFile("./static/index.html", {
        root: __dirname,
    });
})

app.get("/about", (req, res) => {
    res.send("About");
})

// Si ninguna ruta coincide entrara por aqui y le damos manualmente un codigo de estado
app.use((req, res) => {
    res.status(404).send('No se encountro la pagina')
})

app.listen(5000, () => console.log("Port 5000"))