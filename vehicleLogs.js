
$(function() {

        var Geo={};

        if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(success, error);
        }

        //Get the latitude and the longitude;
        function success(position) {
            Geo.lat = position.coords.latitude;
            Geo.lng = position.coords.longitude;
			Geo.timestamp = new Date(position.timestamp);
            populateTest(Geo.lat, Geo.lng, Geo.timestamp);
        }

        function error(){
            console.log("Geocoder failed");
        }

        function populateTest(lat, lng, timestamp){
            alert(lat+" lat and lang"+lng +"timestamp"+timestamp);
        }

    });
	
function getVehicleId(){
	var vehicleId = $(this).attr("data-vehicleId");	
	var vehicleName = $(this).html();
	return vehicleValue;
}

$(document).on("click", ".vehicleId" ,function(){
	var vehicleIds = $(this).attr("data-vehicleId");	
	var vehicleName = $(this).html();
	 // store some data
        if(typeof(Storage)!=="undefined") {
              localStorage.vehicleType=vehicleName;           
        }
		document.getElementById("vehicleType").innerHTML = localStorage.getItem("vehicleType");
        // Change page
        $.mobile.changePage("#vehicle");
	
});


$(document).on('click', '#goNext', function () {
  if ($.mobile.activePage.next('.ui-page').length !== 0) {
   var next = $.mobile.activePage.next('.ui-page');
   $.mobile.changePage(next, {
       transition: 'slide'
   });
  } 
});

$(document).on('click', '#goBack', function () {
  if ($.mobile.activePage.prev('.ui-page').length !== 0) {
   var prev = $.mobile.activePage.prev('.ui-page');
   $.mobile.changePage(prev, {
       transition: 'slide',
       reverse: true
   });
  }
});