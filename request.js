const express = require("express");

const app = express();

// Con esto procesamos texto plano que sea enviado
app.use(express.text());

// Con esto procesamos formato json
app.use(express.json());

// Con esto podemos entender los datos que vienen de un formulario
app.use(express.urlencoded({ extended: false}))

// Asi enviamos datos al servidor
app.post("/user", (req, res) => {
    console.log(req.body)
    res.send("Nuevo usuario creado");
})

app.listen(5000, () => console.log("PORT 5000"))