//Conway’s Game of Life Project
function init(){
    // Initialize the board with a two-dimensional array:
    // with 15 rows and 30 columns, setting all values to 0.
    //  "REPLACE THIS CODE WITH YOUR init METHOD"
    var matrix = [];
    for(var i = 0; i < 15; ++i) {
        var temp = [];
        for (var j = 0; j < 30; ++j) {
            temp.push(0);
        }
        matrix.push(temp);
    }
    return matrix;
}

function getNumNeighbors(matrix, i, j){
    // This method returns the number of alive cells (i.e., cells with value 1)
    // surrounding the selected cell with coordinates i and j in the
    // supplied two-dimensional array (matrix).
    // "REPLACE THIS CODE WITH YOUR getNumNeighbors METHOD"
    var ret = 0;
    for (var x = Math.max(0, i - 1); x <= Math.min(14, i + 1); x++) {
        for (var y = Math.max(0, j - 1); y <= Math.min(29, j + 1); y++) {
            if (x == i && y == j) {
                continue;
            }
            if (matrix[x][y] == 1) {
                ret++;
            }
        }
    }
    return ret;
}
function getNextGen(matrix){
    // The current board is passed in as a two-dimensional array (matrix),
    // and this method must return the same matrix for the next round in
    // the simulation. To generate the simulation on the board, we need to
    // apply a variety of rules (from Wikipedia):
    // 1) Any live cell with fewer than two live neighbors dies, as if caused by under-population;
    // 2) Any live cell with two or three live neighbors lives on to the next generation;
    // 3) Any live cell with more than three live neighbors dies, as if by overcrowding; and
    // 4) Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
    // So how do we do this?
    // 1. Copy the 2-D variable matrix using slice and a loop.
    // 2. Iterate through 0-14, 0-29, and check neighbor counts. Set the cell value to 1 or 0 depending on if it is alive.
    // 3. Return the new matrix.
    // "REPLACE THIS CODE WITH YOUR getNextGen METHOD"
   var newMatrix = [];
    for(var i = 0; i < matrix.length; i++) {
        var temp = [];
        for(var j = 0; j <matrix[i].length; ++j) {
            temp.push(matrix[i][j]);
        }
        newMatrix.push(temp);
    }
    for (var i = 0; i < 15; i++) {
        for (var j = 0; j < 30; j++) {
            var neighbors = getNumNeighbors(matrix, i, j);
            if (matrix[i][j] == 0 && neighbors == 3) {
                    newMatrix[i][j] = 1;
            } else if (matrix[i][j] == 1 && (neighbors < 2 || neighbors > 3)){
                    newMatrix[i][j] = 0;
            }
        }
    }
    return newMatrix;
}