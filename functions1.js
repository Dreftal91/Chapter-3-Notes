//number 1

// function area(length, width) {
//     console.log(`The area of the rectangle is ${length * width}`);
// }
// area(3,5);

//number 2

// const pi = 3.14;
//
// function circlearea(radius) {
//     console.log(`The area of the circle is ${radius * radius * pi}`);
// }
// circlearea(3);

//number 3

// function printMin(x, y) {
//     if (x>y){
//         console.log(`The smaller number is ${y}`);
//     } else {
//         console.log(`The smaller number is ${x}`);
//     }
// }
//
// printMin(2, 3);

//number 4

// function printequal(x, y) {
//     if (x == y){
//         console.log(`${y} and ${x} are equal`);
//     } else {
//         console.log(`${y} and ${x} are not equal`);
//     }
// }
//
// printequal(2, 3);

//number 5

// function area(length, width, length2, width2) {
//     let rectangle1 = length*width;
//     let rectangle2 = length2*width2;
//     if (rectangle1 > rectangle2){
//         console.log(`Rectangle one is bigger and has an area of ${rectangle1}`);
//     } else {
//         console.log(`Rectangle two is bigger and has an area of ${rectangle2}`)
//     }
// }
// area(3,5,2,9);

//number 6

// function charity(quantity1, quantity2, quantity3) {
//     let totalquantity = quantity1+quantity2+quantity3;
//     if (totalquantity >= 1000) {
//         console.log(`Congratulations! You donated ${totalquantity} which is above $1,000 so your donation will be doubled by a local company. The final donation is ${totalquantity*2}`)
//     } else {
//         console.log(`Congratulations! You donated ${totalquantity}!\nFeel good about yourself.`)
//     }
// }
// charity(200, 500, 300);

//number 7

// function waterstate(temperatureincelcius) {
//     if (temperatureincelcius <= 0) {
//         console.log(`The water will be a solid.`);
//     } else if (temperatureincelcius > 0 && temperatureincelcius < 99) {
//         console.log(`The water will be a liquid.`);
//     } else {
//         console.log(`The water will be a gas.`);
//     }
// }
// waterstate(-80);

//number 8

// function printMax(number1, number2, number3) {
//     if (number1 > number2 && number1 > number3){
//         console.log(`The larger number is ${number1}`);
//     } else if (number2 > number1 && number2 > number3){
//         console.log(`The larger number is ${number2}`);
//     } else if (number3 > number1 && number3 > number2){
//         console.log(`The larger number is ${number3}`);
//     }
// }
//
// printMax(657,4,5);

//number 9

// function printMin(number1, number2, number3) {
//     if (number1 < number2 && number1 < number3){
//         console.log(`The smaller number is ${number1}`);
//     } else if (number2 < number1 && number2 < number3){
//         console.log(`The smaller number is ${number2}`);
//     } else if (number3 < number1 && number3 < number2){
//         console.log(`The smaller number is ${number3}`);
//     }
// }
//
// printMin(657,4,5);

//number 10

// function charity(quantity1, quantity2, quantity3) {
//     let totalquantity = quantity1+quantity2+quantity3;
//     let overtwothousand = totalquantity-2000;
//     if (totalquantity < 1000) {
//         console.log(`Congratulations! You donated ${totalquantity} which is below $1,000 so your donation will be give a $100 bonus by a local company. The final donation is ${totalquantity+100}`)
//     }
//     if (totalquantity >= 1000 && totalquantity <= 2000) {
//         console.log(`Congratulations! You donated ${totalquantity} which is above $1,000 so your donation will be doubled by a local company. The final donation is ${totalquantity*2}`)
//     }
//     if (totalquantity >= 2000) {
//         console.log(`Congratulations! You donated ${totalquantity} which is above $2,000 so your donation will be doubled and given a bonus of the amount after 2,000 by a local company . The final donation is ${totalquantity* 2 + overtwothousand + 2000}`)
//     }
// }
// charity(2002, 20, 10);