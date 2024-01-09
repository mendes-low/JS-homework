// 33
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))

// а)
// if (x > y) {
//     alert(`${x} is the maximum among them`)
// } else if (x < y) {
//     alert(`${y} is the maximum among them`)
// } else {
//     alert('Error')
// }

// б)
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))

// if (x > y) {
//     alert(`${y} is the smallest among them`)
// } else if (x < y) {
//     alert(`${x} is the smallest among them`)
// } else {
//     alert('Error')
// }

// в)
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))

// if (x > y) {
//     alert(`
//     ${x} is the maximum among them
//     ${y} is the smallest among them
//     `)
// } else {
//     alert('Error')
// }

// 34
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))
// let z = parseInt(prompt('Enter z number:'))

// a)
// if (x > y && x > z) {
//     alert(`${x} is the maximum among them`)
// } else if (y > x && y > z) {
//     alert(`${y} is the maximum among them`)
// } else if (z > x && z > y) {
//     alert(`${z} is the maximum among them`)
// } else {
//     alert('Error')
// }

// б)
// if (x < y && x < z) {
//     alert(`${x} is the smallest among them`)
// } else if (y < x && y < z) {
//     alert(`${y} is the smallest among them`)
// } else if (z < x && z < y) {
//     alert(`${z} is the smallest among them`)
// } else {
//     alert('Error')
// }


// 35

// a)
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))
// let z = parseInt(prompt('Enter z number:'))
// let plus_xyz = x + y + z
// let multiply_xyz = x * y * z

// if (plus_xyz > multiply_xyz) {
//     alert(`${plus_xyz} is the maximum among them`)
// } else if (plus_xyz < multiply_xyz) {
//     alert(`${multiply_xyz} is the maximum among them`)
// } else {
//     alert('Error')
// }

// б)
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))
// let z = parseInt(prompt('Enter z number:'))
// let plus_xyz = (x + y + z) / 2
// let multiply_xyz = x * y * z

// if (plus_xyz < multiply_xyz) {
//     alert(`${plus_xyz + 1} is the smallest among them`)
// } else if (plus_xyz > multiply_xyz) {
//     alert(`${multiply_xyz + 1} is the smallest among them`)
// } else {
//     alert('Error')
// }

// 36
// let a = parseInt(prompt('Enter a number:'))
// let b = parseInt(prompt('Enter b number:'))
// let c = parseInt(prompt('Enter c number:'))

// if (a < b && b < c) {
//     alert(`${c} is greater than other numbers`)
// } else {
//     alert(`${c} is less than the rest of the numbers`)
// }

// 37
// let a = parseInt(prompt('Enter a number:'))
// let b = parseInt(prompt('Enter b number:'))
// let c = parseInt(prompt('Enter c number:'))

// if (a >= b && b >= c) {
//     alert(`
//     Double numbers:
//     A: ${a * 2} 
//     B: ${b * 2} 
//     C: ${c * 2} 
//     `)
// } else {
//     alert(`
//     Absolute numbers:
//     A: ${Math.abs(a)} 
//     B: ${Math.abs(b)} 
//     C: ${Math.abs(c)}
//     `)
// }


// 38
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))

// if (x > y) {
//         alert(`z = ${x} - ${y} = ${x - y}`)
//     } else if (x < y) {
//         alert(`z = ${y} - ${x} + 1 = ${y - x + 1}`)
//     } else {
//         alert('Error')
// }

// 39
// let a = parseInt(prompt('Enter a number:'))
// let b = parseInt(prompt('Enter b number:'))

// if (a > b) {
//     alert(`${a} is bigger than the second one`)
// } else {
//     alert(`${a} ${b}, the first is no more than the second`)
// }

// 40
// let x = parseInt(prompt('Enter x number:'))
// let y = parseInt(prompt('Enter y number:'))

// if (x <= y) {
//     alert(`We replaced the number with ${x = 0}`)
// } else {
//     alert('We left the text unchanged')
// }

// 41
// let num1 = prompt('Enter number 1:')
// let num2 = prompt('Enter number 2:')
// let num3 = prompt('Enter number 3:')
// let arrNumber = []

// if ((num1 >= 1 && num1 <= 3) || (num2 >= 1 && num2 <= 3) || (num3 >= 0 && num3 <= 3)) {
//     if (num1 == true && num2 == true && num3) {
//         arrNumber.push(num1, num2, num3)
//     } else if (num2 == true) {
//         arrNumber.push(num2)
//     } else if (num3 == true) {
//         arrNumber.push(num3)
//     } else {
//         console.log('Error number');
//     }
// } else {
//     alert('Error')
// }

// alert(`Numbers that belong to the interval: ${arrNumber}`)

// 42
// let x = prompt('Enter x number:')
// let y = prompt('Enter y number:')

// if (x < y) {
//     alert(`We replaced x with their half sum: ${(x + y) / 2}`)
//     alert(`We replaced y with their double product: ${x * y}`)
// } else if (x > y) {
//     alert(`We replaced y with their half sum: ${(x + y) / 2}`)
//     alert(`We replaced x with their double product: ${x * y}`)
// }

// 43
// let x = prompt('Enter x number:')
// let y = prompt('Enter y number:')
// let z = prompt('Enter z number:')

// if (x < 0 && y < 0 && z < 0) {
//     x = x * x
//     y = y * y
//     z = z * z
//     alert(`
//     x: ${x}
//     y: ${y}
//     z: ${z}
//     `)
// } else if (x < 0) {
//     x = x * x
// } else if (y < 0) {
//     y = y * y
// } else if (z < 0) {
//     z = z * z
// } else {
//     alert('Error')
// }

// 44
// let x = +prompt('Enter x number')
// let y = +prompt('Enter y number')
// let z = +prompt('Enter z number')

// if (x + y + z < 1) {
//     let min = Math.min(x, y, z);
//     if (min === x) {
//         x = (y + z) / 2;
//     } else if (min === y) {
//         y = (x + z) / 2;
//     } else {
//         z = (x + y) / 2;
//     }
// } else {
//     if (x <= y) {
//         x = (y + z) / 2;
//     } else {
//         y = (x + z) / 2;
//     }
// }

// 48
// let a = +prompt('Enter a number:')
// let b = +prompt('Enter b number:')
// let c = +prompt('Enter c number:')
// let dics = b**2 - 4*a*c

// if (dics > 0) {
//     let x1 = (-b + Math.sqrt(dics)) / (2*a);
//     let x2 = (-b - Math.sqrt(dics)) / (2*a);
//     console.log(`${x1} and ${x2} are solutions`);
// } else if (dics == 0) {
//     let x = -b / (2*a);
//     console.log(`${x} is only solution`);
// } else {
//     console.log('No solution');
// }