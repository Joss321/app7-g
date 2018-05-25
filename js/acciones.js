// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready",function(){ //escuchador de eventos
		$('#izquierda').on("swipeleft",function(){ //deslizar ala izquierda
			navigator.notificacion.alert("Deslizó hacia la izquierda",function(){"aplicación 7","ok"}); 
		});//cierra swipe izquierda
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(op){ // aparece mensaje para
				switch(op) //valiable op para las oociones
				{
					case 1:
					navigator.notificacion.beep(1); // suena el dispositivo
					break;
					
					case 2:
					navigator.notification.vibrate(3000); //vibra el dispositivo
					break;
				}
			},"aplicacion7","Beepear,Vibrar,Cancelar");
			});
	},false);									
});