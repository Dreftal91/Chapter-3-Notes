const readLine = require('readline-sync');

//number 1

// function nameSwapper() {
//     let first = readLine.question('What is your first name?: ');
//     let last = readLine.question('What is your last name?: ');
//     return (`${last}, ${first}`)
// }
//
// console.log(nameSwapper());

//number 2

// function numberGenerator() {
//     let num1 = readLine.question('Choose a number!: ');
//     if (num1 > 10 || num1 < 0) {
//         console.log('Invalid answer!');
//         num1 = readLine.question('Choose a number again!: ');
//     }
//     let num2 = readLine.question('Choose another number!: ');
//     if (num2 > 10 || num2 < 0) {
//         num2 = readLine.question('Choose a number!: ');
//     }
//     let total = num1+num2;
//     console.log(total)
// }
//
// numberGenerator();


//number 3

// function averageTemperature(temp1, temp2, temp3, temp4, temp5, temp6, temp7) {
//     let Atemp1 = temp1+temp2+temp3+temp4+temp5+temp6+temp7;
//     let Atempfinal = Atemp1/7;
//     console.log(Atempfinal.toFixed(2));
// }

// averageTemperature(67, 34, 23, 124, 234 ,234, 34);

//number 4

// function charityWork() {
//     let charityinback = 0;
//     let overtwothousand = charityinback - 2000;
//     let charitycollected = 0;
//     let people = Number(readLine.question('How many people will donate?: '));
//     while (people > 0) {
//         charitycollected = Number(readLine.question("How much money was donated?: "));
//         charityinback += charitycollected;
//         people--
//     }
//     if (charityinback < 1000) {
//         console.log(`The total amount donated is ${charityinback+100}`);
//         return
//     }
//     if (charityinback >= 1000 && charityinback <= 2000) {
//         console.log(`The total amount donated is ${charityinback*2}`);
//         return
//     }
//     if (charityinback >= 2000) {
//         console.log(`The total amount donated is ${charityinback* 2 + overtwothousand + 2000}`);
//         return
//     }
// }
//
// charityWork();

//number 5

// function dartsgame() {
//     let round1 = Number(readLine.question('How many points did you score the in the first round?: '));
//     if (round1 >= 180 || round1 <= 0){
//         console.log('Invalid quantity, try again');
//         round1 = Number(readLine.question('How many points did you score the in the first round?: '));
//     }
//     let round2 = Number(readLine.question('How many points did you score the in the second round?: '));
//     if (round2 >= 180 || round2 <= 0){
//         console.log('Invalid quantity, try again');
//         round2 = Number(readLine.question('How many points did you score the in the second round?: '));
//     }
//     let round3 = Number(readLine.question('How many points did you score the in the third round?: '));
//     if (round3 >= 180 || round3 <= 0){
//         console.log('Invalid quantity, try again');
//         round3 = Number(readLine.question('How many points did you score the in the third round?: '));
//     }
//     let total = round1+round2+round3;
//     console.log(total)
// }
//
// dartsgame();

//number 6

// function dartsgamevictor() {
//     //person 1
//     let p1round1 = Number(readLine.question('How many points did person1 score the in the first round?: '));
//     if (p1round1 >= 180 || p1round1 <= 0){
//         console.log('Invalid quantity, try again');
//         p1round1 = Number(readLine.question('How many points did person1 score the in the first round?: '));
//     }
//     let p1round2 = Number(readLine.question('How many points did person1 score the in the second round?: '));
//     if (p1round2 >= 180 || p1round2 <= 0){
//         console.log('Invalid quantity, try again');
//         p1round2 = Number(readLine.question('How many points did person1 score the in the second round?: '));
//     }
//     let p1round3 = Number(readLine.question('How many points did person1 score the in the third round?: '));
//     if (p1round3 >= 180 || p1round3 <= 0){
//         console.log('Invalid quantity, try again');
//         p1round3 = Number(readLine.question('How many points did person1 score the in the third round?: '));
//     }
//     let p1total = p1round1+p1round2+p1round3;
//
//     //person 2
//     let p2round1 = Number(readLine.question('How many points did person2 score the in the first round?: '));
//     if (p2round1 >= 180 || p2round1 <= 0){
//         console.log('Invalid quantity, try again');
//         p2round1 = Number(readLine.question('How many points did person2 score the in the first round?: '));
//     }
//     let p2round2 = Number(readLine.question('How many points did person2 score the in the second round?: '));
//     if (p2round2 >= 180 || p2round2 <= 0){
//         console.log('Invalid quantity, try again');
//         p2round2 = Number(readLine.question('How many points did person2 score the in the second round?: '));
//     }
//     let p2round3 = Number(readLine.question('How many points did person2 score the in the third round?: '));
//     if (p2round3 >= 180 || p2round3 <= 0){
//         console.log('Invalid quantity, try again');
//         p2round3 = Number(readLine.question('How many points did person2 score the in the third round?: '));
//     }
//     let p2total = p2round1+p2round2+p2round3;
//
//     //victor deciding
//     if (p2total > p1total){
//         console.log(`Person 2 scored ${p2total} points and won!`)
//     } else if (p1total > p2total){
//         console.log(`Person 1 scored ${p1total} points and won!`)
//     } else if (p2total == p1total){
//         console.log(`Person 2 and person 1 scored ${p1total} and the game ended in a tie!`)
//     }
// }
//
// dartsgamevictor();

//number 7

// function slopeandy() {
//     let m = readLine.question('What is the slope?: ');
//     let b = readLine.question('What is the y-intercept?: ');
//     console.log(`y = ${m}x + ${b}`)
// }
//
// slopeandy();

//number 8

// function slopeFormula() {
//     let coordinates1point1 = Number(readLine.question('In the first coordinates, what is the x coordinate?: '));
//     let coordinates1point2 = Number(readLine.question('In the first coordinates, what is the y coordinate?: '));
//     let coordinates2point1 = Number(readLine.question('In the second coordinates, what is the x coordinate?: '));
//     let coordinates2point2 = Number(readLine.question('In the second coordinates, what is the y coordinate?: '));
//     let slopePart1 = coordinates2point2 - coordinates1point2;
//     let slopePart2 = coordinates2point1 - coordinates1point1;
//     let finalslope = slopePart1/slopePart2;
//     console.log(finalslope);
// }
//
// slopeFormula();