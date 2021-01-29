async function throwDice() {
  let number = rollDice();

  for (let i = 0; i < 25; i++) {
    number = rollDice();
    toggleDice(number);
    await sleep(50);
  }

  if (number < 6) document.getElementById("dice-number").innerHTML = `We rolled ${number}, congratulations!`;
  else document.getElementById("dice-number").innerHTML = `We rolled ${number}, you are the dice master!!`;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function rollDice() {
  return Math.floor(Math.random() * 6 + 1);
}

function toggleDice(number) {
  const eyeElements = document.getElementsByClassName("eye");

  for (let i = 0; i < eyeElements.length; i++) {
    if (eyeElements[i].classList.contains(`eye-${number}`)) {
      eyeElements[i].classList.add("eye-visible");
    } else {
      eyeElements[i].classList.remove("eye-visible");
    }
  }
}
