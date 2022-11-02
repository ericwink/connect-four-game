import check from '../../images/icon-check.svg'

export default function GameRules({ setShowRules }) {
    return (
        <div id="game-rules">
            <h1 className='heading-lg'>RULES</h1>
            <h2 className='heading-sm'>OBJECTIVE</h2>
            <p className='body-text'>Be the first player to connect 4 of the same colored discs in a row (either vertically, horizontally, or diagonally).</p>
            <h2 className='heading-sm'>HOW TO PLAY</h2>
            <ul className='body-text'>
                <li>Red goes first in the first game.</li>
                <li>Players must alternate turns, and only one disc can be dropped in each turn. </li>
                <li>The game ends when there is a 4-in-a-row or a stalemate.</li>
                <li>The starter of the previous game goes second on the next game.</li>
                <li><a href="https://www.ericwink.dev/" target="_blank">Visit my portfolio!</a> </li>
            </ul>
            <button onClick={() => setShowRules(false)} className='btn-round'></button>
        </div>
    )
}