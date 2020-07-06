var map = L.map('mapid').setView([43.8041, -120.5542], 6.5)

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoicGhlbGFuam8iLCJhIjoiY2tjOWw4bmgxMWh6YzJxdDZ5ZW82OXN1aCJ9.R9F2w2tqQ6z19C6629N9tQ'
}).addTo(map);