const readLine = require('readline-sync');

let answers = ['Of course!','Yes', 'No', 'Not in a million years', 'Maybe', 'I am uncertain', 'Most Likely', 'Theoretically, yes', 'Theoretically, no'];

let randomNum = Math.floor(Math.random()*answers.length);


console.log('Welcome, you may ask a yes or no question.\nIf you want to quit, type "I want to quit"');

while (answers != 0) {
    let question = readLine.question('Ask away: ');
    let answer = answers[randomNum];
    console.log(answer);
    if (question == 0) {
        question = readLine.question('Ask away: ');
        console.log(answer);
    }
    if (question == 'I want to quit') {
        console.log('Too bad...');
        return
    }
}

console.log(answer);