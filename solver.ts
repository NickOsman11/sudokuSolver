import Grid from "./grid"


function solvePuzzle(grid : Grid){

    //iterates across whole array, and if number at a square has not been set yet,
    //checks to see if enough info is available to determine the number
    //if so, sets number
    // while (!checkIfPuzzleComplete(grid)){
    for (let k = 0; k<10; k++){ //test loop; delete later
        grid.gridArray.forEach(row => {
            row.forEach(square => {
                if (square.number === 0){
                    solveSquare(square.i, square.j, grid)
                    }
            });
        })
    }
}

function checkIfPuzzleComplete(grid : Grid){

    for (let i = 0; i < grid.gridSize; i++){
        for (let j = 0; j < grid.gridSize; j++){
            if (grid.numberAt(i, j) === 0){
                return false
            }
        }
    }
    grid.printGrid()
    return true
}

function solveSquare(i: number, j: number, grid: Grid){

    //Now for each number [1 => gridsize], check to see if that number cannot
    //be in any other square on the row.
    //if so, that number must go in this square - so set it 
    //repeat for col and subgrid
    grid.numbersList.forEach(n =>{
        
        if (!grid.eliminatedNumbersAt(i, j).includes(n)){ //don't try to set n at this 
                                                          //square if n already eliminated here! 
            if (setIfNumberEliminatedForRestOfRow(i, j, grid, n)){ //returns true if number was set
                return                                     
            }
            if (setIfNumberEliminatedForRestOfCol(i, j, grid, n)){ 
                return
            }
            if (setIfNumberEliminatedForSubgrid(i, j, grid, n)){ 
                return
            }
        }
    }) 
}


function setIfNumberEliminatedForRestOfRow(i: number, j: number,
                                             grid: Grid, n: number){

    let numberOfSquaresEliminated = 0
    for (let col = 0; col < grid.gridSize; col ++){
        if (col != j){   //skip the square we are trying to solve      
            if (grid.eliminatedNumbersAt(i, col).includes(n)){
                numberOfSquaresEliminated ++
            }
        }
    }
    if (numberOfSquaresEliminated === grid.gridSize - 1){
        grid.setNumber(i, j, n)
        return true
    }
}

function setIfNumberEliminatedForRestOfCol(i: number, j: number,
                                            grid: Grid, n: number){

    let numberOfSquaresEliminated = 0
    for (let row = 0; row < grid.gridSize; row ++){
        if (row != i){   //skip the square we are trying to solve      

            if (grid.eliminatedNumbersAt(row, j).includes(n)){
                numberOfSquaresEliminated ++
            }
        }
    }
    if (numberOfSquaresEliminated === grid.gridSize - 1){
        grid.setNumber(i, j, n);
        return true;
    }
}

function setIfNumberEliminatedForSubgrid(i: number, j: number, 
                                        grid: Grid, n: number){
    
    let numberOfSquaresEliminated = 0;
    let subgridSize = Math.sqrt(grid.gridSize);

    for (let row = i - i%subgridSize ; row < (i - i%subgridSize) + subgridSize ; row++){
        for (let col = j -  j%subgridSize ; col < (j - j%subgridSize) + subgridSize ; col++){
            if (!(row === i && col === j)){ 
                if (grid.eliminatedNumbersAt(row, col).includes(n)){
                    numberOfSquaresEliminated ++
                }
            }
        }
    }
    if (numberOfSquaresEliminated === grid.gridSize - 1){
        grid.setNumber(i, j, n)
        return true
    }
}

export {solvePuzzle};