/*—————————————————————COORDINATES of the venues—————————————————————————————————————————————————————————————————————————————*/
var waldemars_SALON = [52.54273, 13.35463]; // Schimmler: Triftstr. 52
var peace_NOW = [52.4754811, 13.3269651]; // Simon: Bachestr. 5, 12161 Berlin
var pankow_STUDIOS = [52.56674, 13.39128]; // Mona, Hannah & Co: Schulzestraße 27, 13187 Berlin
var mitte_SCHNITTE = [52.5339463, 13.3706187]; // Chris & Co: Scharnhorststr. 25
var virtual_REALITY = [52.4873781, 13.3540318]; // Marius VR: Belziger Str. 20, 10823 Berlin
var more_BEAT = [52.5324298, 13.3509281]; // Denis & David: Rathenowerstr. 26
var cat_IVERSE = [52.5225983, 13.3310714]; // Luise: Levetzowstr. 25
var escape_ROOM = [52.5189103, 13.4601073]; // Roland: Zellestraße 9 – 10247 Berlin
var secret_PLACE = [55.7479872, 37.5923261]; // Place in Moskow

// Get the map data
var map = L.map('waldemars_SALON').setView(waldemars_SALON, 17);

// TileFilter from https://github.com/xtk93x/Leaflet.TileLayer.ColorFilter
var myFilter = [      // für waldemars_SALON
  'invert:100%',
  'hue:78deg',
  'saturate:200%'
];


var myTileLayer = L.tileLayer.colorFilter('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    attribution: '<a href="https://wikimediafoundation.org/wiki/Maps_Terms_of_Use">Wikimedia</a>',
    filter: myFilter,
}).addTo(map);

/* Original tileLayer
// Add a tile layer that visualizes the data. Here mapbox. But could be anything
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 17,
    id: 'mapbox.dark',
    accessToken: 'pk.eyJ1IjoicmFwaG1jIiwiYSI6ImNqb2VtNGRheTJ4eXcza3JzbjgxOG5tYXEifQ.vAWPb2QXm5Urn_z9aS3a4A'
}).addTo(map);
*/

/*—————————————————————VENUES—————————————————————————————————————————————————————————————————————————————*/

// waldemars_SALON marker
var wS_marker = L.VectorMarkers.icon({
  icon: 'paw',
  markerColor: '#e540c2'
  // spin: 'true'
});

// create popup contents
var wS_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/UtS2PR1GAtR2'>waldemars_SALON</a></h3><i><a style='color: white;' href='https://goo.gl/maps/UtS2PR1GAtR2'>Triftstr. 52 — 13353 Berlin</a></i>";

// specify popup options
var wS_Options =
    {
    'maxWidth': '500',
    'className' : 'magenta'
    }

function goToOnClick(e) {
  map.flyTo(e.latlng);
}

// create marker object, pass custom icon as option, pass content and options to popup, add to map
var marker_waldemar_SALON = L.marker(waldemars_SALON, {icon: wS_marker}).on('click', goToOnClick).bindPopup(wS_Popup,wS_Options).addTo(map).openPopup();


// Old marker
// var marker_waldemar_SALON = L.marker(waldemars_SALON, {icon: wS_marker}).addTo(map);
// // Add a popup to the marker. Here .openPopup() means it is opend directly. Only on markers
// marker_waldemar_SALON.bindPopup("<b>waldemars_SALON</b><br>Triftstr. 52<br>This is boar territory!").openPopup();

// peace_NOW Marker
var pN_marker = L.VectorMarkers.icon({
  icon: 'peace',
  markerColor: '#3ee485'
});

var pN_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/j83zjq6GEov'>peace_NOW</a></h3><i><a style='color: white;' href='https://goo.gl/maps/j83zjq6GEov'>Bachestr. 5 — 12161 Berlin</a></i>";

var pN_Options =
    {
    'maxWidth': '500',
    'className' : 'green'
    }

var marker_peace_NOW = L.marker(peace_NOW, {icon:pN_marker}).on('click', goToOnClick).bindPopup(pN_Popup, pN_Options).addTo(map);

// cat_IVERSE marker
var cI_marker = L.VectorMarkers.icon({
  icon: 'cat',
  markerColor: '#fd6504'
});

var cI_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/V6p6yTvQw8S2'>cat_IVERSE</a></h3><i><a style='color: white;' href='https://goo.gl/maps/V6p6yTvQw8S2'>Levetzowstr. 25 — 10555 Berlin</a></i>";

var cI_Options =
    {
    'maxWidth': '500',
    'className' : 'orange'
    }

