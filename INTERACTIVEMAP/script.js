const map = L.map('map').setView([0, 0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition((pos) => {
   const lat = pos.coords.latitude;
   const long = pos.coords.longitude;


   marker.setLatLng([lat, long]).update();
   map.setView([lat, long], 13);

   marker.bindPopup(`<strong>Testing Geolocation From here</strong> br
   can you see me`)
})










// L.marker([51.5, -0.09]).addTo(map)
//     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//     .openPopup();