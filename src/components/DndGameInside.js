// DndGameInside.js
import React, { useEffect } from 'react';
import Board from './Board';
import { observeMilk, observeWatermelon } from './Game';
import GameNav from './gamenav';  // Make sure to correct the import statement
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import GOV from './GameOverNav';  // Make sure to correct the import statement


const DndGameInside = ({ root }) => {
  useEffect(() => {
    const renderGame = (milkPosition, watermelonPosition) => {
      root.render(
        <DndProvider backend={HTML5Backend}>
        <>
          <GameNav />
          <Board milkPosition={milkPosition} watermelonPosition={watermelonPosition} />
          <GOV />
        </>
        </DndProvider>
      );
    };

    observeMilk(renderGame);
    observeWatermelon(renderGame);

    // Cleanup logic if needed
    return () => {
      // Additional cleanup logic if needed
    };
  }, [root]);

};

export default DndGameInside;