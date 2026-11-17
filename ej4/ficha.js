const ficha = document.createElement('article');
ficha.textContent = `${producto} ${categoria} $${precio} ${cantidad} unidades`;
document.querySelector('#lista').append(ficha);