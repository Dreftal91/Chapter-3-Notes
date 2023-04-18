const readLine = require('readline-sync');

let diceRolled = [];
let character1 = {
    //empty for now
};

createChar(character1, diceRolled);
function rolld6() {
    return Math.ceil(Math.random()*6)
}

function rollDice(amount, list) {
    for (let i = 0; i < amount; i++){
        let roll = rolld6();
        console.log(`You rolled a ${roll}!`);
        list.push(roll);
    }
}

function sum(list){
    let sum = 0;
    for (let i = 0; i<list.length; i++){
        sum+=list[i];
    }
    console.log(`The total was: ${sum}`);
    return sum;
}

function rollStat(list){
    list = [];
    rollDice(4, list);
    return sum(list);
}

function createChar(character, list) {
    character.name = readLine.question('Enter Character Name: ');
    console.log('Rolling Strength');
    character.strength = rollStat(diceRolled);
    console.log('Rolling Dexterity');
    character.Dexterity = rollStat(diceRolled);
    console.log('Rolling Constitution');
    character.Constitution = rollStat(diceRolled);
    console.log('Rolling Intelligence');
    character.Intelligence = rollStat(diceRolled);
    console.log('Rolling Wisdom');
    character.Wisdom = rollStat(diceRolled);
    console.log('Rolling Charisma');
    character.Charisma = rollStat(diceRolled);
    displayChar(character)
}

function displayChar(char) {
    console.log(`----------------------------------`);
    console.log(`Name: ${char.name}`);
    console.log(`Strength: ${char.strength}`);
    console.log(`Dexterity: ${char.Dexterity}`);
    console.log(`Constitution: ${char.Constitution}`);
    console.log(`Intelligence: ${char.Intelligence}`);
    console.log(`Wisdom: ${char.Wisdom}`);
    console.log(`Charism: ${char.Charisma}`);
    console.log(`----------------------------------`);
}