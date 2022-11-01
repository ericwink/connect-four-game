export default function Score({ player, score, pause }) {


    return (
        <div id="score" className={!pause ? 'null' : 'pause'}>
            <p className="player">{player}</p>
            <p className="display">{score}</p>
        </div>
    )
}