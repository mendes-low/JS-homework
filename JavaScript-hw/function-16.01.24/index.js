// Level 1

// 1.1
// let fullName = (firstName, lastName) => `${firstName} ${lastName}`
// console.log(fullName('Aziz', 'Uskembaev'))

// 1.2
// function fullName() {
//     console.log('Aziz Uskembaev');
// }
// fullName();

// 2
// function fullName(firstName, lastName) {
//     console.log(`${firstName} ${lastName}`);
// }
// fullName('Aziz','Uskembaev');

// 3
// function addNumbers(num1, num2) {
//     console.log(num1 + num2);    
// }
// addNumbers(200, 100)

// 4
// function areaOfRectangle(length, width) {
//     let area = length * width
//     console.log(area);
// }
// areaOfRectangle(100,5)

// 5
// function perimeterOfRectangle(length, width) {
//     let perimeter = (length + width) * 2;
//     console.log(perimeter);
// }
// perimeterOfRectangle(10,10);

// 6
// function volumeOfRectPrism (length, width, height) {
//     let volume = length * width * height;
//     console.log(volume);
// }
// volumeOfRectPrism(10,10,10);

// 7
// function areaOfCircle(r) {
//     let area = Math.PI * r * r; 
//     console.log(Math.round(area));
// }
// areaOfCircle(10,20)

// 8
// function circumOfCircle(r) {
//     let circum = 2 * Math.PI * r
//     console.log(Math.round(circum));
// }
// circumOfCircle(10)

// 9
// function density(m,v) {
//     let dens = m / v
//     console.log(dens);
// }
// density(20,10)

// 10
// function calculateSpeed(distance, time) {
//     if (time === 0) {
//         console.log("Error");
//     }
//     let speed = distance / time;
//     console.log(speed);
// }
// calculateSpeed(300, 30);

// 11
// function  calculatesWeight(height) {
//     let weight = height * 9.8;
//     console.log(weight);
// }
// calculatesWeight(10)

// 12
// function ConvertCelsiusToFahrenheit(celsius) {
//     let fahrenheit = (celsius * 9/5) + 32
//     console.log(fahrenheit); 
// } 
// ConvertCelsiusToFahrenheit(32)

// 13
// function calculatesBMI(weight, height) {
//     let bmi = weight / (height * height);
//     return(`You are BMI: ${Math.round(bmi)}`);
//     if (bmi <= 18.5) {
//         console.log('You are underweight');
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//         console.log('You are normal weight');
//     } else if (bmi >= 25 && bmi <= 29.9) {
//         console.log('You are overweight');
//     } else if (bmi > 30) {
//         console.log('You are obese');
//     } else {
//         console.log('Error');
//     }
// }
// calculatesBMI(100,2.10);

// 14
// function checkSeason(season) {
//     let seasonLower = season.toLowerCase()
//     if (seasonLower == 'september' || seasonLower == 'october' || seasonLower == 'november') {
//         return('The season is Autumn');
//     } else if (seasonLower == 'december' || seasonLower == 'january' || seasonLower == 'february') {
//         return('The season is Winter');
//     } else if (seasonLower == 'march' || seasonLower == 'april' || seasonLower == 'may') {
//         return('The season is Spring');
//     } else if (seasonLower == 'june' || seasonLower == 'july' || seasonLower == 'august') {
//         return('The season is Summer');
//     } else {
//         return('Error');
//     }
// }
// checkSeason('MAY')

// 15
// function findMax(num1, num2, num3) {
//     let maxNumber = 0
//     let zeroLen = 0
//     let arrMax = [maxNumber, num1, num2, num3]
//     for (let i = 1; i <= arrMax.length; i++) {
//         if (arrMax[i] > zeroLen) {
//             zeroLen = arrMax[i];
//             maxNumber = arrMax[i]
//         }
//     }
//     return maxNumber;
// } 
// console.log(findMax(-10,5,-40));

// Level 2

// 1
// function solveLinEquation(a, b, c, x, y) {
//     let result = a * x + b * y + c;
//     return result;
// }
// console.log(solveLinEquation(1, 1, 0, 0, 0, 1))

// 2
// function solveQuadEquation(a, b, c) {
//     let dics = b ** 2 - 4 * a * c
//     if (dics > 0) {
//         let x1 = (-b + Math.sqrt(dics)) / (2 * a);
//         let x2 = (-b - Math.sqrt(dics)) / (2 * a);
//         return `{${x1}, ${x2}}`;
//     } else if (dics == 0) {
//         let x = -b / (2 * a);
//         return `{${x}}`;
//     } else {
//         return 0;
//     }
// }
// console.log(solveQuadEquation(1, 7, 12));

// 3
// function printArray(arr) {
//     for (let i of arr) {
//         console.log(i);
//     }
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// printArray(numbers);

// 4.1
// function showDateTime() {
//     let date = new Date(2020, 8, 1, 4, 8);
//     return `0${date.getMonth()}/0${date.getDate()}/${date.getFullYear()} 0${date.getHours()}:0${date.getMinutes()}`;
// }
// console.log(showDateTime());

