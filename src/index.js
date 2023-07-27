module.exports = function toReadable (number) {

    const numbers = {
        0:  'zero',
        1:  'one',
        2:  'two',
        3:  'three',
        4:  'four',
        5:  'five',
        6:  'six',
        7:  'seven',
        8:  'eight',
        9:  'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100:' hundred',
        101:' hundred '
    }

    const twoDigits = n => (n === 0)?'':(((n < 20) || (n % 10 === 0))?numbers[n]:numbers[10 * Math.floor(n / 10)] + ' ' + numbers[n % 10]);
    return (number < 10) ? numbers[number] : ((number < 100) ? twoDigits(number) : numbers[Math.floor(number / 100)] + numbers[number % 100 ? 101:100] + twoDigits(number % 100));
}
