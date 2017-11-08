function add(){
	var comentado = document.getElementById("comentario").value;
	
	if(comentado == "" || comentado.length > 140){
		var boton = document.getElementById("tweet");
		tweet.enable = false;
	}else{	
		document.getElementById("comentario").value = ""; //limpio el área de texto después de enviado el twitt
		var nuevoComentario = document.createElement("div");
		var nuevoComentarioP = document.createElement("p");
		var fecha = document.createElement("span");
		var contenedor = document.getElementById("lineaTiempo");

		nuevoComentario.appendChild(nuevoComentarioP);
		nuevoComentario.appendChild(fecha);
		contenedor.appendChild(nuevoComentario);
		nuevoComentarioP.textContent = comentado;
		fecha.textContent = moment().format('h:mm a');
	}
}
function contar() { 
    var max = "140"; 
    var cadena = document.getElementById("comentario").value; 
    var long = cadena.length; 
    if(long <= max) { 
         document.getElementById("contador").value = max-long;
    }else{ 
         document.getElementById("comentario").value = cadena.substr(0, max);
    } 

} 

