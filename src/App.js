import React from 'react';
import './App.css'
import Square from './components/Square'
import Circle from './components/Circle';
import BorderSquare from './components/BorderSquare';
import AltSquare from './components/AltSquare';
import Leaf from './components/Leaf';
import Lemon from './components/Lemon';
import Mailbox from './components/Mailbox';
import Equality from './components/Equality';
import SquareX from './components/SquareX';
import WhiteCross from './components/WhiteCross';
import CircleX from './components/CircleX';
import Arrow from './components/Arrow';
import Robot from './components/Robot';
import Vampire from './components/Vampire';
import Bird from './components/Bird';

function App() {

  const styles = {
    display: 'grid',
    gridGap: '10px',
    margin: '10px',
    padding: '40px',
    justifyItems: 'center',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  }

  return (
    <div className="App" style={styles}>
      <Square />
      <Circle />
      <BorderSquare />
      <AltSquare />
      <Leaf />
      <Lemon />
      <Mailbox />
      <Equality />
      <WhiteCross />
      <SquareX />
      <CircleX />
      <Arrow />
      <Robot />
      <Vampire />
      <Bird />
    </div>
  );
}

export default App;
