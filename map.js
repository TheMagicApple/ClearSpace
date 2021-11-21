function showPosition() {
  
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      coordinates = [position.coords.latitude, position.coords.longitude];
      localStorage.setItem("Coords",JSON.stringify(coordinates)); 
      })
                
             
        } else {
            alert("Sorry, your browser does not support HTML5 geolocation.");
        }
    
}
showPosition();
var coordinates=JSON.parse(localStorage.getItem("Coords"));

coordinates[0]=parseFloat(coordinates[0]);
coordinates[1]=parseFloat(coordinates[1]);
//alert(coordinates[1]  + ", " + coordinates[0]);

// New York
const latitudeNY = 41.145556;
const longitudeNY = -73.995;

const latitudeLondon = 51.50853;
const longitudeLondon = -0.12574;

const latitudeMV = 37.40;
const longitudeMV = -122.08;

const latitudeToronto = 43.70011;
const longitudeToronto = -79.4163;

//-122.0870681, 37.4066464


const mapWidth = 1365;
const mapHeight = 720;



/**
 * @param {number} latitude in degrees
 * @param {number} longitude in degrees
 * @param {number} mapWidth in pixels
 * @param {number} mapHeight in pixels
 */
function latLonToOffsets(latitude, longitude, mapWidth, mapHeight) {
  const radius = mapWidth / (2 * Math.PI);
  const FE = 180; // false easting

  const lonRad = degreesToRadians(longitude + FE);
  const x = lonRad * radius;

  const latRad = degreesToRadians(latitude);
  const verticalOffsetFromEquator =
    radius * Math.log(Math.tan(Math.PI / 4 + latRad / 2));
  const y = mapHeight / 2 - verticalOffsetFromEquator;


  return { x, y };
}

/**
 * @param {number} degrees
 */
function degreesToRadians(degrees) {
  return (degrees * Math.PI) / 180;
}


var offsetX = -5;
var offsetY = 40;
//alert(coordinates[0]);
//alert(coordinates[1]);
var pos = latLonToOffsets(coordinates[0],coordinates[1], mapWidth, mapHeight);
var marker = document.getElementById("Marker");
marker.style.left = (pos.x+offsetX) + "px";
marker.style.top = (pos.y+offsetY) + "px";