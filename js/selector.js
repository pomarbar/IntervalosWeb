
var listaIntervUsuario = [0,0,0,0,0,0,0,0,0,0,0,0,0];
var jgclick = 0;
var cgclick = 0;
var dgclick = 0;


function inicio(){
	$(".ent").text("");
	var listaNombres = "Seleccione  los intervalos que desea trabajar, individualmente o por categorías,."
	texto = listaNombres;
	miDiv = "instrucciones";
	animarTexto1();


	// SELECTOR: eventos para recibir la selección de intervalos
	// del usuario. Por grupos de intervalos e individualmente.

	// Botón selector del grupo de intevalos J (justos)
	
	$("#justo").on( "mouseenter", function() {
		if (estado == "selector") {
			if (jgclick == 0) {
				$("#justo").css("opacity", 0.6); // Botón principal
				$(".jus").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#justo").on( "mouseleave", function() {
		if (estado == "selector") {
			if (jgclick == 0) {
				$("#justo").css("opacity", 0.4);
				$(".jus").css("opacity", 0.4);
			};
		};
	});

	$("#justo").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (jgclick == 0) {
				$("#justo").css("opacity", 0.9);
				$(".jus").css("opacity", 0.9);
				jgclick = 4;
				unclick = false;
				cuclick = false;
				qiclick = false;
				otclick = false;
				for (var i = 0; i <= 3; i++) {
					listaIntervUsuario[i] = 1;
				};
			} else {
				$("#justo").css("opacity", 0.4);
				$(".jus").css("opacity", 0.4);
				jgclick = 0;
				unclick = true;
				cuclick = true;
				qiclick = true;
				otclick = true;
				for (var i = 0; i <= 3; i++) {
					listaIntervUsuario[i] = 0;
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			$("#respuesta").text("Justo");
			evaluar2();
		};
	});

	// Selector de intervalo individual: Unisono = listaIntervUsuario[0].
	var unclick = true;
	$("#uj").on( "mouseenter", function() {
		if (estado == "selector") {
			if (unclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);// Botón principal
				}; 
				$("#uj").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#uj").on( "mouseleave", function() {
		if (estado == "selector") {
			if (unclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
				$("#uj").css("opacity", 0.4);
			};
		};
	});

	$("#uj").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (unclick) {
				$("#justo").css("opacity", 0.9);
				$("#uj").css("opacity", 0.9);
				jgclick++;
				unclick = false;
				listaIntervUsuario[0] = 1;
			} else {
				$("#uj").css("opacity", 0.4);
				jgclick--;
				unclick = true;
				listaIntervUsuario[0] = 0;
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(0);
			evaluar();
		};
	});

	// Selector de intervalo individual: Cuarta justa = listaIntervUsuario[1].
	var cuclick = true;
	$("#cuartaj").on( "mouseenter", function() {
		if (estado == "selector") {
			if (cuclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);// Botón principal
				}; 
				$("#cuartaj").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#cuartaj").on( "mouseleave", function() {
		if (estado == "selector") {
			if (cuclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
				$("#cuartaj").css("opacity", 0.4);
			};
		};
	});

	$("#cuartaj").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (cuclick) {
				$("#justo").css("opacity", 0.9);
				$("#cuartaj").css("opacity", 0.9);
				jgclick++;
				cuclick = false;
				listaIntervUsuario[1] = 1;
			} else {
				$("#cuartaj").css("opacity", 0.4);
				jgclick--;
				cuclick = true;
				listaIntervUsuario[1] = 0;
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(1);
			evaluar();
		};
	});

	// Selector de intervalo individual: Quinta justa = listaIntervUsuario[2].
	var qiclick = true;
	$("#quintaj").on( "mouseenter", function() {
		if (estado == "selector") {
			if (qiclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);// Botón principal
				}; 
				$("#quintaj").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#quintaj").on( "mouseleave", function() {
		if (estado == "selector") {
			if (qiclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
				$("#quintaj").css("opacity", 0.4);
			};
		};
	});

	$("#quintaj").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (qiclick) {
				$("#justo").css("opacity", 0.9);
				$("#quintaj").css("opacity", 0.9);
				jgclick++;
				qiclick = false;
				listaIntervUsuario[2] = 1;
			} else {
				$("#quintaj").css("opacity", 0.4);
				jgclick--;
				qiclick = true;
				listaIntervUsuario[2] = 0;
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(2);
			evaluar();
		};
	});

	// Selector de intervalo individual: Octava = listaIntervUsuario[3].
	var otclick = true;
	$("#octava").on( "mouseenter", function() {
		if (estado == "selector") {
			if (otclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);// Botón principal
				}; 
				$("#octava").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#octava").on( "mouseleave", function() {
		if (estado == "selector") {
			if (otclick) {
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
				$("#octava").css("opacity", 0.4);
			};
		};
	});

	$("#octava").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (otclick) {
				$("#justo").css("opacity", 0.9);
				$("#octava").css("opacity", 0.9);
				jgclick++;
				otclick = false;
				listaIntervUsuario[3] = 1;
			} else {
				$("#octava").css("opacity", 0.4);
				jgclick--;
				otclick = true;
				listaIntervUsuario[3] = 0;
				if (jgclick == 0) {
					$("#justo").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(3);
			evaluar();
		};
	});
	//========================================================
	// Botón selector del grupo de intevalos C (consonantes)
	
	$("#cons").on( "mouseenter", function() {
		if (estado == "selector") {
			if (cgclick == 0) {
				$("#cons").css("opacity", 0.6); // Botón principal
				$(".con").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#cons").on( "mouseleave", function() {
		if (estado == "selector") {
			if (cgclick == 0) {
				$("#cons").css("opacity", 0.4);
				$(".con").css("opacity", 0.4);
			};
		};
	});

	$("#cons").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (cgclick == 0) {
				$("#cons").css("opacity", 0.9);
				$(".con").css("opacity", 0.9);
				cgclick = 4;
				tmeclick = false;
				tmaclick = false;
				smeclick = false;
				smaclick = false;
				for (var i = 4; i <= 7; i++) {
					listaIntervUsuario[i] = 1;
				};
			} else {
				$("#cons").css("opacity", 0.4);
				$(".con").css("opacity", 0.4);
				cgclick = 0;
				tmeclick = true;
				tmaclick = true;
				smeclick = true;
				smaclick = true;
				for (var i = 4; i <= 7; i++) {
					listaIntervUsuario[i] = 0;
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			$("#respuesta").text("Consonante");
			evaluar2();
		};
	});

	// Selector de intervalo individual: Tercera menor = listaIntervUsuario[4].
	var tmeclick = true;
	$("#terzame").on( "mouseenter", function() {
		if (estado == "selector") {
			if (tmeclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);// Botón principal
				}; 
				$("#terzame").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#terzame").on( "mouseleave", function() {
		if (estado == "selector") {
			if (tmeclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
				$("#terzame").css("opacity", 0.4);
			};
		};
	});

	$("#terzame").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (tmeclick) {
				$("#cons").css("opacity", 0.9);
				$("#terzame").css("opacity", 0.9);
				cgclick++;
				tmeclick = false;
				listaIntervUsuario[4] = 1;
			} else {
				$("#terzame").css("opacity", 0.4);
				cgclick--;
				tmeclick = true;
				listaIntervUsuario[4] = 0;
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(4);
			evaluar();
		};
	});
	
	// Selector de intervalo individual: Tercera mayor = listaIntervUsuario[5].
	var	tmaclick = true;
	$("#terzama").on( "mouseenter", function() {
		if (estado == "selector") {
			if (tmaclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);// Botón principal
				}; 
				$("#terzama").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#terzama").on( "mouseleave", function() {
		if (estado == "selector") {
			if (tmaclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
				$("#terzama").css("opacity", 0.4);
			};
		};
	});

	$("#terzama").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (tmaclick) {
				$("#cons").css("opacity", 0.9);
				$("#terzama").css("opacity", 0.9);
				cgclick++;
				tmaclick = false;
				listaIntervUsuario[5] = 1;
			} else {
				$("#terzama").css("opacity", 0.4);
				cgclick--;
				tmaclick = true;
				listaIntervUsuario[5] = 0;
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(5);
			evaluar();
		};
	});
	
	// Selector de intervalo individual: Sexta menor = listaIntervUsuario[6].
	var	smeclick = true;
	$("#sextame").on( "mouseenter", function() {
		if (estado == "selector") {
			if (smeclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);// Botón principal
				}; 
				$("#sextame").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#sextame").on( "mouseleave", function() {
		if (estado == "selector") {
			if (smeclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
				$("#sextame").css("opacity", 0.4);
			};
		};
	});

	$("#sextame").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (smeclick) {
				$("#cons").css("opacity", 0.9);
				$("#sextame").css("opacity", 0.9);
				cgclick++;
				smeclick = false;
				listaIntervUsuario[6] = 1;
			} else {
				$("#sextame").css("opacity", 0.4);
				cgclick--;
				smeclick = true;
				listaIntervUsuario[6] = 0;
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(6);
			evaluar();
		};
	});
	
	// Selector de intervalo individual: Sexta mayor = listaIntervUsuario[7].
	var	smaclick = true;
	$("#sextama").on( "mouseenter", function() {
		if (estado == "selector") {
			if (smaclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);// Botón principal
				}; 
				$("#sextama").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#sextama").on( "mouseleave", function() {
		if (estado == "selector") {
			if (smaclick) {
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
				$("#sextama").css("opacity", 0.4);
			};
		};
	});

	$("#sextama").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (smaclick) {
				$("#cons").css("opacity", 0.9);
				$("#sextama").css("opacity", 0.9);
				cgclick++;
				smaclick = false;
				listaIntervUsuario[7] = 1;
			} else {
				$("#sextama").css("opacity", 0.4);
				cgclick--;
				smaclick = true;
				listaIntervUsuario[7] = 0;
				if (cgclick == 0) {
					$("#cons").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(7);
			evaluar();
		};
	});

	//========================================================
	// Botón selector del grupo de intevalos D (disonantes)
	
	$("#dison").on( "mouseenter", function() {
		if (estado == "selector") {
			if (dgclick == 0) {
				$("#dison").css("opacity", 0.6); // Botón principal
				$(".dis").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#dison").on( "mouseleave", function() {
		if (estado == "selector") {
			if (dgclick == 0) {
				$("#dison").css("opacity", 0.4);
				$(".dis").css("opacity", 0.4);
			};
		};
	});

	$("#dison").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (dgclick == 0) {
				$("#dison").css("opacity", 0.9);
				$(".dis").css("opacity", 0.9);
				dgclick = 4;
				segmeclick = false;
				segmaclick = false;
				tritclick  = false;
				sepmeclick = false;
				sepmaclick = false;
				for (var i = 8; i <= 12; i++) {
					listaIntervUsuario[i] = 1;
				};
			} else {
				$("#dison").css("opacity", 0.4);
				$(".dis").css("opacity", 0.4);
				dgclick = 0;
				segmeclick = true;
				segmaclick = true;
				tritclick  = true;
				sepmeclick = true;
				sepmaclick = true;
				for (var i = 8; i <= 12; i++) {
					listaIntervUsuario[i] = 0;
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(0);
			$("#respuesta").text("Disonante");
			evaluar2();
		};
	});
	
	// Selector de intervalo individual: Segunda menor = listaIntervUsuario[8].
	var segmeclick = true;
	$("#segme").on( "mouseenter", function() {
		if (estado == "selector") {
			if (segmeclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);// Botón principal
				}; 
				$("#segme").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#segme").on( "mouseleave", function() {
		if (estado == "selector") {
			if (segmeclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
				$("#segme").css("opacity", 0.4);
			};
		};
	});

	$("#segme").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (segmeclick) {
				$("#dison").css("opacity", 0.9);
				$("#segme").css("opacity", 0.9);
				dgclick++;
				segmeclick = false;
				listaIntervUsuario[8] = 1;
			} else {
				$("#segme").css("opacity", 0.4);
				dgclick--;
				segmeclick = true;
				listaIntervUsuario[8] = 0;
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(8);
			evaluar();
		};
	});

	
	// Selector de intervalo individual: Segunda mayor = listaIntervUsuario[9].
	var	segmaclick = true;
	$("#segma").on( "mouseenter", function() {
		if (estado == "selector") {
			if (segmaclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);// Botón principal
				}; 
				$("#segma").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#segma").on( "mouseleave", function() {
		if (estado == "selector") {
			if (segmaclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
				$("#segma").css("opacity", 0.4);
			};
		};
	});

	$("#segma").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (segmaclick) {
				$("#dison").css("opacity", 0.9);
				$("#segma").css("opacity", 0.9);
				dgclick++;
				segmaclick = false;
				listaIntervUsuario[9] = 1;
			} else {
				$("#segma").css("opacity", 0.4);
				dgclick--;
				segmaclick = true;
				listaIntervUsuario[9] = 0;
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(9);
			evaluar();
		};
	});

	// Selector de intervalo individual: Tritono = listaIntervUsuario[10].
	var	tritclick  = true;
	$("#trit").on( "mouseenter", function() {
		if (estado == "selector") {
			if (tritclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);// Botón principal
				}; 
				$("#trit").css("opacity", 0.6); // Botón del grupo
			};
		};
	});

	$("#trit").on( "mouseleave", function() {
		if (estado == "selector") {
			if (tritclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
				$("#trit").css("opacity", 0.4);
			};
		};
	});

	$("#trit").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (tritclick) {
				$("#dison").css("opacity", 0.9);
				$("#trit").css("opacity", 0.9);
				dgclick++;
				tritclick = false;
				listaIntervUsuario[10] = 1;
			} else {
				$("#trit").css("opacity", 0.4);
				dgclick--;
				tritclick = true;
				listaIntervUsuario[10] = 0;
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(10);
			evaluar();
		};
	});

	// Selector de intervalo individual: Séptima menor = listaIntervUsuario[11].
	var	sepmeclick = true;
	$("#septme").on( "mouseenter", function() {
		if (estado == "selector") {
			if (sepmeclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);// Botón principal
				}; 
				$("#septme").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#septme").on( "mouseleave", function() {
		if (estado == "selector") {
			if (sepmeclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
				$("#septme").css("opacity", 0.4);
			};
		};
	});

	$("#septme").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (sepmeclick) {
				$("#dison").css("opacity", 0.9);
				$("#septme").css("opacity", 0.9);
				dgclick++;
				sepmeclick = false;
				listaIntervUsuario[11] = 1;
			} else {
				$("#septme").css("opacity", 0.4);
				dgclick--;
				sepmeclick = true;
				listaIntervUsuario[11] = 0;
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(11);
			evaluar();
		};
	});

	
	// Selector de intervalo individual: Séptima mayor = listaIntervUsuario[12].
	var	sepmaclick = true;
	$("#septma").on( "mouseenter", function() {
		if (estado == "selector") {
			if (sepmaclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);// Botón principal
				}; 
				$("#septma").css("opacity", 0.6); // Botones del grupo
			};
		};
	});

	$("#septma").on( "mouseleave", function() {
		if (estado == "selector") {
			if (sepmaclick) {
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
				$("#septma").css("opacity", 0.4);
			};
		};
	});

	$("#septma").on("click", "", function () {
		if (estado == "selector") {
			if($("#entrar").css("display") == "none"){
				$("#entrar").css("display","block");
			};
			if (sepmaclick) {
				$("#dison").css("opacity", 0.9);
				$("#septma").css("opacity", 0.9);
				dgclick++;
				sepmaclick = false;
				listaIntervUsuario[12] = 1;
			} else {
				$("#septma").css("opacity", 0.4);
				dgclick--;
				sepmaclick = true;
				listaIntervUsuario[12] = 0;
				if (dgclick == 0) {
					$("#dison").css("opacity", 0.4);
				};
			};
		};
		if (modo == "discreto" || modo == "continuum") {
			mostrarNombreIntervalo(12);
			evaluar();
		};
	});

