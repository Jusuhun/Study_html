const weather = document.querySelector(".js-weather");
const API_KEY = "97a13d6020d0fdcae84489a78fb4a788"
const COORDS = 'coords'

function getWeather(lat, lng){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
        ).then(function(response){
            return response.json();
        }).then(function(json){
            const temp = json.main.temp;
            const place = json.name;
            weather.innerText = `${temp} @ ${place}`;
        });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
    //console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // const coordsObj = {
    //     latitude:latitude,
    //     longitude:longitude
    // }
    //same
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    getWeather(latitude,longitude);
}

function handleGeoErrors(){
    console.log("Can't access");
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoErrors);
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){
        askForCoords();
    } else {
        // GetWeather
        const parseCoords = JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}

init();