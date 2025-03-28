document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Validación básica
    if (email === "usuario@ejemplo.com" && password === "123##456") {
        //alert("Inicio de sesión exitoso");
        // Redirigir a página principal
        window.location.href = "principal.html";
    } else {
        alert("Credenciales incorrectas");
    }
});

// Función para "Olvidé mi contraseña"
document.querySelector(".enlace-olvido").addEventListener("click", function(e) {
    e.preventDefault();
    const email = prompt("Ingresa tu correo para recuperar contraseña:");
    if (email) {
        alert(`Se ha enviado un enlace de recuperación a: ${email}`);
        // Aquí iría la lógica para enviar el correo
    }
});

// Función para "Registrarse"
document.querySelector(".enlace-registro").addEventListener("click", function(e) {
    e.preventDefault();
    if (confirm("¿Deseas ir a la página de registro?")) {
        // Redirigir a página de registro
        window.location.href = "registro.html";
    }
});