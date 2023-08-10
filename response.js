const express = require("express");

const app = express();

// Asi podemos enviar en este caso texto
app.get("/", (req, res) => {
  res.send("Hola mundo");
});

// Asi podemos enviar archivos como img, audios, videos, pdf etc.
app.get("/archivo", (req, res) => {
  res.sendFile("./package.json", {
    root: __dirname,
  });
});

// Asi podemos mandar archivos json
app.get("/user", (req, res) => {
  res.json({
    name: "Ejemplo al mandar archivos json",
  });
});

// Asi podemos mandar codigos de estado
app.get("/isAlive", (req, res) => {
    res.sendStatus(204)
})

app.listen(5000, () => console.log("PORT 5000"));
