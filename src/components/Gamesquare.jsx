export default function Gamesquare({ position, runTurn, board, value }) {

    const row5 = position + (7 * 5)
    const row4 = position + (7 * 4)
    const row3 = position + (7 * 3)
    const row2 = position + (7 * 2)
    const row1 = position + (7 * 1)
    const row0 = position

    //this only works if we click on the top row
    function handleClick() {
        if (!board[row5].value) {
            return runTurn(row5)
        }
        if (!board[row4].value) {
            return runTurn(row4)
        }
        if (!board[row3].value) {
            return runTurn(row3)
        }
        if (!board[row2].value) {
            return runTurn(row2)
        }
        if (!board[row1].value) {
            return runTurn(row1)
        }
        if (!board[row0].value) {
            return runTurn(row0)
        }
    }

    return (
        <div className="gamesquare" onClick={handleClick}>
            {position} <br />
            {value}
        </div>
    )
}