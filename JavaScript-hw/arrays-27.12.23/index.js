// level 1

// 1
// let emptyArr = []

// 2
// let number = [1, 2, 3, 4, 5, 6, 7, 8]

// 3
// console.log();(number.length)

// 4
// console.log();(number[0])
// console.log();(number[Math.floor(number.length / 2)])
// console.log(number[number.length - 1])

// 5
// let mixDataTypes = [
//     20, 
//     true,
//     'Data',
//     arrNum = [1, 2, 3, 4, 5],
//     10.5,
//     'Types'
// ]

// 6
// let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7
// console.log(itCompanies);

// 8
// console.log(itCompanies.length);

// 9
// console.log(`
// ${itCompanies[0]}
// ${itCompanies[itCompanies.length / 2]}
// ${itCompanies[itCompanies.length - 1]}
// `);

// 10
// console.log(`
// ${itCompanies[0]}
// ${itCompanies[1]}
// ${itCompanies[2]}
// ${itCompanies[3]}
// ${itCompanies[4]}
// ${itCompanies[5]}
// ${itCompanies[6]}
// `);

// 11
// itCompanies[0] = itCompanies[0].toUpperCase
// itCompanies[1] = itCompanies[1].toUpperCase
// itCompanies[2] = itCompanies[2].toUpperCase
// itCompanies[3] = itCompanies[3].toUpperCase
// itCompanies[4] = itCompanies[4].toUpperCase
// itCompanies[5] = itCompanies[5].toUpperCase
// itCompanies[6] = itCompanies[6].toUpperCase

// console.log(itCompanies);

// 12
// itCompanies = itCompanies.toString()
// console.log(`${itCompanies} are big IT companies.`);

// 13
// let answer = prompt('Enter an IT company:')
 
// if (itCompanies.includes(answer)) {
//     alert(itCompanies)
// } else {
//     alert(answer)
// }

// 14
// ?

// 15
// console.log(itCompanies);
// console.log(itCompanies.sort());

// 16
// console.log(itCompanies.reverse());

// 17
// console.log(itCompanies);
// console.log(itCompanies.slice(0,3));

// 18
// console.log(itCompanies);
// console.log(itCompanies.slice(4,7));

// 19
// console.log(itCompanies);
// console.log(itCompanies[Math.floor(itCompanies.length / 2)].split());

// 20
// itCompanies.shift()
// console.log(itCompanies);

// 21
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let middle = Math.floor(itCompanies.length / 2)
itCompanies.splice(middle);
console.log(itCompanies);

// 22
// itCompanies.pop()
// console.log(itCompanies);

// 23
// console.log(itCompanies.splice());




// const numbers1 = [1, 2, 3, 4, 5]
// numbers1.splice()
// console.log('1: ' + numbers1)                // -> remove all items

// const numbers2 = [1, 2, 3, 4, 5]
// numbers2.splice(0,1)
// console.log('2: ' + numbers2)            // remove the first item

// const numbers3 = [1, 2, 3, 4, 5, 6]
// numbers3.splice(3, 2, 7, 8, 9)
// console.log('3.1: ' + numbers3);
// console.log('3.2: ' + numbers3.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
