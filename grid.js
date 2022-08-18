import Square from "./square.js";
import getInt from "./userInput.js";


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
                grid[i][j] = Square.at(i, j, 0)
            }
        }
        console.log("Enter the known information - enter the number, followed by its row,"
                    + " followed by its column. \nWhen you have entered all the numbers with "
                    + "their rows and columns, press zero. \n*********************************")
        
        let number; let row; let col;
        while (number !== 0){
            number = getInt("Enter a number (or enter zero if you are finished)", 0, 9);
            if (number === 0){
                break
            }
            row = getInt("Row: ", 1, 9) - 1;
            col = getInt("Column: ", 1, 9) - 1;
            grid[row][col].number = number
        }
    }

    printGrid(){
        
        this.grid.forEach(row => {
            console.log(... row.map(square => square.number))
        });
    }
}


