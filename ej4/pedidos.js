const importe = precioUnitario * cantidad;
const resumen = `Cliente: ${cliente} | Item: ${producto} | Total: $${importe}`;
document.querySelector('#panel-resumen').textContent = resumen;