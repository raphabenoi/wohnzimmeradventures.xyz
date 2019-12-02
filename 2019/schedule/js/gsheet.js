

/* --------------------------------------------------------------------------------
TABLETOP PART – Make data from database_LIST available in "data"-object
-------------------------------------------------------------------------------- */

// url to the spreadsheet
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1Cg0WJ1tDYW9C-681oRJhn3E7iefmhKDm0qj7GqmWsiY/edit?usp=sharing';


// the variable all the spreadsheet data will be stored in
var data;
// var invite_arr = [];

// // Get the invite_id from localStorage
// var invite_id = localStorage.getItem("invite_id");
// // var invite_id = "FL9C855JD";

// // Function that returns the position of the respective guest in the data object
// function get_invite(x){
//   // Goes through every element of the data object array
//   for (let i = 0; i < data.length; i++) {
//     // Returns position of invite_id in the data object array
//     if(data[i]["id"] == x) { return i }
//   }
// }

// // Function that takes the array of signed up activities and changes the buttons respectively
// function change_buttons(arr) {
//   // goes through each element of the array
//   arr.forEach(function(element) {
//     // checks if element is not empty or #N/A
//     if(element != "" && element != "#N/A") {
//         // Changes the button text for signed-up activities
//         $("#"+element).html("You're in");
//     }
// });
// }


function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    parseNumbers: true,
    simpleSheet: true
  })
}

function showInfo(input, tabletop) {
  alert('Successfully processed!')
  // console.log(input);
  data = input;

//   // stores position of invite_id in data object array
//   var invite_position = get_invite(invite_id);

//   // transforms the object into an array
//   var invite_arr = Object.values(data[invite_position]);

//   // Removes the last 2 items of the array (they are "id" and "activity")
//   invite_arr.pop();
//   invite_arr.pop();

//   // Calls the change_buttons function with the invite_arr
//   change_buttons(invite_arr);

  for (var i = 0; i < data.length; i++) {
    $(".grid-sizer").append(

        '<li>' +
        '<figure>' +
        // '<img src="img/' + data[i]["img"] + '.jpg" alt="' + data[i]["img"] + '" />' +
        '<figcaption>' +
        '<h3>' + data[i]["title"] + '</h3>' +
        '<p>' + data[i]["short_description"] + '</p>' +
        '</figcaption>' +
        '</figure>' +
        '</li>'
    );
    
    $(".slideshow-sizer").append(
        '<li>' +
        '<figure>' +
        '<figcaption>' +
        '<h3>' + data[i]["title"] + '</h3>' +
        '<p>' + data[i]["long_description"] + '</p>' +
        '</figcaption>' +
        // '<img src="img/' + data[i]["img"] + '.img" alt="' + data[i]["img"] + '" />' +
        '</figure>' +
        '</li>'
    );
  }
}

// window.addEventListener('DOMContentLoaded', init)