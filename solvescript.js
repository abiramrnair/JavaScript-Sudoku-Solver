var board = [   [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0]
];


var boxes = document.getElementsByName("square");

function boxtoArray() {
    var boxes = document.getElementsByName("square");
    num = 0;

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            board[i][j] = Number(boxes[num].value);
            num += 1;           
            
        }
    }
    return board;    
}

function arraytoBox() {    
    var boxes = document.getElementsByName("square");
    num = 0;

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {

            boxes[num].value = board[i][j];
            num += 1;           
            
        }
    }
    return boxes;
}

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
                document.getElementById("message").textContent = "No Solution";
                return false;                
            }
        }
    }

    arraytoBox();
    document.getElementById("message").textContent = "Solved";
    return true;
}

function solve() {
    boxtoArray();
    return solveBoard();
}

function reset() {
    var boxes = document.getElementsByName("square");

    for (i = 0; i < 81; i++) {
        boxes[i].value = " ";
    }    
}




