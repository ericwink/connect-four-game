export default function WINNER({ gameWinner, playAgain }) {

    return (
        <div div className="winner-container" >
            {gameWinner === 'stalemate' ? null : gameWinner === 'player1' ? <p>PLAYER 1</p> : <p>PLAYER 2</p>
            }
            {gameWinner === 'stalemate' ? <p className="heading-m">STALEMATE</p> : <p className="heading-lg">WINS</p>}
            <button className='btn-sm heading-xs' onClick={playAgain} >PLAY AGAIN</button>
        </div >
    )
}