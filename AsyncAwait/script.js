const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve({name: 'Mohamed', age: 24})
    }, 1000)
})

// promise.then((data) => console.log(data))

async function getPromise() {
    const res = await promise;
    console.log(res)
}

// getPromise();

async function getUsers() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users?_limit=5')
    const data = await res.json();

    console.log(data)
}

const getPost = async () => {
  const res = await  fetch('https://jsonplaceholder.typicode.com/users/posts');
  const data = await res.json()

  console.log(data)
}

// getUsers();