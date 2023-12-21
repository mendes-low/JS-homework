// level 2

// 5
// let x = prompt('Enter x:')
// let y = 2*x -2
// alert(`Slope: ${y}`)

// 6
// let x1 = 2
// let x2 = 6
// let y1 = 2
// let y2 = 10
// let m = (y2-y1)/(x2-x1)
// alert(m)

// 7
// if (y == m) {
//     alert('2 ответа равны')
// }
// else if ( y < m ) {
//     alert('Первый ответь меньше второго')
// }
// else if ( y > m ) {
//     alert('Второй ответь меньше первого')
// }
// else {
//     alert('Ошибка')
// }

// 8
// let x = -3
// let y = x**2 + 6 * x + 9
// alert(`Y: ${y}`)

// 9
// let hour = prompt('Enter hours:')
// let per = prompt('Enter rate per hour:')
// alert(`Your weekly earning is ${hour * per}`)

// 10
// let yourName = prompt('Enter your name:')
// yourName.length >= 7
//  ? alert('Ваше имя длинное')
//  : alert('Ваше имя короткое')

// 11
// let firstName = prompt('Enter your firstname:')
// let lastName = prompt('Enter your lastname:')

// if (firstName > lastName) {
//     alert(`Your first name, ${firstName} is longer than your family name, ${lastName}`)
// }
// else {
//     alert(`Your last name, ${lastName} is longer than your first name, ${firstName}`)
// }

// 12
// let myAge = parseInt(prompt('My age:'))
// let yourAge = parseInt(prompt('Your age:'))

// if (myAge > yourAge) {
//     alert(`I am ${myAge - yourAge} years older than you.`)
// }
// else {
//     alert(`You are ${yourAge - myAge} years older than me.`)
// }

// 13
// let birthYear = prompt('Enter birth year:')
// let year = 2023 - birthYear
// year >= 18
//  ? alert(`You are ${year}. You are old enough to drive`)
//  : alert(`You are ${year}. You will be allowed to drive after ${18 - year} years.`)

// 14
// let liveYear = prompt('Enter number of years you live:')
// alert(`You lived ${86400 * (liveYear * 365)} seconds.`)

// 15
// let nowDate = new Date()
// let year = nowDate.getFullYear()
// let month = nowDate.getMonth() + 1
// let day = nowDate.getDate()
// let hours = nowDate.getHours()
// let minutes = nowDate.getMinutes()

// console.log(`i: ${year}-${month}-${day} ${hours}:${minutes}`)
// console.log(`ii: ${day}-${month}-${year} ${hours}:${minutes}`)
// console.log(`iii: ${day}/${month}/${year} ${hours}:${minutes}`) 

// Level 3
// function getZero(i) {
//     if (i < 10) { 
//         i = "0" + i 
//     }
//     return i
// }

// let nowDate = new Date()
// let year = Math.round(nowDate.getFullYear())
// let month = getZero(nowDate.getMonth() + 1)
// let day = getZero(nowDate.getDate())
// let hour = getZero(nowDate.getHours())
// let minute = getZero(nowDate.getMinutes())

// console.log(`${year}-${month}-${day} ${hour}:${minute}`)
