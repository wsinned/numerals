const  toRoman  = require('../lib/numerals');

describe('It returns the numeral given an integer up to 4000', () => {
    test('toRoman returns I for number 1', () => {
        expect(toRoman(1)).toBe('I');
    });
    test('toRoman returns III for number 3', () => {
        expect(toRoman(3)).toBe('III');
    });
    test('toRoman returns IV for number 4', () => {
        expect(toRoman(4)).toBe('IV');
    });
    test('toRoman returns V for number 5', () => {
        expect(toRoman(5)).toBe('V');
    });
    test('toRoman returns VI for number 6', () => {
        expect(toRoman(6)).toBe('VI');
    });
    test('toRoman returns VII for number 7', () => {
        expect(toRoman(7)).toBe('VII');
    });
    test('toRoman returns VIII for number 8', () => {
        expect(toRoman(8)).toBe('VIII');
    });
    test('toRoman returns IX for number 9', () => {
        expect(toRoman(9)).toBe('IX');
    });
})