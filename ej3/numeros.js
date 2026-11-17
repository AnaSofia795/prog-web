const precio = Number(document.getElementById('precio').value);
const cantidad = Number(document.getElementById('cantidad').value);
const mensaje = document.getElementById('mensaje');

if (precio <= 0 || !Number.isFinite(precio)) {
    mensaje.textContent = 'El precio debe ser mayor que cero.';
} else if (!Number.isInteger(cantidad) || cantidad < 0) {
    mensaje.textContent = 'La cantidad debe ser un número entero no negativo.';
} else {
    mensaje.textContent = 'Valores numéricos correctos.';
}