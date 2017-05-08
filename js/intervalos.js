window.onload = function() {
  //setInterval(, 1000);
  //document.getElementById("entrar").style.display = 'block';
  $("#entrar").css("display", "none");
  $("#textoI").css("opacity", 0.0);
  $("#discreto").css("opacity", 0.0);
  $("#continuum").css("opacity", 0.0);
  $(".ent").css("opacity", 0.0);
  porta();
  // Botón (flecha) para salir de la portada y entrar al programa
	$("#flecha").on( "mouseenter", function() {
		$("#flecha").css("opacity", 1.0);
	});
	$("#flecha").on( "mouseleave", function() {
		$("#flecha").css("opacity", 0.7);
	});
}
// Carga la portada del programa
function porta(){
	iluminar("#panel4",0.0,0.1);
	iluminar("#panelSuperior",0.0,0.02);
	iluminar("#panel2",0.0,0.02);
	iluminar("#panel3",0.0,0.01);
	$("#flecha").css("opacity", 0.7);
}

// Cierra la portada y da paso al programa
function comenzar(){
	achicarFondo();
}
function achicarFondo(){
	var f = function() {
		var ancho = parseInt($("#fe").css("width"));
		if (ancho > 0) {
			$("#fe").width(ancho - 3);
			setTimeout(f,10);
		};
	}
	f();
	$("#entrada").width(0);
	$("#flecha").width(0);
	$(".ent").css("opacity",0.0);
	$(".ent").css("left",400);
	inicio();
}
var modo = "";
var datosInterv = new Map();
datosInterv.set("lista", -1);
datosInterv.set("item", -1);
datosInterv.set("nombre", "");
datosInterv.set("nombre", "");

// Función para controlar la entrada a la zona de trabajo.
// Si no ha seleccionado intervalos, no le permite la entrada.
function entrar(){
	var e = controlIntervSel();
	if (e) {
		llenarMatriz();
		discreclick = true;
		conticlick = true;
		estado = "tocar";
		if (parseInt($("#textoI").css("opacity")) > 0) {
			apagar("#textoI",1.0);
		};
		$("#entrar").text("SELECCIONAR");
		$("#discreto").css("opacity", 0.3);
		$("#continuum").css("opacity", 0.3);
		
	} else{
		iluminar("#textoI",0.0, 0.05);
	};
}
function salir(){
	if (estado == "tocar") {
		detenerAudio();
		estado = "selector";
		modo = "";
		$("#entrar").text("ENTRAR");
		$("#discreto").css("opacity", 0.0);
  		$("#continuum").css("opacity", 0.0);
  		$("#play").css("opacity", 0.0);
		$("#stop").css("opacity", 0.0);
		$("#repetir").css("opacity", 0.0);
		$("#checkmark").css("opacity", 0.0);
		$("#respuesta").text("");
		var op = parseInt($("#nomTemp").css("opacity"));
		if (op > 0) {
			apagar("#nomTemp",1.0);
			apagar(".temp",0.5);
		};
	};
}

function mostrarNombreIntervalo(num){
	var nom = nomIntervalos[num];
	$("#respuesta").text(nom);
}

function jugar(){
	if (modo == "discreto") {
		selectArchivo();
	} else if(modo == "continuum"){
		jugando = true;
		$("#play").css("width",0);
		$("#play").css("height",0);
		jugarContinuum();
		iluminar("#nomTemp",0.0,0.1);
	};
}


var jugando = false;
var tempoInts = 3200;
function jugarContinuum(){
	var f = function() {
		if (jugando) {
			$("#respuesta").text("¿Cuál intervalo sonó?");
			$("#checkmark").css("opacity", 0.0);
			selectArchivo();
			setTimeout(f,tempoInts);
		};
	}
	f();
}

function detenerAudio(){
	audioElement = document.getElementById("fileInterv");
	audioElement.pause(); // detiene el sonido
	jugando = false;
}


var estado = "selector";

