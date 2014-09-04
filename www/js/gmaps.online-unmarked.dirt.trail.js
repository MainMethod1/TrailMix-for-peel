/*
project: Trail Walk
author: Team MainMethod
email: jonathan.zarate@outlook.com
created: August 10, 2014
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
  if(window.localStorage.getItem("blane_cbox") == "checked"){
	   //load bicycle lanes from kml file
	  	   map.loadFromKML({
		   url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_BicycleLanes_Edited.kml?attredirects=0&d=1',
		   suppressInfoWindows: false
	      });
	      console.log("Bicycle lane loaded");
    }
    
   if(window.localStorage.getItem("htrail_cbox")== "checked"){
			    //load hiking trails from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_HikingTrails_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  console.log("Hiking trails loaded");
    }
    
   if(window.localStorage.getItem("sbroute_cbox")== "checked"){
			    //load signed bike route trails from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/View%20of%2020140813_MarkedOnRoadRoutes_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  console.log("Signed bike routes loaded");
    }
    
    if(window.localStorage.getItem("pmutrail_cbox")== "checked"){
    
	       //load paved multi-use trails part 1 from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_PavedMultiUseTrails_1.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  //load paved multi-use trails part 2 from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_PavedMultiUseTrails_2.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  //load paved multi-use trails part 3 from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_PavedMultiUseTrails_3.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  //load paved multi-use trails part 4 from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_PavedMultiUseTrails_4.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
         
          console.log("Paved multi-use trails loaded");
    }
    
    if(window.localStorage.getItem("umdtrail_cbox")== "checked"){
	  //load un-marked dirt trails from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_UnmarkedDirtTrails_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  
		  console.log("Un-marked dirt trails loaded");
    }
    
    if(window.localStorage.getItem("unpavedmutrail_cbox")== "checked"){
	 
		  //load un-paved multi-use trails from kml file
		  map.loadFromKML({
		  url: 'https://sites.google.com/site/mainmethodkmlsite/20140813_UnpavedMultiUseTrails_Edited.kml?attredirects=0&d=1',
		  suppressInfoWindows: false
		  });
		  console.log("Unpaved multi-use trails loaded");
    }
});


