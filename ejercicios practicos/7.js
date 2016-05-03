// EJERCICIO 7
function horas() {
	var precio = Number(prompt("Ingrese el precio por horas"));
	var pagoDiario = 0;
	document.write("El precio x hora es " + precio + "<br/>");
	for(i=1;i<=6;i++){
		var horaDiaria = Number(prompt("Ingresa la cantidad de horas en el día " + i))
		pagoDiario = precio * horaDiaria;
		document.write("El pago por el día " + i + " es " + pagoDiario + " soles <br/>");
	} 
}