/*
project: Trail Walk
author: Team MainMethod
email: sondarvaparth@gmail.com
created: Sept 6, 2014
version: 1.0
known issues:
*/
var map;
$(document).ready(function(){
	map = new GMaps({
	div: '#google-map',
	lat: 43.587995,
	lng: -79.642905,
    zoom: 16,
	//remove default control options
	disableDefaultUI: true
  });
  

  
  //load borders for region of peel from kml file
  map.loadFromKML({
  url: 'https://sites.google.com/site/mainmethodkmlsite/munbnd_jan2013.kml?attredirects=0&d=1',
  suppressInfoWindows: true
  });
  
  if(localStorage.getItem("km15") == "selected"){
	//load 15km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Route_15km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km15", "unselected");
  
  map.addMarker({
  lat: 43.588302, 
  lng: -79.643726,
  title: 'Starting Point',
  icon: "imgs/gmapicons/dd-start.png",
  infoWindow: {
  content: 'Starting Point'
  }
  
  });
 
  map.addMarker({
  lat: 43.588094, 
  lng: -79.642983, 
  title: 'Ending Point',
  icon: "imgs/gmapicons/dd-end.png",
  infoWindow: {
  content: 'Finish Line'
  }
  
  });
  
  map.setZoom(17);
}


if(localStorage.getItem("km30") == "selected"){
	//load 30km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Route_30km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km30", "unselected");
  
    map.addMarker({
  lat: 43.588052, 
  lng: -79.642879,
  title: 'Starting Point',
  icon: "imgs/gmapicons/dd-start.png",
  infoWindow: {
  content: 'Starting Point'
  }
  
  });
 
  map.addMarker({
  lat: 43.586810, 
  lng: -79.643357, 
  title: 'Ending Point',
  icon: "imgs/gmapicons/dd-end.png",
  infoWindow: {
  content: 'Finish Line'
  }
  });
  map.setZoom(17);
  
}
if(localStorage.getItem("km60") == "selected"){
	//load 60km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Route_60km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km60", "unselected");
  
   map.addMarker({
  lat: 43.587612,  
  lng: -79.644624,
  title: 'Starting Point',
  icon: "imgs/gmapicons/dd-start.png",
  infoWindow: {
  content: 'Starting Point'
  }
  
  });
 
  map.addMarker({
  lat: 43.588381, 
  lng: -79.643712,  
  title: 'Ending Point',
  icon: "imgs/gmapicons/dd-end.png",
  infoWindow: {
  content: 'Finish Line'
  }
  });
  
   map.addMarker({
  lat: 43.585568,   
  lng:-79.645407, 
  title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_30.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });

   map.addMarker({
  lat: 43.584301,     
  lng:-79.643015, 
  title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_30.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
      map.addMarker({
  lat: 43.584130,    
  lng: -79.639603, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_30.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
    map.addMarker({
  lat: 43.583431,   
  lng:  -79.636245, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_30.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
  map.setZoom(17);
  
 

}
if(localStorage.getItem("km100") == "selected"){
	//load 100km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Route_100km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km100", "unselected");
   map.addMarker({
  lat: 43.588301, 
  lng:  -79.643799,
  title: 'Starting Point',
  icon: "imgs/gmapicons/dd-start.png",
  infoWindow: {
  content: 'Starting Point'
  }
  
  });
 
  map.addMarker({
  lat: 43.588002,  
  lng: -79.643011, 
  title: 'Ending Point',
  icon: "imgs/gmapicons/dd-end.png",
  infoWindow: {
  content: 'Finish Line'
  }
  });
      map.addMarker({
  lat: 43.591650,    
  lng:  -79.653782, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_60.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
   map.addMarker({
  lat: 43.590510,  
  lng:  -79.650697, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_90.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
  map.setZoom(17);
  
  
}
if(localStorage.getItem("km120") == "selected"){
	//load 120km track
		 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Route_120km.kml',
  suppressInfoWindows: true,
  preserveViewport: false,
  });
  
  localStorage.setItem("km120", "unselected");
  map.setCenter(43.586810,-79.643357);
  map.setZoom(16);
   map.addMarker({
  lat: 43.587946, 
  lng: -79.644206 ,
  title: 'Starting Point',
  icon: "imgs/gmapicons/dd-start.png",
  infoWindow: {
  content: 'Starting Point'
  }
  
  });
 
  map.addMarker({
  lat: 43.588396, 
  lng: -79.643669, 
  title: 'Ending Point',
  icon: "imgs/gmapicons/dd-end.png",
  infoWindow: {
  content: 'Finish Line'
  }
  });
  
     map.addMarker({
  lat: 43.588249,   
  lng:  -79.645515, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_90.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
       map.addMarker({
  lat: 43.589679,    
  lng:  -79.647435, 
 title: 'Follow this direction',
  icon: "http://maps.google.com/mapfiles/dir_90.png",
  infoWindow: {
  content: 'Follow this direction'
  }
  });
  
}
});