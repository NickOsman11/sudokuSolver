import Grid from "./grid.js";
import getOtherNumbersInRow from "./solver.js";

function updateRowEliminatedNumbers(i, j, grid){ 

    let numberToAdd = grid[i][j].number
    grid[i].forEach(square => {
        if (!(square.eliminatedNumbers.includes(numberToAdd))){
            square.eliminatedNumbers.push(numberToAdd)
        }
    })
}

function updateColEliminatedNumbers(i, j, grid){

    let numberToAdd = grid[i][j].number
    for (let row = 0; row < 9; row ++){
        if (!(square.eliminatedNumbers.includes(numberToAdd))){
            square.eliminatedNumbers.push(numberToAdd)
        }
    }
}

function update9by9EliminatedNumbers(i, j, grid){

}

function isLegalMove(i, j, number){

}