const express = require("express");

const app = express();

app.get("/products", (req, res) => {
    res.send("Lista de Productos");
})

app.post("/products", (req, res) => {
    res.send('creando productos')
})

app.put("/products", (req, res) => {
    res.send('actualizando productos')
})

app.delete("/products", (req, res) => {
    res.send('eliminando productos')
})

app.patch("/products", (req, res) => {
    res.send('actualizando una parte del producto')
})

app.listen(5000, () => console.log("PORT 5000"))