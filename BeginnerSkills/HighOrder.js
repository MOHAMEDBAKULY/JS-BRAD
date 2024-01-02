
// FOR LOOP

// for (let i = 0; i <= 10; i += 2){
//   if (i === 6){
//     console.log(' 6 This is the middle number')
//   }else{
//       console.log('Number ' + i)
//   }
// }

// Nesting of Loops

// for (let i = 0; i <= 40; i++){
    // console.log('Number ' + i)
// 
    // for(let j = 1; j <= 3; j++){
        // console.log(`${i} * ${j} = ${i * j}`)
    // }
// }

// const colors = ['Blue', 'yellow', 'green', 'white', 'red'];

// for (let i = 0; i < colors.length; i++){
//     if (colors[i] === 'green'){
//         console.log(`${colors[i]} is the right color for nature`)
//     }else{
//         console.log(`${colors[i]} color  `)
//     }
// }



// Break and Continue statements 
// for(let i = 0; i <= 20; i++){
//     if (i === 10){
//         console.log('10 We are half way the journey');
//         break;
//     }

    // console.log(i)
// }

// Continue
// for (let i = 0; i <= 20; i++){
//   if(i === 16){
//     console.log('16 Never take this');
//     continue;
//   }

//     console.log(i)
// }

//  while (i <= 20){
    //     console.log('Number ' + i);
    //     i++;
//  }

// const nums = [19, 30, 49, 82, 37, 10, 67, 89, 17, 25]

// while(i < nums.length){
//     console.log(nums[i]);
//     i += 2;
// }

// Nesting While Loops
let i = 0;

while(i <= 8){
    // console.log('Number ' + i);

    let j = 1;
    while(j <= 8){
        // console.log(`${i} * ${j} = ${i * j}`)
        j++;
    }

    i++;
}



// FIZZZBUZZ CHALLENGE

// for (let i = 1; i <= 100; i++) {
// 
    // if (i % 15 === 0){
        // console.log('FizzBuzz')
    // }else if (i % 3 === 0) {
    //    console.log('Fizz')
    // }else if (i % 5 === 0){
        // console.log('Buzz')
    // }else{
        // console.log(i)
    // }
// 
// }
// 
// 
// let j = 1;
// 
// while( j <= 100){
    // if (j % 15 === 0){
        // console.log('FizzBuzz')
    // }else if (j % 3 === 0) {
    //    console.log('Fizz')
    // }else if (j % 5 === 0){
        // console.log('Buzz')
    // }else{
        // console.log(j)
    // }
    // j++;
// }
// 



const names = ['Mohamed', 'Rashid', 'Khamis', 'Hemed', 'Bakuly']


for (const key in names){
    // console.log(names[key])
}

// LOOP THROUGH ARRAY
const friends = [
   { MKU: 'Nzai'},
   {UMMMA: 'Nura'},
   {UON: 'Robert'},
   {ZITECH: 'Ahmed'}
]

for (const friend of friends){
    // console.log(friend)
}

// lLOOP OVER STRINGS
const company = 'PHOTOHIVE';

for (const comp of company){
    // console.log(comp)
}

// LOOP OVER MAPS

const map = new Map();
map.set('name','Mohamed');
map.set('weight', 60);

for(const [key, value] of map){
    // console.log(key, value)
}

const player = 'Messi'

for (const play of player){
    // console.log(play.toUpperCase().replace('ME', 'Pe'))
}


const colors = {
    col1: 'blue',
    col2: 'red',
    col3:'white',
    col4: 'yellow',
    col5: 'green'
}

for (const key in colors){
    // console.log(key, colors[key])
}
// HIGH OREDER ARRAY

const cities = [
    'Mombasa', 
    'Nairobi',
    'Kisumu', 
    'Nakuru', 
    'Eldoret',
    'Wajir']

// console.log(cities.__Proto__);

// cities.forEach(function (city) {
//     console.log(city)
// })

// cities.forEach((city, index, arr) => console.log(`${index} for ${city}`, arr))

