import React, { useState } from "react";
import ReactDOM from 'react-dom'
import { useDrop } from "react-dnd";
import Board from './Board'


const DndGameInside = () => {

    ReactDOM.render(

    <Board milkPosition={[0, 0]} />,
    document.getElementById('root')
)


}


export default DndGameInside;