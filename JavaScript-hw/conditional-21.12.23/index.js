// level 1

// 1
// let birthYear = prompt('Enter birth year:')
// let year = 2023 - birthYear
// year >= 18
//  ? alert(`You are ${year}. You are old enough to drive`)
//  : alert(`You are ${year}. You will be allowed to drive after ${18 - year} years.`)

// 2
// let myAge = parseInt(prompt('My age:'))
// let yourAge = parseInt(prompt('Your age:'))

// switch (myAge > yourAge) {
//     case true:
//         alert(`I am ${myAge - yourAge} years older than you.`)
//         break
//     default:
//         alert(`You are ${yourAge - myAge} years older than me.`)
// }

// 3
// let a = prompt('Enter A number:')
// let b = prompt('Enter B number:')

// if (a > b) {
//     alert(`${a} is greater than ${b}`)
// } else if (a < b) {
//     alert(`${a} is less than ${b}`)
// } else {
//     alert('Error')
// }

// 4
// let number = prompt('Enter a number:')

// number % 2 == 0
//  ? alert(`${number} is an even number`)
//  : alert(`${number} is an odd number`)
// number % 2 == 0


// Level 2

// 1
// let grade = prompt('Enter your grade:')

// if (grade >= 0 && grade <= 49) {
//     alert('F')
// } else if (grade >= 50 && grade <= 59) {
//     alert('D')
// } else if (grade >= 60 && grade <= 69) {
//     alert('C')
// } else if (grade >= 70 && grade <= 89) {
//     alert('B')
// } else if (grade >= 90 && grade <= 100) {
//     alert('A')
// } else {
//     alert('Error')
// }

// 2
// let season = prompt('Enter a month:')
// let seasonLower = season.toLowerCase()

// if (seasonLower == 'september' || seasonLower == 'october' || seasonLower == 'november') {
//     alert('The season is Autumn')
// } else if (seasonLower == 'december' || seasonLower == 'january' || seasonLower == 'february') {
//     alert('The season is Winter')
// } else if (seasonLower == 'march' || seasonLower == 'april' || seasonLower == 'may') {
//     alert('The season is Spring')
// } else if (seasonLower == 'june' || seasonLower == 'july' || seasonLower == 'august') {
//     alert('The season is Summer')
// } else {
//     alert('Error')
// }

// 3
// function UpperRegistor(dayUpper) {
//     if (dayUpper) {
//         dayUpper = dayUpper[0].toUpperCase() + dayUpper.slice(1)
//     }
//     return dayUpper
// }

// let day = prompt('What day is today ?')
// let dayLower = day.toLowerCase()

// switch (dayLower) {
//   case 'monday':
//     alert(`${UpperRegistor(dayLower)} is a working day`)
//     break
//   case 'tuesday':
//     alert(`${UpperRegistor(dayLower)} is a working day`)
//     break
//   case 'wednesday':
//     alert(`${UpperRegistor(dayLower)} is a working day`)
//     break
//   case 'thursday':
//     alert(`${UpperRegistor(dayLower)} is a working day`)
//     break
//   case 'friday':
//     alert(`${UpperRegistor(dayLower)} is a working day`)
//     break
//   case 'saturday':
//     alert(`${UpperRegistor(dayLower)} is a weekend`)
//     break
//   case 'sunday':
//     alert(`${UpperRegistor(dayLower)} is a weekend`)
//     break
//   default:
//     alert('It is not a week day')
// }

// Level 3 

// 1
// function UpperRegistor(dayUpper) {
//     if (dayUpper) {
//         dayUpper = dayUpper[0].toUpperCase() + dayUpper.slice(1)
//     }
//     return dayUpper
// }

// let month = prompt('Enter a month:')
// let monthLower = month.toLowerCase()

// if (monthLower == 'september' || monthLower == 'november' || monthLower == 'april' || monthLower == 'june') {
//     alert(`${UpperRegistor(monthLower)} has 30 days`)
// } else if (monthLower == 'october' || monthLower == 'december' || monthLower == 'january' || monthLower == 'march' || monthLower == 'may' || monthLower == 'july' || monthLower == 'august') {
//     alert(`${UpperRegistor(monthLower)} has 31 days`)
// } else if (monthLower == 'february') {
//     alert(`${UpperRegistor(monthLower)} has 28 days`)
// } else {
//    alert('It is not a month')
// }

// 2
// function UpperRegistor(dayUpper) {
//     if (dayUpper) {
//         dayUpper = dayUpper[0].toUpperCase() + dayUpper.slice(1)
//     }
//     return dayUpper
// }

// let monthLeap = prompt('Enter a month:')
// let monthLeap_Lower = monthLeap.toLowerCase()

