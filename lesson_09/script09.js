function spinWords(string) {
    let arr = []
  
    arr.push(string.split(' '))
  
    let result = arr[0].map(function(i) {
  
      if (i.length > 5) {
        return i.split('').reverse().join('')
      } else {
        return i
      }
    })
    
    console.log(result.join(' '))
  }
  
spinWords('hello fellow warriors')
  

function loveFunc(flower1, flower2) {
    return flower1 %2 !== flower2 %2 ? true : false;
}

console.log(loveFunc(1,2))
console.log(loveFunc(1,3))
console.log(loveFunc(2,3))
console.log(loveFunc(2,4))


function spinWords(string) {
    return string.split(' ').map(function(i) {
    return i.length > 5 ? i.split('').reverse().join('') : i;
    //   if (i.length > 5) {
    //     return i.split('').reverse().join('')
    //   } else {
    //     return i
    //   }
    })

    .join(' ')

  }
  
console.log(spinWords('hello fellow warriors'))