var CV = document.getElementById("MyCanvas");
var ctx = CV.getContext("2d");
var mouseEvent = "";


ctx.addEventListener("mousedown", down);

function down(e){
color = document.getElementById("color").value;
radius = document.getElementById("radius").value;
width = document.getElementById("width_line").value;
mouseEvent = "mousedown";
}

ctx.addEventListener("mouseup", up)

function up(e){
 mouseEvent = "mouseup"
}

ctx.addEventListener("mousemove", move)

function move(e){
mouseEvent = "mouseleave"

x = e.clientX - CV.offsetLeft;
y = e.clientY - CV.offsetTop;

if (mouseEvent == "mousedown") {
   console.log("position of x and y coordinates are =");
   console.log("x =" + x + "y =" + y);
   ctx.beginPath();
   ctx.strokeStyle = color;
   ctx.lineWidth = width;
   ctx.arc(x, y, raduis , 0, 2 * Math.PI);
   ctx.stroke();
}
}