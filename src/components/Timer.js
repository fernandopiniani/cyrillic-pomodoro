import React, { useState, useEffect } from 'react'
import TimerControl from './TimerControl'
import Puzzle from './Puzzle'

const Timer = () => {
  const [isWorkTime, setWorkTime] = useState(true)
  const [timeLeft, setTimeLeft] = useState(isWorkTime ? 25 : 5)
  const [isActive, setActive] = useState(false)

  const _finish = () => setWorkTime(isWorkTime => !isWorkTime)
  const _resume = () => setActive(true)
  const _pause = () => setActive(false)
  const _reset = () => setTimeLeft(isWorkTime => isWorkTime ? 25 : 5)
  const _next = () => {
    _finish()
    _pause()
  }

  useEffect(() => {
    console.log('isActive changed:', isActive)
    let timer
    if(isActive) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000);
    } else {
      clearInterval(timer)
    }
    return () => {
      clearInterval(timer)
    }
  }, [ isActive ])

  useEffect(() => {
    console.log('timeLeft changed:', timeLeft)
    if(timeLeft === 0) {
      _next()
    }
  }, [ timeLeft ])

  useEffect(() => {
    console.log('isWorkTime changed:', isWorkTime)
    _reset()
  }, [isWorkTime])
  
  return (
    <div className="container Timer">
      <div className="center title"> {timeLeft} </div>
      <TimerControl
        isActive={isActive}
        onClickStart={_resume} 
        onClickNext={_next}
        onClickPause={_pause}
      />
      { !isWorkTime && 
        <Puzzle />
      }
    </div>
  )
}

export default Timer
