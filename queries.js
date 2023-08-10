const express = require("express");

const app = express();

// Asi podemos tomar las queries de una url
// user?loquequiera=richi&id=12

app.get("/search", (req, res) => {
    // Si el usuario me envia un query con este valor hacemos algo
    if (req.query.ejemplo === 'richi') {
        return res.send('ADMIN')
    }

    const { ejemplo, id } = req.query;
    res.send("Hola mundo" + ejemplo + id)
})

app.listen(5000, () => console.log("PORT 5000"))