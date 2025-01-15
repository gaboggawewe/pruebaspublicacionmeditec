function sendMail() {
    let parms = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };
    
    console.log("Parámetros enviados:", parms); // Verifica los datos enviados

    emailjs.send("service_cakr4i4", "template_ttzyg3d", parms)
        .then((response) => {
            console.log("Correo enviado:", response);
            alert("Mensaje enviado correctamente.");
        })
        .catch((error) => {
            console.error("Error al enviar el mensaje:", error);
            alert("Error al enviar el mensaje. Por favor, verifica los datos.");
        });
}