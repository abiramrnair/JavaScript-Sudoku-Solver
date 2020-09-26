// unsolved sudoku board
var board =[[7,8,0,4,0,0,1,2,0],
          [6,0,0,0,7,5,0,0,9],
          [0,0,0,6,0,1,0,7,8],
          [0,0,7,0,4,0,2,6,0],
          [0,0,1,0,5,0,9,3,0],
          [9,0,4,0,6,0,0,0,5],
          [0,7,0,3,0,0,0,1,2],
          [1,2,0,0,0,7,4,0,0],
          [0,4,9,2,0,6,0,0,7]
];

// get size of board
size = board.length;

// check row

function rowCheck(row, num) {
    for (i = 0; i < size; i++) {
        if (board[row][i] == num) {
            return true;
        }
    }
    return false;
}

// check column

function colCheck(col, num) {
    for (i = 0; i < size; i++) {
        if (board[i][col] == num) {
            return true;
        }
    }
    return false;
}

// check mini squares

function boxCheck(row, col, num) {
    var r = row - (row % 3);
    var c = col - (col % 3);

    for (i = r; i < (r + 3); i++) {
        for (j = c; j < (c + 3); j++) {
            if (board[i][j] == num) {
                return true;
            }
        }
    }

    return false;
}

// now check everything

function passCheck(row, col, num) {    
    if (rowCheck(row,num) == false && colCheck(col,num) == false && boxCheck(row,col,num) == false) {
        return true;
    }
    return false;
}

function solveBoard() { // recursively call function
    var row;
    var col;
    var num;

    for (row = 0; row < size; row++) {
        for (col = 0; col < size; col++) {

            if (board[row][col] == 0) {

                for (num = 1; num <= size; num++) {

                    if (passCheck(row, col, num)) {
                        board[row][col] = num;

                        if (solveBoard()) {
                            return true;
                        } else {
                            board[row][col] = 0;
                        }
                    }                    
                }
                return false;
            }

        }
    }
    return true;
}


