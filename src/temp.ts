const num = '12345678'.split('');

do {
    const res = num.splice(-3);
    console.log('------------------------')
    console.log(res)
    console.log(num)
} while (num.length)

// Число делится на 11, если сумма цифр, которые стоят на четных местах,
// равна сумме цифр, стоящих на нечетных местах, либо отличается от неё на число,
// которое делится на 11.
//
// Источник: https://math-prosto.ru/ru/pages/delimost/delimost4/
const num = '135795';
let isOdd = true;
let odd = 0;
let even = 0;
for (let i = 0; i < num.length; i++) {
    if (isOdd) {
        odd += +num[i];
    } else {
        even += +num[i];
    }
    isOdd = !isOdd;
}

console.log(odd)
console.log(even)

const dif = odd - even;