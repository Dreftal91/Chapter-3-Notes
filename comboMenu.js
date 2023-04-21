const readLine = require('readline-sync');

let order = [];
let beveragesize = '';
let ordersum = 0;
for (let i = 0; i < order.length; i++) {
    ordersum += order[i];
}

let sandwichChoice = readLine.question('Do you want a chicken sandwich($5.25), a beef sandwich(6.25), or a tofu sandwich($5.75)?: ');

if (sandwichChoice == 'Chicken' || sandwichChoice == 'chicken') {
    console.log('You ordered a chicken sandwich!');
    let chickenSandwich = 5.25;
    order.push(chickenSandwich);
} else if (sandwichChoice == 'beef' || sandwichChoice == 'Beef') {
    console.log('You ordered a beef sandwich!');
    let beefSandwich = 6.25;
    order.push(beefSandwich);
} else if (sandwichChoice == 'tofu' || sandwichChoice == 'Tofu') {
    console.log('You ordered a tofu sandwich!');
    let tofuSandwich = 5.75;
    order.push(tofuSandwich);
}

let beverageboolean = readLine.question('Would you like a beverage?: ');

if (beverageboolean == 'Yes' || beverageboolean == 'yes' || beverageboolean == 'y') {
    beveragesize = readLine.question('Would you like a small($1.00), medium($1.50), or large soda($2.00)?: ');
    console.log(`You chose a ${beveragesize} size!`);
    if (beveragesize == 'small') {
        let beveragesmall = 1;
        order.push(beveragesmall)
    } else if (beveragesize == 'medium') {
        let beveragemedium = 1.5;
        order.push(beveragemedium)
    } else if (beveragesize == 'large') {
        let beveragelarge = 2;
        order.push(beveragelarge)
    }
}
if (beverageboolean == 'No' || beverageboolean == 'no' || beverageboolean == 'n') {
    console.log(`Ok! You didn't choose a drink.`)
}

console.log(order);
console.log(ordersum);

