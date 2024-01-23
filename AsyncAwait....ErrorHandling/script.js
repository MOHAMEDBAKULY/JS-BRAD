const getJokes = async () => {
    try{
        const res = await fetch('https://api.chucknorris.io/jokes/random')
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')

        // const res = await fetch('http://httpstat.us/416')

        const data = await res.json();

        if(res.status === 404){
            if(res.status === 416){
               throw new Error('Requested Range Not Satisfiable')
            }
            throw new Error('There is a problem on our side, wait we are fixing it')
        }

        console.log(data)
    }catch(error)  {
        console.log(error)
    } 
  
};

getJokes()


const getPosts = async () => {

        // const res = await fetch('https://api.chucknorris.io/jokes/rand0m')
        // const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')

        const res = await fetch('http://httpstat.us/416')

        const data = await res.text();

        if(res.status === 404){
            if(res.status === 416){
               throw new Error('Requested Range Not Satisfiable')
            }
            throw new Error('There is a problem on our side, wait we are fixing it')
        }

        console.log(data)

  
};

getPosts().catch((error) => console.log(error));











// const url = 'https://sales-tax-rates1.p.rapidapi.com/v/api/?zip=99502';
// const options = {
	// method: 'GET',
	// headers: {
		// 'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
		// 'X-RapidAPI-Host': 'sales-tax-rates1.p.rapidapi.com'
	// }
// };
// 
// try {
	// const response = await fetch(url, options);
	// const result = await response.text();
	// console.log(result);
// } catch (error) {
	// console.error(error);
// }