const x = 100;

if (true) {
    const y = 200;
    // console.log(x + y)
}

// console.log(x + y)

for (let i = 0; i <= 10; i++) {
    // console.log(i)
}

if (true) {
    const a = 300;
    let b = 200;
    var c = 100;
}

// console.log(c)

function first() {
    const x = 290;

    function second() {
        const y = 200;
        console.log(x + y);
    }

    // second()
}

// first();

( function () {
    const user = 'Bakuly';
    console.log(user)
    const welcome = () => console.log('Understand JavaScript this is the last time reading it');
    welcome();
})();

(function (name) {
  console.log('Are you okay ' + name)
})('lubnah');

(function infinite() {
    console.log('Recursion');
    infinite()
})();