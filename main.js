const GRID = [
["A", "", "", "^", "", "", "", "", "", ""],
["", "", "v", "", "~", "", "", "", "", ""],
["", "v", "", "", "^", "^", "", "", "", ""],
["", "", "", "", "^", "^", "", "", "", ""],
["", "", "", "", "", "", "", "", "v", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "", "", "", "", "", "", "", "", ""],
["", "^", "~", "~", "", "", "", "^", "", ""],
["", "^", "", "~", "~", "", "", "", "", ""],
["", "^", "", "", "~", "~", "", "", "", ""],
];

const COLUMNS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


function countRows() {
  return GRID.length;
}

function countColumns() {
  return GRID[0].length;
}

function gridSize() {
  var result = ''+countColumns() + ' x ' + countRows()+'';
  return result;
}

function totalCells() {
  return countColumns() * countRows();
}

function convertColumn(coordinate) {
  var column = coordinate.split('')[0];
  return COLUMNS.indexOf(column);
}

function lightCell(coordinate) {
  var column = COLUMNS.indexOf(coordinate.split('')[0]);
  var row = parseInt(coordinate.split('')[1])-1;
  if (column >= countColumns()-1) return false;
  else if (row >= countRows()-1) return false;
  return GRID[row][column];

}

function isRock (coordinate) {
  var cell = lightCell(coordinate);
  return cell === "^";
}

function isShip(coordinate) {
  var cell = lightCell(coordinate);
  console.log("cell === 'v' ", coordinate, cell, cell === 'v');
  return cell === "v";
}

function lightRow(rowNumber) {
  var selectedRow = GRID[rowNumber-1];
  return selectedRow;
  console.log("selectedRow", selectedRow);
}

function lightColumn(columnNumber) {
  var column = COLUMNS.indexOf(columnNumber);
  var result = [];
  var rows = countRows();
  for (let i = 0; i < rows; i++) {
    result.push(GRID[i][column]);
  }
  return result;
}