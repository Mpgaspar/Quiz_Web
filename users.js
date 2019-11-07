//Saving user data in localStorage
function saveuser() {
  var inpNick = document.getElementById("inpNick");
  
  var data = JSON.parse(localStorage.getItem("datauser"));

  if(data == null) {
      localStorage.setItem("datauser","[]")
      data = [];
  }

  var register = {
      name: inpNick.value
  }

  data.push(register);
  localStorage.setItem("datauser", JSON.stringify(data))
}

