// Chapter 2

// 2.1 / 1
// let sent = +prompt('Enter centimeter:')
// if (sent <= 100) {
//     alert('Meter won\'t work here')
// } else {
//     alert(`Meters to centimeters: ${sent / 100}`)
// }

// 2.2 / 2
// let kg = +prompt('Enter kg:')
// if (kg <= 100) {
//     alert('Centner won\'t work here')
// } else {
//     alert(`Centner to kg: ${kg / 100}`)
// }

// 2.3 / 3
// let kilog = +prompt('Enter kg:')
// if (kilog <= 1000) {
//     alert('Tone won\'t work here')
// } else {
//     alert(`Tone to kg: ${kilog / 1000}`)
// }

// 2.4 / 4
// let metr = +prompt('Enter centimeter:')
// if (metr <= 1000) {
//     alert('Kilometer won\'t work here')
// } else {
//     alert(`Kilometers to centimeters: ${metr / 1000}`)
// }

// 2.5 / 5
// let days = 234 
// console.log(`${Math.floor(days / 7)} 33 weeks have passed since some point`);

// 2.6 / 6
// let day = +prompt('Enter day:');
// let milisecInday = day
// console.log(secInday);

// let hourInday = secInday / (1000 * 60 * 60)
// console.log(`Hour: ${Math.floor(hourInday)}`);

// let secInhour = hourInday * 60 
// let minInhour = secInhour / (1000 * 60)
// console.log(secInhour / (1000 * 60));

// let seconds = secInday / (1000 * 60 * 60);

// console.log(`в) ${seconds} секунд`);

// 2.7 / 7
// let w = 543; 
// let h = 130; 
// let square = 130; 
// let cutSquare = Math.floor(w / square) * Math.floor(h / square);

// console.log(`You can cut ${cutSquare} squares with a side of ${square} mm.`);

// 2.8 / 8
// a) Понедельник
// let d1_a = 1;
// let k_a = +prompt('Enter k num: ')
// let n_a = (d1_a + (k_a - 1)) % 7 || 7;
// alert(`Monday: ${n_a}`);

// б) Вторник 
// let d1_b = 2;
// let k_b = +prompt('Enter k num: ')
// let n_b = (d1_b + (k_b - 1)) % 7 || 7;
// alert(`Tuesday: ${n_b}`);

// в) Среда
// let d1_v = 3; 
// let k_v = +prompt('Enter k num: ')
// let n_v = (d1_v + (k_v - 1)) % 7 || 7;
// alert(`Wendesday: ${n_v}`);

// 2.9 / 9
// let month = prompt('Enter month:');
// let day = 2;
// let x = month * 30 + day;
// let months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
// ];

// let monthIndex = Math.floor(x / 30) % 12;
// let monthNum = monthIndex + 1;

// console.log("Month Name:", months[monthIndex]);
// console.log("Month Number:", monthNum);

// 2.10 / 10
// let twoDigitNumber = +prompt('Enter a two-digit number:')
// if (twoDigitNumber >= 10 && twoDigitNumber <= 100) {
//     alert(`
//     The number of tens: ${Math.floor(twoDigitNumber / 10)}
//     The number of units: ${twoDigitNumber / 1}
//     The sum of numbers: ${Math.floor(twoDigitNumber / 10) + twoDigitNumber % 10}
//     The product of numbers: ${Math.floor(twoDigitNumber / 10) * twoDigitNumber % 10}
//     `)
// } else {
//     alert('Please enter a two-digit number')
// }

// 2.11 / 11
// let num = prompt('Enter a two-digit number:')
// if (num >= 10 && num <= 100) {
//     alert(`Swap number: ${num % 10 * 10 + Math.floor(num / 10) }`)
// } else {
//     alert('Please enter a two-digit number')
// }

