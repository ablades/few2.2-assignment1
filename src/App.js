import React from 'react';
import './App.css'
import Square from './components/Square'

function App() {
  
  const styles = {
    display: 'grid',
    gridGap: '3px',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 4',
  }

  return (
    <div className="App" style={styles}>
      <Square/>
    </div>
  );
}

export default App;
