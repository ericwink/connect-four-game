import { useEffect, useState } from 'react'
import Gamesquare from './Gamesquare'
import gameboardBlack from '../../images/board-layer-black-large.svg'
import gameboardWhite from '../../images/board-layer-white-large.svg'
import gameboardBlackSm from '../../images/board-layer-black-small.svg'
import gameboardWhiteSm from '../../images/board-layer-white-small.svg'
import WINNER from '../indicators/WINNER'
import PlayerTurn from '../indicators/PlayerTurn'

export default function GameBoard({ board, turn, runTurn, gameWinner, playAgain, outOfTime, pause, resetFlag }) {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    function getWindowSize() {
        const innerWidth = window.innerWidth
        const doc = document.documentElement
        setTimeout(() => {
            const scrollHeight = doc.scrollHeight
            console.log(scrollHeight)
            doc.style.setProperty('--doc-scrollheight', `${scrollHeight}px`)

        }, 100)

        return innerWidth
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize())
        }

        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])



    return (
        <div id="gameboard">
            <img src={windowSize >= 680 ? gameboardBlack : gameboardBlackSm} alt="gameboard" className='gameboardBlack' />
            <img src={windowSize >= 680 ? gameboardWhite : gameboardWhiteSm} alt="gameboard" className='gameboardWhite' />
            <div className="gameboard-underlay">
                {board.map((each, index) => {
                    return (
                        <Gamesquare
                            key={index}
                            info={each}
                            board={board}
                            runTurn={runTurn}
                            player={turn}
                        />
                    )
                })}
            </div>
            <footer id='footer-color' className={!gameWinner ? 'null' : gameWinner === 'player1' ? 'player-1' : 'player-2'}></footer>

            {gameWinner ? <WINNER gameWinner={gameWinner} playAgain={playAgain} /> : <PlayerTurn turn={turn} outOfTime={outOfTime} pause={pause} resetFlag={resetFlag} />}

        </div>
    )
}