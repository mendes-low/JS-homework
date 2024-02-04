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
// console.log(solveLinEquation(1, 1, 0, 0, 0, 1));

// 2
// function solveQuadEquation(a, b, c) {
//     let dics = b ** 2 - 4 * a * c;
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
// console.log(RemoveItem(numbers, 2));

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

// 13.1
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

// 13.2
// let EvensAndOdds = (num) => {
//     let sumOdds = 0
//     let sumEvens = 0
//     if (num > 0) {
//         for (let i = 0; i <= num; i++) {
//             if (i % 2 == 1) {
//                 sumOdds += 1
//             } else {
//                 sumEvens += 1
//             }
//         }
//     } else {
//         return 'Enter a positive number'
//     }
//     return `
//     The number of odds are ${sumOdds}
//     The number of evens are ${sumEvens}
//     `;
// }
// console.log(EvensAndOdds(100));

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
//     let macChar = "ABCDEF0123456789";
//     for (let i = 0; i < 6; i++) {
//         let 
//         let randomByte = Math.ceil(Math.random() * );
//         // let hexByte = randomByte.toString(16);
//         macBytes.push(hex);
//     }
//     let macAddress = macBytes.join(':');
//     return macAddress;
// }
// console.log(generateRandomMacAddress());

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
// let userIdGeneratedByUser = function() {
//     let id = +prompt('Enter the number of identifiers: ')
//     let character = +prompt('Enter the number of characters: ')
//     let chars = '0123456789abcdefghijklmopqrstuvwxyzABCDEFGHIJKLMOPQRSTUVWXYZ'
//     let randomUserId = ''
//     for (let i = 0; i < id; i++) {
//         let randomId = ''
//         for (let j = 0; j < character; j++) {
//             let randomChar = Math.ceil(Math.random() * chars.length) 
//             randomId += chars.charAt(randomChar);
//         }
//         randomUserId += `${randomId}\n`;
//     }
//     return `'${randomUserId}'`;
// }
// console.log(userIdGeneratedByUser());

// 2
// const rgbColorGenerator = () => {
//     let randomRGB1 = Math.ceil(Math.random() * 255)
//     let randomRGB2 = Math.ceil(Math.random() * 255)
//     let randomRGB3 = Math.ceil(Math.random() * 255)
//     return `rgb(${randomRGB1},${randomRGB2},${randomRGB3})`
// }
// console.log(rgbColorGenerator());

// 3
// const arrayOfHexaColors = function () {
//     let chars = '0123456789abcdef'
//     let arrHex = []
//     let randomNum = Math.ceil(Math.random() * 10);
//     for (let i = 0; i < randomNum; i++) {
//         let randomHex = '#'
//         for (let j = 0; j < 6; j++) {
//             randomHex += chars.charAt(Math.ceil(Math.random() * chars.length));
//         }
//         arrHex.push(randomHex);
//     }
//     return arrHex;
// }
// console.log(arrayOfHexaColors());

// 4
// const arrayOfRgbColors = () => {
//     let randomNum = Math.ceil(Math.random() * 10);
//     let mainRgb = [];
//     for (let i = 0; i < randomNum; i++) {
//         let randomRgb1 = Math.ceil(Math.random() * 255);
//         let randomRgb2 = Math.ceil(Math.random() * 255);
//         let randomRgb3 = Math.ceil(Math.random() * 255);
//         mainRgb.push(`rgb(${randomRgb1},${randomRgb2},${randomRgb3})`);
//     }
//     return mainRgb;
// }
// console.log(arrayOfRgbColors());

// 5-
// const hexToRgb = function() {
//     let randomHex = '#'
//     for (let j = 0; j < 6; j++) {
//         randomHex += chars.charAt(Math.ceil(Math.random() * chars.length));
//     }
//     hex = hex.replace(/^#/, '');
//     let r = parseInt(hex.substring(0, 2), 16);
//     let g = parseInt(hex.substring(2, 4), 16);
//     let b = parseInt(hex.substring(4, 6), 16);
//     return `(${r}, ${g}, ${b})`;
// }
// let hexColorCode = "#1a2b3c";
// let rgbColor = hexToRgb(hexColorCode);
// console.log(`HEX: ${hexColorCode} -> RGB: ${rgbColor}`);

