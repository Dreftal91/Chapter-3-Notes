const readLine = require('readline-sync');

let adjective = [tired, lazy, big, round, tall, black, short, grey];
let number = [5, 4];
let pluralnoun = [dollars, bananas];
let noun = [tiger, home, rest, banana, bamboo, bamboo];
let pastverb = [waved];
let presentverb = [jumping];

if (adjective[0] == tired){
    adjective = readLine.question('Choose an adjective:');
}

console.log('Solomon was feeling tired and decided to go to the zoo. He went to the booth and paid the booth' +
    ' operator $5 dollars. He got a ticket and walked around. As he walked, he saw a lazy tiger. He walked some ' +
    'more and was intrigued by the Gorilla’s enclosure. It was big and round. Inside the habitat, there were some ' +
    'banana trees as well as some bamboo. When he looked closely, he saw two gorillas. The Zoo keeper saw Solomon ' +
    'looking at the gorillas and told him the first gorilla was called Hernán, tall and black, and liked bananas. ' +
    'The Zookeeper also said the second gorilla was named Yehonasan, was short and grey, and liked bamboo. After ' +
    'hearing their names, the gorillas waved to Solomon and the Zookeeper. Solomon was so happy he was jumping in ' +
    'happiness. After spending 4 hours in the zoo, he decided to go (the) home and rest.';);