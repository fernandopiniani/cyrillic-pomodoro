import React, { useState, useEffect } from 'react'

const Timer = ({
  time,
  onFinish,
  onResume,
  onReset,
  onStart,
  onStop,
}) => {
  const [timeLeft, setTimeLeft] = useState(time)
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    let timer
    if(isActive) {
      timer = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1)
      }, 1000);
      onResume && onResume()
    } else {
      onStop && onStop()
    }
    return () => {
      clearInterval(timer)
    }
  }, [ isActive ])

  useEffect(() => {
    if(timeLeft === 0) {
      onFinish && onFinish()
      setActive(false)
    }
  }, [ timeLeft ])

  return (
    <div className="container Timer" onClick={() => setActive(true)}>
      {timeLeft}
    </div>
  )
}

export default Timer
