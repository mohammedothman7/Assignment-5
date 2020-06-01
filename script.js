const addRows = () => {
  // Add rows to the table (#1)
  let table = document.getElementById("table");
  let row = table.insertRow(0);
  let cell = row.insertCell(0);
  cell.innerHTML = "Hello";
};

const addColumns = () => {
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
 * fill all cells with the currently selected color
 */
function selectColor() {
  const colorList = document.getElementById("colors");
  let selectedColor = colorList.value;
  document.getElementById("table").style.color = selectedColor;
}

/**
 * clear all cells/restore all cells to their original/initial color
 */
function clear_color() {
  document.getElementById("table").style.color = "black";
}
