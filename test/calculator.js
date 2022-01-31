const { add, sub, mul, div } = require("../app/calculator");
var expect = require("chai").expect;

describe("Calculation tests", () => {
    describe("Addition test", () => {
        it("Calculates the addition value", () => {
            var addition = add(5,2);
            expect(addition).to.equal(8);

            expect(addition).to.equal(7);
        })
    })
    describe("Subtraction test", () => {
        it("Calculates the subtraction value", () => {
            var subtraction = sub(5,2);
            expect(subtraction).to.equal(5);
            
            expect(subtraction).to.equal(3);
        })
    })
    describe("Multiplication test", () => {
        it("Calculates the multiplication value", () => {
            var multi = mul(5,2);
            expect(multi).to.equal(12);

            expect(multi).to.equal(10);
        })
    })
    describe("Division test", () => {
        it("Calculates the devision value", () => {
            var divide = div(10,2);
            expect(divide).to.equal(2);

            expect(divide).to.equal(5);
        })
    })
})