export default function PlayerTurn({ turn }) {
    return (
        <div id="player-indicator" className={turn === 'player1' ? 'p1' : 'p2'}>
            {turn === 'player1' ? <p className="body-text">PLAYER 1's TURN</p> : <p className="body-text">PLAYER 2's TURN</p>}

            <p className="heading-lg">15s</p>
        </div>
    )
}