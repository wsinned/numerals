const I = 1;
const V = 5;
const X = 10;
const L = 50;
const C = 100;
const D = 500;
const M = 1000;

function toRoman(toConvert) {
    if (toConvert <= 3) {
        return extractLowerNumerals(toConvert);
    }
    if (toConvert <= 8) {
        return extractHigherNumerals(toConvert, "V");
    } 
    return extractHigherNumerals(toConvert, "X");
    return "error";
}

const extractLowerNumerals = (toConvert) => {
    let result = "";
    for (let i = 0; i < toConvert; i++) {
        result = result + 'I';
    };
    return result;
};

const extractHigherNumerals = (toConvert, symbol) => {
    let result = ""

    if (toConvert > 9) { 
        toConvert = toConvert - 5 
    }

    if (toConvert == 4 || toConvert == 9) {
        result = "I" + symbol;
    }
    if (toConvert == 5) {
        result = symbol;
    }
    if (toConvert > 5 && toConvert < 9) {
        toConvert = toConvert - 5
        result = symbol + extractLowerNumerals(toConvert);
    }
    return result;
};

module.exports = toRoman;


const numerals = "I II III IV V VI VII VIII IX X XI XII XIII XIV XV";