//==================== BOTÓN ENTRAR ========================
	$("#entrar").on("click", "", function () {
		if (estado == "selector") {
			entrar(); // función para entrar a oir intervalos			
		}else if (estado == "tocar") {
			salir(); // función para salir de oir intervalos y regresar a seleccionar otros intervalos.			
		};
	});

// ==================== BOTÓN MODO DISCRETO ========================
	var	discreclick = true;
	$("#discreto").on( "mouseenter", function() {
		if (estado == "tocar") {
			if (discreclick) {
				$("#discreto").css("opacity", 0.7);
			};
		};
	});

	$("#discreto").on( "mouseleave", function() {
		if (estado == "tocar") {
			if (discreclick) {
				$("#discreto").css("opacity", 0.4);
			};
		};
	});

	$("#discreto").on("click", "", function () {
		if (estado == "tocar") {
			if (discreclick) {
				detenerAudio();
				$("#continuum").css("opacity", 0.3);
				$("#discreto").css("opacity", 0.9);
				$("#play").css("opacity", 0.4);
				$("#stop").css("opacity", 0.4);
				$("#repetir").css("opacity", 0.3);
				$("#checkmark").css("opacity", 0.0);
				$("#respuesta").text("");
				$("#play").css("width",40);
				$("#play").css("height",38);
				discreclick = false;
				conticlick = true;
				modo = "discreto";
				jugando = false;
				var op = parseInt($("#nomTemp").css("opacity"));
				if (op > 0) {
					apagar("#nomTemp",1.0);
					apagar(".temp",0.5);
				};
			};
		};
	});
