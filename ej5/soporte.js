form.addEventListener('submit', e => {
    e.preventDefault();
    confirmacion.textContent = `Solicitud recibida: ${usuario.value} Prioridad: ${prioridad.value}`;
});