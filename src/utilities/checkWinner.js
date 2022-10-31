//function to check value in a row by direction
function checkNext(board, position, direction) {
    let counter = 1
    let current = position
    let next = board[current][direction]
    let check = board[current].value
    let fourInARow = [current]
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a next position to check against
        if (board[current].value && next)
            if (board[next].value === check) {
                counter++
                //if matching, push the position onto the array to track winning selection
                fourInARow.push(next)
                current = next
                next = board[current][direction]
            }
    }
    return [counter, fourInARow]
}

function checkHorizontal(board, position) {
    let counterRight = checkNext(board, position, 'right')
    let counterLeft = checkNext(board, position, 'left')
    //the count is at index 0 of the returned array from checkNext
    let horizontalCount = counterLeft[0] + counterRight[0] - 1
    //combine the two arrays returned from counterRight and counterLeft
    let combinedArray = counterLeft[1].concat(counterRight[1])
    //spread the combined array into a new set to eliminate duplicates
    let uniqueArray = [...new Set(combinedArray)]
    return [horizontalCount, uniqueArray]
}

function checkForwardSlash(board, position) {
    let counterUpRight = checkNext(board, position, 'upright')
    let counterDownLeft = checkNext(board, position, 'downleft')
    let forwardSlashCount = counterDownLeft[0] + counterUpRight[0] - 1
    let combinedArray = counterUpRight[1].concat(counterDownLeft[1])
    let uniqueArray = [...new Set(combinedArray)]
    return [forwardSlashCount, uniqueArray]
}

function checkBackSlash(board, position) {
    let counterUpLeft = checkNext(board, position, 'upleft')
    let counterDownRight = checkNext(board, position, 'downright')
    let backSlashCount = counterUpLeft[0] + counterDownRight[0] - 1
    let combinedArray = counterUpLeft[1].concat(counterDownRight[1])
    let uniqueArray = [...new Set(combinedArray)]
    return [backSlashCount, uniqueArray]
}

function checkDown(board, position) {
    let counterDown = checkNext(board, position, 'down')
    //counterDown is still an array, count in index 0, array of winning positions in index 2
    return counterDown
}

function checkWinner(board, position) {
    let down = checkDown(board, position)
    let horizontal = checkHorizontal(board, position)
    let forwardslash = checkForwardSlash(board, position)
    let backslash = checkBackSlash(board, position)
    //check if count was >= 4, and if so, return true and the winning position array
    if (down[0] >= 4) {
        return [true, down[1]]
    }
    if (horizontal[0] >= 4) {
        return [true, horizontal[1]]
    }
    if (forwardslash[0] >= 4) {
        return [true, forwardslash[1]]
    }
    if (backslash[0] >= 4) {
        return [true, backslash[1]]
    }
    return [false, null]
}

export { checkWinner }