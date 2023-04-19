const readLine = require('readline-sync');

let diceRolled = [];
let eyeColors = ['Blue', 'Green', 'Dark Brown', 'Black'];
let economicClass = ['Dirt-poor', 'lower-class', 'Middle-class', 'Upper-class', 'Filthy rich'];
let literacy = ['Cannot read and write', 'Can read and write'];
let character1 = {
    //empty for now
};
let character3 = {
    //empty for now
};
let character2 = {
    //empty for now
};

createChar(character1, diceRolled);
createChar(character2, diceRolled);
createChar(character3, diceRolled);
function rolld6() {
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list) {
    for (let i = 0; i < amount; i++){
        let roll = rolld6();
        // console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i = 0; i<list.length; i++){
        sum+=list[i];
    }
    // console.log(`The total was: ${sum}`);
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function pickRandomChoice(choice) {
    let randomNum = Math.floor(Math.random()*choice.length);
    return choice[randomNum];
}

function createChar(character, list) {
    character.name = readLine.question('Enter Character Name: ');
    character.eyeColor = pickRandomChoice(eyeColors);
    // console.log('Rolling Strength');
    character.strength = rollStat(diceRolled);
    // console.log('Rolling Dexterity');
    character.Dexterity = rollStat(diceRolled);
    // console.log('Rolling Constitution');
    character.Constitution = rollStat(diceRolled);
    // console.log('Rolling Intelligence');
    character.Intelligence = rollStat(diceRolled);
    // console.log('Rolling Wisdom');
    character.Wisdom = rollStat(diceRolled);
    // console.log('Rolling Charisma');
    character.Charisma = rollStat(diceRolled);
    character.luck = rolld6();
    character.class = pickRandomChoice(economicClass);
    character.dancingskill = rollStat(diceRolled);
    character.literacy = pickRandomChoice(literacy);
    displayChar(character);
}

function displayChar(char) {
    console.log(`----------------------------------`);
    console.log(`Name: ${char.name}`);
    console.log(`Eye Color: ${char.eyeColor}`);
    console.log(`Literacy: ${char.literacy}`);
    console.log(`Economic Class: ${char.class}`);
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.Dexterity}`);
    console.log(`Constitution: ${char.Constitution}`);
    console.log(`Intelligence: ${char.Intelligence}`);
    console.log(`Wisdom: ${char.Wisdom}`);
    console.log(`Charisma: ${char.Charisma}`);
    console.log(`Luck: ${char.luck}`);
    console.log(`Dancing Skill: ${char.dancingskill}`);
    console.log(`----------------------------------`);
}