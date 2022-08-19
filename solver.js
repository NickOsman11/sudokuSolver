import Grid from "./grid.js";


export default function updateEliminatedNumbers(i, j, grid){

    updateRowEliminatedNumbers(i, j, grid)
    updateColEliminatedNumbers(i, j, grid)
    update3by3EliminatedNumbers(i, j, grid)
}


function updateRowEliminatedNumbers(i, j, grid){ 

    // let numberToAdd = grid.numberAt(i, j)
    let numberToAdd = grid[i][j].number
    grid[i].forEach(square => {
        if (!(square.eliminatedNumbers.includes(numberToAdd))){
            square.eliminatedNumbers.push(numberToAdd)
        }
    })
}


// function updateColEliminatedNumbers(i, j, grid){

//     // let numberToAdd = grid.numberAt(i, j)
//     let numberToAdd = grid[i][j].number
//     for (let row = 0; row < 9; row ++){
//         if ( ! (grid.eliminatedNumbersAt(row, j).includes(numberToAdd))){
//             grid.addEliminatedNumber(row, j, numberToAdd)
//         }
//     }
// }


// function update3by3EliminatedNumbers(i, j, grid){

//     // let numberToAdd = grid.numberAt(i, j)
//     let numberToAdd = grid[i][j].number
//     for (let row = i - i%3; row < (i - i%3) + 3; i++){
//         for (let col = j -  j%3; col < (j - j%3) + 3; col++){
//             if ( ! (grid.eliminatedNumbersAt(row, col).includes(numberToAdd))){
//                 grid.addEliminatedNumber(row, col, numberToAdd)
//             }
//         }
//     }
// }
