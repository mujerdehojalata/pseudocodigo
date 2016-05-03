// EJERCICIO 8
function tiki() {
	var numVentas=Number(prompt("El numero de ventas por día es: "));
	var mayorMil=0;
	var menorMil=0;
	var menor500=0;
	document.write("El número de ventas es: " + numVentas + "<br/>");
	for(i=1;i<=numVentas;i++) {
		var ventaDia= Number(prompt("Ingresa las ventas del día N° " + i))
		document.write("La venta del día N° " + i + " es " + ventaDia + "<br/>");
		if(ventaDia>1000){
			mayorMil += 1;
		} else if(ventaDia>500&&ventaDia<=1000){
			menorMil += 1;
		} else {
			menor500 += 1;
		}		
	}
	document.write("Las ventas mayores a S/.1000 son: " + mayorMil + "<br/>");
	document.write("Las ventas menores a S/.1000 pero mayores a S/.500 son: " + menorMil + "<br/>");
	document.write("Las ventas menores a S/.500 son: " + menor500 + "<br/>");
}