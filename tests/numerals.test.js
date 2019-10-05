// require("jest");

const  toRoman  = require('../lib/numerals');

describe('It returns the numeral given an integer up to 4000', () => {
    test('toRoman returns the number', () => {
        expect(toRoman(1)).toBe('I');

    });
});