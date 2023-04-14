

function changeColor(){
	var red=document.getElementById("_rangs1").value;
var green=document.getElementById("_rangs2").value;
var blue=document.getElementById("_rangs3").value;
var test=document.getElementById("_test");

	var _color="rgb("+red+","+green+","+blue+")";
	test.style.color=_color;
	console.log(green);
}
document.getElementById("_rangs1").addEventListener("input",changeColor);
document.getElementById("_rangs2").addEventListener("input",changeColor);
document.getElementById("_rangs3").addEventListener("input",changeColor);
