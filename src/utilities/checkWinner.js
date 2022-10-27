// Function to check for a vertical winner

function checkDown(board, position) {
    let counter = 1
    let current = position
    let down = board[position].down
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a down to check against
        if (board[current].value && board[current].down)
            if (board[current].value === board[down].value) {
                counter++
                current = down
                down = board[current].down
            }
    }
    if (counter === 4) {
        console.log("DOWN WINNER")
    } else {
        console.log('down counter: ', counter)
    }
}

// Functions to check for horizontal winner

function checkLeft(board, position) {
    let counter = 1
    let current = position
    let left = board[position].left
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a left to check against
        if (board[current].value && board[current].left)
            if (board[current].value === board[left].value) {
                counter++
                current = left
                left = board[current].left
            }
    }
    return counter
}

function checkRight(board, position) {
    let counter = 1
    let current = position
    let right = board[position].right
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a right to check against
        if (board[current].value && board[current].right)
            if (board[current].value === board[right].value) {
                counter++
                current = right
                right = board[current].right
            }
    }
    return counter
}

function checkHorizontal(board, position) {
    let counterRight = checkRight(board, position)
    let counterLeft = checkLeft(board, position)
    let horizontalCount = counterLeft + counterRight - 1
    console.log('horizontal: ', horizontalCount)
}

// Functions to check for winner on bottom-left to top-right diagonal

function checkUpRight(board, position) {
    let counter = 1
    let current = position
    let upright = board[position].upright
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a upright to check against
        if (board[current].value && board[current].upright)
            if (board[current].value === board[upright].value) {
                counter++
                current = upright
                upright = board[current].upright
            }
    }
    return counter
}

function checkDownLeft(board, position) {
    let counter = 1
    let current = position
    let downleft = board[position].downleft
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a downleft to check against
        if (board[current].value && board[current].downleft)
            if (board[current].value === board[downleft].value) {
                counter++
                current = downleft
                downleft = board[current].downleft
            }
    }
    return counter
}

function checkForwardSlash(board, position) {
    let counterUpRight = checkUpRight(board, position)
    let counterDownLeft = checkDownLeft(board, position)
    let forwardSlashCount = counterDownLeft + counterUpRight - 1
    console.log('forwardSlash: ', forwardSlashCount)
}

// Functions to check for winner on bottom-right to top-left diagonal

function checkUpLeft(board, position) {
    let counter = 1
    let current = position
    let upleft = board[position].upleft
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a upleft to check against
        if (board[current].value && board[current].upleft)
            if (board[current].value === board[upleft].value) {
                counter++
                current = upleft
                upleft = board[current].upleft
            }
    }
    return counter
}

function checkDownRight(board, position) {
    let counter = 1
    let current = position
    let downright = board[position].downright
    for (let i = 1; i < 4; i++) {
        //if current value is not null, and there is still a downright to check against
        if (board[current].value && board[current].downright)
            if (board[current].value === board[downright].value) {
                counter++
                current = downright
                downright = board[current].downright
            }
    }
    return counter
}

function checkBackSlash(board, position) {
    let counterUpLeft = checkUpLeft(board, position)
    let counterDownRight = checkDownRight(board, position)
    let backSlashCount = counterUpLeft + counterDownRight - 1
    console.log('backslash: ', backSlashCount)
}

export { checkDown, checkHorizontal, checkForwardSlash, checkBackSlash }