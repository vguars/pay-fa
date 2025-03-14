const express = require('express');
const fs = require('fs');
const app = express();

app.use(express.json({ limit: "10mb" }));

app.post("/upload", (req, res) => {
    let imageData = req.body.image.replace(/^data:image\/png;base64,/, "");
    fs.writeFile("screenshot.png", imageData, 'base64', function(err) {
        if (err) console.log(err);
    });

    res.send("Screenshot salvato!");
});

app.listen(3000, () => console.log("Server in ascolto sulla porta 3000"));
