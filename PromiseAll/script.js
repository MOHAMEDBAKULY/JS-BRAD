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
  
// const moviePromise = getData('./movies.json')
// const actorsPromise = getData('./actors.json')
// const directorsPromise = getData('./directors.json')

// Promise.all([moviePromise, actorsPromise, directorsPromise])
//  .then((data) => {
//   console.log(data)
//  })
//  .catch((error) => {
//   console.log(error)
//  })



async function getAllData () {
   const directors = await getData('./directors.json')
   const movies = await getData('./movies.json')
   const actors = await getData('./actors.json')
   console.log(actors, directors, movies)

}

const getAllDataWithFecth = async ()  => {
     const moviesRes = await fetch('./movies.json')
     const movies = await moviesRes.json();

     const directorsRes = await fetch('./directors.json')
     const directors = await directorsRes.json();

     const actorsRes = await fetch('./actors.json')
     const actors = await actorsRes.json();

     console.log(movies, directors, actors)
}



const getAllDataWithPromiseAll = async ()  => {
     const [moviesRes, directorsRes, actorsRes] = await Promise.all([
      fetch('./movies.json'),
      fetch('./directors.json'),
      fetch('./actors.json')
     ])

     const movies = await moviesRes.json();
     const directors = await directorsRes.json();
     const actors = await actorsRes.json();

     console.log(movies, directors, actors)


}


const getAllDataWithPromiseAll2 = async ()  => {
  const [movies, directors, actors] = await Promise.all([
   fetch('./movies.json').then(res => res.json()),
   fetch('./directors.json').then(res => res.json()),
   fetch('./actors.json').then(res => res.json())
  ]);
 

  console.log(movies, directors, actors);
}
// getAllData();
// getAllDataWithFecth();
// getAllDataWithPromiseAll();
getAllDataWithPromiseAll2();















