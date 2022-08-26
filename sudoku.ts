import Grid from "./grid";
import {solvePuzzle} from "./solver";


function sudoku(){
    let puzzle = new Grid
    solvePuzzle(puzzle)
}

sudoku()
