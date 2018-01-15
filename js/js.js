//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
//Para ganar
var vnecesaria=5
//variables
var salir = null;
//al cargar por completo la página...
window.onload = function(){
	
	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("fuel");

	
	//definición de eventos
	
	//mostrar menú móvil
    	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "block";
		stop();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("c")[0].style.display = "none";
		start();
	}
	//encender/apagar al apretar/soltar una tecla
	document.getElementById("Power").onclick = function () {
		if(a==g){
			motorOn();
		}else{
			motorOff();
		}
	}
	
	//Empezar a mover la nave justo después de cargar la página
	start();
	
	//La nave y los elementos de los paneles se pausaran
	document.getElementById("pausa").onclick=function(){
		pausar();
		
	}
	
	//La nave y los elementos se reanudaran
	document.getElementById("play").onclick=function(){
		reanudar();
	}
	
	//El juego se reiniciara
	document.getElementById("reiniciar").onclick=function(){
		reiniciar();
	}
	
	//Dificultad fácil
	document.getElementById("facil").onclick=function(){
		vnecesaria=5
		dificultad();

	}

	
	//Dificultad normal
	document.getElementById("normal").onclick=function(){
		vnecesaria=3.5
		dificultad();
	}
	
	//Dificultad díficil
	document.getElementById("dificil").onclick=function(){
		vnecesaria=1
		dificultad();
	}
	
	//Desplegar menú del móvil
	document.getElementById("Menu1").onclick=function(){
		menumovil();
		stop();
	}
	//Esconder menú
	document.getElementById("Menu2").onclick=function(){
		escondermenu();
		start();
	}
	//Reiniciar móvil
	document.getElementById("reiniciar2").onclick=function(){
		reiniciarmovil();

	}
	//Botón info 
	document.getElementById("info").onclick=function(){
		stop();
		informacion();
		document.getElementById("pausa").style.pointerEvents='none';	
		document.getElementById("reiniciar").style.pointerEvents='none';

		
}
	
	
	//Botón volver
	document.getElementById("volver").onclick=function(){
		volver();
		start();
		document.getElementById("pausa").style.pointerEvents="auto";	
		document.getElementById("reiniciar2").style.pointerEvents="auto";	
		document.getElementById("Power").style.pointerEvents="auto";	
		document.getElementById("Menu1").style.pointerEvents="auto";
		document.getElementById("Menu2").style.pointerEvents="auto";
	}
	//Botón intrucciones
	document.getElementById("instrucciones").onclick = function () {
		salir=confirm("¿Desea salir de esta página?");
		if(salir){
			window.open("info.html");
		}
	}
	//Botón about
	document.getElementById("about").onclick = function () {
		salir=confirm("¿Desea salir de esta página?");
		if(salir){
			window.open("about.html",);
		}
	}
}


//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);	
}

