import React from 'react';
import Puzzle from './components/Puzzle';
import TimerControl from './components/TimerControl';
import './App.scss';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <Puzzle />
      <TimerControl />
    </div>
  );
}

export default App;
