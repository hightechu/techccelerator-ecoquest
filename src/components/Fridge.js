import React from 'react'
//import fridgeim from '../images/fridgeim.png'


export default function Fridge({ black, children }) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'black' : 'white'

  return (
  <div 
  style={{  
    color: stroke,
    width: '100%',
    height: '100%'
    }} 
  >
    {children}
    </div>
  )
}
