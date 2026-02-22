var isValidSudoku = function (board) {
  const checkRows = checkRowsFunction(board);
  if (checkRows === false) return false;

  const checkCols = checkColsFunction(board);
  if (checkCols === false) return false;

  const checkGrids = checkGridsFunction(board);
  if (checkGrids === false) return false;

  return true;
};

var checkRowsFunction = function (board) {
  for (let row = 0; row < board.length; row++) {
    const seen = new Set();
    for (let col = 0; col < board[row].length; col++) {
      const current = board[row][col];
      if (current === "." || current === 0) continue;
      if (seen.has(current)) return false;
      seen.add(current);
    }
  }

  return true;
};

var checkColsFunction = function (board) {
  for (let col = 0; col < board[0].length; col++) {
    const seen = new Set();
    for (let row = 0; row < board.length; row++) {
      const current = board[row][col];
      if (current === "." || current === 0) continue;
      if (seen.has(current)) return false;
      seen.add(current);
    }
  }

  return true;
};

var checkGridsFunction = function (board) {
  // Number of boxes inside the Grid 9x9
  for (let box = 0; box < 9; box++) {
    const seen = new Set();
    const row = Math.floor(box / 3) * 3;
    const col = (box % 3) * 3;

    // Iterate through the grid 3x3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let current = board[row + i][col + j];
        if (current === "." || current === 0) continue;
        if (seen.has(current)) return false;
        seen.add(current);
      }
    }
  }

  return true;
};

// True
console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);

// False, There are number 8 in the same column (0) and grid (first 3x3)
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
