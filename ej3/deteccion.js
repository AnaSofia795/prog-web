const nombre = document.getElementById('nombre');
const correo = document.getElementById('correo');
const mensaje = document.getElementById('mensaje');

const nombreLimpio = nombre.value.trim();

if (nombreLimpio === '' || correo.value.trim() === '') {
    mensaje.textContent = 'Completa todos los campos.';
} else {
    mensaje.textContent = 'Datos listos para enviar.';
}