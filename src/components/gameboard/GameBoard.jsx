import { useEffect, useState } from 'react'
import Gamesquare from './Gamesquare'
import gameboardBlack from '../../images/board-layer-black-large.svg'
import gameboardWhite from '../../images/board-layer-white-large.svg'
import gameboardBlackSm from '../../images/board-layer-black-small.svg'
import gameboardWhiteSm from '../../images/board-layer-white-small.svg'

export default function GameBoard({ board, runTurn }) {
    const [windowSize, setWindowSize] = useState(getWindowSize())

    function getWindowSize() {
        const innerWidth = window.innerWidth
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
                        />
                    )
                })}
            </div>
        </div>
    )
}