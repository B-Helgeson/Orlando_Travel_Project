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
  var adultsRef = db.ref("/attractions/adultsList")
  var kidsRef = db.ref("/attractions/kidsList")
  var babiesRef = db.ref("/attractions/babiesList")
  var bothRef = db.ref("/attractions/kidsAndBabiesList")
 
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
  //To Do: Connect to wikipedia API, or just save a paragraph of text for each ride in the attractions JSON list

//Youtube API Config Here
  // To Do: Connect to the Youtube API, or just imbed a youtube URL for each ride in the attractions JSON list.


//------------------------------------------
//#endregion

//#region push user inputs  to database
$("#submit").on("click", function(event) {
  event.preventDefault();
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


//Pull Valid List of Attractions from firebase database


rideList = [] // Client-Side JavaScript Variable to contain the FireBase Attraction List
// rideList is blank upon page load so that it only gets pushed with the values we want based on the database selected


function adultsOnly () {
  // Function to Push Adult Ride List to the rideList var
  adultsRef.on("child_added", function(snap){
  rideList.push(snap.val())
  console.log(snap.val().attractionName)
});
}

function withKids () {
  // Function to Push Adult + Kids Ride List to the rideList var
  kidsRef.on("child_added", function(snap){
  rideList.push(snap.val())
  console.log(snap.val().attractionName)
});
}

function withBabies () {
  // Function to Push Adult + Babies List to the rideList var
  babiesRef.on("child_added", function(snap){
  rideList.push(snap.val())
  console.log(snap.val().attractionName)
});
}

function withKidsAndBabies () {
  // Function to Push Adult + Babies List to the rideList var
  bothRef.on("child_added", function(snap){
  rideList.push(snap.val())
  console.log(snap.val().attractionName)
});
}


//console-logging the updated variable and values
console.log(rideList)


//execute function that changes the ride list to "adults only" for the list function below
//adultsOnly();



// Calculate the custom ranked list of attractions based on the Guest Input
/* This section should do the following:
  - Determine the # of guests that fall into each demographic age group (if statements)
*/



//Logic to switch the attraction list based on demographics
$("#submit").on("click", function(event) {
  event.preventDefault();

  if (guest.children > 0 && guest.infants > 0 ) {
    withKidsAndBabies();
    console.log("Kids and Babies")
  } 
  else if (guest.children == 0 && guest.infants > 0) {
    withBabies();
    console.log("Babies only")
  }
  else if (guest.children > 0 && guest.infants == 0 ) {
    withKids();
    console.log("Kids only")
  }
  else {
    adultsOnly();
    console.log("Adults only")
  }
})



//Generate Results Table based on input the custom values as calculated above 
  $("#loadResults").on("click", function(event) {
    event.preventDefault();
    // To do: Change this function to be triggered by the "Submit" in nav bar

    //Removes existing table results before re-populating the table
    $("#results-table > tbody").empty(); 

    // for each to generate the table of results based on attributes
    for (var i = [0]; i < rideList.length; i++) {
    $("#results-table > tbody").append(
      "<tr><td>" + (parseInt([i]) + 1 ) +             // table column 1 = "customized Rank"
      "</td><td>" + rideList[i].attractionName +      // table column 2 = "Attraction Name"
      "</td><td>" + rideList[i].heightRequirement +   // table column 3 = "Height Requirement"
      "</td><td>" + rideList[i].adultRank +           // table column 4 = "Description" (wikipedia)
      "</td><td>" + rideList[i].childRank +           // table column 5 = "Ride Vide" (YouTube)
      "</td></tr>");
    }
  
    //To Do, update table values to reflect "custom rank", "description (wikipedia)", "video (youtube)"
  })


//------------------------------
//#endregion

//--------------------------------------
}); //End Tag for All Javascript