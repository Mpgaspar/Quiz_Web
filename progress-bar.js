var progress = document.getElementById("progressBar").value;
var progress = new Number();
var max = new Number()
var progress = 0;
var max = 100;

function start() {
    if((progress + 1) < max){
    progress += 1;    
    setTimeout("start();", 1000);
    }
}