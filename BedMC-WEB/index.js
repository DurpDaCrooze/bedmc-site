var title = document.getElementById('title');
var blogcomponentjs = document.getElementById('blogcomponent');
var blogcontainer = document.getElementById('blogcontainer');
var addnewbutton = document.getElementById('addnewbutton');
var banner = document.getElementById('posterimg');

var title = "bedmc";

changeTitle();

function changeTitle(){
    title.innerHTML = title;
}

addnewbutton.onclick = function(){
  createElement();
}

function createElement(){
  const newBlog = document.createElement("div");
  blogcontainer.appendChild(newBlog);
  newBlog.classList.add('blogcomponent');
}

set_time();

function set_time(){
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
