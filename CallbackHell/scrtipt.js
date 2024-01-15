const getData = (endpoint) => {

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open('GET', endpoint);

    xhr.onreadystatechange =  function () {
        if(this.readyState === 4 ){
        if(this.status === 200){
          resolve(JSON.parse(this.responseText))
        }
       reject("Something went wrong on  our side")
        }
    }

  setTimeout(() => {
    xhr.send();
  }, Math.floor(Math.random() * 3000) + 1000)
  })
}


getData('./directors.json')
     .then((directors) => {
      console.log(directors)
      return getData('./actors.json')
     })
  .then((actors) => {
    console.log(actors)
    return getData('./movies.json')
  })
  .then((movies) => {
    console.log(movies)
  })
  .catch((error) => {
    console.log(error)
  })