// ==================== BOTÓN MODO CONTINUUM ========================
	var	conticlick = true;
	$("#continuum").on( "mouseenter", function() {
		if (estado == "tocar") {
			if (conticlick) {
				$("#continuum").css("opacity", 0.7); // Botones del grupo
			};
		};
	});

	$("#continuum").on( "mouseleave", function() {
		if (estado == "tocar") {
			if (conticlick) {
				$("#continuum").css("opacity", 0.4);
			};
		};
	});

	$("#continuum").on("click", "", function () {
		if (estado == "tocar") {
			if (conticlick) {
				detenerAudio();
				$("#discreto").css("opacity", 0.3);
				$("#continuum").css("opacity", 0.9);
				$("#play").css("opacity", 0.4);
				$("#stop").css("opacity", 0.4);
				$("#repetir").css("opacity", 0.0);
				$("#checkmark").css("opacity", 0.0);
				$("#respuesta").text("");
				iluminar("#nomTemp",0.0,0.1);
				conticlick = false;
				discreclick = true;
				modo = "continuum";
				jugando = true;
				$(".temp").css("opacity",0.3);
				$("#t3").css("opacity", 1.0);
				tempoInts = 3000;
			};
		};
	});

// ==================== BOTÓN PLAY ========================
	$("#play").on( "mouseenter", function() {
		if (modo == "discreto" || modo == "continuum") {
			$("#play").css("opacity", 0.8); 
		};
	});

	$("#play").on( "mouseleave", function() {
		if (modo == "discreto" || modo == "continuum") {
			$("#play").css("opacity", 0.5); 
		};
	});

	$("#play").on("mousedown", "", function () {
		if (modo == "discreto" || modo == "continuum") {
			$("#play").css("opacity", 1.0);
			$("#respuesta").text("¿Cuál intervalo sonó?");
			$("#checkmark").css("opacity", 0.0);
			jugar();
		};
	});
	$("#play").on("mouseup", "", function () {
		if (modo == "discreto" || modo == "continuum") {
			$("#play").css("opacity", 0.8);
		};
	});

