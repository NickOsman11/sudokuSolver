import Grid from "./grid"

function updateEliminatedNumbers(i:number , j:number, grid:Grid, numberJustSet:number){

    //once a number is set at a particular square, no other square
    //in that row can be set at that number
    //so that number must be added to the eliminatedNumbers of every 
    //square in that row
    //repeated for column and subgrid
    updateRowEliminatedNumbers(i, j, grid, numberJustSet)
    updateColEliminatedNumbers(i, j, grid, numberJustSet)
    updateSubgridEliminatedNumbers(i, j, grid, numberJustSet)
    //the square at which the number was set can no longer be set to any
    //number, so all numbers [1=>gridsize] are added to its eliminatedNumbers
    updateThisSquareEliminatedNumbers(i, j, grid)
}

function updateThisSquareEliminatedNumbers(i:number, j:number, grid:Grid){

    grid.numbersList.forEach(n =>{
        if (!grid.eliminatedNumbersAt(i, j).includes(n)){
            grid.addEliminatedNumber(i, j, n)
        }
    })
}


function updateRowEliminatedNumbers(i:number, j:number, grid:Grid, numberJustSet:number){ 

    grid.gridArray[i].forEach(square => {
        if (!(square.eliminatedNumbers.includes(numberJustSet))){
            square.eliminatedNumbers.push(numberJustSet)
        }
    })
}


function updateColEliminatedNumbers(i:number, j:number, grid:Grid, numberJustSet:number){

    for (let row = 0; row < grid.gridSize; row ++){
        if ( ! (grid.eliminatedNumbersAt(row, j).includes(numberJustSet))){
            grid.addEliminatedNumber(row, j, numberJustSet)
        }
    }
}


function updateSubgridEliminatedNumbers(i:number, j:number, grid:Grid, numberJustSet:number){

    let subgridSize = Math.sqrt(grid.gridSize)
    for (let row = i - i%subgridSize; row < (i - i%subgridSize) + subgridSize; row++){
        for (let col = j -  j%subgridSize; col < (j - j%subgridSize) + subgridSize; col++){
            if ( ! (grid.eliminatedNumbersAt(row, col).includes(numberJustSet))){
                grid.addEliminatedNumber(row, col, numberJustSet)
            }
        }
    }
}

export {updateEliminatedNumbers}