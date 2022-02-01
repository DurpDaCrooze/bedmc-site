
const canvas = document.getElementById("drawboard");
const clearbutton = document.getElementById("clearbutton");

ctx = canvas.getContext("2d");
ctxb = canvas.getContext("2d");

console.log("Script is running!");

//modifiable vars
var pencilcolor = '#FF0000';
var pencilcolordebug = '00FF00';

var previousX = 0;
var previousY = 0;

var mousedown = false;
var firstloop = true;

clearbutton.onclick = function(){
  clearcanvas();
}

function clearcanvas(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

canvas.addEventListener('mousemove', e => {

  let cords = [0, 0];

  if(mousedown){
    correctX = e.offsetX;
    correctY = e.offsetY;

    var differenceX = ((correctX - previousX) / 2);
    var differenceY = ((correctY - previousY) / 2);

    var differenceXmid = (previousX + ((correctX - previousX) / 2));
    var differenceYmid = (previousY + ((correctY - previousY) / 2));

    //filling in between las and new point
    if(!firstloop){
      ctx.fillStyle = pencilcolordebug;
      ctx.fillRect(differenceXmid, differenceYmid, 10, 10);
      
    }

    //filling in innitial click
    ctx.fillStyle = pencilcolor;
    ctx.fillRect(correctX, correctY, 10,10);

    previousX = correctX;
    previousY = correctY;

    firstloop = false;

    cords[0] = correctX;
    cords[1] = correctY;

  }
})

canvas.addEventListener('mousedown', e =>{
    mousedown = true;
    console.log("mouse down");
})

canvas.addEventListener('mouseup', e =>{
    mousedown = false;
    console.log("mouse up");
    firstloop = true;
})
