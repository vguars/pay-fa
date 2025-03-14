const express = require("express");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000; // Usa la porta di Railway o la 3000 in locale

app.use(express.json({ limit: "10mb" }));

app.post("/upload", (req, res) => {
    let imageData = req.body.image.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("screenshot.png", imageData, "base64", function (err) {
        if (err) console.log(err);
    });

    res.send("Screenshot salvato!");
});

app.listen(PORT, () => console.log(`Server in ascolto sulla porta ${PORT}`));
