// EJERCICIO 3
function fibonacci() {
	var cantidad = Number(prompt("Porfavor, ingresa la cantidad de series Fibonacci"));
	var primerNumero=0;
	var segundoNumero=1;
	var serie=0;
	var count=0;
	document.write("La serie Fibonacci de tus " + cantidad + " números será:")
	function suma(n1,n2){
		var suma=0;
		suma=n1+n2;
		return suma;
	}
	for(i=1;i<=cantidad;i++){
		count+=+1;
		if(count<=cantidad){
			document.write("<br/>"+serie);
		}
		serie=suma(primerNumero,segundoNumero);
		segundoNumero=primerNumero;
		primerNumero=serie;
	}
}