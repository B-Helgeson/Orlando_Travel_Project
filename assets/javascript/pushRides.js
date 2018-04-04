//Inial function to load on document ready
$(document).ready(function(){

    /* To Use this page....
            1. Swap out this file with existing script on the main HTML page using "pushRides.js" in the custom script tag
            2. Update the list of attractions in the JSON Object below
            3. A "csv to JSON" formatter can be used to quickly generate the JSON from Excel (https://www.csvjson.com/csv2json)
            4. Once this page loads, it will update firebase (https://console.firebase.google.com/project/orlandotravelproject/database/orlandotravelproject/data)
            5. Aftwerwards, change HTML back to "logic.js"
    */

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

    //#endregion

// Create the list of attractions as a JSON Object
var adultsList = 

{
  "A Pirates Adventure: Treasure of the Seven Seas interactive game" : {
    "adultRank" : 31,
    "attractionName" : "A Pirates Adventure: Treasure of the Seven Seas interactive game",
    "childRank" : 27,
    "heightRequirement" : "none",
    "infantRank" : 14
  },
  "Ariel's Grotto" : {
    "adultRank" : 21,
    "attractionName" : "Ariel's Grotto",
    "childRank" : 9,
    "heightRequirement" : "none",
    "infantRank" : 5
  },
  "Astro Orbiter" : {
    "adultRank" : 8,
    "attractionName" : "Astro Orbiter",
    "childRank" : 24,
    "heightRequirement" : "none",
    "infantRank" : 27
  },
  "Barnstormer featuring the Great Goofini" : {
    "adultRank" : 24,
    "attractionName" : "Barnstormer featuring the Great Goofini",
    "childRank" : 5,
    "heightRequirement" : "35 inches",
    "infantRank" : 29
  },
  "Big Thunder Mountain Railroad" : {
    "adultRank" : 2,
    "attractionName" : "Big Thunder Mountain Railroad",
    "childRank" : 13,
    "heightRequirement" : "40 inches",
    "infantRank" : 30
  }
}


var kidsList =
  {
  "Buzz Lightyear's Space Ranger Space Spin" : {
    "adultRank" : 13,
    "attractionName" : "Buzz Lightyear's Space Ranger Space Spin",
    "childRank" : 14,
    "heightRequirement" : "none",
    "infantRank" : 13
  },
  "Carousel of Progress" : {
    "adultRank" : 14,
    "attractionName" : "Carousel of Progress",
    "childRank" : 33,
    "heightRequirement" : "none",
    "infantRank" : 21
  },
  "Country Bear Jamboree" : {
    "adultRank" : 15,
    "attractionName" : "Country Bear Jamboree",
    "childRank" : 29,
    "heightRequirement" : "none",
    "infantRank" : 15
  },
  "Dumbo" : {
    "adultRank" : 25,
    "attractionName" : "Dumbo",
    "childRank" : 3,
    "heightRequirement" : "none",
    "infantRank" : 1
  },
  "Enchanted Tales with Belle" : {
    "adultRank" : 19,
    "attractionName" : "Enchanted Tales with Belle",
    "childRank" : 8,
    "heightRequirement" : "none",
    "infantRank" : 4
  }}

  var babiesList = 
  {
  "Hall of Presidents" : {
    "adultRank" : 10,
    "attractionName" : "Hall of Presidents",
    "childRank" : 32,
    "heightRequirement" : "none",
    "infantRank" : 23
  },
  "Haunted Mansion" : {
    "adultRank" : 4,
    "attractionName" : "Haunted Mansion",
    "childRank" : 19,
    "heightRequirement" : "none",
    "infantRank" : 17
  },
  "It's a Small World" : {
    "adultRank" : 18,
    "attractionName" : "It's a Small World",
    "childRank" : 16,
    "heightRequirement" : "none",
    "infantRank" : 8
  },
  "Jungle Cruise" : {
    "adultRank" : 7,
    "attractionName" : "Jungle Cruise",
    "childRank" : 11,
    "heightRequirement" : "none",
    "infantRank" : 11
  },
  "Liberty Belle River Boat" : {
    "adultRank" : 29,
    "attractionName" : "Liberty Belle River Boat",
    "childRank" : 28,
    "heightRequirement" : "none",
    "infantRank" : 16
  }}

  var kidsAndBabiesList =
  {
  "Mad Hatter's Tea Cups" : {
    "adultRank" : 23,
    "attractionName" : "Mad Hatter's Tea Cups",
    "childRank" : 15,
    "heightRequirement" : "none",
    "infantRank" : 18
  },
  "Main Street USA vehicles" : {
    "adultRank" : 33,
    "attractionName" : "Main Street USA vehicles",
    "childRank" : 31,
    "heightRequirement" : "none",
    "infantRank" : 26
  },
  "Mickey's Philharmagic" : {
    "adultRank" : 28,
    "attractionName" : "Mickey's Philharmagic",
    "childRank" : 22,
    "heightRequirement" : "none",
    "infantRank" : 19
  },
  "Monsters INC Laugh Floor" : {
    "adultRank" : 16,
    "attractionName" : "Monsters INC Laugh Floor",
    "childRank" : 17,
    "heightRequirement" : "none",
    "infantRank" : 12
  },
  "Peter Pan's Flight" : {
    "adultRank" : 17,
    "attractionName" : "Peter Pan's Flight",
    "childRank" : 2,
    "heightRequirement" : "none",
    "infantRank" : 6
  }
}

// Send the variable as a "set" to replace the existing list if present
ridesRef.set({
  adultsList : adultsList,
  kidsList : kidsList,
  babiesList : babiesList,
  kidsAndBabiesList : kidsAndBabiesList
});  

});