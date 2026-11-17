const radio = document.querySelector('input[name="nivel"]:checked');
const nivel = radio ? radio.value : 'No especificado';

const checkboxes = document.querySelectorAll('input[name="mejoras"]:checked');
const mejoras = [];
checkboxes.forEach(chk => {
    mejoras.push(chk.value);
});

document.querySelector('#resumen-encuesta').textContent = `Nivel: ${nivel} | Mejoras: ${mejoras.join(', ') || 'Ninguna'}`;