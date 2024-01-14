const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
       let error = true;

       if(!error){
        resolve({name: "Mohamed", age: 24})
       }else {
        reject("The are no more Users")
       }
    }, 2000)
});

promise
  .then((user) => {
    console.log(user)
    return user.name;
  })
  .then((name) => {
    console.log(name)
    return name.split('')
  })
  .then((nameSplit) => {
    console.log(nameSplit)
  })
  .catch((error) => {
    console.log(error)
    return `Hello world`
  })
  .then((world) => {
    console.log("The world will help you", world)
  })