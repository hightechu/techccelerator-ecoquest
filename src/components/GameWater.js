
let waterPosition = [0, 0]
let observer = null

function emitChange() {
  observer(waterPosition)
}

export function observe(o) {
  //  if (observer) {
  //    throw new Error('Multiple observers not implemented.')
  //  }

  observer = o
  emitChange()
}

export function moveWater(toX, toY) {
  waterPosition = [toX, toY]
  emitChange()
}