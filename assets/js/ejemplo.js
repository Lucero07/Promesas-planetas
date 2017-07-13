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
 	.then(function(planetas){
     getJSON(planetas.results.forEach(function(planeta){
        getJSON(planeta).then(function(datosPlaneta){
			crearTarjeta(datosPlaneta);


            console.log(datosPlaneta);

		})
    }));
});

var crearTarjeta = function (datosPlaneta) {
	var nombre = datosPlaneta.pl_name;
	var fechadescubrimiento = datosPlaneta.pl_disc;
	var masa1 = datosPlaneta.pl_masse;
	var decinf = datosPlaneta.dec;
	var ruta = datosPlaneta.pl_edelink;


	var contenedorTarjeta = document.createElement("div");
	var tarjeta = document.createElement("div");
	var contImagen = document.createElement("div");
	var imagen = document.createElement('img');
	var titulo = document.createElement('span');
	var contInf = document.createElement("div");
	var masa = document.createElement('p');
	var descubrimiento = document.createElement('p');
	var dec = document.createElement('p');
	var enlace = document.createElement("div");
	var referencia = document.createElement('a');

	contenedorTarjeta.className = 'col s12 m6';
	tarjeta.className ='card';
	contImagen.className ='card-image';
	imagen.src = 'static/img/planeta1.jpg';
	titulo.innerText = nombre;
	titulo.className = 'card-title';
	contInf.className = 'card-content';
	masa.innerText = 'Masa: '+ masa1;
	descubrimiento.innerText = 'Año de descubrimiento: ' + fechadescubrimiento;
	dec.innerText = 'no se que es: ' + decinf;
	enlace.className = 'card-action';
	referencia.setAttribute('href',ruta);
	referencia.innerText ='Mas ...'

	contImagen.appendChild(imagen);
	contImagen.appendChild(titulo);
	contInf.appendChild(masa);
	contInf.appendChild(descubrimiento);
	contInf.appendChild(dec);
	enlace.appendChild(referencia);
	tarjeta.appendChild(contImagen);
	tarjeta.appendChild(contInf);
	tarjeta.appendChild(enlace);
	contenedorTarjeta.appendChild(tarjeta)
	var tarjetaPlanetas = document.getElementById('datos-planetas');
	tarjetaPlanetas.appendChild(contenedorTarjeta);

};