// 2.12 / 12
// let threeDigitNumber = prompt('Enter a three digit number:')
// if (threeDigitNumber >= 100 && threeDigitNumber <= 999) {
//     alert(`
//     The number of units: ${threeDigitNumber / 1}
//     The number of tens: ${Math.floor(threeDigitNumber / 10)} 
//     The sum of numbers: ${Math.floor(threeDigitNumber / 100) + Math.floor((threeDigitNumber % 100) / 10) + Math.floor(threeDigitNumber % 10)}
//     The product of numbers: ${Math.floor(threeDigitNumber / 100) * Math.floor((threeDigitNumber % 100) / 10) * Math.floor(threeDigitNumber % 10)}
//     `)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.13 / 13
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`Swap number: ${(Math.floor(num % 10) * 100) + (Math.floor((num % 100) / 10) * 10) + (Math.floor(num / 100))}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.14 / 14
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`Result: ${num % 100 * 10 + Math.floor(num / 100)}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.15 / 15
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`Result: ${num % 10 * 100 + Math.floor(num / 10)}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.16 / 16
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`Result: ${Math.floor((num % 100) / 10) * 100 + Math.floor(num / 100) * 10 + num % 10}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.17 / 17
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`Result: ${Math.floor(num / 100) * 100 + num % 10 * 10 + Math.floor((num % 100) / 10)}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.18 / 18
// let number = prompt('Enter a three digit number:');
// let num1 = Math.floor(number / 100);
// let num2 = Math.floor((number % 100) / 10);
// let num3 = number % 10;
// if (number >= 100 && number <= 999) {
//     alert(`
//     1: ${num1 * 100 + num2 * 10 + num3}
//     2: ${num1 * 100 + num3 * 10 + num2}
//     3: ${num2 * 100 + num1 * 10 + num3}
//     4: ${num2 * 100 + num3 * 10 + num1}
//     5: ${num3 * 100 + num1 * 10 + num2}
//     6: ${num3 * 100 + num2 * 10 + num1}
//     `)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.19 / 19
// let num = +prompt('Enter a three digit number:')
// if (num >= 100 && num <= 999) {
//     alert(`The sum of numbers: ${Math.floor(threeDigitNumber / 100) + Math.floor((threeDigitNumber % 100) / 10) + Math.floor(threeDigitNumber % 10)}`)
//     alert(`The product of numbers: ${Math.floor(threeDigitNumber / 100) * Math.floor((threeDigitNumber % 100) / 10) * Math.floor(threeDigitNumber % 10)}`)
// } else {
//     alert('Please enter a three digit number')
// }

// 2.20 / 20
// let fourDigitNumber = +prompt('Enter a four digit number:');
// if (fourDigitNumber > 1000 && fourDigitNumber < 9999) {
// let reverseNum = parseInt(String(fourDigitNumber).split('').reverse().join(''));
// let swapNum1 = parseInt(String(fourDigitNumber)[1] + String(fourDigitNumber)[0] + String(fourDigitNumber)[3] + String(fourDigitNumber)[2]);
// let swapNum2 = parseInt(String(fourDigitNumber)[0] + String(fourDigitNumber)[2] + String(fourDigitNumber)[1] + String(fourDigitNumber)[3]);
// let swapNum4 = parseInt(String(fourDigitNumber)[2] + String(fourDigitNumber)[3] + String(fourDigitNumber)[0] + String(fourDigitNumber)[1]);
// alert(`
// Original number: ${fourDigitNumber}
// Number obtained by reading digits from right to left: ${reverseNum}
// Number formed by swapping the first and second, third and fourth digits: ${swapNum1}
// Number formed by swapping the second and third digits: ${swapNum2}
// Number formed by swapping the first two and last two digits: ${swapNum4}
// `)
// } else {
//     alert('Please enter a four digit number')
// }

// 2.21 / 21
// let n = prompt('Enter a natural number:')
// if (n > 9) {
//     alert(`
//     Number of units: ${n / 1}
//     Number of tens: ${Math.floor(n / 10)}
//     `);
// } else {
//     alert('Please enter a natural number')
// }

