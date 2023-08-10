const express = require("express");

const app = express();

/*
Funcion Middleware para verificar si esta autenticado:
Podemos tener varios middlewares y pueden estar entre cualquier ruta
en otras palabras el orden es importante
*/
app.use((req, res, next) => {
  next();
});

app.use((req, res, next) => {
  if (req.query.login === "richi") {
    next();
  } else {
    res.send("No autorizado");
  }
});

app.get("/home", (req, res) => {
  res.send("HOME");
});

app.listen(5000, () => console.log("PORT 5000"));
