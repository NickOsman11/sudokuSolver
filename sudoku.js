import Grid from "./grid.js";
import getOtherNumbersInRow from "./solver.js";

let puzzle = new Grid
puzzle.printGrid()
console.log(`number at (1, 1) : ${puzzle.numberAt(0, 0)}`)