function logCities(city){
//    console.log(city)
}

cities.forEach(logCities)

const houses = [
    {number: 36, floor: 7},
    {number: 26, floor: 5},
    {number: 66, floor: 10},  
    {number: 76, floor: 23}
]

// houses.forEach((item) => console.log(item.floor))c


// const evenNumbers = numbers.filter((num) => {return num % 4 === 0});

// console.log(evenNumbers);

// numbers.forEach((num) => console.log(num % 4 === 0))

const companies = [
    { name: "Google", category: "Technology", foundingDate: 1998, acquisitionDate: 2029 },
    {name: "Amazon",category: "E-commerce",foundingDate: 1999, acquisitionDate: 2028 },
    { name: "Microsoft", category: "Technology", foundingDate:  1985, acquisitionDate: 2027 },
    { name: "Tesla", category: "Automotive", foundingDate: 2003, acquisitionDate: 2024 },
    { name: "Facebook", category: "Social Media", foundingDate: 2004, acquisitionDate: 2025},
    {name: "Netflix",category: "Streaming",foundingDate: 1997,acquisitionDate: 2024 },
    {name: "SpaceX",category: "Space",foundingDate: 2002, acquisitionDate: 2023 },
    { name: "Uber", category: "Transportation", foundingDate: 2009, acquisitionDate: 2022 },
    { name: "Airbnb",category: "Hospitality",foundingDate: 2008, acquisitionDate: 2020},
    {name: "Intel",category: "Semiconductors", foundingDate:  1998, acquisitionDate: 2020 },
  ];
  
// Create an array of Company names
const companyName = companies.map((item) => item.name);

// Create an array with just companies and categories
const companyCategory = companies.map((item) => {
    return {
        name: item.name,
        category: item.category
    }
})

// Create an array of the lenght of each company in years 
const years = companies.map((item) => item.acquisitionDate - item.foundingDate)

const companyYears = companies.map((item) => {
    return {
        name: item.name,
        years: item.acquisitionDate - item.foundingDate,
    }
})

// Chain map methods 
const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

const sub2Add5 = numbers
.map((subtract) => subtract - 2)
.map((add) => add + 5)
.map((words) => words + ' JavaScript is magical');


// Chaining different mwethods

const devideBy3 = numbers
.filter((item) => item % 3 === 0)
.map((num) => num + 10)


const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue

}, 0);


const cart = [
    {id: 0, name: 'Product 1', price: 130},
    {id: 1, name: 'Product 2', price: 40},
    {id: 2, name: 'Product 3', price: 276}
];

const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.price
}, 0)


console.log(totalPrice);


const num = [1, 20, 3, 4, 5, 6, 7, 8, 9, 10];

const numbo = num.reduce((acc, cur) => {
    return acc + cur
}, 0)


// console.log(numbo)


let digits = [];
let acc = 0;
num.forEach((cur) => {
  return  digits.push(acc += cur)
})

console.log(digits)


















// Get only technology companies 

const techCompanies = companies.filter((item) => item.category === 'Technology');

let techieCompany = [];

companies.forEach((company) => {
    techieCompany.push(company.category === 'Technology')

})

// console.log(techCompanies)

const Semiconduct = companies.filter((item) => item.category === 'Semiconductors')


// console.log(Semiconduct)
  
// Get companies that started in or after 1998 and aquired  in or before 2024

const In1998OrAfter = companies.filter((item) => item.foundingDate >= 1998 && item.acquisitionDate <= 2024)

// console.log(In1998OrAfter)

// Get Companies that lasted 30 years or more 

const lastingCompanies = companies.filter((item) => item.acquisitionDate - item.foundingDate > 30 );

// console.log(lastingCompanies)

const nums = [ 1, 3, 4, 5,6, 8, 10]

const doubleNums = nums.map((item) => 'Number ' + item);

// console.log(doubleNums)

// Same with forEach

const doubling2 = [];

nums.forEach((number) => {
    doubling2.push(number * 2)
})

// console.log(doubling2)