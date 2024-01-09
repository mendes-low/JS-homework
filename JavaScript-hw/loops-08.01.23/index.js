// Level 1
// 1
// For:
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// While:
// let i = 0
// while (i <= 10) {
//     console.log(i);
//     i++
// }

// Do...while:
// let i = 0
// do {
//   console.log(i)
//   i++
// }
// while (i <= 10)

// 2
// For:
// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// While:
// let i = 10
// while (i >= 0) {
//     console.log(i);
//     i--
// }

// Do...while:
// let i = 10
// do {
//   console.log(i)
//   i--
// }
// while (i >= 0)

// 3
// let n = +prompt('Enter a number:')
// for (let i = 0; i <= n; i++) {
//     console.log(i);
// }

// 4
// let s = ''
// for (let i = 1; i <= 7; i++) {
//     s += '#'
//     console.log(s);
// }

// 5
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i} x ${i} = ${i * i}`);
// }

// 6
// console.log("i    i^2   i^3");
// for (let i = 0; i <= 10; i++) {
//     console.log(`${i}    ${i ** 2}     ${i ** 3}`);
// }

// 7
// for (let i = 0; i <= 100; i += 2) {
//     console.log(i);
// }

// 8
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         console.log(i);
//     }
// }

// 9
// for (let i = 2; i <= 100; i++) {
//     let prime = true
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             prime = false;
//             break;
//         }
//     }
//     if (prime === true) {
//         console.log(i);
//     }
// }

// 10
// let sum = 0
// for (i = 0; i <= 100; i++) {
//     sum += i;
// }
// console.log(sum);

// 11
// let sumOdd = 0
// let sumEven = 0
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         sumOdd += i
//     } else {
//         sumEven += i
//     }
// }
// console.log('Sum even numbers:' + sumEven);
// console.log('Sum odd numbers:' + sumOdd);

// 12
// let sumOdd = 0
// let sumEven = 0
// let arrNumbers = []
// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 1) {
//         sumOdd += i
//     } else {
//         sumEven += i
//     }
// }
// arrNumbers.push(sumEven, sumOdd)
// console.log(arrNumbers)

// 13
// let randomNum 
// let randomNumbers = []
// for (i = 1; i <= 5; i++) {
//     randomNum = Math.ceil(Math.random() * 100)
//     randomNumbers.push(randomNum)
// }
// console.log('5 random numbers: ' + randomNumbers);

// 14
// let randomNum 
// let randomNumbers = []
// for (i = 1; i <= 5; i++) {
//     randomNum = Math.ceil(Math.random() * 100)
//     randomNumbers.push(randomNum)
// }
// console.log('5 random numbers: ' + randomNumbers);

// 15 
// let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
// let randomId = ''
// for (let i = 0; i <= 6; i++) {
//   let randomIndex = Math.ceil(Math.random() * characters.length);
//   randomId += characters.charAt(randomIndex);
// }
// console.log('Six characters random id: ' + randomId);

// Level 2

// 1
// let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let randomId = ''
// for (let i = 0; i <= 12; i++) {
//   let randomIndex = Math.ceil(Math.random() * characters.length);
//   randomId += characters.charAt(randomIndex);
// }
// console.log('Number of characters random id: ' + randomId);

// 2
// let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let randomId = ''
// for (let i = 0; i <= 24; i++) {
//   let randomIndex = Math.ceil(Math.random() * characters.length);
//   randomId += characters.charAt(randomIndex);
// }
// console.log('Number of characters random id: ' + randomId);

// 3
// let characters = 'abcdef0123456789';
// let randomId = ''
// for (let i = 1; i <= 6; i++) {
//   let randomIndex = Math.ceil(Math.random() * characters.length);
//   randomId += characters.charAt(randomIndex);
// }
// console.log(`Random hexadecimal number: ${'#' + randomId}`);

// 4
let randomNumber = ''
let randomRGB
let randomRGB2
let randomRGB3
for (let i = 1; i <= 3; i++) {
    randomRGB = Math.ceil(Math.random() * 255);
    randomRGB2 = Math.ceil(Math.random() * 255);
    randomRGB3 = Math.ceil(Math.random() * 255);
}
console.log(`rgb(${randomRGB},${randomRGB2},${randomRGB3})`);
console.log(randomRGB);





