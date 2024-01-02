let first = "MOHAMEDBAKULY"
// console.log(first);

function num(x, y){
    return x + y
}

// console.log(num(2 + 4));
// console.log(num(2 + 4));

let firstName = "Mohamed";
let secondName = "Bakuly";

let fullName = firstName + secondName;

// console.log(firstName, secondName);
// console.log(fullName);

let age = 24;

console.log(` I'm ${fullName} Student at JKUAT aged ${age} Eager to build my startup next year.`);

let cities = ['Mombasa', 'Nairobi', 'Nakuru', 'Eldorate'];
// console.log(cities);

cities.push('Kisimu', 'Lamu');
cities.unshift('Mandera', 'Embu');

// console.log(cities);
// console.log(cities)

const course = {
    name: 'Information Technology',
    duration: '18 months',
    level: 'Diploma',
    semesters: 4,
    admission: 2023 
}

course.graduation = 2025;

// console.log(course);

const Mywife = 'Lubnah Rashid'
const nume = 40;

const output = nume;

// console.log(nume, typeof nume)

// Values are stored on the stack
const name = 'Abbas';
const Age = 25;

// Reference values are stored on the heap

const Person = {
    Name: 'Yuonus',
    Age: 15
};

let newName = name;
newName = 'Khalid';

let newPerson = Person;
newPerson.Name = 'Khamis'

// console.log(name, newName);
// console.log(Person, newPerson)

let amount = 'Hello';

// Change string to number
amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// Change number to string
// amount = amount.toString();
// amount = String(amount);

// Convert to string to decimal 
// amount = parseFloat(amount);

// Convert number to Boolean
// amount = Boolean(amount)


console.log(amount, typeof amount);


let y ;

y = 4 + 2;
y = 4 * 2;
y = 4 - 2;
y = 4 / 2;
y = 5 % 2;

// Contetination 
y = 'Hello ' + 'World';

// Exponetial
y = 4 ** 2;

// Increament
y = 2;
y++;

// Decrement 
y = 2;
y--;

// Assignment Operator

y = 10;
// y = y + 4;
y += 4;
y -= 4;
y /= 4;
y *= 4;

// Comparison Operator
y = 15 == 15;
y = 15 === '15';

y = 15 !== 15;


// console.log(y)

let m;

m = 5 + '5';

m = 5 + Number('5');

m = 5 * '5';

m = 5 + null;

m = Number(null);

m = Number(true);
m = Number(false);

m = 5 +  true;

m = 5 + false;

m = 5 + undefined;

console.log(m, typeof m);

let f;

const nam = 'Bakuly';
const ages = 24;

// Template Literals
f = `Hello my name is ${nam} I'm turning ${ages} next year`;

// String Properties and Methods

const p = `Next Year I'm  Building PhotoHive`;

f = p.length;

f = p[6];

f = p.__proto__;

f = p.toLowerCase();
f = p.toUpperCase();

f = p.charCodeAt(3);

f = p.charAt(2);

f = p.endsWith('e');

f = p.search('be')

f = p.substring(0, 16)

f = p.slice(5, 20);

f = '                 hi';

f = f.trim();

f = p.split('')

f = p.replace('ext', 'ooo');

// console.log(f);


const myString = 'developer';

let newString;

newString  = myString.charAt(0).toUpperCase() + myString.slice(1, 9);

newString = myString[0].toUpperCase() + myString.substring(1);

newString = `${myString[0].toUpperCase()}${myString.substring(1)}`

// console.log(newString);
// 

let g;

const numbr = new Number(16);

g = numbr.toString();

g = numbr.toString().length;

g = numbr.toFixed(2)

g = numbr.toPrecision(2);

g = numbr.toExponential(2)
console.log(g);


let h;

h = Math.sqrt(6)

h = Math.abs(-8)

h = Math.round(8.90)

h = Math.ceil(7.5)

h = Math.floor(3.7)

h = Math.pow(4, 6)

h = Math.min(7, 3, 1)

h = Math.max(6, 2, 4)

h = Math.floor(Math.random() * 50 + 1);
console.log(h);

let d; 

d = new Date();

d = d.toString();

d = Date.now();

d = new Date();

d = d.getTime()

d = new Date(1700704060204).toString()

console.log(d)