/*
project: Trail Walk
author: Team MainMethod
email: jonathan.zarate@outlook.com
created: August 10, 2014
version: 1.0
known issues:
*/
// access token obtained from mapbox account
L.mapbox.accessToken = 'pk.eyJ1IjoianZtemFyYXRlIiwiYSI6IlphYk5aZW8ifQ.3FW7slDRwyGDtlGUm9uO9Q';
// 
var map = L.mapbox.map('mapbox-map', 'examples.map-i86nkdio').setView([43.6000, -79.6500], 10);
map.addControl(L.control('bottomleft'));

var runLayer = omnivore.kml('https://sites.google.com/site/mainmethodkmlsite/munbnd_jan2013.kml?attredirects=0&d=1').on('ready', function() {
        map.fitBounds(runLayer.getBounds());
    }).addTo(map);
