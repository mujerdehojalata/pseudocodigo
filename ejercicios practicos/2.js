// EJERCICIO 2
function zero() {
	var cantidad = Number(prompt("Porfavor, ingresa la cantidad de números"));
	var menorCero = 0;
	var mayorCero = 0;
	for(i=1;i<=cantidad;i++) {
		var num = Number(prompt("Ingresa tu número N° " + i));
		document.write("Tu número " + num);
		if(num<=0) {
			document.write(" es menor a 0" + "<br/>")
			menorCero +=1;
		} else {
			document.write(" es mayor a 0" + "<br/>")
			mayorCero +=1;
		}
	} 
	document.write("LA CANTIDAD DE NÚMEROS ES: " + cantidad + "<br/>");
	document.write("Los números menores a cero son: " + menorCero + "<br/>");
	document.write("Los números mayores a cero son: " + mayorCero + "<br/>");
}