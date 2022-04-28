const container = document.querySelector('#container')
let cell
let target

//initialise grid 16x16
makeGrid()

//makes cells (divs)
function makeCell(numCell) {
  for (let c = 0; c < numCell; c++) {
    cell = document.createElement('div')
    cell.classList.add('cell')
    container.appendChild(cell)
    // console.log(c +" CELL")
  }
}

//cells within each row

function makeGrid (num = 16) {
    container.style.setProperty('--numRows', num);
    container.style.setProperty('--numCols', num);
    for (let r = 0; r < num; r++) {
        makeCell(num);
        // console.log(r)
    }
}

//change color when mouse hover
function changeColor(target) {
  if (colorClick === true) {
    target.style.backgroundColor = randColor()
  } else if (brownClick === true) {
    target.style.backgroundColor = 'brown'
  } else {
    target.style.backgroundColor = 'black'
  }
}

container.addEventListener("mouseover", function (e) {
  target = e.target
  if (target.matches("div.cell")) {
    changeColor(target)
  }
})

//brown button
let brownClick = false
const brownBtn = document.querySelector('.brownBtn')
brownBtn.addEventListener('click', () => {
  let color = randColor()
  brownClick = true
  console.log(color)
})

// color button
let colorClick = false
const colorBtn = document.querySelector('.colorBtn')
colorBtn.addEventListener('click', () => {
  let color = randColor()
  colorClick = true
  console.log(color)
})

function randColor() {
  const randomColor = Math.floor(Math.random()*16777215).toString(16)
  return "#" + randomColor
}

//grid size button
const gridSize = document.querySelector('.sizeBtn')

gridSize.addEventListener('click', newSize)
function newSize() {
  container.textContent = ""
  promptGrid()
}


//promt grid size
function promptGrid() {
  let number = prompt("Choose grid size between 6-64", 16);
  if (number >= 6 && number <= 64) {
    makeGrid(number)
  } else {
    do {
      number = prompt("Invalid size, try value between 5-64")
    } while (number < 6 || number > 64)
    makeGrid(number)
  }
}

//reset button
const reset = document.querySelector('.resetBtn')
reset.addEventListener('click', function() {
  window.location.reload()
})

