import { useEffect, useState } from "react"

export default function PlayerTurn({ turn }) {
    const [seconds, setSeconds] = useState(30)
    let interval = null

    function startTimer() {
        stopTimer()
        let start = 30
        interval = setInterval(() => {
            // setSeconds(start)
            console.log('start: ', start)
            start--
        }, 1000)
    }

    function stopTimer() {
        clearInterval(interval)
    }

    return (
        <div id="player-indicator" className={turn === 'player1' ? 'p1' : 'p2'}>
            {turn === 'player1' ? <p className="body-text">PLAYER 1's TURN</p> : <p className="body-text">PLAYER 2's TURN</p>}

            <p className="heading-lg">{seconds}s</p>
            <button onClick={startTimer}>Start</button>
        </div>
    )
}