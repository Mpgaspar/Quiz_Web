var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;

//Getting the elements in the DOM tree
var container = document.getElementById("quizContainer");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById("result");

//Fetching the questions in the created array
function loadQuestion (questionIndex) {
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '.' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;   
} 

//Function that checks user response
function loadNextQuestion () {
    var selectedOption = document.querySelector("input[type=radio]:checked");
    if(!selectedOption){
       alert("Please select your answer!");
       return;    
    }
    var answer = selectedOption.value;
    if(questions[currentQuestion].answer == answer) {
        score += 5;
    }
    selectedOption.checked = false;
    currentQuestion++;
    if(currentQuestion == totQuestions - 1){
        nextButton.textContent = "FINISH";
    }

    //Show score when finish questios
    if(currentQuestion == totQuestions){
       container.style.display = "none";
       resultCont.style.display = "";
       resultCont.textContent = "Your score:" + score;
       
       //Create button with JavaScript
       var button = document.createElement('button');
       button.setAttribute('type','button')
       button.appendChild(document.createTextNode('RANKING'));
       document.body.appendChild(button);
       
       //Function to link to ranking.html
       button.onclick =  function showRanking(){
       window.location='ranking.html';
       }        
    }
    loadQuestion(currentQuestion);
}
loadQuestion(currentQuestion);

//Saving data_user in localStorage
function saveuser() {
    var inpNick = document.getElementById("inpNick");
    var totalScore = documen.getElementById("result")
    var data = JSON.parse(localStorage.getItem("datauser"));
    
    if(data == null) {
        localStorage.setItem("datauser","[]")
        data = [];
    }
  
    var register = [ 
        {name: inpNick.value},
        {score: totalScore.value}
    ];
  
    data.push(register);
    localStorage.setItem("datauser", JSON.stringify(data))
  }
 
  
