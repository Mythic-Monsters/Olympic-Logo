canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(300, 200, 50, 0, 2*Math.PI);
ctx.stroke();

color = "black";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(375, 200, 50, 0, 2*Math.PI);
ctx.stroke();

color = "red";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(450, 200, 50, 0, 2*Math.PI);
ctx.stroke();

color = "yellow";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(350, 250, 50, 0, 2*Math.PI);
ctx.stroke();

color = "green";

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=5;

ctx.arc(425, 250, 50, 0, 2*Math.PI);
ctx.stroke();




var namesarray= [];
function submit()
{
    var namea1= document.getElementById("name1").value

namesarray.push(namea1)
console.log(namesarray)
document.getElementById("div2").innerHTML=namesarray
}