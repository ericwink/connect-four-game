export default function Score({ player, score }) {
    return (
        <div id="score">
            <p className="player">{player}</p>
            <p className="display">{score}</p>
        </div>
    )
}