# Lunar-Lander-Parte-3

Link del rawgit: https://rawgit.com/JuanAntonioBieto/Lunar-Lander-Parte-3/master/index.html
Link del minificado: https://github.com/JuanAntonioBieto/Lunar-Lander-Parte-3/tree/Minificada


# Modificaciones respecto a la versión anterior :

He decidido poner un nuevo botón de on/off para las 2 versiones, he cambiado las instrucciones y he quitado el botón de play
de la versión móvil.


# HTML

### Página principal
En esta parte es donde están todas las imágenes cada una en sus respectivos contenedores,  exceptuando la imagen de la nave con 
el motor encendido y el botón de On, que no están dentro del HTML.
Dentro del HTML hay 5 botones que hacen diferentes funciones que explicare en la parte de JavaScript.

### Página de las instrucciones
En esta página es donde se encuentran las instrucciones del juego y un botón con el cual puedes volver a la página principal.
### Página about

En esta página se encuentran los creadores del juego, y un botón con el cual puedes volver a la página principal.


# CSS

### Versión ordenador
Tengo divida la página en tres partes las cuales ocupan un 25%-50%-25% de ancho y un 100% de alto. 
En la parte de la izquierda se encuentran los paneles de velocidad,altura y combustible.
En la parte de en medio se encuentra la nave,los botones de dificultad y los botones de información y about los cuales
se encuentran ocultos.
En la parte de la derecha se encuentran los botones de pausa/play,reiniciar y info.
Fuera de estos divs tengo la luna fija en la parte central y abajo del todo de la pantalla,el botón de encender el motor ,
un contenedor en el cual se ponen encima los botones de dificultad,información y about que están ocultos, y por último 
los diferentes finales del juego ya sea si ganas o pierdes que también están en oculto.

###Versión móvil
La versión móvil es practicamente igual a la de ordenador con los tamaños modificados y cambiando algunos botones, en esta 
versión la parte de los botones de pausa,reiniciar y info son cambiados por el botón de menú.


# JavaScript

### Versión ordenador

Botón de pausa: al pulsarlo el juego se pausa y se cambia por el botón de play.
Botón de play: al pulsarlo el juego se reanuda y se cambia por el botón de pausa.
Botón de reiniciar: reinicia el juego.
Botón de info: al pulsarlo los botones de información y about se muestran.
Botón de información: te redirige a la página de información si aceptas.
Botón de about: te redirige a la página de about si aceptas.
Botón de on/off: enciendo o apaga el motor de la nave a la vez que cambia la imagen de la misma.
Botones de dificultad: hay tres tipos fácil,normal y difícil cambiaran la dificultad del juego.

### Versión móvil
Botón de menu: muestra los botones de reiniciar,info y pausa el juego.
Botón de menu2: oculta los botones de reiniciar,info y reanuda el juego.
Botón de reiniciar: reinicia el juego.
Botón de info: al pulsarlo los botones de información y about se muestran.
Botón de información: te redirige a la página de información si aceptas.
Botón de about: te redirige a la página de about si aceptas.
Botón de on/off: enciendo o apaga el motor de la nave a la vez que cambia la imagen de la misma.
Botones de dificultad: hay tres tipos fácil,normal y difícil cambiaran la dificultad del juego.

### Otras funciones
Al finalizar el juego los botones de dificultad se muestran y todos los otros botones dejan de funcionar.
Si la nave toca la parte superior, el motor dejara de funcionar.
Si la nave se queda sin combustible, el motor dejara de funcionar.







