export default function Gamesquare({ info, runTurn, board }) {

    const row5 = info.position + (7 * 5)
    const row4 = info.position + (7 * 4)
    const row3 = info.position + (7 * 3)
    const row2 = info.position + (7 * 2)
    const row1 = info.position + (7 * 1)
    const row0 = info.position

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
        <div onClick={handleClick} className={info.position < 7 ? 'gamesquare top' : 'gamesquare'}>
            {/* {info.position} <br />
            {info.value}
             */}
            {info.value ? <div className={`testpiece_${info.position} gamesquare ${info.value}`} >

                {info.winner ? <div className='win'></div> : null}

            </div> : null}
        </div>
    )
}