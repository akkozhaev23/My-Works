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