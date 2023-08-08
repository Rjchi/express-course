// asi se crea un servidor con express js

const express = require("express");

const app = express()
app.get("/", (req, res) => {
    // Con el segundo parametro especificamos de donde viene el archivo index.html
    res.sendFile("./static/index.html", {
        root: __dirname,
    });
})

app.listen(5000, () => console.log("Port 5000"))