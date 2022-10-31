import { useState } from 'react'
import GameBoard from './components/gameboard/GameBoard'
import { gamespots } from './utilities/gamespots'
import { checkWinner } from './utilities/checkWinner'
import { animate, flashWin, flashTop } from './utilities/animations'
import Score from './components/indicators/Score'
import logo from './images/logo.svg'

function App() {
  const [turn, setTurn] = useState('player1')
  const [board, setBoard] = useState(gamespots)
  const [winner, setWinner] = useState(false)


  async function runTurn(spot) {
    if (winner) return
    const newBoard = await updateBoard(spot)
    animate(spot)
    const winnerInfo = checkWinner(newBoard, spot)
    if (winnerInfo[0]) {
      setWinner(true)
      await highlightWin(newBoard, winnerInfo[1])
      flashWin()
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
    return true
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
    flashTop()
  }

  return (
    <div className="app">
      <div id="menu-buttons">
        <button className='btn-sm heading-xs'>Menu</button>
        <img src={logo} alt="connect four logo" />
        <button className='btn-sm heading-xs' onClick={resetGame} >Reset Game</button>
      </div>
      <Score score='55' player='Player 1' />
      <Score score='43' player='Player 2' />
      <GameBoard board={board} runTurn={runTurn} />
    </div>
  )
}

export default App

