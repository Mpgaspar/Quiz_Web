var progress = document.getElementById("progressBar").value;
var nextButton = document.getElementById("nextButton");

nextButton.click = function start() {
    progress += 10;
    return;          
};
