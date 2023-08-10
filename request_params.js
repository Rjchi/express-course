const express = require("express");

const app = express();

// Parametros en las URLs
app.get("/hello/:user", (req, res) => {
  console.log(req.params);
  const { user } = req.params;
  res.send(`Hola ${req.params.user}`);
  res.send(`Hola ${user}`);
});

app.listen(5000, () => console.log("PORT 5000"));
