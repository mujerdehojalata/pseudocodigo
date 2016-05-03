// EJERCICIO 9
function mensualidad() {
	var meses=Number(prompt("Indique el número de meses:"));
	var pagoInicial=5;
	var pagoTotal=0;
	document.write("El número de meses es: " + meses + "<br/>");
	for(i=1;i<=meses;i++){
		pagoInicial = pagoInicial*2;
		pagoTotal +=pagoInicial;
		document.write("El pago del mes N° " + i + " es de S/." + pagoInicial + "<br/>");
	} document.write("El pago total es de S/." + pagoTotal);
}