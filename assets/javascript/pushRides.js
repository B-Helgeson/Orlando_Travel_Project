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
var attractions = 

[
    {
      "attractionName": "Dumbo",
      "adultRank": 1,
      "childRank": 1,
      "infantRank": 1,
      "heightRequirement": "38 inches"
    },
    {
      "attractionName": "Seven Dwarves Mine Train",
      "adultRank": 2,
      "childRank": 2,
      "infantRank": 2,
      "heightRequirement": ""
    },
    {
      "attractionName": "Mad Hatter’s Tea Cups",
      "adultRank": 3,
      "childRank": 3,
      "infantRank": 3,
      "heightRequirement": ""
    },
    {
      "attractionName": "The Many Adventures of Winnie the Pooh",
      "adultRank": 4,
      "childRank": 4,
      "infantRank": 4,
      "heightRequirement": ""
    },
    {
      "attractionName": "Barnstormer featuring the Great Goofini",
      "adultRank": 5,
      "childRank": 5,
      "infantRank": 5,
      "heightRequirement": "35 inches"
    },
    {
      "attractionName": "The Little Mermaid",
      "adultRank": 6,
      "childRank": 6,
      "infantRank": 6,
      "heightRequirement": ""
    },
    {
      "attractionName": "Ariel’s Grotto",
      "adultRank": 7,
      "childRank": 7,
      "infantRank": 7,
      "heightRequirement": ""
    },
    {
      "attractionName": "Enchanted Tales with Belle",
      "adultRank": 8,
      "childRank": 8,
      "infantRank": 8,
      "heightRequirement": ""
    },
    {
      "attractionName": "Princess Fairytale Hall",
      "adultRank": 9,
      "childRank": 9,
      "infantRank": 9,
      "heightRequirement": ""
    },
    {
      "attractionName": "Prince Charming’s Regal Carousel",
      "adultRank": 10,
      "childRank": 10,
      "infantRank": 10,
      "heightRequirement": ""
    },
    {
      "attractionName": "Mickey’s Philharmagic",
      "adultRank": 11,
      "childRank": 11,
      "infantRank": 11,
      "heightRequirement": ""
    },
    {
      "attractionName": "Peter Pan’s Flight",
      "adultRank": 12,
      "childRank": 12,
      "infantRank": 12,
      "heightRequirement": ""
    },
    {
      "attractionName": "It’s a Small World",
      "adultRank": 13,
      "childRank": 13,
      "infantRank": 13,
      "heightRequirement": ""
    },
    {
      "attractionName": "Haunted Mansion",
      "adultRank": 14,
      "childRank": 14,
      "infantRank": 14,
      "heightRequirement": ""
    },
    {
      "attractionName": "Liberty Belle River Boat",
      "adultRank": 15,
      "childRank": 15,
      "infantRank": 15,
      "heightRequirement": ""
    },
    {
      "attractionName": "Hall of Presidents",
      "adultRank": 16,
      "childRank": 16,
      "infantRank": 16,
      "heightRequirement": ""
    },
    {
      "attractionName": "Country Bear Jamboree",
      "adultRank": 17,
      "childRank": 17,
      "infantRank": 17,
      "heightRequirement": ""
    },
    {
      "attractionName": "Tom Sawyer Island",
      "adultRank": 18,
      "childRank": 18,
      "infantRank": 18,
      "heightRequirement": ""
    },
    {
      "attractionName": "Big Thunder Mountain Railroad",
      "adultRank": 19,
      "childRank": 19,
      "infantRank": 19,
      "heightRequirement": "40 inches"
    },
    {
      "attractionName": "Splash Mountain",
      "adultRank": 20,
      "childRank": 20,
      "infantRank": 20,
      "heightRequirement": "40 inches"
    },
    {
      "attractionName": "A Pirates Adventure: Treasure of the Seven Seas interactive game",
      "adultRank": 21,
      "childRank": 21,
      "infantRank": 21,
      "heightRequirement": ""
    },
    {
      "attractionName": "Pirates of the Caribbean",
      "adultRank": 22,
      "childRank": 22,
      "infantRank": 22,
      "heightRequirement": ""
    },
    {
      "attractionName": "Tiki Room",
      "adultRank": 23,
      "childRank": 23,
      "infantRank": 23,
      "heightRequirement": ""
    },
    {
      "attractionName": "Jungle Cruise",
      "adultRank": 24,
      "childRank": 24,
      "infantRank": 24,
      "heightRequirement": ""
    },
    {
      "attractionName": "Swiss family Robinson Tree House",
      "adultRank": 25,
      "childRank": 25,
      "infantRank": 25,
      "heightRequirement": ""
    },
    {
      "attractionName": "Main Street USA vehicles",
      "adultRank": 26,
      "childRank": 26,
      "infantRank": 26,
      "heightRequirement": ""
    },
    {
      "attractionName": "Stitches Great Escape",
      "adultRank": 27,
      "childRank": 27,
      "infantRank": 27,
      "heightRequirement": "40 inches"
    },
    {
      "attractionName": "Monsters INC. Laugh Floor",
      "adultRank": 28,
      "childRank": 28,
      "infantRank": 28,
      "heightRequirement": ""
    },
    {
      "attractionName": "Buzz Lightyear’s Space Ranger Space Spin",
      "adultRank": 29,
      "childRank": 29,
      "infantRank": 29,
      "heightRequirement": ""
    },
    {
      "attractionName": "Carousel of Progress",
      "adultRank": 30,
      "childRank": 30,
      "infantRank": 30,
      "heightRequirement": ""
    },
    {
      "attractionName": "Tomorrowland Transit Authority",
      "adultRank": 31,
      "childRank": 31,
      "infantRank": 31,
      "heightRequirement": ""
    },
    {
      "attractionName": "Astro Orbiter",
      "adultRank": 32,
      "childRank": 32,
      "infantRank": 32,
      "heightRequirement": ""
    },
    {
      "attractionName": "Space Mountain",
      "adultRank": 33,
      "childRank": 33,
      "infantRank": 33,
      "heightRequirement": "44 inches"
    },
    {
      "attractionName": "Tomorrowland Speedway",
      "adultRank": 34,
      "childRank": 34,
      "infantRank": 34,
      "heightRequirement": "32 inches"
    }
  ]


// Send the variable as a "set" to replace the existing list if present
ridesRef.set({
attractions: attractions
});  

});


//Area for code that will compare rides with results. 
var adults = guest.adults;
var rides = attractions.adultRank;
var kiddies = attractions.childRank;
for ( i = 0; i < guest.adults; i++){
  guest.adults += attractions
};

