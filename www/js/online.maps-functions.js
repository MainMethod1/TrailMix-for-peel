/*
project: Trail Walk
author: Team MainMethod
email: jonathan.zarate@outlook.com
created: August 10, 2014
version: 1.0
known issues:
	marker title currently not showing
*/
//find current location
function findMe() { 
	  GMaps.geolocate({
		  //on success, get the position
	  success: function(position) {
		  //remove the previous marker
	  map.removeMarkers();
		  //center the map relative to the user's current location
	  map.setCenter(position.coords.latitude, position.coords.longitude);
		  //set the zoom level
	  map.setZoom(15);
		  //add a marker
	  map.addMarker({
			lat: position.coords.latitude,
			lng: position.coords.longitude,
			title: 'You are here.',
			icon: "imgs/gmapicons/test.gif",
			animation: google.maps.Animation.DROP,
		    //enables custom gif to be animated
			optimized: false
			});
		},
	  error:   function(error) {
    				alert('Geolocation failed: '+error.message);
  				},
  	  not_supported: function() {
                alert("Your browser does not support geolocation");
  				}	
	  });

	};
//track myLocation
/*function trackMe() { 
	  
	  GMaps.geolocate({
		  //on success, get the position
	  success: function(position) {
		//var markers [];
		var options = {
		enableHighAccuracy: true,
		timeout: 5000,
		maximumAge: 0
		};

		function success(pos) {
		var crd = pos.coords;
        
		console.log('Your current position is:');
		console.log('Lat : ' + crd.latitude);
		console.log('Long: ' + crd.longitude);
		console.log('More or less ' + crd.accuracy + ' meters.');
		console.log(crd.speed);

		  //center the map relative to the user's current location
		  map.setCenter(position.coords.latitude, position.coords.longitude);
			  //set the zoom level
		  map.setZoom(15);
		  
		  //add a marker
		  map.addMarker({
		  lat: position.coords.latitude,
		  lng: position.coords.longitude,
		  title: 'You are here.',
		  icon: "imgs/gmapicons/gmapcycling.png"
		  });
		};

		function error(err) {
			console.warn('ERROR(' + err.code + '): ' + err.message);
		};

	  navigator.geolocation.watchPosition(success, error, options);
	
		}/*,
	  error:   function(error) {
    			alert('Geolocation failed: '+error.message);
  				},
  	  not_supported: function() {
                alert("Your browser does not support geolocation");
  				}	
	  });  
};*/
//caledon trails
function showTrailsCal() {
		$("#menupanel").panel("close");
		map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Caledon_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
	};
//brampton trails
function showTrailsBramp() {
		$("#menupanel").panel("close");
		map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Brampton_Part_1_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Brampton_Part_2_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
	};
//mississauga trails
function showTrailsMiss(){
	$("#menupanel").panel("close");
		map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Mississauga_Part_1_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Mississauga_Part_2_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
	};
//other trails
function showTrailsOther() {
	$("#menupanel").panel("close");
	map.loadFromKML({
	  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_Other_Edited.kml?attredirects=0&d=1',
	  suppressInfoWindows: false
	  });
};

function openInDevMsg() {
	  //must initialize popup first prior to 'opening' it
        $('#indev').popup();
		$('#indev').popup('open');
    };

