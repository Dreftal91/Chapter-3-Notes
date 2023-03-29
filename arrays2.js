//number 1
// function population(n){
//     let pop = [];
//     for (let i = 1; i <= n; i++){
//         pop.push(i);
//     }
//     console.log(pop);
// }
// population(5);

//number 2
// function population(n) {
//     let array = n;
//     let pop = [];
//     if (array <= 0){
//         console.log('Invalid array')
//     } else {
//         for (let i = 1; i <= n; i++){
//             pop.push(i);
//         }
//     console.log(pop);
//     }
// }
// population(10);

//number 3
// function replace(array, x) {
//     let newArray = [];
//     for (let i = 0; i < array.length;i++){
//         newArray.push(array[i]);
//         newArray[i] = x;
//     }
//     console.log(newArray)
// }
// replace([2,3,4,5,6,7,], 2);

//number 4
// function change(array, x) {
//     let newArray = [];
//     for (let i = 0; i < array.length;i++){
//         newArray.push(array[i]);
//         newArray[i] = x;
//     }
//     console.log(array);
//     console.log(newArray);
// }
// change([2,3,4,5,6,7,], 2);

//number 5
// function comparer(array) {
//     let lastValue = array.length - 0;
//     let firstValue = array[0];
//     let newArray = [];
//     if (lastValue > firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = lastValue;
//         }
//         console.log(newArray);
//     } else if (lastValue < firstValue){
//     for (let i = 0; i < array.length;i++){
//         newArray.push(array[i]);
//         newArray[i] = firstValue;
//     }
//     console.log(newArray);
// }
// }
// comparer([1,2,3]);

//number 6
// function comparer(array) {
//     let lastValue = array.length - 0;
//     let firstValue = array[0];
//     let newArray = [];
//     if (lastValue > firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = lastValue;
//         }
//         console.log(array);
//         console.log(newArray);
//     } else if (lastValue < firstValue){
//     for (let i = 0; i < array.length;i++){
//         newArray.push(array[i]);
//         newArray[i] = firstValue;
//     }
//     console.log(array);
//     console.log(newArray);
// }
// }
// comparer([1,2,3]);

//number 7
// function comparer(array) {
//     let lastValue = array.length - 0;
//     let firstValue = array[0];
//     let newArray = [];
//     if (lastValue < firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = lastValue;
//         }
//         console.log(newArray);
//     } else if (lastValue > firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = firstValue;
//         }
//         console.log(newArray);
//     }
// }
// comparer([1,2,3]);

//number 8
// function comparer(array) {
//     let lastValue = array.length - 0;
//     let firstValue = array[0];
//     let newArray = [];
//     console.log(array);
//     if (lastValue < firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = lastValue;
//         }
//         console.log(newArray);
//     } else if (lastValue > firstValue){
//         for (let i = 0; i < array.length;i++){
//             newArray.push(array[i]);
//             newArray[i] = firstValue;
//         }
//         console.log(newArray);
//     }
// }
// comparer([1,2,3]);

//number 9
// function ReplaceProductandDividend(number) {
//     let product = 1;
//     let arr9 = [];
//     for (let i = 0; i < number.length; i++) {
//         product = product * number[i];
//     }
//     for (let i = 0; i < number.length; i++) {
//         arr9[i] = product/number[i];
//     }
//     console.log(arr9);
// }
// (ReplaceProductandDividend([1, 4, 6, 2, 4]));

//number 10
function ReplaceProductandDividend(number) {
    let product = 1;
    let arr9 = [];
    for (let i = 0; i < number.length; i++) {
        product = product * number[i];
    }
    for (let i = 0; i < number.length; i++) {
        arr9[i] = product/number[i];
    }
    console.log(number);
    console.log(arr9);
}
(ReplaceProductandDividend([1, 4, 6, 2, 4]));