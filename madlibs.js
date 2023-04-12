const readLine = require('readline-sync');

// let adjective = ['tired', 'lazy', 'big', 'round', 'tall', 'black', 'short', 'grey'];
let adjective = [];
// let number = [5, 4];
let number = [];
// let pluralnoun = ['dollars', 'bananas'];
let pluralnoun = [];
// let noun = ['tiger', 'home', 'rest', 'banana', 'bamboo', 'bamboo'];
let noun = [];
// let pastverb = ['waved'];
let pastverb = [];
// let presentverb = ['jumping'];
let presentverb = [];

//adjective section
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));
adjective.push(readLine.question('Choose an adjective: '));

//number section
number.push(readLine.question('Choose a number: '));
number.push(readLine.question('Choose a number: '));

//plural noun section
pluralnoun.push(readLine.question('Choose a plural noun: '));
pluralnoun.push(readLine.question('Choose a plural noun: '));

//noun section
noun.push(readLine.question('Choose a noun: '));
noun.push(readLine.question('Choose a noun: '));
noun.push(readLine.question('Choose a noun: '));
noun.push(readLine.question('Choose a noun: '));
noun.push(readLine.question('Choose a noun: '));
noun.push(readLine.question('Choose a noun: '));

//verb section
pastverb.push(readLine.question('Choose a verb in the past tense: '));
presentverb.push(readLine.question('Choose a verb in the present tense: '));


console.log(`Solomon was feeling ${adjective[0]} and decided to go to the zoo. He went to the booth and paid the booth operator 
${number[0]} ${pluralnoun[0]}. He got a ticket and walked around. As he walked, he saw a ${adjective[1]} tiger. He walked some more and was intrigued 
by the Gorilla’s enclosure. It was ${adjective[2]} and ${adjective[3]}. Inside the habitat, there were some banana trees as well as some
 bamboo. When he looked closely, he saw two gorillas. The Zoo keeper saw Solomon looking at the gorillas and told him 
 the first gorilla was called Hernán, ${adjective[4]} and ${adjective[5]}, and liked bananas. The Zookeeper also said the second gorilla 
 was named Yehonasan, was ${adjective[6]} and ${adjective[7]}, and liked bamboo. After hearing their names, the gorillas waved to Solomon 
 and the Zookeeper. Solomon was so happy he was jumping in happiness. After spending ${number[1]} hours in the zoo, he decided 
 to go (the) home and rest.`);