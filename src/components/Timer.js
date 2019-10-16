import React, { useState, useEffect } from 'react'
import TimerControl from './TimerControl'
import Puzzle from './Puzzle'
import { CircularProgressbar } from 'react-circular-progressbar';

import 'react-circular-progressbar/dist/styles.css';

const WORK_TIME = 1500
const INTERVAL_TIME = 300

const formatTime = seconds => {
  const minutes = Math.floor(seconds/60).toString().padStart(2, '0')
  const minuteSeconds = (seconds%60).toString().padStart(2, '0')
  return `${minutes}:${minuteSeconds}`
}

const Timer = () => {
  const [isWorkTime, setWorkTime] = useState(true)
  const [timeLeft, setTimeLeft] = useState(isWorkTime ? WORK_TIME : INTERVAL_TIME)
  const [isActive, setActive] = useState(false)

  const _finish = () => setWorkTime(isWorkTime => !isWorkTime)
  const _resume = () => setActive(true)
  const _pause = () => setActive(false)
  const _reset = () => setTimeLeft(isWorkTime ? WORK_TIME : INTERVAL_TIME)
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
      <CircularProgressbar
        value={timeLeft}
        maxValue={isWorkTime ? WORK_TIME : INTERVAL_TIME}
        text={formatTime(timeLeft)}
        className="circular-progress-bar"
      />
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
