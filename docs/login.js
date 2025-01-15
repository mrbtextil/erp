// Datos de ejemplo (normalmente estos se verificarían en el servidor)
const validUsername = "uno";
const validPassword = "1";

// Manejo del evento de envío del formulario
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevenir que la página se recargue al enviar el formulario

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar si las credenciales son correctas
    if (username === validUsername && password === validPassword) {
        // Almacenar el nombre de usuario en sessionStorage
        sessionStorage.setItem("username", username);
        // Redirigir al usuario a una página de inicio (o dashboard)
        window.location.href = "./logistica.html"; // Cambia la URL a tu página de destino
    } else {
        // Mostrar mensaje de error si las credenciales son incorrectas
        document.getElementById("errorMessage").style.display = "block";
    }
});