//variable con la posicion en el texto. Ajustar siempre a 0
var pos = 0;
//variable con el texto a mostrar
var texto = " ";
// donde se va a mostrar el texto
var miDiv = "encabezado";
// tempo de aparición del texto
var vel = 50;

//creo una funcion para cambiar el texto
function animarTexto1(){
   //incremento la posicion en 1 y extraigo el texto a mostrar en este momento.
   pos = pos + 1;
   var textoActual = texto.substring(0,pos);
   //capturo el div donde se pone el texto
   var t = document.getElementById(miDiv);
   t.textContent = textoActual;
   //controla la cantidad de veces que se llama a la funcion 'animarTexto'
   if (pos <= texto.length){
      //llama varias veces a la función 'animarTexto'
      setTimeout(animarTexto1,vel);
   }
   if(pos == texto.length - 1) {
   		iluminar("#text2",0.0, 0.05);
   }
};

function animarTexto(){
   //incremento la posicion en 1 y extraigo el texto a mostrar en este momento.
   pos = pos + 1;
   var textoActual = texto.substring(0,pos);
   //capturo el div donde se pone el texto
   var t = document.getElementById(miDiv);
   t.textContent = textoActual;
   //controla la cantidad de veces que se llama a la funcion 'animarTexto'
   if (pos <= texto.length){
      //llama varias veces a la función 'animarTexto'
      setTimeout(animarTexto,vel);
   }
};

