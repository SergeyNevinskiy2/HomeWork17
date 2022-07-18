'use strict';

const number = prompt('Введите число');
const degree = prompt('Введите степень');
let result = null;

const calc = (number, degree = 1) => {

    if(( number === null) || (degree === null)){
        return 'Вы отменили'
    }else if ((number === '' ) || (degree === '' )){
        return 'Вы ввели пустую строку'
    }
    else if (isNaN(+number) || isNaN(+degree)){
        return 'Вы ввели NaN'
    }
        return number ** degree
    }

result = calc(number,degree);
alert(result);