// ==================== BOTÓN STOP ========================
	$("#stop").on( "mouseenter", function() {
		if (modo == "discreto" || modo == "continuum") {
			$("#stop").css("opacity", 0.8); // Botones del grupo
		};
	});

	$("#stop").on( "mouseleave", function() {
		if (modo == "discreto" || modo == "continuum") {
			$("#stop").css("opacity", 0.5); // Botones del grupo
		};
	});

	$("#stop").on("mousedown", "", function () {
		if (modo == "discreto") {
			$("#stop").css("opacity", 1.0);
			detenerAudio();
		};
		if (modo == "continuum") {
			$("#stop").css("opacity", 1.0);
			detenerAudio();
			$("#play").css("width",40);
			$("#play").css("height",38);
		};
	});
	$("#stop").on("mouseup", "", function () {
		if (modo == "discreto" || modo == "continuum") {
			$("#stop").css("opacity", 0.8); // Botones del grupo
			/*if (parseInt($("#play").css("opacity")), == 0) {
				$("#play").css("opacity", 0.7);
			};*/
		};
	});	

// ==================== BOTÓN REPETIR ========================
	$("#repetir").on( "mouseenter", function() {
		if (modo == "discreto") {
			$("#repetir").css("opacity", 0.7);
		};
	});

	$("#repetir").on( "mouseleave", function() {
		if (modo == "discreto") {
			$("#repetir").css("opacity", 0.4);
		};
	});

	$("#repetir").on("mousedown", "", function () {
		if (modo == "discreto") {
			$("#repetir").css("opacity", 1.0);
			var l = datosInterv.get("lista"); // lee numero de lista seleccionada
			var i = datosInterv.get("item"); // lee número de item seleccionado
			tocaIntervalo(l, i); // Toca intervalo
		};
	});
	$("#repetir").on("mouseup", "", function () {
		if (modo == "discreto") {
			$("#repetir").css("opacity", 0.7);
		};
	});	

// ==================== BOTÓNES TEMPO ========================
	$(".temp").on("mousedown", "", function () {
		$(".temp").css("opacity", 0.3);
		if (modo == "continuum") {
			$(this).css("opacity", 1.0);
			var nomb = $(this).attr("id");
			switch(nomb){
				case "t0" : tempoInts = 800;
					break;
				case "t1" : tempoInts = 1500;
					break;
				case "t2" : tempoInts = 2200;
					break;
				case "t3" : tempoInts = 3000;
					break;
				case "t4" : tempoInts = 4000;
					break;
				case "t5" : tempoInts = 5300;
					break;
				case "t6" : tempoInts = 6600;
					break;
			}
		};
	});


}
