const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 8080; // Railway assegna la porta 8080

app.use(express.json({ limit: "10mb" }));

// ✅ Route per verificare che il server sia attivo
app.get("/", (req, res) => {
    res.send("✅ Server attivo su Railway!");
});

// ✅ Route per caricare e salvare uno screenshot
app.post("/upload", (req, res) => {
    if (!req.body.image) {
        return res.status(400).send("❌ Nessuna immagine ricevuta.");
    }

    let imageData = req.body.image.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("screenshot.png", imageData, "base64", (err) => {
        if (err) {
            console.error("❌ Errore nel salvataggio:", err);
            return res.status(500).send("❌ Errore nel salvataggio.");
        }
        console.log("✅ Screenshot salvato con successo!");
        res.send("✅ Screenshot salvato!");
    });
});

// ✅ Route per visualizzare lo screenshot
app.get("/screenshot", (req, res) => {
    res.sendFile(__dirname + "/screenshot.png");
});

// ✅ Avvia il server sulla porta assegnata da Railway
app.listen(PORT, () => {
    console.log(`✅ Server in ascolto sulla porta ${PORT}`);
});
