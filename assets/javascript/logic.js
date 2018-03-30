//Inial function to load on document ready
$(document).ready(function(){
//Initialize Firebase For Users Collection
  var config = {
        apiKey: "AIzaSyCRmQIgP5QRngV4cj6Z0bDnabYv-5_1vF8",
        authDomain: "orlandotravelproject.firebaseapp.com",
        databaseURL: "https://orlandotravelproject.firebaseio.com",
        projectId: "orlandotravelproject",
        storageBucket: "orlandotravelproject.appspot.com",
        messagingSenderId: "182828242079"
    };
  firebase.initializeApp(config);
 

  //Initialize APIs Here
  //------------------------------------------


  //Google Maps with Traffic Layer API 
  //------------------------------------------
  function initMap() {
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 13,
      center: {lat: 28.3834207, lng: -81.6121108} //Need to change to match Orlando coordinates
    });
    var trafficLayer = new google.maps.TrafficLayer();
    trafficLayer.setMap(map);
  }



  //Begin Javascript Here
  //------------------------------




//--------------------------------------
}); //End Tag for All Javascript