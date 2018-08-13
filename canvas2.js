//1. Obtener el elemento canvas del html
var canvas = document.getElementById("mycanvas");
//2 .Obtener el contexto

var c = canvas.getContext("2d");
//3. Entender el sistema de coordenadas (x,y)
 //4. A dibujar


//Lineas

//c.moveTo(250,250);
//c.lineTo(0,500);//destino final de la linea
//c.lineTo(500,250);
//c.lineTo(250,250);
//c.stroke();//dibuja

//c.beginPath();//cambiar de ruta o posicion de coordenadas
//c.moveTo(0,0);
//c.lineTo(200,200);
//c.strokeStyle = "green";
//c.lineWidth = 20;
//c.stroke();

/*
    FILL = RELLENO
    STROKE = BORDE
*/
var w = canvas.width;
var h = canvas.height;

//c.rect(x,y,w,h)

c.rect(10,10,300,100);
c.stroke();
//alert(w+h+10);
/*c.beginPath();
c.moveTo(w/2,h/2);
c.lineTo(w*0.75,h*0.75);
c.lineTo(w*0.25,h*0.75);
c.closePath();//cierra segmentos(une el primer segmento con el ultimo)
c.strokeStyle = "red";
c.lineWidth = 5;
c.fillStyle = "yellow";
c.fill();
c.stroke();

c.beginPath();
c.moveTo(w/4,w/4);
c.lineTo(250,0);
c.lineTo(375,125);
c.closePath();
c.strokeStyle = "green";
c.lineWidth = 5;
c.stroke();*/