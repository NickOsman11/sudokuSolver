import Square from "./square.js";
import getInt from "./userInput.js";
import updateEliminatedNumbers from "./solver.js"


export default class Grid{
    constructor(){
        this.grid = this.createGrid()
        this.inputInitialNumbers(this.grid)
    }

    createGrid(){

        const grid = new Array(9)
        for (let i = 0; i<9; i++){
            grid[i] = new Array(9)
        }
        for (let i = 0; i<9; i++){
            for (let j = 0; j<9; j++){
                grid[i][j] = Square.at(i, j, 0)
            }
        }
        return grid
    }
    
    numberAt(i, j){
        return this.grid[i][j].number
    }

    eliminatedNumbersAt(i, j){
        return this.grid[i][j].eliminatedNumbers
    }

    setNumber(i, j, number){
        this.grid[i][j].number = number
        updateEliminatedNumbers(i, j, this.grid)
    }

    addEliminatedNumber(i, j, number){
        this.grid[i][j].eliminatedNumbers.push(number)
    }


    inputInitialNumbers(){

        console.log("-".repeat(100))
        console.log("Enter the known information - enter the number, followed by its row,"
                    + " followed by its column. \nWhen you have entered all the numbers with "
                    + "their rows and columns, press zero.")
        console.log("-".repeat(100))
        
        let number; let row; let col;
        while (number !== 0){
            number = getInt("Enter a number (or enter zero if you are finished)", 0, 9);
            if (number === 0){
                break
            }
            row = getInt("Row: ", 1, 9) - 1;
            col = getInt("Column: ", 1, 9) - 1;
            this.setNumber(row, col, number)
        }
    }

    printGrid(){

        // this.grid.forEach(row => {
        //     console.log(...row.map(square => square.number))
        // });


        for (let i = 0; i<9; i++){

            if (i == 3 || i == 6){
                console.log("-".repeat(21))
            }
            console.log(`${this.numberAt(i, 0)} ${this.numberAt(i, 1)} ${this.numberAt(i, 2)} | ` +
            `${this.numberAt(i, 3)} ${this.numberAt(i, 4)} ${this.numberAt(i, 5)} | ` +
            `${this.numberAt(i, 6)} ${this.numberAt(i, 7)} ${this.numberAt(i, 8)}`)
        }
    }
}


