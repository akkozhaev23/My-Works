// alert(Math.floor(12.5));
// alert(Math.ceil(12.5));
// alert(Math.round(12.5));
// console.log(Math.acos(0))
// console.log(Math.asin(0))
// console.log(Math.atan(1))
// console.log(Math.tan(1))
// console.log(Math.cos(1))
// console.log(Math.sin(1))

// alert(Math.sqrt(64))
// alert(Math.abs(-64))

// alert(Math.random());

// var str = 'My\n';
// alert(str.length)

// var str = 'JQuery';
// alert(str.charAt(3))

// alert('Interface'.toLocaleUpperCase())


// alert('Blue kit'.indexOf('gray'))

// alert(String.fromCharCode('1020'))

// let object = {
//     name: 'Dilyara', age: '16'
// };
// object.name = 'Zhas'

// alert(object.name +' ' + object.age)

// let object = { name: 'Dilyara', age:'16'};
// let key = 'name';


// alert(object[key])

// if ('age' in object) {
//     alert('got it!')
// } else {
//     alert('Nothing found!')
// }


// let object = { name:'Dilyara', age:'16', height:'178'}
// console.log(object)

// let object = { };
// object.weight = 64;
// object.height = 169;
// object.title = 'Serik';

// console.log(object)

// let obj = {
//     name: 'Serik',
//     height: 169,
//     age: 16
// }

// let counter = 0;

// for (key in obj) {
//     counter++;
//     console.log('Key: ' + key + 'Value: ' + obj[key])
// }

// console.log(counter)

// let array = ['apple', { name: 'Issa'} , 3 , 'orange','banana'];

// array.map((val, index) => {
//     if (index === 0){
//         val = 'apple 3kg'
//     }
//         console.log(index)
//         console.log(val)
// })

//  console.log(array)

// let fruits = ['apple', 'orange', 'pineapple'];

// console.log(fruits.pop())
// console.log(fruits)


// let fruits = ['apple', 'orange', 'pineapple'];

// console.log(fruits.push('banana'))
// console.log(fruits)

// let fruits = ['apple', 'orange', 'pineapple'];

// console.log(fruits.shift())
// console.log(fruits)




// let fruits = ['apple', 'orange', 'pineapple'];

// console.log(fruits.unshift('google', 'kiwi'))
// console.log(fruits)



// let arr = ['apple', 'orange', 'pineapple'];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// let names = 'Aziza , Serik, Zhas, Maga, Tabigat';

// let google = names.split(', ');

// console.log(google)



// let names = ['Aziza', 'Serik', 'Zhas', 'Maga', 'Tabigat']

// let google = names.join('; ');

// console.log(google)


// let names = ['Aziza', 'Serik', 'Zhas', 'Maga', 'Tabigat']

// delete names[1]

// console.log(names)

// let names = ['Aziza', 'Serik', 'Zhas', 'Maga', 'Tabigat']

// let google = names.splice()

// console.log(google)

// let names = ['Aziza', 'Serik', 'Zhas', 'Maga', 'Tabigat']

// let google = names.splice(0, 2)

// console.log(google)

// let arr = [1, 2, 15];

// console.log(arr.sort())


// let words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']

// let array = [];

// for (let i = 0; i < words.length; i++) {
//     if (words[i] === 'spray'){
//         array.push(words[i])
//     }
// }
// console.log(array);


// const result = words.map((val, i) => {
//     console.log(val, i);
//     return val;
// })

// console.log(result)

// lab 2 //

// let array = [];

// let n = prompt(parseInt());


// for (let i = 0; i < n; i++) {
//     array.push(Math.random())
// }
// var m = Math.min(...array);
// var f = Math.max(...array);

// console.log(m, f)

// lab 5 //

// function findEvenNum() {
//     let result = [];

//     for (let i = 0; i <= 10; i++) { 
//         if (i % 2 ==0) {
//             result.push(i);
//         }
//     }
//   return result;
// }
// console.log(findEvenNum())

// lab 6 // 

// function Mile(km) {
//     return km * 0.6214;
// }
// console.log(Mile(1))

// lab 7 //

// let sum = [-1, 2, -3, 4, -5, 6, 7, 8, 9, -10]

// let sum = [1.12, 2.123, 3.12, 4.56, 5.8, 6.7, 7.9, 8.45, 9.69, 10.98]

// function calcSum() {
//     let arrSum = 0;
//     for(let i = 0; i < sum.length; i++) {
//         arrSum += sum[i];
//   }
//   console.log(arrSum);
// }
// calcSum();

// lab 8 //

// let sum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(let i = 0; i < 1; i++) {
//     console.log(sum.reverse());
// }

// lab 9 // 

// let sum = [-1, 2, 3, 4, -5, 6, 7, -8, 9, 10]

// let array = [];

// function getMassiv() {

//     for(let i = 0; i < sum.length; i++) {
//         if (sum[i] > 0) {
//             array.push(sum[i])
//         }
//     }
//     //  return array;
// }
// getMassiv();
// console.log(array)

