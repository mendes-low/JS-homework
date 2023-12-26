// Level 1

// 1
// let birthYear = parseInt(prompt('Enter birth year:'));
// let year = 2023 - birthYear;

// switch (true) {
//     case year >= 18:
//         alert(`You are ${year}. You are old enough to drive.`);
//         break;
//     default:
//         alert(`You are ${year}. You will be allowed to drive after ${18 - year} years.`);
// }
 
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
// let a = parseInt(prompt('Enter A number:'))
// let b = parseInt(prompt('Enter B number:'))

// switch (a > b) {
//     case true:
//         alert(`${a} is greater than ${b}`)
//         break
//     default:
//         switch (a < b) {
//             case true:
//                 alert(`${a} is less than ${b}`)
//                 break
//         }
// }

// 4
// let number = prompt('Enter a number:')

// switch (number % 2 == 0) {
//     case true:
//         alert(`${number} is an even number`)
//         break
//     default:
//         alert(`${number} is an odd number`)
// }

// Level 2

// 1
// let grade = parseInt(prompt('Enter your grade:'))

// switch (grade >= 0 && grade <= 49) {
//     case true:
//         alert('F')
//         break
//     default:
//         switch (grade >= 50 && grade <= 59) {
//             case true:
//                 alert('D')
//                 break
//             default:
//                 switch (grade >= 60 && grade <= 69) {
//                     case true:
//                         alert('C')
//                         break
//                     default:
//                         switch (grade >= 70 && grade <= 89) {
//                             case true:
//                                 alert('B')
//                                 break
//                             default:
//                                 switch (grade >= 90 && grade <= 100) {
//                                     case true:
//                                     alert('A')
//                                     break
//                                 default:
//                                     alert('Error')
//                                 }
//                         }
//                 }
//         }      
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

// switch (seasonLower == 'september' || seasonLower == 'october' || seasonLower == 'november') {
//     case true:
//         alert('The season is Autumn')
//         break
//     default:
//         switch (seasonLower == 'december' || seasonLower == 'january' || seasonLower == 'february') {
//             case true:
//                 alert('The season is Winter')
//                 break
//             default:
//                 switch (seasonLower == 'march' || seasonLower == 'april' || seasonLower == 'may') {
//                     case true:
//                         alert('The season is Spring')
//                         break
//                     default:
//                         switch (seasonLower == 'june' || seasonLower == 'july' || seasonLower == 'august') {
//                             case true:
//                                 alert('The season is Summer')
//                                 break
//                             default:
//                                 alert('Error')
//                         }
//                 }
//         }
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

// level 3

// 1
// function UpperRegistor(dayUpper) {
//     if (dayUpper) {
//         dayUpper = dayUpper[0].toUpperCase() + dayUpper.slice(1)
//     }
//     return dayUpper
// }

// let month = prompt('Enter a month:')
// let monthLower = month.toLowerCase()

// switch (monthLower == 'september' || monthLower == 'november' || monthLower == 'april' || monthLower == 'june') {
//     case true:
//         alert(`${UpperRegistor(monthLower)} has 30 days`)
//         break
//     default:
//         switch (monthLower == 'october' || monthLower == 'december' || monthLower == 'january' || monthLower == 'march' || monthLower == 'may' || monthLower == 'july' || monthLower == 'august') {
//             case true:
//                 alert(`${UpperRegistor(monthLower)} has 31 days`)
//                 break
//                 default:
//                     switch (monthLower == 'february') {
//                         case true:
//                             alert(`${UpperRegistor(monthLower)} has 28 days`)
//                             break
//                         default:
//                             alert('It is not a month')
//                             break
//                     }
//         }
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

// switch (monthLower == 'september' || monthLower == 'november' || monthLower == 'april' || monthLower == 'june') {
//     case true:
//         alert(`${UpperRegistor(monthLower)} has 30 days`)
//         break
//     default:
//         switch (monthLower == 'october' || monthLower == 'december' || monthLower == 'january' || monthLower == 'march' || monthLower == 'may' || monthLower == 'july' || monthLower == 'august') {
//             case true:
//                 alert(`${UpperRegistor(monthLower)} has 31 days`)
//                 break
//             default:
//                 switch (monthLower == 'february') {
//                     case true:
//                         alert(`${UpperRegistor(monthLower)} has 29 days`)
//                         break
//                     default:
//                         alert('It is not a month')
//                         break
//                 }
//         }
// }



