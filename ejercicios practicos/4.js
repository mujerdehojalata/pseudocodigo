// EJERCICIO 4
function carretera() {
	var a= parseInt(prompt("Coloca el primer punto"));
	var b= parseInt(prompt("Coloca el segundo punto"));
	var distancia=((b-a)/2);
	var encuentro=distancia+a;
	document.getElementById("text").innerHTML = ("La primera persona se encuentra en el km " + a);
	document.getElementById("text2").innerHTML = ("La segunda persona se encuentra en el km " + b);
	document.getElementById("text3").innerHTML = ("Ambas se encontrarán en el km " + encuentro);
}