// 2.22 / 22
// let n = prompt('Enter a natural number:')
// if (n > 99) {
//     alert(`
//     Number of tens: ${Math.floor(n / 10)}
//     Number of hundreds: ${Math.floor(n / 100)}
//     `);
// } else {
//     alert('Please enter a natural number')
// }

// 2.23 / 23
// let n = prompt('Enter a natural number:')
// if (n > 999) {
//     alert(`
//     Number of hundreds: ${Math.floor(n / 100)}
//     Number of thousands: ${Math.floor(n / 1000)}
//     `);
// } else {
//     alert('Please enter a natural number')
// }

// 2.24 / 24
// let x;
// let a = 2; 
// let twoNum = (237 - a) / 10; 
// let b = Math.floor(twoNum / 10);
// let c = twoNum % 10;

// x = 100 * a + 10 * b + c;

// console.log("Исходное число x:", x);

// 2.25 / 25
// let n = +prompt("Enter number n:");

// if (n >= 10 && n <= 999 && Math.floor(n / 10) % 10 !== 0) {
//     alert(`Number x: ${(n % 10) * 100 + Math.floor(n / 10)}`);
// } else {
//     alert("Number n does not fit the conditions");
// }

// 2.26 / 26
// let x;
// let a = 5;
// let twoNum = 64;
// let b = Math.floor(twoNum / 10);
// let c = twoNum % 10;

// x = 100 * a + 10 * b + c;

// console.log(`Number x: ${x}`);


// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]
// iaArr = []
// for (let c of countries) {
//     if (c.includes('ia')) {
//         iaArr.push(c);
//     }
// }
// let word = ''
// let maxLen = 0
// console.log(iaArr);
// for (let a of iaArr) {
//     if (a.length > maxLen) {
//         maxLen = a.length
//         word = a
//     }
// }
// console.log(word);









// Test-function
// 1
// function tripleSum(num1, num2) {
//     return (num1 + num2) * 3 
// }
// console.log(tripleSum(5,5));

// 2
// function fullName(firstName, lastName) {
//     return `Hello, ${lastName} ${firstName}.`
// }
// console.log(fullName('Aziz', 'Uskembaev'));

// 3
// const sumArray = (arr) => {
//     let sumEven = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 == 0) {
//             sumEven += arr[i];
//         }
//     }
//     return sumEven;
// }
// let numbers = [1, 2, 3, 4]
// console.log(sumArray(numbers));

// 4
// const arrayStartN = function(array) {
//     let arrayN = []
//     for (let i = 0; i < array.length; i++) {
//         if (array[i][0] == 'H') {
//             arrayN.push(array[i])
//         }
//     }
//     return arrayN
// }
// let str = ['Hero', 'Gerscvcv', 'Heros', 'Frevacew', 'Hergnr']
// console.log(arrayStartN(str));

// 5
// let trueOrFalse = function(arrBoolean) {
//     for (let i = 0; i < arrBoolean.length; i++) {
//         if (arrBoolean[i] == true) {
//             arrBoolean[i] = 1
//         } else if (arrBoolean[i] == false) {
//             arrBoolean[i] = 0
//         } else {
//             'Enter boolean data type'
//         }
//     }
//     return arrBoolean
// }
// let typeBoo = [true, false,false,true,true,false]
// console.log(trueOrFalse(typeBoo));

// 6
// const nameAndCountry = (firstName, country) => {
//     if (country ==  undefined) {
//         country = 'Kazakhstan'
//     }
//     return `Hello! I'm ${firstName} and i live in ${country}.`
// }
// console.log(nameAndCountry('Aziz', 'Astana'));

// 7
// function joinStringSpace(...args) {
//     return args.join(' ');
// }
// console.log(joinStringSpace("Hello", "world", "how", "are", "you"));


