const comision = Number(ventas.value) * 0.05;
resultado.textContent = `${nombre.value}: $${comision.toFixed(2)}`;