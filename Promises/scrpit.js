// Creating a new Promise
const promise = new Promise((resolve, reject) => {
    // Do some asyn Tasks
    setTimeout(() => {
      console.log('Async Task Complete');
      resolve();
    }, 1000)
})

// Handling a Promise 
// Passing anything to resolve
// promise.then(() => {
//    console.log('Promise Complete....')
// });

const getUser = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;

        if(!error){
            resolve({ name: 'Mohamed', age: 24});
        }else {
            reject('Error: Something Went wrong')
        }
    }, 1000)
});

getUser
.then((user) => console.log(user))
.catch((error) => console.log(error))
.finally(() => console.log('The promise has been rejected or resolved'))
      







console.log('Hello Global scope')