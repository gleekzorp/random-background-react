import React from 'react';

function App() {
  function randomHexGenerator() {
    let hex = ['a', 'b', 'c', 'd', 'e', 'f', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let randomHex = ['#']
    for (let i = 0; i < 6; i++) {
      randomHex.push(hex[Math.floor(Math.random() * hex.length)])
    }
    document.body.style.backgroundColor = randomHex.join('')
    document.querySelector('.hexText').innerHTML = randomHex.join('')
  }

  return (
    <div className="App">
      <button onClick={randomHexGenerator}>CLICK ME</button>
      <div className='hexText'></div>
    </div>
  );
}

export default App;
