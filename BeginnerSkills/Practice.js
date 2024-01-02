
/* Take the People array  and create an array called young people that stores 
Objects with ONLY name and emial properties of all the people that are 25 and ounder
the name property should have their last name and fisrt name
*/

const people = [
    {
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      phone: "555-1234",
      age: 30,
    },
    {
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      phone: "555-5678",
      age: 25,
    },
    {
      firstName: "Bob",
      lastName: "Johnson",
      email: "bob.johnson@example.com",
      phone: "555-9876",
      age: 40,
    },
    {
      firstName: "Alice",
      lastName: "Williams",
      email: "alice.williams@example.com",
      phone: "555-4321",
      age: 35,
    },
    {
      firstName: "Charlie",
      lastName: "Brown",
      email: "charlie.brown@example.com",
      phone: "555-8765",
      age: 28,
    },
    {
      firstName: "Emily",
      lastName: "Davis",
      email: "emily.davis@example.com",
      phone: "555-2345",
      age: 32,
    },
    {
      firstName: "David",
      lastName: "Miller",
      email: "david.miller@example.com",
      phone: "555-7890",
      age: 20,
    },
    {
      firstName: "Eva",
      lastName: "Garcia",
      email: "eva.garcia@example.com",
      phone: "555-3456",
      age: 22,
    },
    {
      firstName: "Frank",
      lastName: "Smith",
      email: "frank.smith@example.com",
      phone: "555-9012",
      age: 38,
    },
    {
      firstName: "Grace",
      lastName: "Taylor",
      email: "grace.taylor@example.com",
      phone: "555-6543",
      age: 23,
    },
  ];



const youngPeople = people
.filter((youth) => youth.age <= 25)
.map((peopleInfo) => {
    return{
        Name: peopleInfo.firstName + ' ' + peopleInfo.lastName,
        emails: peopleInfo.email,
        age: peopleInfo.age
    }
} );

console.log(youngPeople);


// Add the positive numbers in the array

const numbers = [2, -30, 50, 20, -12, -9, 7]
const positiveSum = numbers
.filter((positive) => positive > 0)
.reduce((acc, cur) =>  acc + cur, 0)

console.log(positiveSum)

/*Create a new array called CapitalisedWords with the words from the words of array 
with the first letter of each word capitalized */

const words = ['coder', 'programmer', 'developer', 'designer', 'engineer'];

const capitalisedWords = words
.map((first) =>
 first.charAt(0).toUpperCase() + first.substring(1)
)

console.log(capitalisedWords);