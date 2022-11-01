import pvp from '../../images/player-vs-player.svg'

export default function PVP_Button({ setGameStart }) {
    return (
        <>
            <button onClick={() => setGameStart(true)} className="btn btn-lg heading-m pvp">PLAY VS PLAYER
                <img src={pvp} alt="player vs player" />
            </button>
        </>
    )
}