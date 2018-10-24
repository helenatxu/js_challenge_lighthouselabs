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
["Z", "^", "", "", "~", "~", "", "", "", ""],
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

function convertRow(coordinate) {
  var row = parseInt(coordinate.split('')[1])-1;
  return row;
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

const findAll = (obstacle,list) => {
  GRID.forEach((line,row) => line.forEach((cell,column) => { if(cell===obstacle) list.push(COLUMNS[column]+(row+1)) }));
  return list;
};

const firstRock = () => {
  return findAll('^', [])[0];
};

const firstCurrent = () => {
  return findAll('~', [])[0];
};

function shipReport() {
  var shipsMap = findAll('v', []);
  var report= [shipsMap[0], shipsMap[shipsMap.length-1]]
  return report
}

function howDangerous(coordinate) {
  if (isRock(coordinate)) return 100;
  else if (isCurrent(coordinate)) return 50;
  else return 0;
}

function percentageReport() {
  var rockPercentage = (findAll('^', []).length / totalCells())*100;
  var currentPercentage = (findAll('~', []).length / totalCells())*100;
  return [rockPercentage.toFixed(2), currentPercentage.toFixed(2)];
}

const allRocks = () => findAll('^', []);
const allCurrents = () => findAll('~', []);
const allShips = () => findAll('v', []);

function dangerousPercentage(cell) {
  if (cell === '^') return 100;
  else if (cell === '~') return 50;
  else return 0;
}

function safetyReport() {
  var report = [];
  GRID.forEach((line) => { 
    report.push(line.map(x => dangerousPercentage(x)));
  });
  return report;
}

function calcDistance(a, b) {
  var aX = convertRow(a);
  var aY = convertColumn(a);
  var bX = convertRow(b);
  var bY = convertColumn(b);

  var xx = Math.pow((bX - aX), 2);
  var yy = Math.pow((bY - aY), 2);

  return Math.sqrt(xx + yy).toFixed(2);
}

console.log("calcDistance(A1, A1)", calcDistance('A1', 'A1')); 
console.log("calcDistance(A1, A3)", calcDistance('A1', 'A3')); 
console.log("calcDistance(B1, B3)", calcDistance('B1', 'B3')); 
console.log("calcDistance(C1, D2)", calcDistance('C1', 'D2')); 