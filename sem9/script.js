const formulario = document.getElementById("formPedido");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const producto = document.getElementById("producto").value.trim();
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const pago = document.getElementById("pago").value;

    if (precio <= 0 || isNaN(precio)) {
        alert("El precio debe ser mayor a cero.");
        return;
    }

    if (cantidad <= 0 || isNaN(cantidad)) {
        alert("La cantidad debe ser un número entero positivo.");
        return;
    }

    const subtotal = precio * cantidad;
    const iva = subtotal * 0.16;
    const total = subtotal + iva;

    document.getElementById("resNombre").textContent = nombre;
    document.getElementById("resCorreo").textContent = correo;
    document.getElementById("resTelefono").textContent = telefono;
    document.getElementById("resProducto").textContent = producto;
    document.getElementById("resCantidad").textContent = cantidad;
    document.getElementById("resPago").textContent = pago;

    document.getElementById("resSubtotal").textContent = subtotal.toFixed(2);
    document.getElementById("resIva").textContent = iva.toFixed(2);
    document.getElementById("resTotal").textContent = total.toFixed(2);

    resultado.classList.remove("oculto");
});

formulario.addEventListener("reset", function() {
    resultado.classList.add("oculto");
});