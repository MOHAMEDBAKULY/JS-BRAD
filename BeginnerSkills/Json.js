const country = {
    president: 'Ruto',
    age: 55,
    country: 'Kenya'
}

const str = JSON.stringify(country);

const par = JSON.parse(str)

console.log(par);

const library = [
    {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    status: {
        own: true,
        reading: false,
        read: false,
    }
    },
    {
        title: 'Rework',
        author: 'Thomson Job',
        status: {
            own: true,
            reading: false,
            read: false,
        }
        },

        {
            title: 'The nector',
            author: 'Ibn Zubair',
            status: {
                own: true,
                reading: false,
                read: false,
            }
            },
]

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true

// console.log(library);

const { title: firstBook } = library[0];

console.log(firstBook);

const string = JSON.stringify(library);

console.log(string);