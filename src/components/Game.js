let milkPosition = [0, 0];
let watermelonPosition = [0, 0];
let milkObservers = [];
let watermelonObservers = [];

function emitMilkChange() {
  for (const observer of milkObservers) {
    observer(milkPosition);
  }
}

function emitWatermelonChange() {
  for (const observer of watermelonObservers) {
    observer(watermelonPosition);
  }
}

export function observeMilk(o) {
  milkObservers.push(o);
  emitMilkChange();
}

export function moveMilk(theX, theY) {
  milkPosition = [theX, theY];
  emitMilkChange();
}

export function observeWatermelon(o) {
  watermelonObservers.push(o);
  emitWatermelonChange();
}

export function moveWatermelon(toX, toY) {
  watermelonPosition = [toX, toY];
  emitWatermelonChange();
}


