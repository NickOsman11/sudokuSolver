

export default class Square{
    constructor(row, col, number) {
        this.row = row;
        this.col = col;
        this.number = number
        this.eliminatedNumbers = []
    }

    static at(row, col, number=0){
        return new Square(row, col, number)
    }
}