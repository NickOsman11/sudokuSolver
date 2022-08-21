import {updateEliminatedNumbers} from "./gridUpdater.js"


function solvePuzzle(grid){

    for (let m = 0; m<10; m++){ //test loop; should instead loop until puzzle solved

        //iterates across whole array, and if number at a square has not been set yet,
        //checks to see if enough info is available to determine the number
        //if so, sets number
        grid.gridArray.forEach(row => {
            row.forEach(square => {
                if (square.number === 0){
                    solveSquare(square.i, square.j, grid);
                }
            });
        })
        grid.printGrid()
        console.log(" ")

        // test loop; delete later
        // for(let j = 0; j<grid.gridSize; j++){
        //     for(let k = 0; k<grid.gridSize; k++){
        //         console.log(`ElimNumbers at ${j}${k}: ${grid.eliminatedNumbersAt(j, k)}`)
        //     }
        // }
    }
}

function solveSquare(i, j, grid){

    //quickly check if it is the last number not filled in in row,
    //col or subgrid, and set it if so
    if (setIfLastInRowColOrSubgrid(i, j, grid)){ //returns true if number was set
        return//is there a better way of stopping the function from executing?
    }
    //Now for each number [1 => gridsize], check to see if that number cannot
    //be in any other square on the row.
    //if so, that number must go in this square - so set it 
    //repeat for col and subgrid
    grid.numbersList.forEach(n =>{
        
        if (!grid.eliminatedNumbersAt(i, j).includes(n)){ //don't try to set n at this 
                                                          //square if n already eliminated! 
            if (setIfNumberEliminatedForRestOfRow(i, j, grid, n)){ 
                return 
            }
            if (setIfNumberEliminatedForRestOfCol(i, j, grid, n)){ 
                return 
            }
            if (setIfNumberEliminatedForSubgrid(i, j, grid, n)){ 
                return;
            }
        }
    }) 
}


function setIfNumberEliminatedForRestOfRow(i, j, grid, n){

    let numberOfSquaresEliminated = 0
    for (let col = 0; col < grid.gridSize; col ++){
        if (col != j){   //skip the square we are trying to solve      

            if (grid.eliminatedNumbersAt(i, col).includes(n)){
                numberOfSquaresEliminated ++
            }
        }
    }
    if (numberOfSquaresEliminated === 8){
        grid.setNumber(i, j, n)
        grid.printGrid()
        console.log()
        return true
    }
}

function setIfNumberEliminatedForRestOfCol(i, j, grid, n){

    let numberOfSquaresEliminated = 0
    for (let row = 0; row < grid.gridSize; row ++){
        if (row != i){   //skip the square we are trying to solve      

            if (grid.eliminatedNumbersAt(row, j).includes(n)){
                numberOfSquaresEliminated ++
            }
        }
    }
    if (numberOfSquaresEliminated === 8){
        grid.setNumber(i, j, n);
        return true;
    }
}

function setIfNumberEliminatedForSubgrid(i, j, grid, n){
    
    let numberOfSquaresEliminated = 0;
    let subgridSize = Math.sqrt(grid.gridSize);

    for (let row = i - i%subgridSize ; row < (i - i%subgridSize) + subgridSize ; row++){
        for (let col = j -  j%subgridSize ; col < (j - j%subgridSize) + subgridSize ; col++){
            if (!(row === i && col === j)){   //skip the square we are trying to solve      

                if (grid.eliminatedNumbersAt(row, col).includes(n)){
                    numberOfSquaresEliminated ++
                }
            }
        }
    }
    if (numberOfSquaresEliminated === 8){
        grid.setNumber(i, j, n)
        return true
    }
}

function setIfLastInRowColOrSubgrid(i, j, grid){

    let eliminatedNumbers = grid.eliminatedNumbersAt(i, j);
    
    if (eliminatedNumbers.length === grid.gridSize - 1){
        grid.numbersList.forEach(n =>{
            if (!eliminatedNumbers.includes(n)){
                grid.setNumber(i, j, n)
                return true
            };
        });
    };
};


export {solvePuzzle, updateEliminatedNumbers};