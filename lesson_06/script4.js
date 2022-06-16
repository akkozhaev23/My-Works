//1 exercise 
// function Str() {
//     let str = prompt("Введите число и буквы");

//     if (str === '') {
//         console.log('Пустая строка')
//     } else {
//         let sumNumbers = str.match(/\d+/g).join('').length;
//         let sumLetters = str.match(/[a-z]/gi).join('').length
//         let sumSum = str.match(/[!@#$%^&*]/gi).join('').length
//         console.log('Количество цифр: ' + sumNumbers + ', ' + (' Количество букв: ') + sumLetters + ('Количество символов: ') + sumSum);
//     }
// }
// Str()


// 2 exercise

// function textNumber() {                
//     number = prompt('enter any number')
//     let first = ['Один', 'Два', 'Три', 'Четыре', 'Пять', 'Шесть', 'Семь', 'Восемь', 'Девять'];
//     let second = ['Десять', 'Одинадцать', 'Двенадцать', 'Тринадцать', 'Четырнадцать', 'Пятнадцать', 'Шестнадцать', 'Семьнадцать', 'Восемьнадцать', 'Девяднадцать', 'Двадвать'];
//     let third = ['Двадцать', 'Тридцать', 'Сорок', 'Пятьдесят', 'Шестьдесят', 'Семьдесят', 'Восемьдесят', 'Девяносто'];
//     if (number > 0 && number <= 9) {
//       return first[number - 1];
//     }
//     if (number >= 10 && number <= 20) {
//       return second[number - 10];
//     }
//     if (number > 20 && number <= 99) {
//       let str = `${number}`;
//       str = str.split('');
//       let firstNumber = str[0];
//       let secondNumber = str[1];
//       return `${third[firstNumber - 2]} ${first[secondNumber - 1]}`;
//     }
//   }

//  console.log(textNumber())


//3 exercise

// function UpperLow() {
//     let a = prompt('Enter string')

//     if(a.match(/[A-Z]/)) {
//         return a.toLowerCase()
//     } else {
//         return a.toUpperCase()
//     }
// }

// console.log(UpperLow())


//4 exercise

// function camelize() {
//     let str = prompt('Напишите css стили с дефисом')
//     return str
//         .split('-') 
//         .map(
//             (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//         )
//         .join(''); 
// }

// console.log(camelize())


//5 exercise

// let toMatch = "hyper text markup language";
// let result = toMatch.replace(/(\w)\w*\W*/g, function (_, i) {
//     return i.toUpperCase();
//   }
// )
// console.log(result);


//6 exercise

// function task6(...strings) {
//     let n = strings.length;
//     let newText = "";
//     for (let i = 0; i < n; i++) {
//         let text = strings[i];
//         newText += text;
//     }
//     return newText;
// }

// function task66() {
//     let n = prompt("Ввести количество строк, которое нужно добавить: ");
//     let strings = [];
//     for (let i = 1; i <= n; i++) {
//         let text = prompt("Ввод строки №" + i + " : ");
//         strings.push(text);
//     }
//     console.log(task6(...strings));
// }

// task66() 

//7 exercise

// function calc() {
//     let a = +prompt('number a:')
//     let b = +prompt('number b:')
//     let c = prompt('что нужно с ними сделать?')
//     switch (c) {
//         case '+':
//            return a + b
//         case '-':
//            return a - b
//         case '*':
//            return a * b
//         case '/':
//            return a / b    
//         default:
//             'не делится на ноль'
//     }
// }

// console.log(calc())


//8 exercise

// function task8(url) {
//     let arr1;
//     let protocol;
//     let domain;
//     let arr2;
//     let way;
//     arr1 = url.split("://");
//     for (let index = 0; index < arr1.length; index++) {
//         protocol = arr1[0];
//         arr2 = arr1[1].split("/"); 
//         domain = arr2[0];
//     }   
//     arr2.shift();
//     way = arr2.join("/");      


// return "Информация\nпротокол: "+ protocol
//         + "\nдомен: " + domain + "\nпуть: " + way;
// }
// console.log(task8('https://itstep.org/ua/about'))

//9 exercise

// function razdelitel() {
//     let a = prompt()

//     return a.split('/')
//             .join('')
// }

// console.log(razdelitel())

//10 exercise

// function printf(a, ...values) {
//     return a.replace(/%(\d+)/g, (str, num) => [...values][num - 1]);
//   }
//   console.log(printf("Today is %1 %2.%3.%4", "Monday", 10, 8, 2020));