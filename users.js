//Saving user data in localStorage
function saveuser() {
  var inpNick = document.getElementById("inpNick");
  
  var data = JSON.parse(localStorage.getItem("datauser"));

  if(data == null) {
      localStorage.setItem("datauser","[]")
      data = [];
  }

  var register = {
      name: inpNick.value,
  }

  data.push(register);
  localStorage.setItem("datauser", JSON.stringify(data))
}

//Put users in Ranking
var user01 = document.getElementById("user01");
var user02 = document.getElementById("user02");
var user03 = document.getElementById("user03");
var user04 = document.getElementById("user04"); 

user01.textContent = localStorage.getItem("datauser", "[0]");
user02.textContent = localStorage.getItem("datauser", "[1]");
user03.textContent = localStorage.getItem("datauser", "[2]");
user04.textContent = localStorage.getItem("datauser", "[3]");




