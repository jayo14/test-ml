
let name = 'John is 8';
console.log(name);

// CANNOT be a reserved keyword
// Should be meaningful
//Cannot be a number
//cannot contain a space or hyphen (-)
//Are case-sensitive


let firstName = 'Sam', lastName = 'John';  //This is fine, not the most appropriate
console.log(firstName, lastName)
//Instead it should be done this way:
let FirstName = 'Sam'
let LastName = 'John';  //I used uper-case because i have already used the varibale before
console.log(FirstName, LastName)


// CONSTANTS
//const interestRate = 0.3;
//interestRate = 1
//console.log(interestRate)

//TYPES
//Primitive/Value Types : Strings, Number, Boolean, Undefined, Null
let Name = 'John'; // String literal
let age = 30; // Number literal
let isApproved = true; // Boolean literal
let fIrstname = undefined;
let selectedColor = null;


//Dynamic Typing
//It can be changed after it has been assigned. USe DevTools

//Reference Types: Object, Array, Function
// OBJECTS
let person = {
    name: 'John',
    Age: 30
}

//Methods
//1.  Dot Notation
person.name = 'Mosh';
console.log(person.name)

//2.  Bracket Notation
person['name'] = 'Mary';
console.log(person['name'])
//OR
let selection = 'name';
person[selection] = 'Mary';
console.log(person['name'])

//ARAYS (It is known as LIST in Python)
let selectedColors = ['red', 'blue'];
selectedColors[2] = 1 //(Like append in python)
console.log(selectedColors.length) //length (len in python)
//INDEXING
console.log(selectedColors[0])

//FUNCTIONS
//Performing a task
function greet(namE) {
    console.log('Hello ' + namE + ' ' + lastName);
}

greet('John', 'Smith');

// Calculating a value
function square(number) {
    return number * number;
}
square(2);console.log(square(2));
let number = 2;


// String Primitive
const message = 'This is my first message';

// String Object
const another = new String('hi')

// If...else

let hour = 8;

if (hour >= 6 && hour < 12) 
    console.log('Good Morning')
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon')
else
    console.log('Good Evening')

// 