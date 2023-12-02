import React from 'react'
import { ItemTypes, milkImage } from './Constants'
import { useDrag, DragPreviewImage  } from 'react-dnd'

import mlk from "../images/milk.png";



 function Milk() {
  const [{ isDragging }, drag, preview] = useDrag(() => ({
    type: ItemTypes.MILKY,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  
  return( 
    <>
    <DragPreviewImage className = 'react-dnd-drag-preview' connect={preview} src={mlk} />
    <div
    ref={drag}
    style={{
      opacity: isDragging ? 0.5 : 1,
      cursor: 'move',

    }}
  >
      <img className="milksize" src={mlk} />

  </div>
  </>
  )
  
}
 
export default Milk
