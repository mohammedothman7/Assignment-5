function addRows() {
  let table = document.getElementById("table");
  let row = table.insertRow(0);
  let cell = row.insertCell(0);
  cell.innerHTML = "Hello";
}

/**
 * Remove rows in the table (#3)
 */
const removeRows = () => {
    let table = document.getElementById("table");
    table.deleteRow(0);
}