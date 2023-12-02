import React, { useEffect } from 'react';
import Milk from "./Milk.js";
import Fridge from "./Fridge.js";
import { observeMilk, observeWatermelon } from './Game';
import { moveWater } from './GameWater';
import fridgeim from '../images/fridgeim.png';
import Watermel from './watermel';
import BoardSquare from './BoardSquare'
import { ItemTypes } from './Constants';


function renderSquare(i, milkPosition, watermelonPosition) {
  
  const x = i % 8
  const y = Math.floor(i / 8)
  // const black = (x + y) % 2 === 1
  // const isMilkHere = milkPosition[0] === x && milkPosition[1] === y;
  // const piece = isMilkHere ? <Milk /> : null
  // const piece1 = isMilkHere ? <Water /> : null

  

  let color;
  let ww;
  let hh;
  let ml;
  let mr;
  if (i === 0) {
    color = 'gray';
    ww = 300;
    hh = 360;
    ml= 200;
    mr = 700;
  } else if (i === 1) {
    color = 'brown';
    ww = 300;
    hh = 360;
    
  } else if (i === 2) {
    color = 'lightskyblue';
    ww = 600;
    hh = 120;
    ml = 500;
  } else {
    color = 'green'; // Set a default color for other squares if needed
  }


  return (
    <div key={i}  className="fridge-container" style={{ width: ww, height: hh, marginLeft: ml, marginRight: mr, marginBottom: '50px', marginTop: '50px',borderRadius: '20px', backgroundColor: color, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <BoardSquare x={x} y={y}>
     {renderPiece(x, y, milkPosition, watermelonPosition)}
      </BoardSquare>
  </div>
  
  )

}

function renderPiece(x, y, milkPosition = [-1, -1], watermelonPosition  = [0, 0]) {
  if (x === milkPosition[0] && y === milkPosition[1]) {
    return <Milk />;
  }
 else if (x === watermelonPosition[1] && y === watermelonPosition[1]) { 
  return <Watermel />;
}
}


export default function Board({ milkPosition, watermelonPosition }) {
  const Fridges = []
  for (let i = 0; i < 2; i++) {
  Fridges.push(renderSquare(i, milkPosition, watermelonPosition))
  }
  Fridges.push(renderSquare(2, milkPosition, watermelonPosition))
  


  return (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexWrap: 'wrap',
          backgroundColor: 'mistyrose',
        }}
      >
        {Fridges}
      </div>
    )
}