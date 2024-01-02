// Calculator challenge

function Calculator(num1, num2, operator) {
    let calculation;

    switch (operator){
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        default:
            result = 'Invalid Operator';
    }

    console.log(result);
    return result;
}

Calculator(5, 6, '/');


const players = 0;

if (players !== undefined) {
    console.log(`Each team should only have ${players} players only`);
}else{
    console.log('Not allowed to participate');
}

const  post = [];

if (post.length > 0) {
    console.log('You have updates feed')
}else {
    console.log('No updates currently')
}


// Checking fpr empty objects
const user = {
    name: 'Mohamed Bakuly',
    name: 'Lubnah Rashid'
};

if(Object.keys(user).length > 0) {
    console.log('Someone is available')
}else {
    console.log('No User')
}


// Loose Equality (==)

let c;

c = 30 && 20;
c = 0 && 13
c = 50 && 10 && 80
// console.log(c)

const Post = [];
// Post.length > 0 && console.log(Post[0])


// && OR operator 

let b;

b = 10 || 20;
b = 0 || 15;
b = 0 || null || '' || undefined

// console.log(b)

//  ?? NUliish 

let g;

g = 20 ?? 28;
g = null ?? 29
g = undefined ?? 40;
g = 0 ?? 30;
g = '' ?? 50;

// console.log(g)

//  ||= (OR) Logic Operator Assigns the right side value only if the left is a falsy value
let a = 20;

if (!a){
    a = 10;
}

a = a || 10;

a ||= 10;
console.log(a)


// &&= (AND) logic Operator Assigns the right value only if the left is a truthy Value

let r = 20;

if (r){
    r = 30;
}

b &&= 20;
console.log(r)

// ??= (NULLISH) Logic Operator Assigns the right side value only if the left is null or undefined
let d = undefined;

if (d === undefined || d === null){
    d = 10
}

c ??= 10;
console.log(d)


const Age = 24;

Age >= 24 ? console.log('I Have to build my startUp') : console.log('Learn and know people')

//  Assigning Variables to teneary statements
const BuildStartUp = Age >= 24 ? 'Your Business is ready' : 'You have to Build one '

console.log(BuildStartUp);

// Multiple statements

const auth = false;
// let redirect;

// if (auth) {
//     alert('Welcome to the dashBoard');
//     redirect = '/dashboard'
// }else{
//     alert('Access denied');
//     redirect = '/login'
// }

// console.log(redirect);

// const redirect = auth 
// ? (alert('welcome to the dashboard'), '/dashbord')
// : (alert('Access Denied'), '/login');

// console.log(redirect);


auth ? console.log('Welcome to the dashboard') : null;

auth && console.log('Welcome to the dashBoard');