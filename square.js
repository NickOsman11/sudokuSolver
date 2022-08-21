export default class Square { 
    constructor(row, col, number) {
        this.i = row;
        this.j = col;
        this.number = number //the number at that square - zero if empty
        this.eliminatedNumbers = [] //a list of all the numbers that cannot
                                    //be at that square
    }

    static at(row, col, number){
        return new Square(row, col, number)
    }
}