var marker_cat_IVERSE = L.marker(cat_IVERSE, {icon:cI_marker}).on('click', goToOnClick).bindPopup(cI_Popup, cI_Options).addTo(map);


// pankow_STUDIOS marker
var pS_marker = L.VectorMarkers.icon({
  icon: 'om',
  markerColor: '#fff424'
});

var pS_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/2hZB8RBXeH32'>pankow_STUDIOS</a></h3><i><a style='color: white;' href='https://goo.gl/maps/2hZB8RBXeH32'>Schulzestraße 27 — 13187 Berlin</a></i>";

var pS_Options =
    {
    'maxWidth': '500',
    'className' : 'yellow'
    }

var marker_pankow_STUDIOS = L.marker(pankow_STUDIOS, {icon:pS_marker}).on('click', goToOnClick).bindPopup(pS_Popup, pS_Options).addTo(map);

// mitte_SCHNITTE marker
var mS_marker = L.VectorMarkers.icon({
  icon: 'cocktail',
  markerColor: '#33ccff'
});

var mS_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/K8ekNMtxdmS2'>mitte_SCHNITTE</a></h3><i><a style='color: white;' href='https://goo.gl/maps/K8ekNMtxdmS2'>Scharnhorststr. 25 – 10115 Berlin</a></i>";

var mS_Options =
    {
    'maxWidth': '500',
    'className' : 'blue'
    }

var marker_mitte_SCHNITTE = L.marker(mitte_SCHNITTE, {icon:mS_marker}).on('click', goToOnClick).bindPopup(mS_Popup, mS_Options).addTo(map);

// more_BEAT marker
var mB_marker = L.VectorMarkers.icon({
  icon: 'grin-beam-sweat',
  markerColor: '#33ccff'
});

var mB_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/VNkj39i5NNx'>more_BEAT</a></h3><i><a style='color: white;' href='https://goo.gl/maps/VNkj39i5NNx'>Rathenowerstr. 26 — 10559 Berlin</a></i>";

var mB_Options =
    {
    'maxWidth': '500',
    'className' : 'blue'
    }

var marker_more_BEAT = L.marker(more_BEAT, {icon:mB_marker}).on('click', goToOnClick).bindPopup(mB_Popup, mB_Options).addTo(map);


// virtual_REALITY marker
var vR_marker = L.VectorMarkers.icon({
  icon: 'vr-cardboard',
  markerColor: '#33ccff'
});

var vR_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/Ry5ykoayYw22'>virtual_REALITY</a></h3><i><a style='color: white;' href='https://goo.gl/maps/Ry5ykoayYw22'>Belziger Str. 20 — 10823 Berlin</a></i>";

var vR_Options =
    {
    'maxWidth': '500',
    'className' : 'blue'
    }

var marker_virtual_REALITY = L.marker(virtual_REALITY, {icon:vR_marker}).on('click', goToOnClick).bindPopup(vR_Popup, vR_Options).addTo(map);

// escape_ROOM marker
var eR_marker = L.VectorMarkers.icon({
  icon: 'lock',
  markerColor: '#33ccff'
});

var eR_Popup = "<h3><a style='color: black;' href='https://goo.gl/maps/HZjkJwQTYX92'>escape_ROOM</a></h3><i><a style='color: white;' href='https://goo.gl/maps/HZjkJwQTYX92'>Zellestr. 9 – 10247 Berlin</a></i>";

var eR_Options =
    {
    'maxWidth': '500',
    'className' : 'blue'
    }

var marker_escape_ROOM = L.marker(escape_ROOM, {icon:eR_marker}).on('click', goToOnClick).bindPopup(eR_Popup, eR_Options).addTo(map);

// secret_PLACE marker
var sP_marker = L.VectorMarkers.icon({
  icon: 'lock',
  markerColor: '#7e42ff'
});

var sP_Popup = "<h3>secret_PLACE</h3><i>Mh ... sure it's here?</i>";

var sP_Options =
    {
    'maxWidth': '500',
    'className' : 'purple'
    }

var marker_secret_PLACE = L.marker(secret_PLACE, {icon:sP_marker}).on('click', goToOnClick).bindPopup(sP_Popup, sP_Options).addTo(map);

/*—————————————————————FOOD—————————————————————————————————————————————————————————————————————————————*/

