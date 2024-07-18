import { useState } from 'react'
import '../components/TicTacToe.css'
import useTicTacToe from '../hooks/useTicTacToe'

function TicTacToe() {
    const {board,handleClick,getStatusMessage,resetGame} = useTicTacToe();
  return (
    <div className='game'>
      <div className='status'>
        {getStatusMessage()}
        <button onClick={()=>resetGame()} className='resetButton'>Reset</button>
      </div>
      <div className='board'>
        {board.map((x,index)=>{
          return <button className='cell' key={index} onClick={()=>handleClick(index)} disabled={x !== null}>
            {x}
          </button>
        })}
      </div>
    </div>
  )
}

export default TicTacToe