function aleatorio(minimo, maximo) {
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

// Selecciona aleatoriamente un item de una lista y
// lo borra de la lista que se le pasa para evitar que se repita su selección
function seleccionaItem(lista){
	// si la lista tiene mas de un elemento hace una seleccion aleatoria
	var item = "";
	if (lista.length > 1) { 
		var g = aleatorio(0,lista.length - 1);
		item = lista[g];
		lista.splice(g,1);
	} else {
		item = lista[0];
		lista.splice(0,1);
	};
	return item;
}

function iluminar(obj, num, vel) {
	var f = function() {
		if (num < 1) {
			num = num + vel;
			$(obj).css("opacity", num);
			setTimeout(f,60);
		};
	}
	f();
}

function apagar(obj, num) {
	var f = function() {
		if (num > 0) {
			num = num - 0.1;
			$(obj).css("opacity", num);
			setTimeout(f,60);
		};
	}
	f();
}

var listaArchivos = [["u1.mp3","u2.mp3","u3.mp3","u4.mp3","u5.mp3","u6.mp3","u7.mp3","u8.mp3","u9.mp3","u10.mp3","u11.mp3","u12.mp3","u13.mp3"],["4ju1.mp3","4ju2.mp3","4ju3.mp3","4ju4.mp3","4ju5.mp3","4ju6.mp3","4ju7.mp3","4ju8.mp3","4ju9.mp3","4ju10.mp3","4ju11.mp3","4ju12.mp3","4ju13.mp3"],["5ju1.mp3","5ju2.mp3","5ju3.mp3","5ju4.mp3","5ju5.mp3","5ju6.mp3","5ju7.mp3","5ju8.mp3","5ju9.mp3","5ju10.mp3","5ju11.mp3","5ju12.mp3","5ju13.mp3"],["8ju1.mp3","8ju2.mp3","8ju3.mp3","8ju4.mp3","8ju5.mp3","8ju6.mp3","8ju7.mp3","8ju8.mp3","8ju9.mp3","8ju10.mp3","8ju11.mp3","8ju12.mp3","8ju13.mp3"],["3me1.mp3","3me2.mp3","3me3.mp3","3me4.mp3","3me5.mp3","3me6.mp3","3me7.mp3","3me8.mp3","3me9.mp3","3me10.mp3","3me11.mp3","3me12.mp3","3me13.mp3"],["3ma1.mp3","3ma2.mp3","3ma3.mp3","3ma4.mp3","3ma5.mp3","3ma6.mp3","3ma7.mp3","3ma8.mp3","3ma9.mp3","3ma10.mp3","3ma11.mp3","3ma12.mp3","3ma13.mp3"],["6me1.mp3","6me2.mp3","6me3.mp3","6me4.mp3","6me5.mp3","6me6.mp3","6me7.mp3","6me8.mp3","6me9.mp3","6me10.mp3","6me11.mp3","6me12.mp3","6me13.mp3"],["6ma1.mp3","6ma2.mp3","6ma3.mp3","6ma4.mp3","6ma5.mp3","6ma6.mp3","6ma7.mp3","6ma8.mp3","6ma9.mp3","6ma10.mp3","6ma11.mp3","6ma12.mp3","6ma13.mp3"],["2me1.mp3","2me2.mp3","2me3.mp3","2me4.mp3","2me5.mp3","2me6.mp3","2me7.mp3","2me8.mp3","2me9.mp3","2me10.mp3","2me11.mp3","2me12.mp3","2me13.mp3"],["2ma1.mp3","2ma2.mp3","2ma3.mp3","2ma4.mp3","2ma5.mp3","2ma6.mp3","2ma7.mp3","2ma8.mp3","2ma9.mp3","2ma10.mp3","2ma11.mp3","2ma12.mp3","2ma13.mp3"],["trit1.mp3","trit2.mp3","trit3.mp3","trit4.mp3","trit5.mp3","trit6.mp3","trit7.mp3","trit8.mp3","trit9.mp3","trit10.mp3","trit11.mp3","trit12.mp3","trit13.mp3"],["7me1.mp3","7me2.mp3","7me3.mp3","7me4.mp3","7me5.mp3","7me6.mp3","7me7.mp3","7me8.mp3","7me9.mp3","7me10.mp3","7me11.mp3","7me12.mp3","7me13.mp3"],["7ma1.mp3","7ma2.mp3","7ma3.mp3","7ma4.mp3","7ma5.mp3","7ma6.mp3","7ma7.mp3","7ma8.mp3","7ma9.mp3","7ma10.mp3","7ma11.mp3","7ma12.mp3","7ma13.mp3"]];
var nomIntervalos = ["Unísono","Cuarta","Quinta","Octava","Tercera menor","Tercera mayor","Sexta menor","Sexta mayor","Segunda menor","Segunda mayor","Tritono","Séptima menor","Séptima mayor"];
var catInterv = ["Justo","Justo","Justo","Justo","Consonante","Consonante","Consonante","Consonante","Disonante","Disonante","Disonante","Disonante","Disonante"]; // categoría de cada intervalo
var sizeIntervalos = [0,5,7,12,3,4,8,9,1,2,6,10,11]; //Tamaño en semitonos de cada intervalo, en el mismo orden de las listas anteriores.
var intervaloSel = -1; //número del intervalo seleccionado, rango:0-12. corresponde con la variable NOMINTERVALOS.
var matrizInterv = [];// para guardar temporalmente los índices de las listas de los intervalos seleccionados por el usuario. Sirve para seleccionar aleatoriamente intervalos y presentarlos auditivamente al usuario en forma de test.

// ====================== ENTRADA A TOCAR INTERVALOS ================================

function controlIntervSel(){
	var suma = 0;
	var sel = false;
	// verifica si se ha seleccionado algún intervalo
	for (var i=0; i<listaIntervUsuario.length; i++) {
		suma += listaIntervUsuario[i];
	};
	if (suma > 0 ) {
		sel = true;	
	};
	return sel;
}

var refSublistas = [];//guarda el numero de cada intervalo seleccionado por el usuario
// función para leer los intervalos seleccionados por el usuario y pasarlos
// a la variable SUBLISTAS
function sublistasSel(){
	refSublistas = [];
	for (var j = listaIntervUsuario.length - 1; j >= 0; j--) {
		if (listaIntervUsuario[j] == 1) {
			refSublistas.push(j);
		}; 
	};	
}
var sublistas = [];
function llenarSublistas(){
	sublistas = [];
	for (var j = 0; j <= refSublistas.length - 1; j++) {
		sublistas.push(j);
	};	
}

// Función para construir matriz de referencia de archivos de audio
// de los intervalos, es una lista de listas y cada sublista 
// corresponde a un intervalo.

function llenarMatriz(){
	var d = [0,1,2,3,4,5,6,7,8,9,10,11,12]; // cantidad de archivos de intervalos en cada sublista
	sublistasSel();
	llenarSublistas();
	matrizInterv = [];
	for (var i = 0; i <= sublistas.length - 1; i++) {
		matrizInterv[i] = d;
	};
}
//================== TOCAR INTERVALOS ALEATORIAMENTE ===================

// función que selecciona aleatoriamente el indice de una sublista
// controla que la variable sublistas no esté vacía
// si no está vacía, retorna aleatoriamente un item de esa lista
// ese item es borrado por la función seleccionarItem(listas)
// si está vacía llama a la función llenarSublistas, para que la llene
// SUBLISTAS corresponde con la varible REFSUBLISTAS donde se encuentran
// los números reales de la lista de cada intervalo
function selectSublista(){
	if (sublistas.length == 0) {
		llenarSublistas();
	};
	// Llama a función que selecciona y borra elemento de lista
	var num = seleccionaItem(sublistas); 
	return num;
}
// Función para seleccionar aleatoriamente un # de item de una sublista de
// la matriz de intervalos (variable MATRIZINTERV)
// controla que la sublista no esté vacía y si lo está la llena con 
// los índices de archivos disponibles. Selecciona y borra iteme seleccionado.
// Returna itema seleccionado.
function selectArchivo() {
	var sub = selectSublista(); // Selecciona lista de intervalo
	var li = matrizInterv[sub];
	var di = [0,1,2,3,4,5,6,7,8,9,10,11,12]; // cantidad de archivos de intervalos en cada sublista
	if (li.length == 0) { // controla que la lista no entre vacía
		matrizInterv[sub] = di;
		li = di;
	};
	num = seleccionaItem(li); // Selecciona intervalo
	$("#checkmark").css("opacity", 0.0);
	tocaIntervalo(refSublistas[sub], num); // Toca intervalo
	datosInterv.set("lista",refSublistas[sub]); // guarda numero de lista seleccionada
	datosInterv.set("item",num); // guarda número de item seleccionado
	var n = refSublistas[sub]
	datosInterv.set("nombre",nomIntervalos[n]); // guarda nombre del intervalo seleccionado
	datosInterv.set("categoría",catInterv[n]); // guarda nombre de la categoría del intervalo seleccionado
	console.log("Lista = " + n + "  Item = " + num + "  " + nomIntervalos[n]);
}

function tocaIntervalo(a,b) {
	var archivo = listaArchivos[a][b];
	audioElement = document.getElementById("fileInterv");
	audioElement.pause(); // detiene el sonido
	audioElement.src = "audios/" + archivo; // carga el archivo
	audioElement.currentTime = 0; // rebobina el sonido
	audioElement.play(); // toca el archivo
}
//==================================================================

function muestraReloj() {
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();
 
  if(horas < 10) { horas = '0' + horas; }
  if(minutos < 10) { minutos = '0' + minutos; }
  if(segundos < 10) { segundos = '0' + segundos; }
 
  document.getElementById("reloj").innerHTML = horas+':'+minutos+':'+segundos;
}
 

function evaluar() {
	var x = $("#respuesta").text();
	var y = datosInterv.get("nombre");

	if (x == y) {
		$('#checkmark').attr('src','grafs/acierto.png');
		$('#checkmark').css('transform', 'scale(1.0)');
	}else{
		$('#checkmark').attr('src','grafs/error.png');
		$('#checkmark').css('transform', 'scale(0.7)');
	};
	iluminar("#checkmark",0.0,0.05);
}
function evaluar2() {
	var x = $("#respuesta").text();
	var y = datosInterv.get("categoría");

	if (x == y) {
		$('#checkmark').attr('src','grafs/acierto.png');
		$('#checkmark').css('transform', 'scale(1.0)');
	}else{
		$('#checkmark').attr('src','grafs/error.png');
		$('#checkmark').css('transform', 'scale(0.7)');
	};
	iluminar("#checkmark",0.0,0.05);
}
