var z = 1;
var j = 1;
var k = 0
var myPokemon = [
	{'nome':'Bulbasaur', 'atk':'5', 'hp':'20', 'type':'C'},
	{'nome': 'Squirtle', 'atk': '3', 'hp': '40', 'type': 'R'},
	{'nome': 'Charmander', 'atk': '4', 'hp': '30', 'type': 'D'},
	{'nome': 'Chikorita', 'atk': '4', 'hp': '30', 'type': 'C'},
	{'nome': 'Totodile', 'atk': '5', 'hp': '20', 'type': 'R'},
	{'nome': 'Cyndaquil', 'atk': '3', 'hp': '40', 'type': 'D'},
	{'nome': 'Treecko', 'atk': '3', 'hp': '40', 'type': 'C'},
	{'nome': 'Mudkip', 'atk': '4', 'hp': '30', 'type': 'R'},
	{'nome': 'Torchic', 'atk': '5', 'hp': '20', 'type': 'D'},
	{'nome': 'Turtwig', 'atk': '5', 'hp': '20', 'type': 'C'},
	{'nome': 'Pimplup', 'atk': '3', 'hp': '40', 'type': 'R'},
	{'nome': 'Chimchar', 'atk': '4', 'hp': '30', 'type': 'D'},
	{'nome': 'Snivy', 'atk': '4', 'hp': '30', 'type': 'C'},
	{'nome': 'Oshawott', 'atk': '3', 'hp': '40', 'type': 'R'},
	{'nome': 'Tepig', 'atk': '5', 'hp': '20', 'type': 'D'},
]
const container = document.getElementById("container");
const boneco = document.getElementById("boneco");
const badgeList = document.getElementById("badgeList");
const container_2 = document.getElementById("container_2");
document.addEventListener("keydown", function(event){
	if (event.keyCode === 37) {
		var i = boneco.parentElement.id;
		if (document.getElementById(i-1).classList.contains('estrada')){
			document.getElementById(i-1).appendChild(boneco);
			if (boneco.parentElement.classList.contains('cidade')){
				boneco.parentElement.classList.add('cidadeV');
				boneco.parentElement.classList.remove('cidade');
				div = document.createElement("div");
				div.classList.add("pokemonList");
				container_2.appendChild(div);
				var teste = document.createElement("img");
				teste.setAttribute("src", "img/pokemon_"+k+".png");
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Nome:"+myPokemon[k].nome;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML ="Atk:"+myPokemon[k].atk ;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "HP:"+myPokemon[k].hp;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Type:"+myPokemon[k].type;
				div.appendChild(teste);
				k++;
			}
			if (boneco.parentElement.classList.contains('ginasio')){
				boneco.parentElement.classList.add('ginasioV');
				boneco.parentElement.classList.remove('ginasio');
				const insignia = document.createElement("img");
				insignia.setAttribute('src', "img/insignia_"+j+".png");
				insignia.classList.add("badge");
				badgeList.appendChild(insignia);
				j++;
				if (j === 5){
					alert("Você ganhou!!");
				}
			}
		};
	}
	if (event.keyCode === 38) {
		var i = boneco.parentElement.id;
		if (document.getElementById(i-22).classList.contains('estrada')){
			document.getElementById(i-22).appendChild(boneco);
			if (boneco.parentElement.classList.contains('cidade')){
				boneco.parentElement.classList.add('cidadeV');
				boneco.parentElement.classList.remove('cidade');
				div = document.createElement("div");
				div.classList.add("pokemonList");
				container_2.appendChild(div);
				var teste = document.createElement("img");
				teste.setAttribute("src", "img/pokemon_"+k+".png");
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Nome:"+myPokemon[k].nome;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML ="Atk:"+myPokemon[k].atk ;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "HP:"+myPokemon[k].hp;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Type:"+myPokemon[k].type;
				div.appendChild(teste);
				k++;
			}
			if (boneco.parentElement.classList.contains('ginasio')){
				boneco.parentElement.classList.add('ginasioV');
				boneco.parentElement.classList.remove('ginasio');
				const insignia = document.createElement("img");
				insignia.setAttribute('src', "img/insignia_"+j+".png");
				insignia.classList.add("badge");
				badgeList.appendChild(insignia);
				j++;
				if (j === 5){
					alert("Você ganhou!!");
				}
			}
		};
	}
	if (event.keyCode === 39) {
		var i = boneco.parentElement.id;
		if (document.getElementById(Number(i)+1).classList.contains('estrada')){
			document.getElementById(Number(i)+1).appendChild(boneco);
			if (boneco.parentElement.classList.contains('cidade')){
				boneco.parentElement.classList.add('cidadeV');
				boneco.parentElement.classList.remove('cidade');
				div = document.createElement("div");
				div.classList.add("pokemonList");
				container_2.appendChild(div);
				var teste = document.createElement("img");
				teste.setAttribute("src", "img/pokemon_"+k+".png");
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Nome:"+myPokemon[k].nome;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML ="Atk:"+myPokemon[k].atk ;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "HP:"+myPokemon[k].hp;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Type:"+myPokemon[k].type;
				div.appendChild(teste);
				k++;
			}
			if (boneco.parentElement.classList.contains('ginasio')){
				boneco.parentElement.classList.add('ginasioV');
				boneco.parentElement.classList.remove('ginasio');
				const insignia = document.createElement("img");
				insignia.setAttribute('src', "img/insignia_"+j+".png");
				insignia.classList.add("badge");
				badgeList.appendChild(insignia);
				j++;
				if (j === 5){
					alert("Você ganhou!!");
				}
			}
		};
	}
	if (event.keyCode === 40) {
		var i = boneco.parentElement.id;
		if (document.getElementById(Number(i)+22).classList.contains('estrada')){
			document.getElementById(Number(i)+22).appendChild(boneco);
			if (boneco.parentElement.classList.contains('cidade')){
				boneco.parentElement.classList.add('cidadeV');
				boneco.parentElement.classList.remove('cidade');
				div = document.createElement("div");
				div.classList.add("pokemonList");
				container_2.appendChild(div);
				var teste = document.createElement("img");
				teste.setAttribute("src", "img/pokemon_"+k+".png");
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Nome:"+myPokemon[k].nome;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML ="Atk:"+myPokemon[k].atk ;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "HP:"+myPokemon[k].hp;
				div.appendChild(teste);
				teste = document.createElement("p")
				teste.innerHTML = "Type:"+myPokemon[k].type;
				div.appendChild(teste);
				k++;
			}
			if (boneco.parentElement.classList.contains('ginasio')){
				boneco.parentElement.classList.add('ginasioV');
				boneco.parentElement.classList.remove('ginasio');
				const insignia = document.createElement("img");
				insignia.setAttribute('src', "img/insignia_"+j+".png");
				insignia.classList.add("badge");
				badgeList.appendChild(insignia);
				j++;
				if (j === 5){
					alert("Você ganhou!!");
				}
			}
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
	var div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("cidadeV", "estrada");
	container.appendChild(div);
	z++;
	div.appendChild(boneco);
	for (var x = 0; x < 3; x++) {
		div = document.createElement("div");
		div.classList.add("pokemonList");
		container_2.appendChild(div);
		var teste = document.createElement("img");
		teste.setAttribute("src", "img/pokemon_"+k+".png");
		div.appendChild(teste);
		teste = document.createElement("p")
		teste.innerHTML = "Nome:"+myPokemon[k].nome;
		div.appendChild(teste);
		teste = document.createElement("p")
		teste.innerHTML ="Atk:"+myPokemon[k].atk ;
		div.appendChild(teste);
		teste = document.createElement("p")
		teste.innerHTML = "HP:"+myPokemon[k].hp;
		div.appendChild(teste);
		teste = document.createElement("p")
		teste.innerHTML = "Type:"+myPokemon[k].type;
		div.appendChild(teste);
		k++;
	}
}
function ginasio(){
	const div = document.createElement("div");
	div.setAttribute('id', z);
	div.classList.add("ginasio", "estrada");
	container.appendChild(div);
	z++;
}
vazio(23);ginasio();vazio(4);cidade();vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(16);estrada(1);vazio(4);estrada(1);vazio(4);cidade();estrada(4);cidade();vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(4);estrada(1);vazio(6);cidade();estrada(4);cidadeV();estrada(4);cidade();estrada(4);cidade();estrada(3);ginasio();vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(13);estrada(1);vazio(7);estrada(1);vazio(3);cidade();estrada(9);cidade();vazio(7);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(17);estrada(1);vazio(3);estrada(1);vazio(12);ginasio();estrada(4);cidade();estrada(3);cidade();estrada(4);cidade();estrada(4);ginasio();vazio(23);