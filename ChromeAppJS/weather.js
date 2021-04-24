const COORDS = 'coords'

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