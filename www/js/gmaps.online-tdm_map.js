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
	lat: 43.6000,
	lng: -79.6500,
    zoom: 9,
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
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Tour2013route15km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km15", "unselected");
}
if(localStorage.getItem("km30") == "selected"){
	//load 30km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Tour2013route30km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km30", "unselected");
}
if(localStorage.getItem("km60") == "selected"){
	//load 60km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Tour2013route60km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km60", "unselected");
}
if(localStorage.getItem("km100") == "selected"){
	//load 100km track
	 map.loadFromKML({
  url: 'http://mobile.sheridanc.on.ca/~sondarva/TDMKmlFiles/Tour2013route100km.kml',
  suppressInfoWindows: true
  });
  localStorage.setItem("km100", "unselected");
}
if(localStorage.getItem("km120") == "selected"){
	//load 120km track
	
}
});