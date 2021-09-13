//Player's Choice:
let resultWindow = document.getElementsByClassName("result-window")[0];
let selection = document.getElementsByClassName("center")[0];
let choices = selection.getElementsByClassName("outer");
let playerChoice = resultWindow.getElementsByClassName("outer")[0];
let randNum = Math.floor(Math.random() * 3);
let compChoice = resultWindow.getElementsByClassName("outer")[1];
let rules = document.getElementsByClassName("instructions")[0];
let score = 0;

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener("click", function() {
    resultWindow.style.display = "flex";
    selection.style.opacity = "0";

    //Player Choice:
    playerChoice.getElementsByTagName("img")[0].src = choices[i].getElementsByTagName("img")[0].src;
    if (i == 0) {
      if (randNum == 2) {
        playerChoice.style.boxShadow = "0 0.5rem hsl(230, 64%, 47%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        playerChoice.style.boxShadow = "0 0.5rem hsl(230, 64%, 47%)";
      }
      playerChoice.style.backgroundColor = "hsl(230, 89%, 62%)";
    }
    if (i == 1) {
      if (randNum == 0) {
        playerChoice.style.boxShadow = "0 0.5rem hsl(39, 64%, 34%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        playerChoice.style.boxShadow = "0 0.5rem hsl(39, 64%, 34%)";
      }
      playerChoice.style.backgroundColor = "hsl(39, 89%, 49%)";
    }
    if (i == 2) {
      if (randNum == 1) {
        playerChoice.style.boxShadow = "0 0.5rem hsl(349, 46%, 37%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        playerChoice.style.boxShadow = "0 0.5rem hsl(349, 46%, 37%)";
      }
      playerChoice.style.backgroundColor = "hsl(349, 71%, 52%)";
    }

    //House Choice:
    compChoice.getElementsByTagName("img")[0].src = choices[randNum].getElementsByTagName("img")[0].src;
    if (randNum == 0) {
      if (i == 2) {
        compChoice.style.boxShadow = "0 0.5rem hsl(230, 64%, 47%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        compChoice.style.boxShadow = "0 0.5rem hsl(230, 64%, 47%)";
      }
      compChoice.style.backgroundColor = "hsl(230, 89%, 62%)";
    }
    if (randNum == 1) {
      if (i == 0) {
        compChoice.style.boxShadow = "0 0.5rem hsl(39, 64%, 34%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        compChoice.style.boxShadow = "0 0.5rem hsl(39, 64%, 34%)";
      }
      compChoice.style.backgroundColor = "hsl(39, 89%, 49%)";
    }
    if (randNum == 2) {
      if (i == 1) {
        compChoice.style.boxShadow = "0 0.5rem hsl(349, 46%, 37%), 0 0 40rem hsl(0, 0%, 100%)";
      } else {
        compChoice.style.boxShadow = "0 0.5rem hsl(349, 46%, 37%)";
      }
      compChoice.style.backgroundColor = "hsl(349, 71%, 52%)";
    }

    //Score:
    if (randNum == i) {
      score = score;
      document.getElementById("verdict").innerHTML = "DRAW";
    }
    if ((randNum == 0 && i == 1) || (randNum == 1 && i == 2) || (randNum == 2 && i == 0)) {
      score += 1;
      document.getElementById("verdict").innerHTML = "YOU WIN";
    }
    if ((randNum == 0 && i == 2) || (randNum == 1 && i == 0) || (randNum == 2 && i == 1)) {
      if (score > 0) {
        score -= 1;
      }
      document.getElementById("verdict").innerHTML = "YOU LOSE";
    }
    document.getElementById("scoreTotal").innerHTML = score;
  });
}

document.getElementsByClassName("play")[0].onclick = function() {
  resultWindow.style.display = "none";
  selection.style.opacity = "1";
  randNum = Math.floor(Math.random() * 3);
};

document.getElementsByClassName("rules")[0].onclick = function() {
  rules.style.display = "block";
};

document.getElementsByTagName("i")[0].onclick = function() {
  rules.style.display = "none";
};
