var notfoundtext = document.getElementById('notfoundtext');
var body = document.body;

notfoundtext.style.position="relative";
notfoundtext.style.top=(body.scrollHeight + "px");

adjustheight();

window.onresize = function(){
    adjustheight();
};

function adjustheight(){
    notfoundtext.style.top=(((window.innerHeight / 2)) + "px");
}

console.log(window.innerHeight);

