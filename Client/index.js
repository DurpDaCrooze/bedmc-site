
const canvas = document.getElementById("drawboard");
const clearbutton = document.getElementById("clearbutton");

ctx = canvas.getContext("2d");
ctxb = canvas.getContext("2d");

const url = "https://drawboardjs-production.up.railway.app"

console.log("Script is running!");

//modifiable vars
var pencilcolor = '#FF0000';
var pencilcolordebug = '00FF00';

var previousX = 0;
var previousY = 0;

var mousedown = false;
var firstloop = true;

startLoop();

function startLoop(){
  setInterval(updateCanvas, 100);
}

clearbutton.onclick = function(){
  clearcanvas();
  fetch(url + "/clearcanvas")
}

function clearcanvas(){
  ctx.clearRect(0,0, canvas.width, canvas.height);
}

function updateCanvas(){
  console.log("updated");
  var datastore;
    //retdata
    fetch(url + "/getcords")
    .then(response => response.json())
    .then(data => { 
      console.log(data);
      for(var i = 0; i < data.length; i++){
        ctx.fillRect(data[i][0], data[i][1], 10, 10);
      }
    }); 
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

      fetch(url + "/updatecords", {
        headers:{
          "cords" : differenceXmid + ',' + differenceYmid
        }
      })
      
    }

    //filling in innitial click
    ctx.fillStyle = pencilcolor;
    ctx.fillRect(correctX, correctY, 10,10);

    previousX = correctX;
    previousY = correctY;

    firstloop = false;

    cords[0] = correctX;
    cords[1] = correctY;

      //sendata
    fetch(url + "/updatecords", {
    headers:{
      "cords" : cords[0] + ',' + cords[1]
    }
  })
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
