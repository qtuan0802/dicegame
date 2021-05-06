// let myPix = new Array(
//   "./images/dice1.png",
//   "./images/dice2.png",
//   "./images/dice3.png",
//   "./images/dice4.png",
//   "./images/dice5.png",
//   "./images/dice6.png"
// );
// let randomNumber1 = Math.floor(Math.random() * myPix.length);
// let randomNumber2 = Math.floor(Math.random() * myPix.length);

// document.querySelector(".img1").setAttribute("src", myPix[randomNumber1]);
// document.querySelector(".img2").setAttribute("src", myPix[randomNumber2]);

// function showPlayerWin() {
//   if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player1 Win!";
//   } else if (randomNumber1 < randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player2 Win!";
//   } else if ((randomNumber1 = randomNumber2)) {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }
// }

// showPlayerWin();

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomImage = "./images/dice" + randomNumber1 + ".png";
let randomImage2 = "./images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomImage);
document.querySelector(".img2").setAttribute("src", randomImage2);
// document.querySelector(".img1").setAttribute();

function showPlayerWin() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 Win!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player2 Win! 🚩";
  } else if ((randomNumber1 = randomNumber2)) {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

showPlayerWin();
