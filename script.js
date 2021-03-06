let cells = 1; // Keeps track of the amount of cells, needed for adding rows to table

const addRows = () => {
  // Add rows to the table (#1)
  let table = document.getElementById("table");
  let row = table.insertRow(0);
  for (let i = 0; i < cells; i++) {
    let cell = row.insertCell(0);
    cell.innerHTML = "Hello";
  }
};

const addColumns = () => {
  // Add columns to the table (#2)
  cells++;
  let table = document.getElementById("table");
  let row = table.rows;

  for (let i = 0; i < row.length; i++) {
    let cell = row[i].insertCell(0);
    cell.innerHTML = "Hello";
  }
};

/**
 * Remove rows in the table (#3)
 */
const removeRows = () => {
  let table = document.getElementById("table");
  table.deleteRow(0);
};

/**
 * Remove columns in the table (#4) by looping through the entire column
 */
const removeColumns = () => {
  const table = document.getElementById("table");
  let row = table.rows;

  let index = 0;
  for (let i = 0; i < row.length; i++) {
    row[i].deleteCell(index);
  }
};

/**
 * click on a single cell, changing its color to the currently selected color (#6) 
 */
table.addEventListener('click', (event) => {
  let cell = event.target;
  cell.style.backgroundColor = color;
  if(cell.classList.contains("unColored")) {
      cell.classList.toggle("unColored");
  }
})

/**
 * fill all uncolored cells with the currently selected color (#7)
 */
function fillAllUncoloredCells() 
{
  let uncoloredCells = document.querySelectorAll("td.uncolored");
  for(let i in uncoloredCells)
  {
      uncoloredCells[i].style.backgroundColor = color;
      uncoloredCells[i].classList.toggle("uncolored");
  }
}

/**
 * fill all cells with the currently selected color (#8)
 */
function selectColor() {
  const colorList = document.getElementById("colors");
  let selectedColor = colorList.value;
  document.getElementById("table").style.color = selectedColor;
}

/**
 * clear all cells/restore all cells to their original/initial color  (#9)
 */
function clear_color() {
  document.getElementById("table").style.color = "black";
}

/**
 * click and hold (mouseover) from a single cell (start) to a different
 * cell (end) such that all affected/hovered-over cells from start to end
 * change to the currently selected color
 */
document.getElementById("table").addEventListener("mouseenter", fillAllCells);
function fillAllCells() {
  const colorList = document.getElementById("colors");
  let selectedColor = colorList.value;
  document.getElementById("table").style.color = selectedColor;
}
