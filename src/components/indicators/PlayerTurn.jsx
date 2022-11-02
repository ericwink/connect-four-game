import { useEffect, useState } from "react"

//declare interval outside of functional component, otherwise it cuased duplicate render of the interval
let interval = null
export default function PlayerTurn({ turn, outOfTime, pause, resetFlag }) {
    const [seconds, setSeconds] = useState(30)

    //whenever the pause menu is activated, start or stop the timer
    useEffect(() => {
        //if pause menu, clearInterval stops the timer
        if (pause) clearInterval(interval)
        //when pause is cleared (false) resume the timer by calling startTimer function
        if (!pause) startTimer()
    }, [pause])

    //each time turn changes, update the timer
    useEffect(() => {
        //call stop timer wich stops current interval and resets seconds to 30
        stopTimer()
        //call startTimer, beginning the interval
        startTimer()
        //cleanup so timer stops when component is unmounted
        return () => stopTimer()
    }, [turn, resetFlag])

    //subtract 1 from the seconds variable each 1s
    function startTimer() {
        interval = setInterval(() => {
            setSeconds((seconds) => seconds === 0 ? endGame() : seconds - 1)
        }, 1000)
    }

    //stop the current interval, reset seconds to 30
    function stopTimer() {
        clearInterval(interval)
        setSeconds(30)
    }

    function endGame() {
        stopTimer()
        outOfTime()
    }

    return (
        <div id="player-indicator" className={turn === 'player1' ? 'p1' : 'p2'}>
            {turn === 'player1' ? <p className="body-text">PLAYER 1's TURN</p> : <p className="body-text">PLAYER 2's TURN</p>}

            <p className="heading-lg">{seconds}s</p>
        </div>
    )
}