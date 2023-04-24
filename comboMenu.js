const readLine = require('readline-sync');

let order = [];
let beveragesize = '';
let ordersum = 0;
let frysize = '';
let ketchupquantity = 0;

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

let fryselection = readLine.question('Would you like fries?: ');
if (fryselection == 'yes' || fryselection == 'Yes' || fryselection == 'y') {
    frysize = readLine.question('Would you like small ($1.00), medium ($1.50), or large ($2.00)?: ');
    if (frysize == 'small' || frysize == 'Small' || frysize == 's' || frysize == 'S') {
        let smallfriesmegasize = readLine.question('Would you like to mega size?: ');
        if (smallfriesmegasize == 'yes' || smallfriesmegasize == 'Yes' || smallfriesmegasize == 'S' || smallfriesmegasize == 's') {
            let smallfries = 2;
            order.push(smallfries);
            console.log('You mega-sized your fries and now their price is $2.00 dollars!');
        } else if (smallfriesmegasize == 'no' || smallfriesmegasize == 'No' || smallfriesmegasize == 'N' || smallfriesmegasize == 'n') {
            let smallfries = 1;
            order.push(smallfries);
            console.log(`You didn't mega-size your fries and their price is $1.00 dollar!`);
        }
    }
    if (frysize == 'medium' || frysize == 'Medium' || frysize == 'm' || frysize == 'M') {
        let mediumfries = 1.5;
        order.push(mediumfries);
        console.log(`You ordered medium fries and their price is $1.50 dollars!`);
    }    if (frysize == 'large' || frysize == 'Large' || frysize == 'l' || frysize == 'L') {
        let mediumfries = 1.5;
        order.push(mediumfries);
        console.log(`You ordered large fries and their price is $2.00 dollars!`);
    }

} else if (fryselection == 'no' || fryselection == 'No' || fryselection == 'n') {
    console.log('Too bad, you did not order fries.');
}

ketchupquantity = readLine.question('How many ketchup packets do you want?: ');
if (ketchupquantity < 0) {
    ketchupquantity = readLine.question('How many ketchup packets do you want?: ');
}
if (ketchupquantity != 0) {
    let ketchupcost = ketchupquantity*0.25;
    order.push(ketchupcost);
}

if (sandwichChoice != '' && beverageboolean != '' && fryselection != '') {
    let coupon = -1;
    order.push(coupon);
}

for (let i = 0; i < order.length; i++) {
    ordersum += order[i];
}

console.log(order);
console.log(ordersum);