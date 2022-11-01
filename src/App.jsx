import { useState } from 'react'
import GameBoard from './components/gameboard/GameBoard'
import { gamespots } from './utilities/gamespots'
import { checkWinner } from './utilities/checkWinner'
import { animate, flashWin, flashTop } from './utilities/animations'
import Score from './components/indicators/Score'
import MainMenu from './components/menus/MainMenu'
import InGameMenu from './components/menus/InGameMenu'
import PauseMenu from './components/menus/PauseMenu'

function App() {
  const [turn, setTurn] = useState('player1')
  const [board, setBoard] = useState(gamespots)
  const [gameOver, setGameOver] = useState(false)
  const [score, setScore] = useState({ player1: 0, player2: 0 })
  const [gameStart, setGameStart] = useState(false)
  const [pause, setPause] = useState(false)
  const [gameWinner, setGameWinner] = useState(null)
  const [gameCount, setGameCount] = useState(0)
  const [clickCount, setClickCount] = useState(40)

  async function runTurn(spot) {
    //if the game has already been won, do not run the function
    if (gameOver) return
    //update click count to keep track of total spaces occupied on board
    setClickCount(clickCount + 1)
    console.log(clickCount)
    //update the board with the new info
    const newBoard = await updateBoard(spot)
    //drop the piece into the selected row
    animate(spot)
    //run algorithm to check if there is a winner
    const winnerInfo = checkWinner(newBoard, spot)
    //if checkWinner array at index 0 comes back true...
    if (winnerInfo[0]) {
      setGameOver(true)
      let winningPlayer = newBoard[spot].value
      setGameWinner(winningPlayer)
      addToScore(winningPlayer)
      await highlightWin(newBoard, winnerInfo[1])
      setGameCount(gameCount + 1)
      flashWin()
      return
    }
    updateTurn()
    if (clickCount >= 41) {
      console.log('stalemate hit')
      return stalemate()
    }
  }

  function stalemate() {
    setGameOver(true)
    setGameWinner('stalemate')
    setGameCount(gameCount + 1)
  }

  //update player scores when there is a winner
  function addToScore(winningPlayer) {
    let newScore = { ...score, [winningPlayer]: score[winningPlayer] += 1 }
    setScore(newScore)
  }

  //update player after each turn
  function updateTurn() {
    turn === 'player1' ? setTurn('player2') : setTurn('player1')
  }

  //highlight the pieces on the board to show where the win is
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

  //update the values across the board
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

  //return to defaults
  function resetGame() {
    setBoard(gamespots)
    setTurn('player1')
    setGameOver(false)
    setScore({ player1: 0, player2: 0 })
    setPause(false)
    setClickCount(0)
    flashTop()
  }

  function playAgain() {
    setBoard(gamespots)
    //need to set turn to alternate players starting
    setGameOver(false)
    setGameWinner(null)
    setClickCount(0)
    //players alternate starting the game. If game count is even, player 1 starts
    if (gameCount % 2 === 0) {
      setTurn('player1')
    } else {
      setTurn('player2')
    }
  }

  function quitGame() {
    resetGame()
    setPause(false)
    setGameStart(false)
    setClickCount(0)
  }

  return (
    <div className='app'>
      {!gameStart ?
        <MainMenu setGameStart={setGameStart} /> :
        <>
          <InGameMenu board={board} resetGame={resetGame} setPause={setPause} />
          <Score score={score.player1} player='Player 1' pause={pause} />
          <Score score={score.player2} player='Player 2' pause={pause} />
          <GameBoard board={board} runTurn={runTurn} gameWinner={gameWinner} playAgain={playAgain} turn={turn} />
        </>
      }
      {pause ? <PauseMenu setPause={setPause} pause={pause} quit={quitGame} reset={resetGame} /> : null}
    </div>
  )
}

export default App

