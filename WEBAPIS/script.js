const div = document.querySelector('.location')
const list = document.querySelectorAll('.one')

list.style.color = "red";

const curSuccess = (pos) => {
    const coords = pos.coords;
 console.log(`Latitude: ${coords.latitude}`)
 console.log(`Longitude: ${coords.longitude}`)
 console.log(`Within: ${coords.accuracy} meters`)
}

const curError = (err) => {
    console.log(`Error: ${err.code} - ${err.message}`)
}

const  options = () => {
    
}




navigator.geolocation.getCurrentPosition(curSuccess, curError, options)