var last_position_of_x,last_position_of_y;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d")
Color="blue";
widthofline=1;
var width=screen.width;
new_width=screen.width-70;
new_height=screen.width-300;
if(width<992){
document.getElementById("myCanvas").width=new_width;
document.getElementById("myCanvas").height=new_height;
document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",my_touchstart);
function my_touchstart(e){
console.log("my_touchstart");
}

canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
ctx.beginPath();
ctx.strokeStyle=Color;
ctx.moveTo(last_position_of_x, last_position_of_y);
ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
ctx.stroke();
last_position_of_x = current_position_of_touch_x; last_position_of_y = current_position_of_touch_y;
}