import React from 'react'


export default function Fridge({ black, children }) {
  const fill = black ? 'black' : 'white'
  const stroke = black ? 'black' : 'white'

  return (
  <div 
  style={{ 
    backgroundColor: fill, 
    color: stroke,
    width: '100%',
    height: '100%'
    }} 
  >
    {children}
    </div>
  )
}