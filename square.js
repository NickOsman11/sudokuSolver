

export default class Square{
    constructor(row, col) {
        this.row = row;
        this.col = col;
        this.number = 0
        this.eliminatedNumbers = []
    }

    static at(row, col){
        return new Square(row, col)
    }
}