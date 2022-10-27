//function to check value in a row by direction
function checkNext(board, position, direction) {
    let counter = 1
    let current = position
    let next = board[position][direction]
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a down to check against
        if (board[current].value && board[current][direction])
            if (board[current].value === board[next].value) {
                counter++
                current = next
                next = board[current][direction]
            }
    }
    return counter
}

function checkHorizontal(board, position) {
    let counterRight = checkNext(board, position, 'right')
    let counterLeft = checkNext(board, position, 'left')
    let horizontalCount = counterLeft + counterRight - 1
    console.log('horizontal: ', horizontalCount)
}

function checkForwardSlash(board, position) {
    let counterUpRight = checkNext(board, position, 'upright')
    let counterDownLeft = checkNext(board, position, 'downleft')
    let forwardSlashCount = counterDownLeft + counterUpRight - 1
    console.log('forwardSlash: ', forwardSlashCount)
}

function checkBackSlash(board, position) {
    let counterUpLeft = checkNext(board, position, 'upleft')
    let counterDownRight = checkNext(board, position, 'downright')
    let backSlashCount = counterUpLeft + counterDownRight - 1
    console.log('backslash: ', backSlashCount)
}

function checkDown(board, position) {
    let counterDown = checkNext(board, position, 'down')
    console.log('counterDown: ', counterDown)
}

function checkWinner(board, position) {
    checkDown(board, position)
    checkHorizontal(board, position)
    checkForwardSlash(board, position)
    checkBackSlash(board, position)
}

export { checkWinner }