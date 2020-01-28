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
    test('toRoman returns X for number 10', () => {
        expect(toRoman(10)).toBe('X');
    });
    test('toRoman returns XI for number 11', () => {
        expect(toRoman(11)).toBe('XI');
    });
    test('toRoman returns XIII for number 13', () => {
        expect(toRoman(13)).toBe('XIII');
    });
    test('toRoman returns XIV for number 14', () => {
        expect(toRoman(14)).toBe('XIV');
    });
});