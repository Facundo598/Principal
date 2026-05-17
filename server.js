const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const GOOGLE_SCRIPT_URL = "PEGAR_URL_APPS_SCRIPT";

app.post("/guardar", async (req, res) => {

    try {

        const respuesta = await fetch(GOOGLE_SCRIPT_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const texto = await respuesta.text();

        console.log("Respuesta Google:", texto);

        res.json({
            ok: true,
            mensaje: "Datos guardados"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            ok: false,
            mensaje: "Error"
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Servidor iniciado en puerto " + PORT);
});
