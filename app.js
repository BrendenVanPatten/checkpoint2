let counter = 0;

let button = document.getElementById('five')

let button2 = document.getElementById('ten')

let button3 = document.getElementById('winner')

let button4 = document.getElementById('count')

let button5 = document.getElementById('print')

let hasbuttonbeenclicked = false

let hasbutton2beenclicked = false

let hasbutton3beenclicked = false

let hasbutton5beenclicked = false

// let increment = 10000


function drawCount() {
  updateDisplay(++counter);
}

function buyFive() {
  counter -= 100
}

function countFive() {
  hasbuttonbeenclicked = true
  setInterval(() => {
    counter += 5
    updateDisplay(counter)
  }, 2000
  )
  // @ts-ignore
  button.disabled = true;

  buyFive()
}

function buyTen() {
  counter -= 200
}

function countTen() {
  hasbutton2beenclicked = true
  setInterval(() => {
    counter += 10
    updateDisplay(counter)
  }, 2000
  )
  // @ts-ignore
  button2.disabled = true;

  buyTen()
}

function winner() {
  hasbutton3beenclicked = true
  counter += 5000000
  updateDisplay(counter)
  // @ts-ignore
  button3.disabled = true;
}

function updateDisplay(val) {
  document.getElementById("counter-label").innerHTML = val;

  if (counter >= 15 && !hasbuttonbeenclicked) {
    // @ts-ignore
    button.disabled = false;
  }
  if (counter >= 25 && !hasbutton2beenclicked) {
    // @ts-ignore
    button2.disabled = false;
  }
  if (counter >= 1000 && !hasbutton5beenclicked) {
    // @ts-ignore
    button5.disabled = false;
  }
  if (counter >= 10000 && !hasbutton3beenclicked) {
    // @ts-ignore
    button3.disabled = false;
  }

}

// function buyPrinter() {
//   hasbutton5beenclicked = true
//   counter += 2000;
// }

function drawPrinter() {
  // hasbutton5beenclicked = true
  counter += 2000
  updateDisplay(counter)

  // @ts-ignore
  // button5.disabled = true;

  // buyPrinter()
}

