module.exports = function toReadable (number) {
    function oneDigit(n) {
        switch (n) {
            case 1: return 'one'; break;
            case 2: return 'two'; break;
            case 3: return 'three'; break;
            case 4: return 'four'; break;
            case 5: return 'five'; break;
            case 6: return 'six'; break;
            case 7: return 'seven'; break;
            case 8: return 'eight'; break;
            case 9: return 'nine'; break;
            default: return '';
        }
    }

    function twoDigit(n, spc) {
        let space = spc?' ':'';
        if(n === 0) return '';
        else if(n.toString().length == 1) return ' '+oneDigit(n);
        else switch(n) {
            case 10: return space+'ten'; break;
            case 11: return space+'eleven'; break;
            case 12: return space+'twelve'; break;
            case 13: return space+'thirteen'; break;
            case 14: return space+'fourteen'; break;
            case 15: return space+'fifteen'; break;
            case 16: return space+'sixteen'; break;
            case 17: return space+'seventeen'; break;
            case 18: return space+'eighteen'; break;
            case 19: return space+'nineteen'; break;
            case 20: return space+'twenty'; break;
            case 30: return space+'thirty'; break;
            case 40: return space+'forty'; break;
            case 50: return space+'fifty'; break;
            case 60: return space+'sixty'; break;
            case 70: return space+'seventy'; break;
            case 80: return space+'eighty'; break;
            case 90: return space+'ninety'; break;
            default: return twoDigit(10*Math.floor(n/10), spc)+' '+oneDigit(n%10);
        }
    }

    if(number === 0) return 'zero';
    else if(number.toString().length == 1) return oneDigit(number);
    else if(number.toString().length == 2) return twoDigit(number, false);
    else if(number.toString().length == 3) return oneDigit(Math.floor(number/100))+' hundred'+twoDigit(number%100, true);
}