// if (monthLeap_Lower == 'september' || monthLeap_Lower == 'november' || monthLeap_Lower == 'april' || monthLeap_Lower == 'june') {
//     alert(`${UpperRegistor(monthLeap_Lower)} has 30 days`)
// } else if (monthLeap_Lower == 'october' || monthLeap_Lower == 'december' || monthLeap_Lower == 'january' || monthLeap_Lower == 'march' || monthLeap_Lower == 'may' || monthLeap_Lower == 'july' || monthLeap_Lower == 'august') {
//     alert(`${UpperRegistor(monthLeap_Lower)} has 31 days`)
// } else if (monthLeap_Lower == 'february') {
//     alert(`${UpperRegistor(monthLeap_Lower)} has 29 days`)
// } else {
//    alert('It is not a month')
// }

// Bonus Exercise

// Exercise 1

// let j = 11;
// let k = 15;
// let l = 23;
// let m = 17;
// let n = 14;
// let o = 19;
// let p = 13;
// let q = 20;
// let r = 18;
// let s = 10;
// let t = 22;
// let u = 16;
// let v = 21;
// let w = 12;
// let x = 25;
// let y = 27;
// let z = 24;
// let aa = 26;
// let bb = 28;
// let cc = 29;

// let problem_1 = ++j - k++ * ++l + ++n; // -333 
// let problem_2 = ++m + p-- * --o + ++j; // 265
// let problem_3 = ++l - cc++ / ++n + ++m; // 42,1875
// let problem_4 = ++q * p-- - --j + ++l; // 266 
// let problem_5 = ++n / o++ + ++cc * --r; // 527,9444...
// let problem_6 = ++w % p++ - ++j / --l; // 1,48
// let problem_7 = ++p * cc-- / --r + ++k; // 42,1875
// let problem_8 = ++q + w-- % --l + ++m; // 55
// let problem_9 = ++r / l++ - ++p % --w; // -2,291666...
// let problem_10 = ++l + o-- * --cc + ++k; // 595
// let problem_11 = ++w % cc++ + ++q - --t; // 14
// let problem_12 = ++l - o++ / ++m + ++w; // 39,1428
// let problem_13 = ++p * k-- + --j + ++p; // 298
// let problem_14 = ++n / cc++ - ++w % --l; // -13,4
// let problem_15 = ++k + l-- % --w + ++q; // 42
// let problem_16 = ++r * t-- / --o + ++p; // 38
// let problem_17 = ++o % l++ + ++q - --j; // 33
// let problem_18 = ++j - p++ / ++r + ++l; // 38,105...
// let problem_19 = ++l * t-- + --k + ++p; // 596
// let problem_20 = ++t % l++ - ++q / --o; // 15,555



// Exercise 2

// console.log(!(Math.ceil(7 / 3) > 5) || Math.sqrt(12) != Math.min(7, Math.ceil(7 / 2)) && Math.ceil(29 % 7) <= 18 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 1) True

// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(18) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 6 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 /  8  >= 4))
// 2) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(20) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 6) >= 4)
// 3) True

// console.log(!(Math.floor(6 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 4) True

// console.log(!(Math.round(4 / 5) > 5) || Math.sqrt(8) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 0 || Math.round(12 / 4) >= 4)
// 5) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 4 || Math.ceil(12 / 10) >= 4)
// 6) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(14) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 20) >= 4)
// 7) True

// console.log(!(Math.ceil(8 / 5) > 5) || Math.sqrt(10) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 8) True

// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(12) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 3 || Math.ceil(12 / 4) >= 4)
// 9) True

// console.log(!(Math.ceil(7 / 5) > 5) || Math.sqrt(16) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 10) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(22) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 5 || Math.ceil(12 / 4) >= 4)
// 11) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(24) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 14) >= 4)
// 12) True

// console.log(!(Math.floor(4 / 5) > 5) || Math.sqrt(18) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 13) True

// console.log(!(Math.round(10 / 5) > 5) || Math.sqrt(20) != Math.min(7, Math.ceil(7 / 3)) && Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 0) >= 4)
// 14) True

// console.log(!(Math.ceil(12 / 5) > 5) || Math.sqrt(12) != Math.ceil(29 % 7) && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 4) >= 4)
// 15) True

// console.log(!(Math.round(4 / 5) > 5) && Math.sqrt(14) != Math.min(7, Math.ceil(7 / 3)) || Math.ceil(29 % 7) <= 12 && Math.pow(2, 3) % 2 == 2 || Math.ceil(12 / 2) >= 2)
// 16) True


// Exercise 3

// let date1 = new Date(2022, 0, 15);
// let date2 = new Date(2022, 6, 1);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2023, 2, 10);
// date2 = new Date(2023, 9, 20);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2021, 8, 5);
// date2 = new Date(2022, 4, 18);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2023, 5, 12);
// date2 = new Date(2023, 11, 25);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2022, 3, 8);
// date2 = new Date(2022, 11, 31);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2023, 1, 20);
// date2 = new Date(2023, 7, 10);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2022, 6, 7);
// date2 = new Date(2023, 2, 14);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2022, 11, 1);
// date2 = new Date(2023, 6, 22);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2021, 4, 3);
// date2 = new Date(2022, 10, 11);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// date1 = new Date(2023, 8, 18);
// date2 = new Date(2023, 11, 5);
// diff_date = date2.getTime() - date1.getTime()
// console.log(`Day: ${Math.floor(diff_date / (86400000))}`);
// console.log(`Week: ${Math.floor(diff_date / (86400000 * 7))}`);
// console.log(`Month: ${Math.floor(diff_date / (86400000 * 30))}`);
// console.log(`Year: ${Math.floor(diff_date / (86400000 * 365))}`);

