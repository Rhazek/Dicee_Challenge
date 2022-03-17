
function dice(){
  let pictures = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];
  let image1 = Math.floor(Math.random() * pictures.length);
  document.querySelector(".img1").setAttribute("src", pictures[image1]);
  let image2 = Math.floor(Math.random() * pictures.length);
  document.querySelector(".img2").setAttribute("src", pictures[image2]);

  if(image1>image2){
  document.querySelector("h1").textContent = "🚩Player 1 WINS!";
  document.querySelector("h1").style.fontSize = "5rem";
} else if(image1<image2) {
  document.querySelector("h1").textContent = "Player 2 WINS!🚩";
  document.querySelector("h1").style.fontSize = "5rem";
} else {
  document.querySelector("h1").textContent = "DRAW!!🏳️";
  document.querySelector("h1").style.fontSize = "5rem";
}
}

 dice();