// Custom food icon
var soupIcon = L.icon({
    iconUrl: './img/bowl.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var coffeeIcon = L.icon({
    iconUrl: './img/coffee.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var barIcon = L.icon({
    iconUrl: './img/bar.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var spaetiIcon = L.icon({
    iconUrl: './img/kiosk.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var pizzaIcon = L.icon({
    iconUrl: './img/pizza.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var doenerIcon = L.icon({
    iconUrl: './img/kebab.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

var appleIcon = L.icon({
    iconUrl: './img/apple.svg',
    iconSize: [36, 90], // size of the icon
    popupAnchor: [0,-15]
    });

// Kubi
var kubi_Popup = "<b>Kubi</b><br><i>Here you can find some great vietnamese food!</i>";
var kubi_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var kubi = L.marker([52.5414675, 13.3500555], {icon:soupIcon}).on('click', goToOnClick).bindPopup(kubi_Popup, kubi_Options).addTo(map);


// Hanoi Green
var hanoi_Popup = "<b>Hanoi Green</b><br><i>If you like Glutamate, that's your place! Makes the food taste great!</i>";
var hanoi_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var hanoi = L.marker([52.4747843, 13.3281126], {icon:soupIcon}).on('click', goToOnClick).bindPopup(hanoi_Popup, hanoi_Options).addTo(map);

// Kleine Mensa
var kleine_MENSA_Popup = "<b>Kleine Mensa</b><br><i>Nice and cosy café with great cakes!</i>";
var kleine_MENSA_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var kleine_MENSA = L.marker([52.5431950, 13.3567809], {icon:coffeeIcon}).on('click', goToOnClick).bindPopup(kleine_MENSA_Popup, kleine_MENSA_Options).addTo(map);

// Pizzeria Stranero
var pizza_STRANERO_Popup = "<b>Pizzeria Stranero</b><br><i>best italian Pizza in Wedding</i>";
var pizza_STRANERO_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var pizza_STRANERO = L.marker([52.5521497, 13.3638240], {icon:pizzaIcon}).on('click', goToOnClick).bindPopup(pizza_STRANERO_Popup, pizza_STRANERO_Options).addTo(map);

// Pizza DeLUX
var pizza_DELUX_Popup = "<b>Pizza DeLUX</b><br><i>Good and cheap pizza slices!</i>";
var pizza_DELUX_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var pizza_DELUX = L.marker([52.5456079, 13.3583690], {icon:pizzaIcon}).on('click', goToOnClick).bindPopup(pizza_DELUX_Popup, pizza_DELUX_Options).addTo(map);

// getraenke Hoffmann
var getraenke_HOFFMANN_Popup = "<b>Getränke Hoffmann</b><br><i>In case you want to buy a pack of beer</i>";
var getraenke_HOFFMANN_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var getraenke_HOFFMANN = L.marker([ 52.5451476, 13.3580805], {icon:spaetiIcon}).on('click', goToOnClick).bindPopup(getraenke_HOFFMANN_Popup, getraenke_HOFFMANN_Options).addTo(map);

// falafel Humbaba
var falafel_HUMBABA_Popup = "<b>Falafel Humbaba</b><br><i>Little 'Falafel Mann' in the heart of Moabit (The 'Vegan Mix' plate is quite amazing!) </i>";
var falafel_HUMBABA_Options =  {
    'maxWidth': '250',
    'className' : 'blue2'
    }
var falafel_HUMBABA = L.marker([52.5263088, 13.3382169], {icon:doenerIcon}).on('click', goToOnClick).bindPopup(falafel_HUMBABA_Popup, falafel_HUMBABA_Options).addTo(map)




$( document ).ready(function() {

    $(".waldemars_SALON").click(function() {
      map.flyTo(waldemars_SALON);    //[53.54273, 13.35463]
      marker_waldemar_SALON.openPopup();
    });

    $(".peace_NOW").click(function() {
      map.flyTo(peace_NOW);
      marker_peace_NOW.openPopup();
    });

    $(".pankow_STUDIOS").click(function() {
      map.flyTo(pankow_STUDIOS);
      marker_pankow_STUDIOS.openPopup();
    });

    $(".mitte_SCHNITTE").click(function() {
      map.flyTo(mitte_SCHNITTE);
      marker_mitte_SCHNITTE.openPopup();
    });

    $(".virtual_REALITY").click(function() {
      map.flyTo(virtual_REALITY);
      marker_virtual_REALITY.openPopup();
    });

    $(".more_BEAT").click(function() {
      map.flyTo(more_BEAT);
      marker_more_BEAT.openPopup();
    });

    $(".cat_IVERSE").click(function() {
      map.flyTo(cat_IVERSE);
      marker_cat_IVERSE.openPopup();
    });

    $(".escape_ROOM").click(function() {
      map.flyTo(escape_ROOM);
      marker_escape_ROOM.openPopup();
    });

    $(".secret_PLACE").click(function() {
      map.flyTo(secret_PLACE);
      marker_secret_PLACE.openPopup();
    });

});
