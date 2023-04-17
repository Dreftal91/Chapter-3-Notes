//create an object of key=value pairs
let contacts = {
    bff: 1234567,
    mom: 5555555,
    bro: 1231231
};

//log all
console.log(contacts);

//access a specific entry by its key
console.log(contacts.bff);

//can't access if the key doesn't exist
console.log(contacts.me);

//add a new entry
contacts.sis = 1233333;
console.log(contacts);

//update an entry
contacts.bff = 1111111;
console.log(contacts);

//delete an entry
delete contacts.mom;
console.log(contacts);

//is there a key called __ in there?
console.log("bff" in contacts);
console.log("me" in contacts);

//objects are like arrays - pass by reference not by value
//notice the following
let a = {
    value: 20
};
let b = a;
let c = {
    value: 20
};

console.log(a == b);
console.log(a == c);
console.log(b == c);

console.log(a.value == c.value);

let dog = {
    dogName: 'Zelda',
    breed: 'Terrier',
    age: 9,
    size: 'medium',
    barks: true,
};
console.log(dog);

let shoes = {
    Name: 'Ol trusties',
    brand: 'Avia',
    age: 4,
    size: 'medium',
    ripped: true,
};
console.log(shoes);

let phone = {
    Name: 'Scratchy',
    model: 'Motorola',
    age: 2,
    size: 'medium',
    defaultLanguage: 'Spanish',
};
console.log(phone);

let sweater = {
    Name: 'FamilyHouse',
    Race: 'Family House March',
    age: 1,
    size: 'Large',
    language: 'English',
};
console.log(sweater);

let usaFlag = {
    country: 'USA',
    colors: ['white', 'blue', 'red'],
    favorite: false,
    scale: 7.2,
    patriotic: true,
};
console.log(usaFlag);

let hand = {
    usable: true,
    size: 'medium',
    uses: '???',
    amount: 2,
    favorite: true
};
console.log(hand);