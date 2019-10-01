import React from 'react';
import Puzzle from './components/Puzzle';
import Timer from './components/Timer';
import TimerControl from './components/TimerControl';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Timer time={5}/>
      <Puzzle />
      <TimerControl />
    </div>
  );
}

export default App;
