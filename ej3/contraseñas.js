const password = document.getElementById('password');
const confirmacion = document.getElementById('confirmacion');
const mensaje = document.getElementById('mensaje');

if (password.value !== confirmacion.value) {
    mensaje.textContent = 'Las contraseñas no coinciden.';
} else if (password.value.length < 8) {
    mensaje.textContent = 'Usa al menos 8 caracteres.';
} else {
    mensaje.textContent = 'Contraseña confirmada.';
}