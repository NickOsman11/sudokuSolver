import grid from "./grid.js";

let grid;
beforeEach(() => grid = new grid());

describe("Valid number placement", () =>{

    it("cannot be placed in a row that already contains that number", () =>{
        grid.setNumber(0, 0, 1);

        grid.setNumber(0, 3, 1);

        grid.numberAt(0, 3).should.equal(0) //something of this form?
    })
})