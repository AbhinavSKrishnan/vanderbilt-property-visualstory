// Import dependencies
import * as L from 'leaflet';

// Import data
import properties from '../_data/vanderbilt_properties.json';

// Set the id of the div on the page where the map will go
const divId = 'map';

// Create the map
var map = L.map(divId, {
  scrollWheelZoom: true,
});

// Add a satellite layer
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  minZoom: 13,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

// Set the center and zoom
map.setView([36.148739, -86.803574], 12);

// Load the data
properties.forEach((obj) => {
  L.circleMarker([obj.lat, obj.long]) // As a pin ...
    .addTo(map)
    .bindTooltip(obj.Property_Use); // ... with a tooltip
});