// 4.2
// function showDateTime() {
//     let currentDate = new Date(2020, 8, 1, 4, 8);
//     let year = currentDate.getFullYear();
//     let month = (currentDate.getMonth()).toString().padStart(2, '0');
//     let day = currentDate.getDate().toString().padStart(2, '0');
//     let hours = currentDate.getHours().toString().padStart(2, '0');
//     let minutes = currentDate.getMinutes().toString().padStart(2, '0');
//     let formattedDateTime = `${day}/${month}/${year} ${hours}:${minutes}`;
//     console.log(formattedDateTime);
// }
// showDateTime();

// 5
// function swapValues(x, y) {
//     let z = x;
//     x = y;
//     y = z;
//     console.log(`After swapping: x = ${x}, y = ${y}`);
// }
// console.log(`Before swapping: x = ${5}, y = ${10}`);
// swapValues(5, 10);

// 6
// function reverseArray(arr) {
//     let revArr = []
//     for (let i = arr.length - 1; i > 0; i--) {
//         revArr.push(arr[i])
//     }
//     return revArr
// }
// let numbers = [1, 3, 4, 56, 7, 7, 67]
// console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// 7
// function  capitalizeArray(arrUpper) {
//     for (let i = 0; i < arrUpper.length; i++) {
//         arrUpper[i] = arrUpper[i].toUpperCase()
//     }
//     return arrUpper
// }
// let friuts = ['apple', 'mango', 'banana']
// console.log(capitalizeArray(friuts));

// 8
// function addItem(...parem) {
//     let emptyArr = []
//     for (let i = 0; i < parem.length; i++) {
//         emptyArr.push(parem[i])
//     }
//     return emptyArr
// }
// console.log(addItem(23,43,54));
// console.log(addItem(34));

// 9
// function RemoveItem(itemArr, itemIndex) {
//     for (let i = 0; i <= itemArr.length - 1; i++) {
//         if (i == itemIndex) {
//             itemArr.splice(i, 1)
//         }
//     }
//     return itemArr
// }
// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(RemoveItem(numbers, 5));

// 10
// function sumOfNumbers(nums) {
//     let sum = 0
//     for (let num = 0; num <= nums; num++) {
//         sum += num
//     }
//     return sum
// }
// console.log(sumOfNumbers(5));

// 11
// function sumOfOdds(...nums) {
//     let sumOdds = 0
//     for (let num of nums) {
//         if (num % 2 == 1) {
//             sumOdds += num
//         }
//     }
//     return sumOdds
// }
// console.log(sumOfOdds(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 12
// function evens(...nums) {
//     let sumEvens = 0
//     for (let num of nums) {
//         if (num % 2 == 0) {
//             sumEvens += num
//         }
//     }
//     return sumEvens
// }
// console.log(evens(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// 13
// function EvensAndOdds(num) {
//     let arrOdds = []
//     let arrEvens = []
//     if (num > 0) {
//         for (let i = 1; i <= num; i++) {
//             if (i % 2 == 1) {
//                 arrOdds.push(i)
//             } else {
//                 arrEvens.push(i)
//             }
//         }
//     } else {
//         return 'Enter a positive number'
//     }
//     return `
//     The number of odds are ${arrOdds.length} 
//     The number of evens are ${arrEvens.length}
//     `;
// }
// console.log(EvensAndOdds(10));

// 14
// function sum(...nums) {
//     let sumNums = 0
//     for (let num of nums) {
//         sumNums += num
//     }
//     return sumNums
// }
// console.log(sum(20, 30, 50, 100));

// 15
// function randomUserIp() {
//     let ipAddress1 = Math.ceil(Math.random() * 255);
//     let ipAddress2 = Math.ceil(Math.random() * 255);
//     let ipAddress3 = Math.ceil(Math.random() * 255);
//     let ipAddress4 = Math.ceil(Math.random() * 255);
//     return `${ipAddress1}.${ipAddress2}.${ipAddress3}.${ipAddress4}`
// }
// console.log(randomUserIp());

// 16
// function generateRandomMacAddress() {
//     let macBytes = [];
//     for (let i = 0; i < 6; i++) {
//         let randomByte = Math.floor(Math.random() * 256);
//         let hexByte = randomByte.toString(16);
//         macBytes.push(hexByte);
//     }
//     let macAddress = macBytes.join(':').toUpperCase();
//     return macAddress;
// }
// const randomMac = generateRandomMacAddress();
// console.log("Random MAC Address:", randomMac);

// 17
// function randomHexaNumberGenerator() {
//     let hexNumbers = "abcdef0123456789";
//     let randomHEX = ''
//     for (let i = 1; i <= 6; i++) {
//         let randomIndex = Math.ceil(Math.random() * hexNumbers.length) + -1 
//         randomHEX += hexNumbers.charAt(randomIndex)
//     }
//     return `#${randomHEX}`
// }
// console.log(randomHexaNumberGenerator());

// 18
// function userIdGenerator() {
//     let chars = 'abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ0123456789'
//     let randomId = ''
//     for (let i = 1; i <= 7; i++) {
//         let randomChar = Math.ceil(Math.random() * chars.length) + -1
//         randomId += chars.charAt(randomChar)
//     }
//     return randomId
// }
// console.log(userIdGenerator());


// Level 3

// 1







































