//https://www.quirksmode.org/js/keys.html
var z = 1;
const container = document.getElementById("container");
const boneco = document.getElementById("boneco");
document.addEventListener("keydown", function(event){
	if (event.keyCode === 37) {
		var i = boneco.parentElement.id;
		if (document.getElementById(i-1).classList.contains('estrada')){
			document.getElementById(i-1).appendChild(boneco);
		};
	}
	if (event.keyCode === 38) {
		var i = boneco.parentElement.id;
		if (document.getElementById(i-22).classList.contains('estrada')){
			document.getElementById(i-22).appendChild(boneco);
		};
	}
	if (event.keyCode === 39) {
		var i = boneco.parentElement.id;
		if (document.getElementById(Number(i)+1).classList.contains('estrada')){
			document.getElementById(Number(i)+1).appendChild(boneco);
		};
	}
	if (event.keyCode === 40) {
		var i = boneco.parentElement.id;
		if (document.getElementById(Number(i)+22).classList.contains('estrada')){
			document.getElementById(Number(i)+22).appendChild(boneco);
		};
	}
});
function vazio(x){
	for(var i = 0; i < x; i++){
		const div = document.createElement("div");
		div.setAttribute('id', z);
		div.classList.add("vazio");
		container.appendChild(div);
		z++;
	}	
}
function estrada(x){
	for(var i = 0; i < x; i++){
		const div = document.createElement("div");
		div.setAttribute('id', z);
		div.classList.add("estrada");
		container.appendChild(div);
		z++;
	}
}
function cidade(){
	const div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("cidade", "estrada");
	container.appendChild(div);
	z++;
}
function cidadeV(){
	const div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("cidadeV", "estrada");
	container.appendChild(div);
	z++;
	div.appendChild(boneco);
}
function ginasio(){
	const div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("ginasio", "estrada");
	container.appendChild(div);
	z++;
}
vazio(23);ginasio();vazio(4);cidade();vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(4);cidade();estrada(4);cidade();vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);cidade();estrada(4);cidadeV();estrada(4);cidade();estrada(4);cidade();estrada(3);ginasio();vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(3);cidade();estrada(9);cidade();vazio(7);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(12);ginasio();estrada(4);cidade();estrada(3);cidade();estrada(4);cidade();estrada(4);ginasio();vazio(23);