//Funcion que pausa la partida y en caso de haber finalizado nos muestra la pantalla de victoria/derrota y bloquea los otros botones
function stop(){
	clearInterval(timer);
	clearInterval(timerFuel);
	if(y>70){
		if(v<vnecesaria){
			document.getElementById("Fin2").style.display ="inline-block";
			document.getElementById("facil").style.display ="inline-block";
			document.getElementById("normal").style.display ="inline-block";
			document.getElementById("dificil").style.display ="inline-block";
			document.getElementById("pausa").style.pointerEvents="none";	
			document.getElementById("reiniciar").style.pointerEvents="none";	
			document.getElementById("Power").style.pointerEvents="none";
			document.getElementById("Menu1").style.pointerEvents="none";
			document.getElementById("Menu2").style.pointerEvents="none";
			document.getElementById("info").style.pointerEvents="none";
		
		
					
		
		}else{
			document.getElementById("Fin").style.display ="inline-block";
			document.getElementById("facil").style.display ="inline-block";
			document.getElementById("normal").style.display ="inline-block";
			document.getElementById("dificil").style.display ="inline-block";
			document.getElementById("pausa").style.pointerEvents="none";	
			document.getElementById("reiniciar").style.pointerEvents="none";	
			document.getElementById("Power").style.pointerEvents="none";	
			document.getElementById("nave1").src="img/naveexp.png";
			document.getElementById("Menu1").style.pointerEvents="none";
			document.getElementById("Menu2").style.pointerEvents="none";
			document.getElementById("info").style.pointerEvents="none";
	
	
		}
		document.getElementById("Power").style.pointerEvents="none";
		
		
}
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores
	velocidad.innerHTML=v.toFixed(2)+"m/s";
	altura.innerHTML=y.toFixed(2)+"m";
	
	//mover hasta que top sea un 70% de la pantalla
	if (y<70){ 
		document.getElementById("nave").style.top = y+"%"; 
		} else { 
			stop();
		}
		//Si la nave choca con la parte de arriba la velocidad cambia a 0 y se apaga el motor
	if (y<0){
		v=0;
		motorOff();
}
    if (c==0){
		motorOff();
}
	
		
}	
function motorOn(){
	//Cambiar a la nave con fuego
	document.getElementById("nave1").src="img/navefuego.png"
	//Cambiar el boton On-Off
	document.getElementById("Power").src="img/on.png"
	//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null){
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);}
	if (c==0){
		motorOff();
	}
	
	
}
function motorOff(){
	//Cambiar a la nave normal
	document.getElementById("nave1").src="img/nave.png"
	//Cambiar el boton On-Off
	document.getElementById("Power").src="img/off.png"
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	
}
function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
	if (c < 0 ) c = 0;
	combustible.innerHTML=c.toFixed(2)+"%";	
		
		
}
//Reanuda el juego
function reanudar() {
	start();
	document.getElementById("play").style.display="none";
	document.getElementById("pausa").style.display="inline-block";
	document.getElementById("Power").style.pointerEvents="auto";
}
//Pausa el juego 
function pausar() {
	stop();
	document.getElementById("pausa").style.display="none";
	document.getElementById("play").style.display="inline-block";
	document.getElementById("Power").style.pointerEvents="none";
	
}
//Reinicia la partida, cambia el boton play por el de pausa y cambia la nave a la normal
function reiniciar(){
	y = 10; 
	v = 0;
	c = 100;
	g = 1.622;
	clearInterval(timer);
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("fuel").style.top= c;
	document.getElementById("Power").src="img/off.png"
	document.getElementById("nave1").src="img/nave.png"
	document.getElementById("play").style.display="none";
	combustible.innerHTML=c.toFixed(2)+"%";
	motorOff();
	start();
}
//Esta función esconde los menus y reinicia la partida.
function reiniciarmovil(){
	y = 10; 
	v = 0;
	c = 100;
	g = 1.622;
	clearInterval(timer);
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("fuel").style.top= c;
	document.getElementById("Power").src="img/off.png"
	document.getElementById("nave1").src="img/nave.png"
	document.getElementById("info").style.display="none";
	document.getElementById("Menu2").style.display="none";
	document.getElementById("reiniciar2").style.display="none";
	document.getElementById("Menu1").style.display="inline-block";
	motorOff();
	start();
}
//Esta función muestra esconde la dificultad y activa los otros botones.
function dificultad(){
	document.getElementById("Fin2").style.display ="none";
	document.getElementById("Fin").style.display ="none";
	document.getElementById("facil").style.display ="none";
	document.getElementById("normal").style.display ="none";
	document.getElementById("dificil").style.display ="none";
	document.getElementById("reiniciar").style.pointerEvents='auto';	
	document.getElementById("Power").style.pointerEvents='auto';
	document.getElementById("pausa").style.pointerEvents='auto';	
	document.getElementById("reiniciar").style.pointerEvents='auto';	
	document.getElementById("Power").style.pointerEvents='auto';
	document.getElementById("Menu1").style.pointerEvents="auto";
	document.getElementById("Menu2").style.pointerEvents="auto";
	document.getElementById("info").style.pointerEvents="auto";
	reiniciar();
}
//Muestra el menú móvil
function menumovil(){
	document.getElementById("info").style.display="inline-block";
	document.getElementById("reiniciar2").style.display="inline-block";
	document.getElementById("Menu2").style.display="inline-block";
	document.getElementById("Menu1").style.display="none";


}
//Esconde el menú móvil
function escondermenu(){
		document.getElementById("info").style.display="none";
		document.getElementById("reiniciar2").style.display="none";
		document.getElementById("Menu1").style.display="inline-block";
		document.getElementById("Menu2").style.display="none";
}
//Menu de información/about
function informacion(){
	document.getElementById("contenedor").style.display="inline-block";
	document.getElementById("instrucciones").style.display="inline-block";
	document.getElementById("about").style.display="inline-block";
	document.getElementById("volver").style.display="inline-block";
}
//Esconde los botones de about/información
function volver(){
	document.getElementById("contenedor").style.display="none";
	document.getElementById("instrucciones").style.display="none";
	document.getElementById("about").style.display="none";
	document.getElementById("volver").style.display="none";
}
//Detiene el uso de botones
function stop2(){
	clearInterval(timer);
	clearInterval(timerFuel);
	document.getElementById("pausa").style.pointerEvents="none";	
	document.getElementById("reiniciar2").style.pointerEvents="none";	
	document.getElementById("Power").style.pointerEvents="none";	
	document.getElementById("Menu1").style.pointerEvents="none";
	document.getElementById("Menu2").style.pointerEvents="none";
}