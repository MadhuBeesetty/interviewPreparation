// You are creating Flippy, an AI that plans to take over the world by solving games having to do with flipping things. First, the AI must master a one-dimensional game called Reversi.

// There are two players, denoted by 'X' (the AI player) and 'O'. The goal is to place a new 'X' in a blank space on the board to capture the 'O' tokens between two 'X' tokens (with no spaces in between). A move can capture to the left or the right, not both, of the newly placed 'X'.

// board1 = [ 'X', 'O', 'O', 'O', ' ', ' ', 'O', 'O', 'X', 'O', 'X', 'X', 'O', ' ' ];
// board2 = [ 'X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'X', 'O', 'O', ' ' ] => 12,2
// board3 = [ ' ', 'O', 'X'] => 0,1
// board4 = [ 'X', 'O' ] => None/null (no open space)
// board5 = [ 'X', 'O', ' ' ] => 2,1
// board6 = [ 'X', 'O', ' ', 'O', 'O', 'X', 'O', ' ', ' ' ] => 2,2

const fun = (arr) => {
  let longest = 0;
  let count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'X') {
      if (count > 0 && count > longest) {
        longest = count;
        count = 1;
      };
    } else if (arr[i] === 'O') {
      if (count > 0) { count = count + 1; };
      if (count > longest) longest = count;
    } else if (arr[i] === '') {
      arr[i] = 'X';
      count = 0;
    }
  }
  return (longest - 1);
};

console.log(fun([ 'X', 'X', 'O', ' ', 'O', 'O', 'O', 'O', ' ', 'X', 'O', 'O', ' ' ]))
