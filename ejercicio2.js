"use strict";

function agregarLinea() {
	/** Con este método evito que la página se
	 *  refresque al darle al botón para que
	 *  la información se muestre por consola.
	 */
	event.preventDefault();

	// Obtenemos los valores
	let producto = document.getElementById("producto").value;
	let cantidad = document.getElementById("cantidad").value;
	let precioUnitario = document.getElementById("precio-unitario").value;
	let descuento = document.getElementById("descuento").value;

	// Mostramos los valores por consola
	console.log("Producto: " + producto);
	console.log("Cantidad: " + cantidad);
	console.log("Precio unitario: " + precioUnitario);
	console.log("Descuento: " + descuento);
}
