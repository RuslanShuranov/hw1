let a = 9

if (a > 10)
    console.log('This number is more than 10')
else
    console.log('This number is less than 10')


let lang = 'ru'

switch (lang) {
    case 'ru':
        console.log('Январь\n' +
            'Февраль\n' +
            'Март\n' +
            'Апрель\n' +
            'Май\n' +
            'Июнь\n' +
            'Июль\n' +
            'Август\n' +
            'Сентябрь\n' +
            'Октябрь\n' +
            'Ноябрь\n' +
            'Декабрь')
        break
    case 'en':
        console.log('January\n' +
            'February\n' +
            'March\n' +
            'April\n' +
            'May\n' +
            'June\n' +
            'July\n' +
            'August\n' +
            'September\n' +
            'October\n' +
            'November\n' +
            'December')
        break
    default:
        console.log('Error!')
}


let mass = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function isOdd(x) {
    (x & 1) ? console.log(x) : '';
}

for (let i = 0; i < mass.length; i++) {
    isOdd(mass[i])
}


let i = 1

while (i <= 15) {
    console.log(i)
    i++
}


function plus(a, b) {
    console.log(a + b)
}

function minus(a, b) {
    console.log(a - b)
}

function scale(a, b) {
    console.log(a * b)
}

function division(a, b) {
    console.log(a / b)
}

let first = 10
let second = 5

plus(first, second)
minus(first, second)
scale(first, second)
division(first, second)