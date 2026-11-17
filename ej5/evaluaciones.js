evaluaciones.push(Number(calificacion.value));
const promedio = evaluaciones.reduce((a, b) => a + b, 0) / evaluaciones.length;