// 7
// const ignoreColors = (type, amount) => {
//     let chars = '0123456789abcdef'
//     let typeLower = type.toLowerCase()
//     let arrRgb = []
//     let arrHex = []
//     if (typeLower == 'rgb') {
//         if (amount == 1) {
//             let randomRgb1 = Math.ceil(Math.random() * 255);
//             let randomRgb2 = Math.ceil(Math.random() * 255);
//             let randomRgb3 = Math.ceil(Math.random() * 255);
//             return `'rgb(${randomRgb1},${randomRgb2},${randomRgb3})'`
//         } else {
//             for (let i = 0; i < amount; i++) {
//                 let randomRgb1 = Math.ceil(Math.random() * 255);
//                 let randomRgb2 = Math.ceil(Math.random() * 255);
//                 let randomRgb3 = Math.ceil(Math.random() * 255);
//                 arrRgb.push(`rgb(${randomRgb1},${randomRgb2},${randomRgb3})`);
//             }
//         }
//         return arrRgb;
//     } else if (typeLower == 'hex') {
//         if (amount == 1) {
//             let randomHexString = '#'
//             for (let i = 0; i < 6; i++) {
//                 randomHexString += chars.charAt(Math.ceil(Math.random() * chars.length));
//             }
//             return `'${randomHexString}'`;
//         } else {
//             for (let i = 0; i < amount; i++) {
//                 let randomHex = '#'
//                 for (let j = 0; j < 6; j++) {
//                     randomHex += chars.charAt(Math.ceil(Math.random() * chars.length));
//                 }
//                 arrHex.push(randomHex);
//             }
//         }
//         return arrHex;
//     } else {
//         return 'Please enter paint types: RGB or HEX';
//     }
// }
// console.log(ignoreColors('rgb', 30));

// 8-
// const shuffleArray = (arr) => {
//     let arrShuff = []
//     for (let i = 0; i < arr.length; i++) {
//         const j = Math.ceil(Math.random() * (arr.length));
//         arrShuff.push(arr)
//     }
//     return arr = arrShuff
// }
// let numbers = [1, 2, 34, 5, 65, 6, 7, 8, 8]
// console.log(shuffleArray(numbers));

// 9
// function numFactorial(num) {
//     let fact = 1;
//     for (let i = 1; i <= num; i++) {
//         fact *= i;
//     }
//     return fact
// }
// console.log(numFactorial(5));

// 10
// function isEmpty(parm) {
//     if (parm.length == 0) {
//         return 'This paremetr is empty'
//     } else {
//         return 'This paremetr is not empty'
//     }
// }
// let numbers = ''
// let number = [1, 2, 3, 4, 5]
// console.log(isEmpty(numbers));

// 11
// const sum = function(...args) {
//     let sum = 0
//     for (let i = 0; i < args.length;i++) {
//         sum += args[i]
//     }
//     return sum
// }
// console.log(sum(1,2,3,4,5,5));

// 12
const sumOfArrayItem = (arr) => {

}



// 13.1
// const average = (arr) => {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i]
//         } else {
//             return 'Please enter only numbers!';
//         }
//     }
//     let result = sum / arr.length
//     return `Average values ​​of elements: ${Math.floor(result)}`
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(average(number));

// 13.2
// const average = function(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             sum += arr[i]
//         } else {
//             return 'Please enter only numbers!';
//         }
//     }
//     let result = sum / arr.length
//     return `Average values ​​of elements: ${Math.floor(result)}`
// }
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(average(number));

// 16
// const checkUniqueItem = (arr) => {
//     let uniqueItem = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (uniqueItem.indexOf(arr[i]) !== -1) {
//             uniqueItem.push(arr[i])
//             return 'This array is unique'
//         }
//     }
//     return `This array is not unique`
// }

// let numbers = [1, 2, 3, 4, 5]
// let numbers2 = [1, 2, 3, 4, 5, 3, 4, 2]
// console.log(checkUniqueItem(numbers));

// 16.1
// const checkUniqueItem = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             if (arr[i] === arr[j]) {
//                 return 'This array is not unique';
//             }
//         }
//     }
//     return 'This array is unique';
// }

// let numbers = [1, 2, 2, 4, 3, 4, 3, 5, 6, 7, 7, 9, 1, 4, 8, 9, 10]
// let num = [1, 2, 3, 4, 5]
// let friuts = ['apple', 'banana', 'mango']
// let friuts2 = ['apple', 'banana', 'mango', 'apple']

// console.log(checkUniqueItem(numbers));
// console.log(checkUniqueItem(num));
// console.log(checkUniqueItem(friuts));
// console.log(checkUniqueItem(friuts2));

// 16.2
// const checkUniqueItem = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if (array[i] === array[j]) {
//                 return 'This array is not unique';
//             }
//         }
//     }
//     return 'This array is unique';
// }

// 17.1
// const checkDataType = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== typeof arr[0]) {
//             return 'All array elements have different data types.';
//         }
//     }
//     return 'All array elements have the same data type.';
// }

// let numbers = [1, 2, '4', 4, 5, 6, 7, 8, 9, 10]
// let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(checkDataType(numbers));
// console.log(checkDataType(number));

// 17.2
// const checkDataType = function() {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] !== typeof arr[0]) {
//             return 'All array elements have different data types.';
//         }
//     }
//     return 'All array elements have the same data type.';
// }

// const uniqueArray = function (arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] != arr[i + 1]) {
//             arr.splice()
//         }
//     }
//     return arr
// }
// let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(uniqueArray(nums));









