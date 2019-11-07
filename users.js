/*const inpNick = document.getElementById("inpNick");
const btnStart = document.getElementById("btnStart");

btnStart.onclick = function () {
    const nick = inpNick.value;

    console.log(nick);

};*/

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

