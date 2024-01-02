function hello() {
    console.log('Welcome to JavaScript')
}

hello();

function add(one, two){
    console.log(one + two);
}

add(7, 9);

function divide(one, two){
    return one / two
}

divide(8, 2)

function registeredUser(user) {
    return user + ' is registered';
}

console.log(registeredUser('Lubnah'));

function sum(...nums) {
    let total = 0;

    for (const num of nums) {
      total += num
    }

    return total;
}

console.log(sum(3, 5, 6, 8, 9));

function loginUser(user) {
    return `Welcome ${user.name} Your id is ${user.id}`
}

const user = {
    id: 456,
    name:'Bakuly'
}

console.log(loginUser(user));

function getRandom(...arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);

    const item = arr[randomIndex];

    console.log(item);
}

getRandom(3, 9 , 7, 5, 40, 72, 92)

// console.log(nnerWidth)

const y = 300;

console.log(y , 'in Global');

function run() {
    // console.log(window.innerWidth);
}

run();

// function getCelcius(Fehrenheit) {
//   const celcius = (Fehrenheit - 32 )+ 5 / 9
//   return celcius;
// }

const getCelcius = (f) => ( (f - 32 ) * 50) / 9;

console.log(`The temperature is ${getCelcius(32)} \xB0C`);


const minMax = (arr) => {
    const min = Math.min(...arr)
    const max = Math.max(...arr)

    return {
        min, 
        max
    }
};

// console.log(minMax([1,2,3,4,5,6,7,8,9,10]));

( function(length, width) {
    const area = length * width;

    const output =`The area of a rectangele with a length of ${length} and a width of ${width} is ${area}`;

    // console.log(output)
}) (20, 50);


function getCelci(f) {
    return (f - 32) * 5 / 9;
}

console.log(getCelci(80));

function mnMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);

   return {
    min, 
    max
   }
}

console.log(mnMax([1, 3, 4, 5, 6, 7, 8, 9, 20]))

// ( function (len, wid) {
//   const area = len * wid;

//   const output = `The area of a rectangle has a width of ${wid} and length of ${len} is ${area} meters`

//    console.log(output);
// // }) (40, 70);







