var notfoundtext = document.getElementById('notfoundtext');
var body = document.body;

notfoundtext.style.position="relative";
notfoundtext.style.top=(body.scrollHeight);

adjustheight();

window.onresize = function(){
    adjustheight();
};

function adjustheight(){
    notfoundtext.style.top=(((window.innerHeight / 2) - 90) + "px");
}

console.log(window.innerHeight);

