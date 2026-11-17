const campo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

if (campo.checkValidity()) {
    mensaje.textContent = 'Correo correcto.';
    mensaje.className = 'correcto';
} else {
    mensaje.textContent = 'Correo incorrecto.';
    mensaje.className = 'incorrecto';
}