/** Connect Four
 *
 * Player 1 and 2 alternate turns. On each turn, a piece is dropped down a
 * column until a player gets four-in-a-row (horiz, vert, or diag) or until
 * board fills (tie)
 */

let WIDTH = 7;
let HEIGHT = 6;

let currPlayer = 1; // active player: 1 or 2
const board = []; // array of rows, each row is array of cells  (board[y][x])

/** makeBoard: create in-JS board structure:
 *    board = array of rows, each row is array of cells  (board[y][x])
 */

function makeBoard() {
  // TODO: set "board" to empty HEIGHT x WIDTH matrix array
  for (let i = 0; i < HEIGHT; i++) {
    let rowArr = [];
    for (let j = 0; j < WIDTH; j++) {
      rowArr.push(null);
    }
    board.push(rowArr);
  }
}
/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // gets "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board')
  //Creates top row of table and assigns it the ID of "column=top"
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  //Adds event listener to listen for clicks so the player can drop their piece over the appropriate column
  top.addEventListener("click", handleClick);
  //creates  each cell of for top row where their ID is set to their position on X axis 
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  //appends top row to HTML Board
  htmlBoard.append(top);
  // Creates html elements for each cell in board using nested array
  // Attaches ID of exactly where they are located on x-y axis
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  //the argument of x will always be the event target id of what was clicked in 
  //the top row (see lines 34-45). X will also always be the correct x axis value for the new piece
  //at this point we just need to find the correct y value
  //first we need to identify the correct column that the piece is being dropped into 
  let xCol = [];
  let correctRow;
  //this for loop goes through each row of board array. For each value of the array (which is the equivalent of one row array)
  //the value at the x axis is added
  for (let i = 0; i < HEIGHT; i) {
    let row = board[i]
    xCol.push(row[x])
  }
  //last of xCol will be bottom row

  if (xCol[xCol.length - 1] === null) {
    //if the bottom row is empty, the correct y coordinate is the bottom row
    correctRow = xCol.length - 1;
    //before returning, we need to modify our data structure (board array) with the new data
    board[correctRow].splice(x, 1, currPlayer);
    return correctRow;
  }
  //find the last space before a cell is occupied
  //does this by finding number of null cells in column. 
  //correct row would be number of null cells - 1 (to account for indexing)
  else if (xCol[0] === null) {
    //checks if the top row is occupied. If it is, the returned value is null, as there is no room for piece (see line 147)
    let totalNulls = 0
    for (let k = 0; k < xCol.length; k++) {
      if (xCol[k] !== null) {
        for (item of xCol) {
          if (item === null) {
            totalNulls += 1
          }
        }
        correctRow = totalNulls - 1;
        //before returning, we need to modify our data structure (board array) with the new data
        board[correctRow].splice(x, 1, currPlayer);
        return correctRow;
      }
    }
  }
  else {
    return null
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // Creates a div for piece and appends that to correct position on table
  let piece = document.createElement("div");
  if (currPlayer === 1) {
    //use classlist
    piece.setAttribute("class", "p1piece")
  }
  else if (currPlayer === 2) {
    piece.setAttribute("class", "p2piece")
  }
  //gets correct element and appends 
  let findId = document.getElementById(`${y}-${x}`)
  findId.append(piece);
}
/** endGame: announce game end */

function endGame(msg) {
  // pop up alert message
  alert(msg);
}

/** handleClick: handle click of column top to play piece */
function checkForTie() {
  filledRowCount = 0
  for (row of board) {
    if (!row.includes(null)) {
      filledRowCount += 1;
    }
  }
  if (filledRowCount === HEIGHT) {
    return true;
  }
}
function handleClick(evt) {
  // get x from ID of clicked cell
  let x = +evt.target.id;
  // get next spot in column (if none, ignore click)
  let y = findSpotForCol(x);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    endGame(`Player ${currPlayer} won!`);
  }

  // check if all cells in board are filled; if so call, call endGame
  if (checkForTie()) {
    endGame("It was a Tie!");
  }
  // switch players

  if (currPlayer === 1) {
    currPlayer = 2;
  }
  else if (currPlayer === 2) {
    currPlayer = 1;
  }
}

/** checkForWin: check board cell-by-cell for "does a win start here?" */

function checkForWin() {
  function _win(cells) {
    // Check four cells to see if they're all color of current player
    //  - cells: list of four (y, x) cells
    //  - returns true if all are legal coordinates & all match currPlayer

    return cells.every(
      //creates a boolean statement that returns true if every cell is in the array that it checks for = currPlayer
      ([y, x]) =>
        y >= 0 &&
        y < HEIGHT &&
        x >= 0 &&
        x < WIDTH &&
        board[y][x] === currPlayer
    );
  }


  for (let y = 0; y < HEIGHT; y++) {
    for (let x = 0; x < WIDTH; x++) {
      let horiz = [[y, x], [y, x + 1], [y, x + 2], [y, x + 3]];
      let vert = [[y, x], [y + 1, x], [y + 2, x], [y + 3, x]];
      let diagDR = [[y, x], [y + 1, x + 1], [y + 2, x + 2], [y + 3, x + 3]];
      let diagDL = [[y, x], [y + 1, x - 1], [y + 2, x - 2], [y + 3, x - 3]];
      //for every cell on board, 4 arrays are created that include 3 other consectuive spaces in each direction
      //a bolean statement looks for the condition of the _win function being true when applied to each array
      if (_win(horiz) || _win(vert) || _win(diagDR) || _win(diagDL)) {
        return true;
      }
    }
  }
}

makeBoard();
makeHtmlBoard();
