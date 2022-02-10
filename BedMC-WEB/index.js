var title = document.getElementById('title');
var blogcomponentjs = document.getElementById('blogcomponent');
var blogcontainer = document.getElementById('blogcontainer');
var addnewbutton = document.getElementById('addnewbutton');
var banner = document.getElementById('posterimg');

var saberwarsgif = document.getElementById('saberwarsgif');
var saberwarspar = document.getElementById('saberwarspar');
var saberwarstitleline = document.getElementById('saberwarstitleline');

var title = "bedmc";

//innitializing pos;
saberwarspar.style.position="relative";
saberwarstitle.style.position="relative";
saberwarstitleline.style.position="relative";
saberwarsgif.style.position="relative";

//innitializing start functions
changeTitle();
startBanner();
positiondiv1();

window.onresize = function(){
  positiondiv1();
}

function positiondiv1(){
  saberwarspar.style.left=((window.innerWidth / 2) + "px");
  saberwarstitle.style.left=((window.innerWidth / 2) + "px");
  saberwarsgif.style.left=((window.innerWidth / 2) - 520 + "px");
  saberwarstitleline.style.left=((window.innerWidth / 2) - ((window.innerWidth / 2) * 2) + 185 + "px");
}

function changeTitle(){
    title.innerHTML = title;
}

function createElement(){
  const newBlog = document.createElement("div");
  blogcontainer.appendChild(newBlog);
  newBlog.classList.add('blogcomponent');
}

function startBanner(){
  setInterval(change_image, 4000);
}

var count = 0;
function change_image(){
  count++;
  if(count == 0){
    posterimg.src="imgs/pagecontent/saber-banner.jpg"
  }else if(count == 1){
    posterimg.src="imgs/pagecontent/poster.jpg"
  }else if(count == 2){
    posterimg.src="imgs/pagecontent/saber-banner2.jpg"
    count = -1
  }
  console.log("interval");
}

addnewbutton.onclick = function(){
  createElement();
}

