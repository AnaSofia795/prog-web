const correo = document.getElementById('correo');
const resultado = document.getElementById('resultado');

if (correo.checkValidity()) {
    resultado.textContent = 'Correo válido.';
} else {
    resultado.textContent = 'Escribe un correo con formato válido.';
}