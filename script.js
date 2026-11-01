const productos = [
  { nombre: "Polo TECSUP", precio: 25.00, cantidad: 2 },
  { nombre: "Taza TECSUP", precio: 18.00, cantidad: 1 }
];

function calcularTotal(lista) {
  return lista.reduce((acumulador, item) => acumulador + (item.precio * item.cantidad), 0);
}

document.getElementById("total").innerText = `Total: S/ ${calcularTotal(productos).toFixed(2)}`;
