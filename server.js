const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/guardar", async (req, res) => {

    console.log("Datos recibidos:", req.body);

    res.json({
        ok: true,
        mensaje: "Datos recibidos correctamente"
    });

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto " + PORT);
});
