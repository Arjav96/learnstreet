//Snakes and Ladders Project
// The game consists of a 10x10 playing board of squares.
function createBoardCode() {
    // This method creates and returns an array of objects representing
    // the playing board. Each object has only one property, ".end", which
    // defaults to the number or index of that object (or square). But what
    // makes this game what it is are the special behaviors at specific squares,
    // where landing on the square 'teleports' the user forward or backward in
    // big leaps (see the picture for the UI). An example will be
    //      board[13].end = 47, meaning 14th square ends up in square 48.
    // The special squares, by index and their .end points, are as follows...
    // The "Ladders": 14->48, 19->60, 55->76, 69->90, 78->97.
    // The "Snakes": 99->29. 47->18, 25->7.
	"REPLACE THIS CODE WITH YOUR METHOD"
    
    var board = new Array();
    for (var i = 0; i < 100; ++i) {
        var obj = new Object();
        obj.end = i;
        board[i] = obj;
    }
    board[13].end = 47;
    board[18].end = 59;
    board[54].end = 75;
    board[68].end = 89;
    board[77].end = 96;
    
    board[98].end = 28;
    board[46].end = 17;
    board[24].end = 6;
     return board;
}

function getSteps() {
    // Select a random number from 1-6 and return that number.
    // This simulates the rolling of a single die.
	"REPLACE THIS CODE WITH YOUR METHOD"
    var num = Math.floor(Math.random() * 6 + 1);
    return num; 
}

function makeMove(playerPos, steps1, steps2) {
    // This method will move a player's piece across the board.
    // Imagine the player rolling two dice -- i.e., two calls to the getSteps()
    // method above. The values of those two rolls are "steps1" and "steps2".
    // The player's current board position is passed in as "playerPos".
    // This method adds steps1 and steps2 to playerPos. You will also need to
    // check the new player position against 99, which is as far as the board can go.
	"REPLACE THIS CODE WITH YOUR METHOD"
    playerPos += parseInt(steps1 + steps2);
           playerPos = Math.min(99, playerPos);
    return playerPos;
}