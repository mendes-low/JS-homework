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