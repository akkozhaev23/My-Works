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

// let a = 'Its \n "test"'
// let c = `Its ${a}`

// console.log(c)

// function test() {
//     let a = prompt('enter value: ')

//     if (a === null) {
//         return;
//     }
// }
// console.log(test())


// STRING

// function Probel() {
//     let a = prompt('enter value: ')

//     if (a.length <= 0) {
//         return false
//     } else {
//         return true
//     }
// }

// console.log(Probel())




// function massiv() {
//     let a = 'Robin Singh'

//     console.log(a.split(' '))
// }

// console.log(massiv())




// function massiv() {
//     let a = 'Robin Singh'

//     return a.slice(0, 4)
// }

// console.log(massiv())



// abbrev_name = function() {
//     let str1 = 'Robin Singh'
//     let split_names = str1.trim().split(' ')

//     if (split_names.length > 1) {
//         return (split_names[0] + ' ' + split_names[1].charAt(0) + '.')
//     } else {
//         return split_names[0]
//     }
// }

// console.log(abbrev_name())



// function Upper() {
//     let a = 'the quick brown fox'

//     return a.charAt(0).toUpperCase() + a.slice(1);
// }
// console.log(Upper())



// function humanize() {
//     let num = prompt()

//     if (typeof(num) == 'undefined') {
//         return num
//     } else if (num % 100 >= 11 && num % 100 <= 13) {
//         return num + 'th'
//     } else  {
//         switch (num % 10) {
//             case 1:
//                 return num + 'st'
//             case 2:
//                 return num + 'nd'
//             case 3:
//                 return num + 'rd'

//             default:
//                 return num + 'th'
//         }
//     }
// }
// console.log(humanize())




// function text_truncate() {
//     let str = prompt('str: ')
//     let length = prompt('length: ')
//     let ending = prompt('ending: ')

//     if (length == null) {
//         length = 100
//     } else if (ending == null) {
//         ending = '...'
//     } else if (str.length > length) {
//         return str.substring(0, length - ending.length) + ending
//     } else {
//         return str
//     }
// }

// console.log(text_truncate())

// function IndexOf() {
//     let str = 'Welcome to w3resource.com';
//     let count = 0;
//     let pos = str.indexOf('w3resource.com');

//     while (pos !== -1) {
//         count++;
//         pos = str.indexOf('w3resource.com', pos + 1);
//     }
//     return count

// }

// console.log(IndexOf());



// function alphabetize() {
//     let str = 'webmaster'

//     return str.split('').sort().join('');

// }
// console.log(alphabetize())


// function remove_first_occurrence(str, searchstr)       {
// 	let index = str.indexOf(searchstr);
// 	if (index === -1) {
// 		return str;
// 	}
// 	return str.slice(0, index) + str.slice(index + searchstr.length);
// }
// console.log(remove_first_occurrence("The quick brown fox jumps over the lazy dog",'the'));