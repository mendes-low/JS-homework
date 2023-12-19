// Level 1

// 1
// let challenge = '30 Days Of JavaScript'
// console.log(challenge);

// 2
// console.log(challenge);

// 3
// console.log(challenge.length);

// 4
// console.log(challenge.toUpperCase());

// 5
// console.log(challenge.toLowerCase());

// 6
// console.log(challenge.substring(0, 2));

// 7
// console.log(challenge.substring(3, 21));

// 8
// console.log(challenge.includes('Script'));

// 9
// console.log(challenge.split());

// 10
// console.log(challenge.split(' '));

// 11
// let company = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon" 
// console.log(company.split(', '));

// 12
// console.log(challenge.replace('JavaScript' , 'Python'));

// 13
// console.log(challenge.charAt(15));

// 14
// console.log(challenge.charCodeAt('J'));

// 15
// console.log(challenge.indexOf('a'));

// 16
// console.log(challenge.lastIndexOf('a'));

// 17
// let sentance = 'You cannot end a sentence with because because because is a conjunction'
// console.log(sentance.indexOf('because'));

// 18
// console.log(sentance.lastIndexOf('because'));

// 19
// console.log(sentance.search('because'));

// 20
// let trimWord = '  Python  '
// console.log(trimWord);
// console.log(trimWord.trim());

// 21
// console.log(challenge.startsWith('30'));

// 22
// console.log(challenge.endsWith('JavaScript'));

// 23
// console.log(challenge.match('a'));

// 24
// let days = '30 Days of '
// console.log(days.concat('JavaScript'));

// 25
// console.log(challenge.repeat(2));


// Level 2

// 1
// console.log("The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.");

// 2
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");

// 3
// let num = '10'
// if (typeof num == 10) {
//     console.log('Это число');
// }
// else {
//     console.log('Это не число, сейчас переделаем');
//     let numInt = parseInt(num)
//     console.log(`Это:${typeof numInt}`);
// }

// 4
// let num = parseFloat('9.8')
// if (num == 10) {
//     console.log('Оно равно');
// }
// else {
//     console.log('Оно не равно 10, сейчас сделаем');
//     let numFloat = Math.ceil(num)
//     if (numFloat == 10) {
//         console.log(`Сделано, вот:${numFloat}`);
//     }
//     else {
//         console.log('Не вышло');
//     }
// } 

// 5
// let word1 = 'Python'
// if (word1.search('on')) {
//     console.log('Оно есть в слове');
// }
// else {
//     console.log('Его нет в слове');
// }

// let word2 = 'Jarhon'
// if (word2.search('on')) {
//     console.log('Оно есть в слове');
// }
// else {
//     console.log('Его нет в слове');
// }

// 6
// let sentence = 'I hope this course is not full of jargon'
// if (sentence.search('jargon')) {
//     console.log('Оно есть в предложение');
// }
// else {
//     console.log('Его нет в предложение');
// }

// 7
// console.log(Math.ceil(Math.random() * 100));

// 8
// console.log(Math.floor(Math.random() * 50) + 50);

// 9
// console.log(Math.ceil(Math.random() * 255 ));

// 10
// console.log(Math.ceil(Math.random('JavaScript') * 9));

// 11
// console.log('1\t1\t1\t1\t1');
// console.log('2\t1\t2\t4\t8');
// console.log('3\t1\t3\t9\t27');
// console.log('4\t1\t4\t16\t64');
// console.log('5\t1\t5\t25\t125');

// 12
// let because = 'You cannot end a sentence with because because because is a conjunction'
// console.log(because.substr(31,8),because.substr(39,8),because.substr(47,8));
// console.log(because.substring(31,54));


// Level 3

// 1
// let sentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// let love = /love/gi
// console.log(sentence.match(love).length);

// 2
// let because_sentance = 'You cannot end a sentence with because because because is a conjunction'
// let because = /because/gi
// console.log(because_sentance.match(because).length);

// 3
// const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. 
// The@re $is no@th@ing; &as& mo@re rewarding as educa@tion &and& @emp%o@weri@ng peo@ple. 
// ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs.
// %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&Of JavaScript &is al@so $the $resu@lt of &love& of tea&ching`
// const cleanSentence = sentence.replace(/[^\w\s]/gi, '')
// console.log(cleanSentence);

// 4
// let income = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
// let salaryMonth = parseInt(income.substring(9,13))
// let annualBonus = parseInt(income.substring(42,47))
// let onlineCourses = parseInt(income.substring(67,72))
// let annual_income = `annual income:${(salaryMonth + onlineCourses) * 12 + annualBonus}`
// console.log(`salary per month:${salaryMonth}`);
// console.log(`annual bonus:${annualBonus}`);
// console.log(`online courses per month:${onlineCourses}`);
// console.log(annual_income);