// Test Functions

// 1
// const info = function(firstName, lastName, birthYear) {
//     let age = 2024 - birthYear
//     return `Hello, I'm ${firstName} ${lastName} and ${age} years old.`;
// }
// console.log(info('Aziz', 'Uskembaev', 2007))

// 2
// function sumFourModule(nums) {
//     let sum = 0
//     for (let num of nums) {
//         if (num % 4 == 0) {
//             sum += num
//         }
//     }
//     return sum;
// }
// let number = [2, 3, 4, 5, 6, 8, 9, 12]
// console.log(sumFourModule(number))

// 3
// const fahrenheitOrCelsius = function(degree, measurement = 'Celsius') {
//     if (measurement == undefined) {
//         measurement = 'Celsius'
//     }
//     return `It is ${degree} degrees hot in ${measurement}`
// }
// console.log(fahrenheitOrCelsius(23))

// 4
// function numbers(...nums) {
//     let num = nums.join('#') + '?'
//     return num
// }
// console.log(numbers(1,2,3,4,5))



// Test of all

// 1
function sum(num1, num2) {
    sum = 0
    for (let i = num1; i <= num2; i++) {
        sum += i
    }
    return sum
}
console.log(sum(5, 6));

2
function onlyLands(...args) {
    let arrLands = [];
    for (let i of args) {
        if (i.endsWith('land')) {
            arrLands.push(i);
        }
    }
    return arrLands;
}
console.log(onlyLands("Island", "Italy", "Kazakhstan", "England", 'USA', 'Finland'));

3
const makeUser = (firstName, lastName, birthYear) => {
    let currentYear = new Date().getFullYear()
    let age = currentYear - birthYear
    let user = {
        firstname: firstName, lastname: lastName, age: age,
        greeting: function () {
            return `Hello, ${this.firstname} ${this.lastname}!`
        }
    }
    return user
}

const user1 = makeUser('Aziz', 'Uskembaev', 2007);
console.log(user1.firstname);
console.log(user1.lastname);
console.log(user1.age);
console.log(user1.greeting());

4
function getAges(users) {
    let currentYear = new Date().getFullYear();
    return users.map(user2 => currentYear - user2.yearOfBirth);
}
let users = [{ name: "Jack", yearOfBirth: 2000 }, { name: "Jack", yearOfBirth: 2000 }, { name: "Alice", yearOfBirth: 2003 }, { name: "Bob", yearOfBirth: 2005 }]
console.log(getAges(users));

5.1
function getTotalPopulation(arr) {
    let sum = 0
    arr.forEach(city => sum += city.population);
    return sum
}

5.2
function getTotalPopulation(arr) {
    return arr.reduce((acc, curr) => { return acc += curr.population }, 0);
}
let cities = [{ CityName: "Astana", population: 1200 }, { CityName: "Almaty", population: 2200 }, { CityName: "Shymkent", population: 1100 }]
console.log(getTotalPopulation(cities));

6
function getHighGrades(arr) {
    return arr.filter(student => student.score >= 50)
}
const studentScores = [{ id: 14, name: "John", score: 50 }, { id: 7, name: "Peter", score: 70 }, { id: 23, name: "Mary", score: 30 }]
console.log(getHighGrades(studentScores))

7
function getStudentState(arr, id) {
    let userId = arr.find(user => user.id === id);
    if (userId) {
        const averageScore = arr.reduce((acc, curr) => acc + curr.score, 0) / arr.length;
        const diffScore = userId.score - averageScore;
        return { name: userId.name, score: userId.score, difference: diffScore };
    } else {
        return 'ID not found';
    }
}
// const studentScores = [{ id: 14, name: "John", score: 50 }, { id: 7, name: "Peter", score: 70 }, { id: 23, name: "Mary", score: 30 }]
console.log(getStudentState(studentScores, 23)) // {name: "Peter", score: 70, difference: -20};





























































