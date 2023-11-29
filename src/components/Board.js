import React from 'react'
import Milk from "./Milk.js"
import Fridge from "./Fridge.js";

export default function Board() {
  return (
    <div>
    <Fridge black>
        <Milk />
    </Fridge>,
    </div>
  )
}