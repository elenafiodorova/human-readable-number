module.exports = function toReadable (number) {
    let arr=['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety', 'hundred', 'thousand'];
    let numberStr = number.toString();
    //числа от 0 до 19
    if (number <= 20 ) {return arr[number];}
            
    //числа от 21 до 99
    /*if (numberStr.length = 2 && number>19) {
        let numberNew = number % 10;
    }*/

    if(numberStr.length === 2) {
            let value = '';
            if (numberStr[0] === '2') {
                value = 'twenty ';
            }
            if (numberStr[0] === '3') {
                value = 'thirty ';
            }
            if (numberStr[0] === '4') {
                value = 'forty ';
            }
            if (numberStr[0] === '5') {
                value = 'fifty ';
            }
            if (numberStr[0] === '6') {
                value = 'sixty ';
            }
            if (numberStr[0] === '7') {
                value = 'seventy ';
            }
            if (numberStr[0] === '8') {
                value = 'eighty ';
            }
            if (numberStr[0] === '9') {
                value = 'ninety ';
            }
            if (number % 10 === 0) {return value.trim();}
            else {
                value = value + arr[numberStr[1]];
                return value;
            }        
    }
    //числа от 100 до 999
    if(numberStr.length === 3) {
        let valueTotal = '';
        let valueFirst = Math.trunc(number/100);
            if (numberStr[1] === '2') {
                value = 'twenty ';
            }
            if (numberStr[1] === '3') {
                value = 'thirty ';
            }
            if (numberStr[1] === '4') {
                value = 'forty ';
            }
            if (numberStr[1] === '5') {
                value = 'fifty ';
            }
            if (numberStr[1] === '6') {
                value = 'sixty ';
            }
            if (numberStr[1] === '7') {
                value = 'seventy ';
            }
            if (numberStr[1] === '8') {
                value = 'eighty ';
            }
            if (numberStr[1] === '9') {
                value = 'ninety ';
            }
            if (number % 100 === 0) {
                valueTotal = arr[valueFirst] + ' hundred ';
                return valueTotal.trim();
            } else {
                if ( number % 100 <=20) {
                    valueTotal = arr[valueFirst] + ' hundred ' + arr[number % 100];
                    return valueTotal.trim();
                } else {
                    if (number % 10 === 0) {
                        valueTotal = arr[valueFirst] + ' hundred ' +value;
                        return valueTotal.trim();
                    } else {
                        valueTotal = arr[valueFirst] + ' hundred ' + value + arr[numberStr[2]];
                        return valueTotal.trim();
                    }
                }
                
            }           
    }
    

    }
