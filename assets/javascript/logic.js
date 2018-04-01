//Inial function to load on document ready
$(document).ready(function(){

//#region initialize firebase, global config, and global variables

  //Initialize Firebase For Users Data Collection
  var config = {
        apiKey: "AIzaSyCRmQIgP5QRngV4cj6Z0bDnabYv-5_1vF8",
        authDomain: "orlandotravelproject.firebaseapp.com",
        databaseURL: "https://orlandotravelproject.firebaseio.com",
        projectId: "orlandotravelproject",
        storageBucket: "orlandotravelproject.appspot.com",
        messagingSenderId: "182828242079"
    };
  firebase.initializeApp(config);
 
  // Define database variables
  var db = firebase.database();
  // Database reference for guests
  var guestsRef = db.ref("/guests");
  var ridesRef = db.ref("/attractions")
 
  // Javascript for HTML Parallax function
    $('.parallax').parallax();
    $(document).ready(function(){
      $('.carousel').carousel();
    });

  // Javascript for HTML Carousel function
    $('.carousel.carousel-slider').carousel({
      fullWidth: true
    });

  // Javascript for HTML Form Function
  $(document).ready(function(){
    $('select').formSelect();
  });
  $(".dropdown-trigger").dropdown();

  // Global Variables
    //object for guest input
    guest = { 
      name: "",
      adults: 0,
      children: 0,
      infants: 0
      }


//#endregion

//#region Initializing API scripts

//Google Maps with Traffic Layer API is in the HTML Doc

//Weather API Config Here

//weather api
var weather = "https://api.apixu.com/v1/current.json?key=cf2b992aa9b84d70b67132615183103&q=Orlando,FL"

//AJAX call
$.ajax({
  async: false, // Should prevent error in console
  url: weather,
  method: "GET"
}).then(function(response) {
    console.log(response);

    //storing weather data
    var tempC = response.current.temp_c;
    var tempF = response.current.temp_f;
    var condition = response.current.condition.text;
    var conditionImage = response.current.condition.icon;

    //Creating tags for the elements
    var displayF = $("<p>").text("Temp (in Fahrenheit): " + tempF);
    var displayC = $("<p>").text("Temp (in Celsius): " + tempC);
    var displayCondition = $("<p>").text("Condition is " + condition);
    var displayIcon = $("<img>").attr("src", "http:" + conditionImage);

    //Putting it in the weather div
    $("#weather").append(displayF);
    $("#weather").append(displayC);
    $("#weather").append(displayCondition);
    $("#weather").append(displayIcon);
    
});


//Wikipedia API Config Here

//Youtube API Config Here


//------------------------------------------
//#endregion

//#region push user inputs  to database
$("#submit").on("click", function(event) {

  // Get the input values
  guest.name = $("#nameInput").val().trim();

    // If-Else statements to accomodate if the user doesn't make a selection (nulls)
    if (($("#adultsInput").val() == null) || ($("#adultsInput").val() == 0)) { guest.adults = "0"} 
    else guest.adults =  $("#adultsInput").val().trim();
    if (($("#childrenInput").val() == null) || ($("#childrenInput").val() == 0)) { guest.children = "0"} 
    else guest.children =  $("#childrenInput").val().trim();
    if (($("#infantsInput").val() == null) || ($("#infantsInput").val() == 0)) { guest.infants = "0"} 
    else guest.infants =  $("#infantsInput").val().trim();

  // Console log the input values as the Guest Object
  console.log(guest)

  // Push the "guest" object to firebase
  guestsRef.push({
    guest: guest
    });  

});



//------------------------------
//#endregion


//#region create the results page


//Pull Valid List of Attractions


//Rate Attractions with Attributes per Age Group


//Generate Results based on input values



//------------------------------
//#endregion

//--------------------------------------
}); //End Tag for All Javascript