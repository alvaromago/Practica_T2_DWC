"use strict";

function agregarLinea() {
	// Evito que la página se recargue
	event.preventDefault();

	// Obtenemos los valores
	let producto = document.getElementById("producto").value;
	let cantidad = document.getElementById("cantidad").value;
	let precioUnitario = document.getElementById("precio-unitario").value;
	let descuento = document.getElementById("descuento").value;

	// Creo una nueva fila para esos valores
	let nuevaFila = document.createElement("tr");

	// Creo sus celdas y añado los valores
	let celdaProducto = document.createElement("td");
	celdaProducto.textContent = producto;
	nuevaFila.appendChild(celdaProducto);

	let celdaCantidad = document.createElement("td");
	celdaCantidad.textContent = cantidad;
	nuevaFila.appendChild(celdaCantidad);

	let celdaPrecioUnitario = document.createElement("td");
	celdaPrecioUnitario.textContent = precioUnitario;
	nuevaFila.appendChild(celdaPrecioUnitario);

	let celdaDescuento = document.createElement("td");
	celdaDescuento.textContent = descuento;
	nuevaFila.appendChild(celdaDescuento);

	let celdaBoton = document.createElement("td");
	let botonEliminar = document.createElement("button");
	botonEliminar.textContent = "Eliminar";
	botonEliminar.className = "btn btn-danger";
	botonEliminar.onclick = function () {
		// Función para eliminar la fila al hacer click en el botón Eliminar
		let filaAEliminar = this.parentNode.parentNode;
		filaAEliminar.parentNode.removeChild(filaAEliminar);
	};
	celdaBoton.appendChild(botonEliminar);
	nuevaFila.appendChild(celdaBoton);

	// Añadimos la nueva fila a la tabla
	document.getElementById("cuerpo-tabla").appendChild(nuevaFila);

	// Reseteo los valores
	document.getElementById("producto").value = "";
	document.getElementById("cantidad").value = "";
	document.getElementById("precio-unitario").value = "";
	document.getElementById("descuento").value = "";
}
