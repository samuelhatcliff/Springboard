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
    for (let i = 0; i < WIDTH; i++) {
      rowArr.push(null);
    }
    board.push(rowArr);
  }
}
/** makeHtmlBoard: make HTML table and row of column tops. */

function makeHtmlBoard() {
  // TODO: get "htmlBoard" variable from the item in HTML w/ID of "board"
  const htmlBoard = document.getElementById('board')
  // TODO: add comment for this code
  const top = document.createElement("tr");
  top.setAttribute("id", "column-top");
  //Creates top row of table and assigns it the ID of "column=top"
  top.addEventListener("click", handleClick);
  //Adds event listener to listen for clicks so the player can drop their piece over the appropriate column
  for (let x = 0; x < WIDTH; x++) {
    let headCell = document.createElement("td");
    headCell.setAttribute("id", x);
    top.append(headCell);
  }
  //assigns ID's for each cell space on 'top row' (above the board)
  htmlBoard.append(top);
  //appends top row to HTML Board
  // TODO: add comment for this code
  for (let y = 0; y < HEIGHT; y++) {
    const row = document.createElement("tr");
    for (let x = 0; x < WIDTH; x++) {
      const cell = document.createElement("td");
      cell.setAttribute("id", `${y}-${x}`);
      row.append(cell);
    }
    htmlBoard.append(row);
  }
  //creates ID's for each space in the board that could potentially be occupied by a player's piece
  //does this using a nested array to assign x and y coordinates, attaching both to give each a unique ID
}

/** findSpotForCol: given column x, return top empty y (null if filled) */

function findSpotForCol(x) {
  // TODO: write the real version of this, rather than always returning 0
  let xCol = [];
  let correctRow;
  for (let i = 0; i < HEIGHT; i++) {
    let row = board[i]
    xCol.push(row[x])
  }
  //last of xCol will be bottom row
  // if (xCol[0] !== null) {
  //   //if the x column is already filled, return null
  //   return null;
  // }

  if (xCol[xCol.length - 1] === null) {
    //if the bottom row is empy, the correct y coordinate is the bottom row
    correctRow = xCol.length - 1;
    board[correctRow].splice(x, 1, currPlayer);
    return correctRow;
  }
  else {
    //find the last space before a cell is occupied
    //does this by finding number of null cells in column. 
    //correct row would be number of null cells - 1 (to account for indexing)

    let totalNulls = 0
    for (let k = 0; k < xCol.length; k++) {
      if (xCol[k] !== null) {
        for (item of xCol) {
          if (item === null) {
            totalNulls += 1
          }
        }
        correctRow = totalNulls - 1;
        board[correctRow].splice(x, 1, currPlayer);
        return correctRow;
      }
    }
  }
}

/** placeInTable: update DOM to place piece into HTML table of board */

function placeInTable(y, x) {
  // TODO: make a div and insert into correct table cell
  let inTable = document.createElement("div");
  if (currPlayer === 1) {
    inTable.setAttribute("class", "p1piece")
  }
  else if (currPlayer === 2) {
    inTable.setAttribute("class", "p2piece")
  }
  let findId = document.getElementById(`${y}-${x}`)
  findId.append(inTable);
  console.log("now in table")

}
/** endGame: announce game end */

function endGame(msg) {
  // TODO: pop up alert message
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
  console.log(y);
  if (y === null) {
    return;
  }

  // place piece in board and add to HTML table
  // TODO: add line to update in-memory board
  placeInTable(y, x);

  // check for win
  if (checkForWin()) {
    endGame(`Player ${currPlayer} won!`);
  }

  // check for tie
  // TODO: check if all cells in board are filled; if so call, call endGame
  if (checkForTie()) {
    endGame("It was a Tie!");
  }
  //REWRITE USING ARRAY SOME METHOD {
  //Finish

  // switch players
  // TODO: switch currPlayer 1 <-> 2
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

  // TODO: read and understand this code. Add comments to help you.

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
