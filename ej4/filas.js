productos.forEach(producto => {
    const fila = document.createElement('tr');
    const celda = document.createElement('td');
    celda.textContent = producto;
    fila.append(celda);
    tabla.append(fila);
});