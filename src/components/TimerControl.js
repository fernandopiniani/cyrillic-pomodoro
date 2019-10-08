import React from 'react'

const ControlButton = props =>
  <div 
    className="column center button" 
    style={{ margin: '7px' }} 
    {...props} 
  />

const TimerControl = ({
  isActive,
  onClickStart,
  onClickNext,
  onClickPause
}) =>
  <div className="container TimerControl" 
      style={{ 
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: 30,
      }}
  >
      { !isActive 
        ? <div className="columns">
            <ControlButton onClick={onClickStart}>Start</ControlButton>
            <ControlButton onClick={onClickNext}>Next</ControlButton>
          </div>
        : <div className="columns">
            <ControlButton onClick={onClickPause}>Pause</ControlButton>
            <ControlButton onClick={onClickNext}>Next</ControlButton>
          </div>
      }
  </div>


export default TimerControl
