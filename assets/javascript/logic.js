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