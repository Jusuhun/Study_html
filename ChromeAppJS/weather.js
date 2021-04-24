const COORDS = 'coords'

function handleGeoSucces(position){
    console.log(position);
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
    }
}

function init(){
    loadCoords();
}

init();