import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag, DragPreviewImage  } from 'react-dnd'
import wtm from "../images/wtmelon.png";

function Watermel() {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.WATER,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return( 
    <>
    <DragPreviewImage className = 'react-dnd-drag-preview' connect={preview} src={wtm} />
    <div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move',

    }}
  >
      <img src={wtm} />

  </div>
  </>
  )
  
}
 
export default Watermel