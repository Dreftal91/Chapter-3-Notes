const readLine = require('readline-sync');

let answers = ['Of course!','Yes', 'No', 'Not in a million years', 'Maybe', 'I am uncertain', 'Most Likely', 'Theoretically, yes', 'Theoretically, no'];

console.log('Welcome, you may ask a yes or no question.\nIf you want to quit, type "I want to quit"');

let playtime = 0;
while (answers != 0) {
    for (let i = 0; i != -1; i++) {
        let question = readLine.question('Ask away: ');
        let answer = answers[getRandomInt()];
        console.log(answer);
        function getRandomInt() {
            return Math.floor(Math.random() * answers.length);
        }
        if (question == 0) {
            question = readLine.question('Ask away: ');
            console.log(answer);
        }
        playtime++;
        if (question == 'I want to quit') {
            console.log('Too bad...');
            console.log(`You asked the machine ${playtime} times.`);
            return
        }
    }
}
