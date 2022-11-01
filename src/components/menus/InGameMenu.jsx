import logo from '../../images/logo.svg'

export default function InGameMenu({ board, resetGame, setPause }) {
    return (
        <div id="menu-buttons">
            <button className='btn-sm heading-xs' onClick={() => setPause(true)}>Menu</button>
            <img src={logo} alt="connect four logo" />
            <button className='btn-sm heading-xs' onClick={resetGame} >Restart</button>
        </div>
    )
}  