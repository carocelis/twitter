function add(){
	var comentado = document.getElementById("comentario").value;
	document.getElementById("comentario").value = ""; //limpio el área de texto después de enviado el twitt

	var nuevoComentario = document.createElement("div");
	var nuevoComentarioP = document.createElement("p");
	var fecha = document.createElement("span");
	var contenedor = document.getElementById("lineaTiempo");

	nuevoComentario.appendChild(nuevoComentarioP);
	nuevoComentario.appendChild(fecha);
	contenedor.appendChild(nuevoComentario);
	nuevoComentarioP.textContent = comentado;
	/*fecha.textContent = new Date();*/

}
