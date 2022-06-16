// function compareParams() {
//     let a = prompt('first param: ')
//     let b = prompt('second param: ')
    
//     console.log('a: ' ,a);
//     console.log('b: ' ,b);

//     if (a === '') {
//         alert('Empty string')
//         return;
//     }
    
//     if (b*1 > a.length) {
//         alert('Number of symbols is more than lenght of the string')
//     } 

//     if (b*1 <= a.length || b === '') {
//         let c = [];
//         for (let i = 0; i < a.length; i++){
//             c.push(a.charCodeAt(i));
//         }
//         console.log(c.join(''));
//     }
// }

// compareParams();

// function compareParams() {
//     let a = prompt('Enter any number')
//     const found = a.match(/[A-Z]/g);

//     if (found) {
//         alert('Entered value contains symbols!')
//     }

//     let result = parseFloat(a).toFixed(2)

//     return result;
// }

// console.log(compareParams())

// function test37() {
//     let x = prompt('Enter any number')
//     if (x % 3 === 0 || x % 7 === 0) {
//         console.log('true')
//     } else {
//         console.log('false')
//     }
// }
// test37()

// function yearVis() {
//     let x = prompt('Year')

//     if (x % 4 === 0 && x % 100 !==0 || x % 400 === 0) {
//        console.log('true')
//     } else {
//         console.log('false')
//     }
// }

// yearVis()


// function LeapYear() {
//     let year = prompt('Enter a year please');

//     return (year % 4 === 0 && year % 100 !==0 || year % 400 === 0 ) ? true : false
// }
// console.log(LeapYear())


// function Numbers() {
//     let x = prompt('number')

//     if (x > 13) {
//       return (x - 13) * 2
//     } else {
//         return x
//     }
// }

// console.log(Numbers())

// function compare() {
//     let a = +prompt('enter first number') 
//     let b = +prompt('enter second number');
   
//     if ((a || b === 50) || ((a+b) === 50)) {
//         return true
//     } else {
//         return false
//     }
    
// }
// console.log(compare())