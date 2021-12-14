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

let upgrade = 0

let printer = 2000

// let upgradecount = document.getElementById('upgradecount')

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

  if (counter >= 100 && !hasbuttonbeenclicked) {
    // @ts-ignore
    button.disabled = false;
  }
  if (counter >= 250 && !hasbutton2beenclicked) {
    // @ts-ignore
    button2.disabled = false;
  }
  if (counter >= 10 && !hasbutton5beenclicked) {
    // @ts-ignore
    button5.disabled = false;
  }
  if (counter >= 10000 && !hasbutton3beenclicked) {
    // @ts-ignore
    button3.disabled = false;
  }

}

function upgradeCount(val) {
  document.getElementById("upgradecount").innerHTML = val;
}

function buyPrinter() {
  counter -= 750
}


function drawPrinter(printer) {
  upgradeCount(++upgrade)
  // hasbutton5beenclicked = true
  counter += 2000

  // @ts-ignore
  // button5.disabled = true;

  // drawCount(printer)
  updateDisplay(++counter)
  buyPrinter()
}

