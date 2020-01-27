function toRoman(toConvert) {
    if (toConvert <= 3) {
        return extractIs(toConvert);
    }
    return extractVs(toConvert);
    return "error";
}

const extractIs = (toConvert) => {
    let result = "";
    for (let i = 0; i < toConvert; i++) {
        result = result + 'I';
    };
    return result;
};

const extractVs = (toConvert) => {
    let result = ""
    if (toConvert == 4) {
        result = "IV";
    }
    if (toConvert == 5) {
        result = "V";
    }
    if (toConvert > 5) {
        toConvert = toConvert - 5
        result = "V" + extractIs(toConvert);
    }
    return result;
};

module.exports = toRoman;



const numerals = "I II III IV V VI VII VIII IX X XI XII XIII XIV XV";