// EJERCICIO 1
function promedio() {
	var personas = parseInt(prompt("Porfavor, ingresa el número de personas"));
	var estatura = 0;
	for(i=1;i<=personas;i++) {
		var num = Number(prompt("Ingresa la estatura N° " + i));
		estatura +=num;
		var promedio = estatura/personas;
	} 
	document.getElementById("text").innerHTML = ("El número de personas es: " + personas);
	document.getElementById("text2").innerHTML = ("La suma de estaturas es: " + estatura);
	document.getElementById("text3").innerHTML = ("El promedio es: " + promedio);
}