import Square from "./square.js";
import getInt from "./userInput.js";
import {updateEliminatedNumbers} from "./solver.js"


export default class Grid {

    constructor(){
        this.gridSize = 9
        this.gridArray = this.createGrid()  //contains matrix of squares
        this.numbersList = this.getNumbersList() //list of numbers from [1 => gridsize]
        this.inputInitialNumbers()          //allows user to input known info
    }

    createGrid(){

        const puzzle = new Array(this.gridSize)
        for (let i = 0; i<this.gridSize; i++){
            puzzle[i] = new Array(this.gridSize)
        }
        for (let i = 0; i<this.gridSize; i++){
            for (let j = 0; j<this.gridSize; j++){
                puzzle[i][j] = Square.at(i, j, 0)
            }
        }
        return puzzle 
    }

    getNumbersList(){

        let numbersList = [];  
        for (let n = 0; n<this.gridSize; n++){
            numbersList.push(n+1)
        };
        return numbersList
    }
    
    numberAt(i, j) {
        return this.gridArray[i][j].number
    }

    eliminatedNumbersAt(i, j) {
        return this.gridArray[i][j].eliminatedNumbers
    }

    setNumber(i, j, number) {

        this.gridArray[i][j].number = number
        if (number !== 0){
            updateEliminatedNumbers(i, j, this, number)
        }
    }

    addEliminatedNumber(i, j, number){
        this.gridArray[i][j].eliminatedNumbers.push(number)
    }

    inputInitialNumbers(){

        console.log("-".repeat(30))
        console.log("Enter the known information:")
        console.log("-".repeat(30))
        
        let number; let row; let col;
        enterNumbersLoop:
        while (true){
            number = getInt("Enter a number (enter -1 to show grid, -2 if finished)", -2, this.gridSize);
            if (number === -2){
                break
            }
            if (number === -1){
                this.printGrid()
                continue enterNumbersLoop
            }
            row = getInt("Row: ", 1, this.gridSize) - 1;
            col = getInt("Column: ", 1, this.gridSize) - 1;
            if (this.eliminatedNumbersAt(row, col).includes(number)){
                console.log("Illegal move, try again")
            } else {
                this.setNumber(row, col, number)
            }
            
        }
    }

    printGrid(){

        if (this.gridSize === 9){

            for (let i = 0; i<this.gridSize; i++){
                if (i == 3 || i == 6){
                    console.log("-".repeat(21))
                }
                console.log(`${this.numberAt(i, 0)} ${this.numberAt(i, 1)} ${this.numberAt(i, 2)} | ` +
                `${this.numberAt(i, 3)} ${this.numberAt(i, 4)} ${this.numberAt(i, 5)} | ` +
                `${this.numberAt(i, 6)} ${this.numberAt(i, 7)} ${this.numberAt(i, 8)}`)
            }
        }
        else {

            this.gridArray.forEach(row =>{
                let numbers = row.map(square =>
                    square.number);
                console.log(...numbers)
            })
        }
    }
}


