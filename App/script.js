let currentPlayer = 'X';
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function handleClick(row, col) {
    if (!board[row][col]) {
        document.getElementById(`cell${row}${col}`).innerText = currentPlayer;
        board[row][col] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (
            (board[i][0] === board[i][1] && board[i][1] === board[i][2] && board[i][0] !== '') ||
            (board[0][i] === board[1][i] && board[1][i] === board[2][i] && board[0][i] !== '')
        ) {
            alert(`Player ${board[i][0]} wins!`);
            resetBoard();
            return;
        }
    }

    if (
        (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== '') ||
        (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[0][2] !== '')
    ) {
        alert(`Player ${board[1][1]} wins!`);
        resetBoard();
        return;
    }

    if (board.flat().every(cell => cell !== '')) {
        alert('It\'s a tie!');
        resetBoard();
    }
}

function resetBoard() {
    board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];

    currentPlayer = 'X';

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            document.getElementById(`cell${i}${j}`).innerText = '';
        }
    }
}
