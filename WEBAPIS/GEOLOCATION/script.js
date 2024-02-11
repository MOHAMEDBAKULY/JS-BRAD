// const div = document.querySelector('.location')
// const list = document.querySelectorAll('.one')

// div.style.color = "red";


// const displayLocation = () => {
//    const div2 = document.createElement('ul')
//    div2.className = "loc"
//    div2.innerHTML = `
//    <li class="one">Latitude</li>
//    <li class="one">Longitude</li>
//    <li class="one">Accuracy</li>
//    `

//    document.querySelector('div').appendChild(div2)
// }
// document.addEventListener('DOMContentLoaded', displayLocation)

// GET CURRENT POSITION WATCH POSITION
// const curSuccess = (pos) => {
//     const coords = pos.coords;
//  console.log(`Latitude: ${coords.latitude}`)
//  console.log(`Longitude: ${coords.longitude}`)
//  console.log(`Within: ${coords.accuracy} meters`)
// }

// const curError = (err) => {
//     console.log(`Error: ${err.code} - ${err.message}`)
// }

// const  curoptions = {
//     enableHighAccuracy: true, // Use GPS IF AVAIBALE
//     timeout: 5000, // time to wait to stop trying for location
//     maximumAge: 0 // Do not use a cached position
// }



// navigator.geolocation.getCurrentPosition(curSuccess, curError, curoptions)

const destination = {
    latitude: -1.2262016,
    longitude: 36.8357822
}

const watchSuccess = (pos) => {
    const coords = pos.coords;
    console.log(coords)

    if(destination.latitude === coords.latitude && destination.longitude === coords.longitude){
        console.log("You Have reached your destination")
        navigator.geolocation.clearWatch(id);
    }
}

const watchError = (err) => {
    console.log(`Error: ${err.code} - ${err.message}`)
}

const  watchoptions = {
    enableHighAccuracy: true, // Use GPS IF AVAIBALE
    timeout: 5000, // time to wait to stop trying for location
    maximumAge: 0 // Do not use a cached position
}



const id = navigator.geolocation.watchPosition(watchSuccess, watchError, watchoptions)