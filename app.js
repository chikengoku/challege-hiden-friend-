// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// for me amigos is listsFriensd
//let ramNum=Math.floor(Math.random()*listsFriends.length)+1;
//
let listsFriends = []
let listaHtml=document.getElementById('listaAmigos'); 
let resultico=document.getElementById('resultado'); 
let ramNum;


function agregarAmigo(){

	let friens = document.getElementById('amigo').value;
	if (friens ==''){
		alert('Por favor, inserte un nombre');
	}else {
		listsFriends.push(friens);
	}
	limpiarCaja();	
	console.log(listsFriends);
	//console.log(a);
	showlist();
	//sortearAmigo();
	//randomNumber2();
}


//agregarAmigo();
function showlist(){
	//let listaHtml=document.getElementById('listaAmigos'); 

	listaHtml.innerHTML = ""
	for (  i=0;i< listsFriends.length;i++){
		//listaHtml.innerHTML = ""
		let li =document.createElement('li');
		//listaHtml.innerHTML = ""
		//li.innerHTML= a;
		//listaHtml.innerHTML = ""
		//li.innerHTML=listsFriends[i++];
		li.innerHTML=listsFriends[i];		
		listaHtml.appendChild(li);
		//listaHtml.append(li);
		//listaHtml.innerHTML = ''
		//console.log(a);
		console.log(li.innerHTML)

		//return; 
		//listaHtml.innerHTML = ""
	    //listaHtml.innerHTML= '<li>'+ listsFriends[i]+ '</li>'
    } 
    
    //listaHtml.innerHTML = "" 
}
// IS WITHIOT THE  CERO 

function randomNumber2(){
		
	if (listsFriends.length > 0){
		let ramNum = Math.floor(Math.random()*listsFriends.length);

		return ramNum;
	}else {
		return -1; 
	}	

}

console.log(ramNum)


function sortearAmigo(){
	let indicea=randomNumber2();
	//randomNumber2();
	if (indicea !=-1 ){
		resultico.innerHTML = `Tu nombre secreto es ${listsFriends[indicea]}`;
		console.log(indicea);	
	}else {
		resultico.innerHTML='no hay '
	}
	//resultico.innerHTML=` YOUR SECRETT NAME IS ,${listsFriends[ramNum]}`;
	//console.log(ramNum); 
}


function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}


//showlist();
//randomNumber2();	