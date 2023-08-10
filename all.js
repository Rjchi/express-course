const express = require("express");

const app = express();

// Asi podemos hacer que esta ruta funcione con cualquier metodo http

app.all("/", (req, res) => {
    res.send("server info");
})

app.listen(5000, () => console.log("PORT 5000"));