import React from 'react';
import './App.css'
import Square from './components/Square'
import Circle from './components/Circle';

function App() {

  const styles = {
    display: 'grid',
    gridGap: '3px',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr',
  }

  return (
    <div className="App" style={styles}>
      <Square />
      <Circle />
    </div>
  );
}

export default App;
