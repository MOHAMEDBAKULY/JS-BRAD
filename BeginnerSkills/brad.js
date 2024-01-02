let x;

let d = new Date();

x = d.toString();
x = d.getTime();
x = d.getMonth()
x = d.getFullYear()

x = `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDay()}/${d.getHours()}`

x = d.toLocaleString('default', { month: 'short'})

// console.log(x)

let y;

const numbers = [3, 4 ,5 , 6, 7];

y = numbers[3];

const colors = new Array('red', 'blue', 'green', 'white', 'yellow');

y = colors[2] + ' & ' + colors[0];

colors[2] = 'purple'

// y = colors.length;

y = colors;

// console.log(y)

let r;
const array = new Array(2, 3, 9, 7, 8, 6);

// array.push(30);
// 
// array.pop()
// 
// array.reverse()
// 
// r = array.includes(8)
// 
// r = array.indexOf(9)

// r = array.slice(2, 4)

// r = array.splice(0, 3)

// r = array.splice(2, 1)

r = array.splice(1, 5);
// .reverse().toString().charAt(2)
// console.log(r);

let u;

const names = ['one', 'two', 'three', 'four'];
const phones = ['Iphone', 'Samsung', 'Huawei', 'Oppo'];

// names.push(phones)


const phoneNames = [names, phones];
u = phoneNames[0][2];

u = names.concat(phones)

u = [...names, ...phones]

u = names;
// console.log(u);

let k;

const car = [1, 2, 3, 4, 5];

car.reverse()
.push(0)
car.unshift(10);


// console.log(car);

const arr1 = [1, 2, 3, 4, 5,];
const arr2 = [5, 6, 7, 8, 9, 10];

const arr3 = [...arr1, ...arr2]

arr3.splice(4, 1);

// console.log(arr3)

let h;

const person = {
    name: 'Mohamed Bakuly',
    age: 24,
    isAdmin: true,
    address: {
        road: 'Mbagathi Way',
        street: 'Highrise',
        block:'G6',
        number:29
    },
    Goals: ['PhotoHive', 'Martial Arts']
};

h = person.name;
h = person.address.block;
h = person.Goals[1]

person.age = 25;

h = person;

delete person.isAdmin;

person.graduate = 2025;

person.hello = function () {
    // console.log(`Next year i have to build more than reading ${this.name}`)
};

person.hello();

// console.log(h);

let j;

const todo = {};

todo.id = 1;
todo.Name = 'Buy Milk';
todo.Completed = false;

j = todo;

const kid = {
    height: 178,
    interest: {
        sports: 'Football',
        cartoon: 'Ben ten',
        outfit: 'Futuristic'

    }
}

j = {...todo, ...kid};

const tasks = [
    {one: 0, sleep: 'done early'},
    {two: 1, sleep: 'Bath first'},
    {three: 2, sleep: 'Maher Fisrt'}

]

j = tasks[1].sleep;

// j = Object.keys(kid);

// j = Object.keys(kid).length;

// j = Object.values(kid);

// j = Object.entries(kid);

j = kid.hasOwnProperty('height');

console.log(j);

const child = 'Younous';
const parent = 'Rashid';
const marks = '386';

const candidate = {
    child,
    parent,
    marks,
}

console.log(candidate.child);


// Destructuring Objects

const Chores = {
    id : 384,
    task: 'Become successful Innshallah',
    future: {
    career: 'Just make alot of money my brother',
    highschool: 'The best he will choose',
    }
};

const {
   id: index,
   task,
   future: { career}
 } = Chores;

console.log(task);

// Destruring Arrays 

const Bakulys = [350, 367, 386, 390];

const [first, second, ...rest] = Bakulys;

console.log(first, second, rest);

// {
//     "id"; "4",
//     "Name"; "Younous Rahsid",
//     "Age"; "15",

// };


const blog = {
    post: 1,
    title: 'Building PhotoHive',
    date: 2024
}

// Convert to  JSON string 
const str = JSON.stringify(blog)

// PARSE TO JSON
const parse = JSON.parse(str)
console.log(parse.post)

const blogs = [
    {
        post: 1,
        title: 'Building PhotoHive',
        date: 2024
    },
    {
        post: 2,
        title: 'Building PhotoHive and projects',
        date: 2024.0
    }    

]

const str2 = JSON.stringify(blogs);

const objs = JSON.parse(str2);

let v;

const thing = {A:1, B:2};
const thing1 = {C:3, D:4};

const thing2 = {...thing, ...thing1}

v = thing2;

v = Object.keys(thing2)

v = Object.entries(thing2)


const  nam = {
    age: 24,
    color: 'Black',
    skillLevel: 'Begginer',
    location: {
        City: 'Nairobi',
        subLocation: 'Kibera'
    }
}

const {
    age, 
    color,
    skillLevel,
    location: {location}
} = nam;

console.log(nam);

const letters = ['home', 'back', 'up', 'left'];

const [one, two, three] = letters;

console.log(one, two, three);