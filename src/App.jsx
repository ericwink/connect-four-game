import './App.css'
import { useState } from 'react'
import Gamesquare from './components/Gamesquare'
import gameboard from '../public/images/board-layer-white-large.svg'
import { gamespots } from './utilities/gamespots'
import { checkWinner } from './utilities/checkWinner'

function App() {
  const [turn, setTurn] = useState('player1')
  const [board, setBoard] = useState(gamespots)
  const [winner, setWinner] = useState(false)


  async function runTurn(spot) {
    const newBoard = await updateBoard(spot)
    const winnerInfo = checkWinner(newBoard, spot)
    if (winnerInfo[0]) {
      setWinner(true)
      highlightWin(newBoard, winnerInfo[1])
      console.log(winnerInfo[1])
    }
    updateTurn()
  }

  function updateTurn() {
    turn === 'player1' ? setTurn('player2') : setTurn('player1')
  }

  function highlightWin(board, spots) {
    const winBoard = board.map(each => {
      //for each position, check if it is in the winning array
      //if true, add a WINNER attribute
      if (spots.includes(each.position)) {
        return { ...each, winner: true }
      }
      //otherwise, return the info unchanged
      return each
    })
    setBoard(winBoard)
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
    setWinner(false)
  }

  return (
    <div className="App">
      {winner ? <h1>WINNER</h1> : null}
      <img src={gameboard} alt="gameboard" className='gameboard' />
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
      <button onClick={resetGame} >Reset Game</button>
      <button onClick={() => console.log(board)} >Show Board Info</button>

    </div>
  )
}

export default App
