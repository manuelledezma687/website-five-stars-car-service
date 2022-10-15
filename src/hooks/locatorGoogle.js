google.maps.event.addDomListener(window, 'load', initialize);

    function initialize() {

      var pick_up = document.getElementById('pick_up');

      var autocomplete = new google.maps.places.Autocomplete(pick_up);

      var destiny = document.getElementById('destiny');

      var autocomplete = new google.maps.places.Autocomplete(destiny);
      autocomplete.addListener('place_changed', function () {

        var place = autocomplete.getPlace();
  
        // place variable will have all the information you are looking for.
  
        $('#lat').val(place.geometry['location'].lat());
  
        $('#long').val(place.geometry['location'].lng());
  
      });
  
    }


