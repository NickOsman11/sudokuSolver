import Grid from "./grid.js";
import {solvePuzzle} from "./solver.js";



let puzzle = new Grid
puzzle.printGrid()
console.log("solve puzzle")
solvePuzzle(puzzle)
