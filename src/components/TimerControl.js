import React from 'react'

const ControlButton = props =>
  <div 
    className="column center button" 
    style={{ margin: '7px' }} 
    {...props} 
  />

const TimerControl = () =>
  <div className="container TimerControl" 
      style={{ 
        marginLeft: '25%',
        marginRight: '25%',
        marginTop: 30,
      }}
  >
    <div className="columns">
      <ControlButton>Start</ControlButton>
      <ControlButton>Pause</ControlButton>
      <ControlButton>Stop</ControlButton>
    </div>
  </div>


export default TimerControl
