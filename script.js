function addRows() {
  let table = document.getElementById("table");
  let row = table.insertRow(0);
  let cell = row.insertCell(0);
  cell.innerHTML = "Hello";
}