// Exercise 4

// 1)
// let char = 'a';

// if (char.length === 1) {
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
//         console.log(char + " is a vowel.");
//     } else {
//         console.log(char + " is a consonant.");
//     }
// } else {
//     console.log("Please enter a single character.");
// }

// 2)
// let number = -7;

// if (number > 0) {
//     console.log("The number is positive.");
// } else if (number < 0) {
//     console.log("The number is negative.");
// } else {
//     console.log("The number is zero.");
// }

// 3)
// let num = 22;

// if (num % 2 === 0) {
//     console.log(num + " is an even number.");
// } else {
//     console.log(num + " is an odd number.");
// }

// 4)
// let monthNumber = 8;
// let monthName;

// if (monthNumber >= 1 && monthNumber <= 12) {
//     if (monthNumber === 1) {
//         monthName = "January";
//     } else if (monthNumber === 2) {
//         monthName = "February";
//     } // Continue for the rest of the months
//     else {
//         monthName = "Invalid month number";
//     }
//     console.log("The month is " + monthName);
// } else {
//     console.log("Please enter a valid month number (1-12).");
// }

// 5)
// let purchaseAmount = 120;
// let discount;

// if (purchaseAmount > 100) {
//     discount = 0.1;
// } else {
//     discount = 0.05;
// }

// let finalPrice = purchaseAmount - purchaseAmount * discount;
// console.log("Final price after discount: $" + finalPrice.toFixed(2));

// 6)
// let yearToCheck = 2100;

// if ((yearToCheck % 4 === 0 && yearToCheck % 100 !== 0) || yearToCheck % 400 === 0) {
//     console.log(yearToCheck + " is a leap year.");
// } else {
//     console.log(yearToCheck + " is not a leap year.");
// }

// 7)
// let lightColor = "green";

// if (lightColor === "red") {
//     console.log("Stop!");
// } else if (lightColor === "yellow") {
//     console.log("Slow down!");
// } else if (lightColor === "green") {
//     console.log("Go!");
// } else {
//     console.log("Invalid traffic light color");
// }

// 8)
// let age = 25;
// let ageGroup;

// if (age >= 0 && age <= 12) {
//     ageGroup = "Child";
// } else if (age >= 13 && age <= 19) {
//     ageGroup = "Teenager";
// } else if (age >= 20 && age <= 64) {
//     ageGroup = "Adult";
// } else if (age >= 65) {
//     ageGroup = "Senior";
// } else {
//     ageGroup = "Invalid age";
// }

// console.log("Age group: " + ageGroup);

//  9)
// let dayNumber = 4;
// let dayName;

// if (dayNumber >= 1 && dayNumber <= 7) {
//     if (dayNumber === 1) {
//         dayName = "Sunday";
//     } else if (dayNumber === 2) {
//         dayName = "Monday";
//     } // Continue for the rest of the days
//     else {
//         dayName = "Invalid day number";
//     }

//     console.log("The day is " + dayName);
// } else {
//     console.log("Please enter a valid day number (1-7).");
// }

// 10)
// let password = "P@ssw0rd";
// let hasUppercase = false;
// let hasLowercase = false;
// let hasNumber = false;
// let hasSpecialCharacter = false;

// if (password.length >= 8) {
//     for (let i = 0; i < password.length; i++) {
//         let char = password[i];
//         if (char >= 'a' && char <= 'z') {
//             hasLowercase = true;
//         } else if (char >= 'A' && char <= 'Z') {
//             hasUppercase = true;
//         } else if (char >= '0' && char <= '9') {
//             hasNumber = true;
//         } else {
//             hasSpecialCharacter = true;
//         }
//     }

//     if (hasUppercase && hasLowercase && hasNumber && hasSpecialCharacter) {
//         console.log("Strong password!");
//     } else {
//         console.log("Weak password - include uppercase, lowercase, number, and special character.");
//     }
// } else {
//     console.log("Password must be at least 8 characters long.");
// }







// let password = prompt('Enter a password:')

// if (password.length >= 8) {
//     if (password[0] == password[0] == ) {
//         alert('Strong password')
//     } else if (password[0] == password[0].toUpperCase()) {
//         alert('Medium password')
//     } else if (password[0] == password[0]){
//         alert('Weak password')
//     }
// } else {
//     alert('Invalid password')
// }


let num = 17

switch (num > 0) {
  case true:
    alert('The number is positive')
    break
  default:
    switch (num % 2 != 1) {
      case true:
        alert('The number is even')
        break
    }
}

