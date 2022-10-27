import './App.css'
import { useState } from 'react'
import Gamesquare from './components/Gamesquare'
import gameboard from '../public/images/board-layer-white-large.svg'
import { gamespots } from './utilities/gamespots'
import { checkDown, checkHorizontal, checkForwardSlash, checkBackSlash } from './utilities/checkWinner'

function App() {
  const [turn, setTurn] = useState('player1')
  const [board, setBoard] = useState(gamespots)


  async function runTurn(spot) {
    const newBoard = await updateBoard(spot)
    checkDown(newBoard, spot)
    checkHorizontal(newBoard, spot)
    checkForwardSlash(newBoard, spot)
    checkBackSlash(newBoard, spot)
    updateTurn()
  }

  function updateTurn() {
    turn === 'player1' ? setTurn('player2') : setTurn('player1')
  }

  function updateBoard(spot) {
    const newBoard = board.map(each => {
      //if the position specified, return the new position with updated value
      if (each.position === spot) {
        return { ...each, value: turn }
      }
      //otherwise, return the position unchanged
      return each
    })
    setBoard(newBoard)
    return newBoard
  }

  function resetGame() {
    setBoard(gamespots)
    setTurn('player1')
  }

  return (
    <div className="App">
      <img src={gameboard} alt="gameboard" className='gameboard' />
      <div className="gameboard-underlay">
        {board.map((each, index) => {
          return (
            <Gamesquare
              key={index}
              position={each.position}
              value={each.value}
              board={board}
              runTurn={runTurn}
            />
          )
        })}
      </div>
      <button onClick={resetGame} >Reset Game</button>

    </div>
  )
}

export default App
