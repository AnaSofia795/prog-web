const leer = id => Number(document.querySelector(id).value);
const precio = leer('#precio');
const cantidad = leer('#cantidad');

const subtotal = precio * cantidad;
const iva = subtotal * 0.16;
const total = subtotal + iva;

document.querySelector('#resumen').textContent = `Subtotal: $${subtotal.toFixed(2)} IVA (16%): $${iva.toFixed(2)} Total: $${total.toFixed(2)}`;