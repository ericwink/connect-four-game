import './App.css'
import { useState } from 'react'
import Gamesquare from './components/Gamesquare'
import gameboard from '../public/images/board-layer-white-large.svg'
import { gamespots } from './utilities/gamespots'

function App() {
  const [turn, setTurn] = useState('player1')
  const [board, setBoard] = useState(gamespots)

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
    updateTurn()
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
              updateBoard={updateBoard}
            />
          )
        })}
      </div>
      <button onClick={() => console.log(board)} >Show Board Data</button>

    </div>
  )
}

export default App
