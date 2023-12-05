import React, { useRef } from 'react'
import Fridge from './Fridge'
import { moveMilk, moveWatermelon } from './Game'
import { ItemTypes } from './Constants'
import { useDrop, useDrag } from 'react-dnd'

function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1

      // Ref for dropWatermelon
    const dropWatermelonRef = useRef(null);
    //for milk
    const [{ isOverMilk  }, dropMilk] = useDrop(() => ({
      accept: ItemTypes.MILKY,
      drop: () => moveMilk(x, y),
      collect: monitor => ({
      isOverMilk: !!monitor.isOver(),
      }),
    }), [x, y])

    //for watermelon
    const [{ isOverWatermelon }, dropWatermelon] = useDrop(() => ({
      accept: ItemTypes.WATER,
      drop: () => moveWatermelon(x, y),
      collect: monitor => ({
        isOverWatermelon: !!monitor.isOver(),
      }),
    }), [x, y]);
  

    //milkdrag
    const [{ isDraggingMilk }, dragMilk, previewMilk] = useDrag(() => ({
        type: ItemTypes.MILKY,
        collect: (monitor) => ({
          isDraggingMilk: !!monitor.isDragging()
        }),
      }));

    //watermelondrag
    const [{ isDraggingWatermelon }, dragWatermelon, previewWatermelon] = useDrag(() => ({
      type: ItemTypes.WATER,
      collect: monitor => ({
        isDraggingWatermelon: !!monitor.isDragging(),
      }),
    }));
  
    
    return (
      <div
        ref={dropMilk}
        style={{
          position: 'relative',
          width: '100%',
          height: '100%',
        }}
      >
        <Fridge>{children}</Fridge>
        {(isOverMilk || isOverWatermelon) && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              height: '100%',
              width: '100%',
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: 'yellow',
            }}
          />
        )}
        
      </div>
    )
  }
  
  export default BoardSquare
  