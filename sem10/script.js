const boton = document.getElementById('btnConsultar');
const resultados = document.getElementById('resultados');

boton.addEventListener('click', () => {
    resultados.innerHTML = '<p>Cargando usuarios...</p>';

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la respuesta del servidor');
            }
            return response.json();
        })
        .then(data => {
            resultados.innerHTML = '';
            data.forEach(usuario => {
                resultados.innerHTML += `
                    <div class="tarjeta-usuario">
                        <p><strong>Nombre:</strong> ${usuario.name}</p>
                        <p><strong>Correo:</strong> ${usuario.email}</p>
                        <p><strong>Ciudad:</strong> ${usuario.address.city}</p>
                    </div>
                `;
            });
        })
        .catch(error => {
            resultados.textContent = 'No se pudo consultar la información.';
            console.error('Error:', error);
        });
});