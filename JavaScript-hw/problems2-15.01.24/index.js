// 5.7
// let rub = 20.4
// let i = 2
// while (i <= 20) {
//     console.log(`Стоимость ${i} товаров:${Math.round(i * rub)}`);
//     i++
// }

// 5.8
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} фунт = ${i * Math.round(453 / 10)}кг`);
// }

// 5.9
// let i = 10
// do {
//     console.log(`${i} дюйм = ${i * Math.round(25,4 / 10)} см`);
//     i++
// }
// while (i <= 22)

// 5.10
// let courseRub = +prompt('Enter ruble course:')
// for (let i = 1; i <= 20; i++) {
//     console.log(`${i}$ = ${i * courseRub}ruble`);
// }

// 5.11
// let r = 6350;
// for (let h = 1; h <= 10; h++) {
//     let distance = Math.round(Math.sqrt(h * (h + 2 * r)))
//     console.log(`Расстояние до линии горизонта от точки с высотой над Землей, равной ${h} = ${distance}`);
// }

// 5.12
// let p0 = 1.29 ** 3; 
// let z = 1.25e-4; 
// for (let h = 0; h <= 1000; h += 100) {
//     let density = p0 * Math.exp(-z * h);
//     console.log(`${h} = ${density.toFixed(3)}`);
// }

// 5.13
// let i = 1
// while (i <= 10) {
//     console.log(`${i} x ${7} = ${i * 7}`);
//     i++
// }

// 5.14
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i} x ${9} = ${i * 9}`);
// }

// 5.15
// let n = prompt('Enter a number: ')
// for (let i  = 1; i <= 10; i++) {
//     console.log(`${i} x ${n} = ${i * n}`);
// }

// 5.16
// for (let i = 2; i <= 20; i++) {
//     let sin = Math.round(Math.sin(i));
//     console.log(`sin ${i}: ${sin}`);
// }

// 5.17
// for (let x = 4; x <= 28; x++) {
//     console.log(`Если t = ${x} + 2, то y = 2 * ${(x + 2)**2} + 5,5 * ${x + 2} - 2. Ответь: t = ${x + 2}, y = ${2 * (x + 2)**2 + 5.5 * x + 2 - 2}`);
// }

// 5.18
// let a = 2
// while (a <= 17) {
//     console.log(`Если t = 4 * ${a}, то z = 3,5 * ${4 * a} - 7 * ${4 * a} + 16. Ответь: t = ${4 * a}, z = ${3.5 * Math.pow(4 * a,2) - 7 * (4 * a) + 16}`);
//     a++
// }

// 5.19
// for (let i = 0.1; i <= 1.1; i += 0.1) {
//     console.log(`sin ${i.toFixed(1)} = ${Math.sin(i)}`);
// }

// 5.20
// let i = 0.1
// while (i <= 0.9) {
//     console.log(`${i.toFixed(1)} = ${Math.sqrt(i)}`);
//     i += 0.1
// }

// 5.21
// let priceKg = +prompt('Введите цену сыра за 1 кг:')
// for (let i = 50; i <= 1000; i += 50) {
//     console.log(`Цена за ${i}г сыра: ${priceKg * i / 1000}`);
// }

// 5.22
// let priceCandy = +prompt('Введите цену конфет за 1 кг:')
// let i = 100
// while (i <= 2000) {
//     console.log(`Цена за ${i}г конфет: ${priceCandy * i / 1000}`);
//     i += 100
// }

// 5.23
// for (let i = 2.1; i <= 2.9; i += 0.1) {
//     console.log(i.toFixed(1));
// }

// 5.24
// for (let i = 3.2; i <= 4; i += 0.1) {
//     console.log(i.toFixed(1));
// }

// 5.25
// let i = 2.2
// while (i <= 4.3) {
//     console.log(i.toFixed(1));
//     i += 0.1
// }

// 5.26
// let i = 4.4
// while (i <= 6.5) {
//     console.log(i.toFixed(1));
//     i += 0.2
// }
