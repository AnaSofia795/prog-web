if (!form.checkValidity()) return;
confirmacion.textContent = `Reservación: ${cliente.value} ${fecha.value} ${horario.value}`;