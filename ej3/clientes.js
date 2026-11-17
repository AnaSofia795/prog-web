clientes.addEventListener('submit', (evento) => {
    evento.preventDefault();
    const campos = [nombre, correo, telefono, direccion];
    const completos = campos.every((campo) => campo.value.trim() !== '');

    if (completos && clientes.checkValidity()) {
        mensaje.textContent = 'Cliente listo para registrar.';
    } else {
        mensaje.textContent = 'Revisa los campos marcados.';
    }
});