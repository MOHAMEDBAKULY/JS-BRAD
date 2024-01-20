const creatPost = ({title, body}) => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title,
            body
        }),
        headers:{
            'Content-Type': 'application/json',
             token: 'Lubnah-Nurse'
        },
    }).then((res) => res.json())
     .then((data) => console.log(data))
}

creatPost({title: 'Mastery of JavaScript', body: 'The journey has been amazing so far i love it'})