var nameVar = 'Andrew';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie'; 
// let nameLet = 'Julie'; // => wrong
console.log('nameLet', nameLet);


const nameConst = 'Frank';
// nameConst = 'Gunther'; // => Wrong
console.log('nameConst', nameConst);

var fullName = 'Andrew Mead';

if (fullName) {
    var firstName = fullName.split(' ')[0];
    let firstNameLet = fullName.split(' ')[0];
}

console.log(firstName);
// console.log(firstNameLet); // => wrong

