import pvp from '../../images/player-vs-player.svg'

export default function PVP_Button() {
    return (
        <>
            <button className="btn btn-lg heading-m pvp">PLAY VS PLAYER
                <img src={pvp} alt="player vs player" />
            </button>
        </>
    )
}