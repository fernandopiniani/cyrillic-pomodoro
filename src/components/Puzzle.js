import React, { useState } from 'react';
import cyrillicAlphabet from '../resources/cyrillic.json';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const getRandomIndexFrom = array =>
  getRandomInt(0, array.length)

const removeItemFromArray = (index, array) => 
  array.splice(index, 1)[0]

const getRandomItemsFrom = (numberEntries, array) => {
  let rdItems = []
  let leftItems = [ ...array ]
  while(rdItems.length < numberEntries) {
    const i = getRandomIndexFrom(leftItems)
    const removed = removeItemFromArray(i, leftItems)
    rdItems.push(removed)
  }
  return rdItems
}

const getRandomLetters = () => 
  getRandomItemsFrom(5, Object.values(cyrillicAlphabet))

const Letter = ({ letter, ...others }) =>
  <div className="center Letter" { ...others }>
    <div className="box title has-text-centered LetterText">
      {letter.upper}
    </div>
  </div>

const Option = ({ letter, ...others }) => {
  const [ clicked, setClicked ] = useState(false)
  
  return (<div className="container center Option" { ...others }>
    <div 
      className={`button has-text-centered ${clicked ? 'is-danger' : 'is-primary'} OptionText`} 
      style={{ width: "50%" }}
      onClick={() => setClicked(true)}
    >
      {letter.transliteration}
    </div>
  </div>)
}

const Puzzle = () => {

  const [counter, setCounter] = useState(0);
  const [options, setOptions] = useState(getRandomLetters());
  const [letter, setLetter] = useState(getRandomItemsFrom(1, options)[0]);

  const setRandomLetters = () => {
    const randomLetters = getRandomLetters()
    setOptions(randomLetters)
    setLetter(getRandomItemsFrom(1, randomLetters)[0])
  }

  const chooseOption = (option) => {
    if(letter.id === option.id) {
      setRandomLetters()      
      setCounter(counter + 1)
    }
  }

  return (
    <div className="Puzzle">
      <div className="center" style={{ margin: "20px"}}>Counter: {counter}</div>
      <Letter style={{ margin: "20px"}} letter={letter} />
      {options.map((l) =>
        <div style={{ margin: '5px' }} key={`${counter}${l.id}`} onClick={() => chooseOption(l)}>
          <Option letter={l} />
        </div>
      )}
    </div>
  );
}

export default Puzzle;
