const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', evento => {
    evento.preventDefault();
    if (formulario.checkValidity()) {
        // Acciones si es válido
    }
});