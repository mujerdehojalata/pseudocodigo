// EJERCICIO 6
function mayores() {
	var cantidad = parseInt(prompt("Ingresar cantidad de números:"));
	var menorCero = 0;
	var mayorCero = 0;
	for(i=0;i<cantidad;i++) {
		var num = Number(prompt("Coloca tu número"));
		document.write("Tu número es " + num + "<br/>");
		if(num<0) {
			document.write(num + " es menor a 0 <br/>");
			menorCero +=1;
		} else {
			document.write(num + " es mayorrrrrrrrrrrr a 0 <br/>");
			mayorCero +=1;
		}
	}
	document.write("Los números menores a cero son " + menorCero + " números <br/>");
	document.write("Los números mayores a cero son " + mayorCero + " números");
}