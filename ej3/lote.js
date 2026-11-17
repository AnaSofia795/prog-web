const datos = [
    matricula.value.trim(),
    nombre.value.trim(),
    correo.value.trim(),
    carrera.value
];

if (datos[0] === '' || datos[1] === '' || datos[2] === '' || datos[3] === '') {
    mensaje.textContent = 'Completa matrícula, nombre, correo y carrera.';
} else if (!correo.checkValidity()) {
    mensaje.textContent = 'Revisa el formato del correo.';
} else {
    mensaje.textContent = 'Estudiante validado correctamente.';
}