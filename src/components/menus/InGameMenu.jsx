import logo from '../../images/logo.svg'

export default function InGameMenu({ board, resetGame }) {
    return (
        <div id="menu-buttons">
            <button className='btn-sm heading-xs' onClick={() => console.log(board)}>Menu</button>
            <img src={logo} alt="connect four logo" />
            <button className='btn-sm heading-xs' onClick={resetGame} >Reset Game</button>
        </div>
    )
}