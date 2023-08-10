const express = require("express")
// Utilizamos un middleware creado por otro desarrollador
const morgan = require("morgan")

const app = express()

app.use(morgan('dev'))

app.get("/home", (req, res) => {
    res.send("Home")
})

app.listen(5000, () => console.log("PORT 5000"))