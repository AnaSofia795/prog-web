// Selección de elementos del DOM con const
const tarjeta = document.getElementById('miTarjeta');
const textoPrincipal = document.getElementById('textoPrincipal');
const bloqueAdicional = document.getElementById('bloqueAdicional');
const btnCambiarTexto = document.getElementById('btnCambiarTexto');
const btnToggleInfo = document.getElementById('btnToggleInfo');

// Variable de control para alternar el texto del Botón 1
let alternarTexto = false;

// Botón 1: Modificación de texto y cambio visual estético
btnCambiarTexto.addEventListener('click', () => {
    if (!alternarTexto) {
        textoPrincipal.textContent = "¡Prueba nuestra nueva especialidad de temporada: Latte de Vainilla y Frambuesa!";
        tarjeta.classList.add('destacado'); // Activa el cambio visual global en la tarjeta
    } else {
        textoPrincipal.textContent = "Disfruta de un espacio acogedor con el mejor café artesanal y postres recién horneados.";
        tarjeta.classList.remove('destacado'); // Quita el cambio visual
    }
    alternarTexto = !alternarTexto;
});

// Botón 2: Mostrar u ocultar el bloque adicional con classList.toggle
btnToggleInfo.addEventListener('click', () => {
    bloqueAdicional.classList.toggle('oculto');
    
    // Cambiar dinámicamente el texto del botón según su estado
    if (bloqueAdicional.classList.contains('oculto')) {
        btnToggleInfo.textContent = "Ver Más Info";
    } else {
        btnToggleInfo.textContent = "Ocultar Info";
    }
});