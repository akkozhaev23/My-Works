// function Colors() {
//     let a = ['Red', 'Green', 'White', 'Black']
//     console.log(a.join(', '))
// }
// Colors()

// function near_100() {
//     let x = prompt('x')
//     let y = prompt('y')

//     if (x != y) {
//         let x1 = Math.abs(x - 100)
//         let y1 = Math.abs(y - 100)

//         if (x1 < y1) {
//             return x
//         } 

//         if (y1 < x1) {
//             return y
//         } else {
//             return 0
//         }

//     } else {
//         return false
//     }
// }

// console.log(near_100())

// let x = +prompt('x')
// let y = +prompt('y')

// function sortaSum() {
//     let z = x + y

//     if (z >= 50 && z <= 80) {
//         return 65
//     } else {
//         return 80
//     }
// }

// console.log(sortaSum())


// function reverseString(str) {
//     return str
//     .split('')
//     .reverse('')
//     .join('')
// }
// console.log(reverseString("Welcome"));



// function massiv() {
//     let array = [1, 3, 5]

//     if (array.indexOf(1) === 0  || array.indexOf(1) === -1) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(massiv())

// let array = ['10', '20', '10']

// function massiv(array) {


//     if (array[0] === array[array.length -1]) {
//         return true
//     } else {
//         return false
//     }
// }

// console.log(massiv(array))


// function Reverse() {
//     let array = ['5', '4', '3']

//     array.reverse()

//     return array
// }

// console.log(Reverse())


// function PushArray() {
//     let array = []
//     let arr = [1, 2, 3]
//     let arr1 = [1, 5, 6]

//     array.push(arr[1], arr1[1])
//     return array
// }
// console.log(PushArray())


// function SortArr() {
//     let array = [1, 5]

//     if (array.includes(1) || array.includes(3)){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(SortArr())


// let cars = ['aaa', 'a', 'aa', 'aaaaa', 'aaaa'];

// let max = cars[0];
// for (let car of cars) {
//   if (car.length > max.length) {
//     max = car;
//   }
// }

// console.log(max)


const num=window.prompt();
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));