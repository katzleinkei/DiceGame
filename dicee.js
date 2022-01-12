function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var message;

  document.querySelector(".img1").src = "images/dice" + randomNumber1 + ".png";
  document.querySelector(".img2").src = "images/dice" + randomNumber2 + ".png";

  if (randomNumber1 > randomNumber2) {
    message = "🚩 Player 1 Wins!"
  } else if (randomNumber1 < randomNumber2) {
    message = "Player 2 Wins! 🚩"
  } else {
    message = "Draw!"
  }

  document.querySelector("h1").innerHTML = message;
}
