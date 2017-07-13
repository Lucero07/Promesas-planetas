// $('.carousel.carousel-slider').carousel({fullWidth:true});
// $(document).ready(function(){
//       $('.carousel').carousel();
//     });

function getJSON(url){
	return new Promise(function(resolve,reject){
	  var ajax = new XMLHttpRequest(); // Es un objeto que puede ser usado para pedir data del servidor web. Se puede actualizar la pagina sin recargarla. Pide data del servidor despues de que la pagina se ha cargado.
	  ajax.open("GET", url); // El open especifica el tipo de peticion del request (get, post, delete, etc.)
	  ajax.send(); // Envia el request al servidor web usando get.
	  ajax.onreadystatechange = function(){ // El onready... define una función que debe de ser llamada cuando el readystate cambie.
		if(ajax.readyState == 4){ //El readyState igualado a cuatro significa que el response está finalizado y listo.
		  resolve(JSON.parse(ajax.responseText)); //El resolve acepta que la promesa se cumplió. El parse convierte a objeto el ajax. El responseText obtiene la data de la respuesta como un string.
		}
	  }
	})
	};

	getJSON("data/earth-like-results.json") // Este "data..." es el parametro url de nuestra función anterior.
	.then(function(mensaje){return(getJSON(mensaje.results[0]))}) // el return nos permite acceder a una nueva promesa ya que solo es un then por promise.
	.then(function(resultado){console.log(resultado)}); // este then funciona para que el promise anterior sea mostrado en consola.
