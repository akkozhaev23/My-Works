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