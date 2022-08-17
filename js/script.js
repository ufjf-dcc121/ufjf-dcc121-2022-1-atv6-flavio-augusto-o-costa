var z = 1;
const container = document.getElementById("container");
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
	div.classList.add("cidade");
	container.appendChild(div);
	z++;
}
function ginasio(){
	const div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("ginasio");
	container.appendChild(div);
	z++;
}

vazio(23);ginasio();vazio(4);cidade();vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(4);cidade();estrada(4);cidade();vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);cidade();estrada(4);cidade();estrada(4);cidade();estrada(4);cidade();estrada(3);ginasio();vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(3);cidade();estrada(9);cidade();vazio(7);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(12);ginasio();estrada(4);cidade();estrada(3);cidade();estrada(4);cidade();estrada(4);ginasio();vazio(23);







//for{
	//Z; func(4); #; func2(16);
	//func2(44);
	//func2(6); #; func(4);# func2(5);
	//func2(44);
	//#; func(4); A; func(4); #; func(4); #; func(4); X;
	//func2(44);
	//func2(8); #; func(12); #
	//func2(88);
	//X; func(4); #; func(4); #; func(4); #; func(4); R;

//}