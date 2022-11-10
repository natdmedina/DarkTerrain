// copy pasted Boilerplate javascript cade below

//function to start the Leaflet map
function createMap(){

    //Varibles for attribution box on the map.
    var mbAttr = '<a href="http://openstreetmap.org">OpenStreetMap</a> |' +' <a href="http://mapbox.com">Mapbox</a>'; //You can add you name to the variable if you want to add yourself to the credits.
    
    //Variable for storing your Mapbox API Token
    var apitoken = 'pk.eyJ1IjoibmF0ZG1lZGluYSIsImEiOiJjbGE5YXYzaWgwMHZvM29xbmtvZDd1b2dpIn0.hD5Rh10lsqQgS01RJrdU6Q' //Enter your API Token - go to 'https://www.mapbox.com/install/' to yours */
    
     //URL used for Stanard MaxBox Styles
    var mbUrl = 'https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={token}';
    
    //URL used for Custom MapBox Style
    var mbStyleUrl = 'https://api.mapbox.com/styles/v1/{id}/tiles/256/{z}/{x}/{y}?access_token={token}';
    
    //For Custome basemaps - Replace your username and StyleID
    var darkterrain = L.tileLayer(mbStyleUrl, {id: 'natdmedina/cla9b3z1i000d14qpyzk34uzq', token: apitoken,  attribution: mbAttr});
    
    //For MabBox Standard Basemaps
    var standardBasemap = L.tileLayer(mbUrl, {id: 'mapbox.light', token: apitoken, attribution: mbAttr});
    
    // additional basemap options
    var outdoors = L.tileLayer(mbUrl, {id: 'mapbox.outdoors', token: apitoken, attribution: mbAttr});

    //create the map*/
    var map = L.map('map', {
        center: [31.00, -5],//Coordinated to center the map
        zoom: 6, //zoom level
        layers:darkterrain //basemap
    });
    
    var baselayers = {
            "Standard": standardBasemap,
            "Outdoors": outdoors,
            "Terrain": darkterrain            
    };

    L.control.layers(baselayers).addTo(map);
   
    L.control.scale().addTo(map);

};

//calling the funcation
$(document).ready(createMap);