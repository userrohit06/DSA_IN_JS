function minEatingSpeed(piles = [], h) {
  const maxPile = Math.max(...piles);

  // try every possible eating speed
  for (let speed = 1; speed < maxPile; speed++) {
    let hours = 0;

    // calculate total hours needed at speed 0
    for (let pile of piles) {
      hours += Math.ceil(pile / speed);
    }

    // first valid speed
    if (hours <= h) return speed;
  }

  return -1;
}

let piles = [5, 3, 4];
let h = 4;
