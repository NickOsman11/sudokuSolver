export default class Square { 
    i: number;
    j: number;
    number: number;
    eliminatedNumbers: number[];

    constructor(row: number, col: number, number: number) {
        this.i = row;
        this.j = col;
        this.number = number //the number at that square - zero if empty
        this.eliminatedNumbers = [] //a list of all the numbers that cannot
                                    //be at that square
    }

    static at(row: number, col: number, number: number){
        return new Square(row, col, number)
    }
}