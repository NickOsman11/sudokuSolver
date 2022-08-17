import Square from "./square.js";

export default class Grid{
    constructor(){
        this.grid = this.createGrid()
        this.inputInitialNumbers(this.grid)
    }

    createGrid(){
        const puzzle = new Array(9)
        for (let i = 0; i<9; i++){
            puzzle[i] = new Array(9)
        }
        return puzzle
    }

    inputInitialNumbers(grid){

        for (let i = 0; i<9; i++){
            for (let j = 0; j<9; j++){
                grid[i][j] = Square.at(i, j)
            }
        }

        let input;
        while (input !== ""){
            break
        }
    }

    printGrid(){
        
        this.grid.forEach(row => {
            console.log(... row.map(square => square.number))
        });
    }
}

