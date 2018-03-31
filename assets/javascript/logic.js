//Inial function to load on document ready
$(document).ready(function(){

  //#region initialize firebase, global config, and global variables
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
 

  //Javascript for Parallax function
  $('.parallax').parallax();
  $(document).ready(function(){
    $('.carousel').carousel();
  });

  $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });



//#endregion

//#region Initializing API scripts

//Google Maps with Traffic Layer API is in the HTML Doc

//Weather API Config Here

//weather api
var weather = "https://api.apixu.com/v1/current.json?key=cf2b992aa9b84d70b67132615183103&q=Orlando,FL"

//AJAX call
$.ajax({
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


//region push user inputs  to database



//------------------------------
//#endregion

//region create the results page

//Pull Valid List of Attractions

//Rate Attractions with Attributes per Age Group

//Generate Results based on input values



//------------------------------
//#endregion



//--------------------------------------
}); //End Tag for All Javascript