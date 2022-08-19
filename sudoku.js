import Grid from "./grid.js";


let puzzle = new Grid
puzzle.printGrid()
console.log(`eliminated numbers at (3, 3) : ${puzzle.eliminatedNumbersAt(2, 2)}`)
console.log(`eliminated numbers at (1, 4) : ${puzzle.eliminatedNumbersAt(0, 3)}`)
console.log(`eliminated numbers at (4, 1) : ${puzzle.eliminatedNumbersAt(3, 0)}`)
console.log(`eliminated numbers at (4, 4) : ${puzzle.eliminatedNumbersAt(3, 3)}`)