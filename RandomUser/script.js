const fetctUser = () => {
   fetch('https://randomuser.me/api')
     .then((res) => res.json())
     .then((data) => {
         displayUser(data.results[0])
     })

}

const displayUser = (user) => {
    const userDisplay = document.querySelector('#user')
    console.log(user.gender)
    if(user.gender === 'female'){
        document.body.style.backgroundColor = '#F24C00'
    }else[
        document.body.style.backgroundColor = '#485696'

    ]

    userDisplay.innerHTML = ` 
    <img class="image" src="${user.picture.large}" alt="">
    <ul class="user-details">
       <li class="Name"><span>Name:</span> ${user.name.first} ${user.name.last}</li>
       <li class="Email"><span>Email:</span> ${user.email}</li>
       <li class="Phone"><span>Phone:</span> ${user.phone} </li>
       <li class="Location"><span>Location:</span> ${user.location.city} ${user.location.country}</li>
       <li class="Nationality"><span>Nationality:</span> ${user.nat} <li>
       <li class="Age"><span>Age:</span> ${user.dob.age} <li>
    </ul>
    `;
}

const button = document.querySelector('.btn');

button.addEventListener('click', fetctUser)

fetctUser()