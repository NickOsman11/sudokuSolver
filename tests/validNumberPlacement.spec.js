import expect from "chai"
import grid from "./grid.js";

let grid;
beforeEach(() => grid = new grid());

describe("Valid number placement", () =>{

    it("updates the eliminated numbers on a row", () =>{
        grid.setNumber(0, 0, 1);
        grid.setNumber(0, 3, 2);

        let result = grid.getOtherNumbersInRow(0, 0);

        let expectedResult = [2]
        expect(result).to.deep.equal(expectedResult)
    }) 

    //won't work yet
    it("cannot be placed in a row that already contains that number", () =>{
        grid.setNumber(0, 0, 1);

        grid.setNumber(0, 3, 1);

        expect(grid.numberAt(0, 3)).to.equal(0)
    })
})
