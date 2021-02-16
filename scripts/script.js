var i = 0;
txt = "Olá, Mundo!";
var speed = 200;

function typeWriter() {
    if (i < txt.length) {
      document.getElementById("welcome_h1").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }