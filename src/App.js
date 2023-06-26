import './App.css';
import { useState } from 'react';
import Square from './Square';
import Status from './Status';

function App() {
  const [vals, setVals] = useState(Array(9).fill(null))
  const [xisNext, setXisNext] = useState(true)
  const [count,setCount]=useState(0)
  let status = "";

  function clicked(i) {
    let arr = vals.slice()

    if (arr[i] != null || findWinner() != null) {
      return;
    }
    setCount(count+1)
    if (xisNext) {
      arr[i] = 'X'
      status = 'O'
    }
    else {
      arr[i] = 'O'
      status = 'X'
    }
    setXisNext(!xisNext)
    setVals(arr)
  }


  function findWinner() {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (vals[a] && vals[a] === vals[b] && vals[a] === vals[c]) {
        return vals[a];
      }
    }
    return null;
  }

  let winner = findWinner()
  if (winner) {
    status = "Winner is : " + winner
  }
  else {
    if (count == 9) {
      status = "No Winner"
    }
    else {
      if (xisNext) {
        status = "Player turn : X"
      }
      else {
        status = "Player turn : O"
      }
    }
  }

  return (
    <div className='mainDiv'>
      <div>
        <Status value={status} />
        <div className='inDivs'>
          <Square value={vals[0]} clicking={() => clicked(0)} />
          <Square value={vals[1]} clicking={() => clicked(1)} />
          <Square value={vals[2]} clicking={() => clicked(2)} />
        </div>
        <div className='inDivs'>
          <Square value={vals[3]} clicking={() => clicked(3)} />
          <Square value={vals[4]} clicking={() => clicked(4)} />
          <Square value={vals[5]} clicking={() => clicked(5)} />
        </div>
        <div className='inDivs'>
          <Square value={vals[6]} clicking={() => clicked(6)} />
          <Square value={vals[7]} clicking={() => clicked(7)} />
          <Square value={vals[8]} clicking={() => clicked(8)} />
        </div>
      </div>
    </div>
  );
}

export default App;
