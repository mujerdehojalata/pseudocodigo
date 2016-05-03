// EJERCICIO 5
function ahorro() {
	var meses = parseInt(prompt("Cuántos meses vas ahorrando?"));
	var ahorroMensual = 0;
	var anual = 12;
	for(i=1;i<=meses;i++) {
		var mensualidad = Number(prompt("Mes N° " + i));
		ahorroMensual +=mensualidad;
		document.write("En el mes " + i + " vas ahorrando " + ahorroMensual + "<br/>");
	}
	if(anual>meses) {
		var resta = anual - meses;
		document.write("En el año vas ahorrando: " + ahorroMensual + " soles");
		document.write("<br/> Para llegar a tu año te falta ahorrar " + resta + " meses");
	}
}