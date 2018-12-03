

/* --------------------------------------------------------------------------------
TABLETOP PART – Make data from database_LIST available in "data"-object
-------------------------------------------------------------------------------- */

// url to the spreadsheet
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1CfOJMcvIwCyWeFoaO4pzfQUoJ8RBCObpVTdTxPtRlhc/edit?usp=sharing';

// the variable all the spreadsheet data will be stored in
var data;
// var invite_arr = [];

// Get the invite_id from localStorage
var invite_id = localStorage.getItem("invite_id");
// var invite_id = "FL9C855JD";

// Function that returns the position of the respective guest in the data object
function get_invite(x){
  // Goes through every element of the data object array
  for (let i = 0; i < data.length; i++) {
    // Returns position of invite_id in the data object array
    if(data[i]["id"] == x) { return i }
  }
}

// Function that takes the array of signed up activities and changes the buttons respectively
function change_buttons(arr) {
  // goes through each element of the array
  arr.forEach(function(element) {
    // checks if element is not empty or #N/A
    if(element != "" && element != "#N/A") {
        // Changes the button text for signed-up activities
        $("#"+element).html("You're in");
    }
});
}


function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    parseNumbers: true,
    simpleSheet: true
  })
}

function showInfo(input, tabletop) {
  // alert('Successfully processed!')
  // console.log(input);
  data = input;

  // stores position of invite_id in data object array
  var invite_position = get_invite(invite_id);

  // transforms the object into an array
  var invite_arr = Object.values(data[invite_position]);

  // Removes the last 2 items of the array (they are "id" and "activity")
  invite_arr.pop();
  invite_arr.pop();

  // Calls the change_buttons function with the invite_arr
  change_buttons(invite_arr);

  // for (var i = 0; i < data.length; i++) {
  //   $(".timeline").append(
  //     '<li class="event">' +
  //       '<input type="radio" name="tl-group" checked />' +
  //         '<label></label>' +
  //         '<div class="thumb user-4"><span>' + data[i]["time"] + '</span></div>' +
  //         '<div class="content-perspective">' +
  //           '<div class="content">' +
  //             '<div class="content-inner">' +
  //               '<h3>' + data[i]["name"] + '</h3>' +
  //               '<p><h2>' + data[i]["venue"] + '</h2></p>' +
  //               '<p>' + data[i]["description"] + '</p>' +
  //               '<p><span class="bold">Host: </span>' + data[i]["host"] + '</p>' +
  //               '<p><span class="bold">Price: </span>' + data[i]["price"] + '</p>' +
  //               '<p><span class="bold">Capacity: </span>' + data[i]["max"] + '</p>' +
  //               '<p><button class="button" id="' + data[i]["activity"] + '" type="button">Join!</button></p>' +
  //             '</div>' +
  //           '</div>' +
  //         '</div>' +
  //     '</li>' );
  // }
}

window.addEventListener('DOMContentLoaded', init)

/* --------------------------------------------------------------------------------
AJAX PART – Send information about event participation to signin_LIST
-------------------------------------------------------------------------------- */

  // This is a function that will be called later and
  // makes a series that is stored into an array
  $(document).ready(function() {
    $.fn.serializeObject = function() {
      var o = {};
      var a = this.serializeArray();
      $.each(a, function() {
        if (o[this.name]) {
          if (!o[this.name].push) {
            o[this.name] = [o[this.name]];
          }
          o[this.name].push(this.value || '');
        } else {
          o[this.name] = this.value || '';
        }
      });
      return o;
    };

    // url of the signin_LIST google spreadsheet
    var url = 'https://script.google.com/macros/s/AKfycbzhKIngu_O46uR3gcO7t46GR2Hr0GV70eZtQLVoWHLfkq7HLSg/exec';

    // What happens when the button is clicked
    $(".button").on("click", function() {

      // stores the id of the button in "act"
      var activity = this.id;

      /* If I want the key of the JSON to be a variable I need this:
      // creates an emty array
      var ajax_data = {};
      // stores invite_id under the "activity" key
      ajax_data[activity] = invite_id;
      */

      // Here wer use the ajax library to do a http get request to the webapp
      var jqxhr = $.ajax({
        url: url, // see above
        method: "GET", // type of request
        dataType: "json", // format of the data that is being sent
        data: {
          "activity" : activity,
          "invite_id" : invite_id
        },
        beforeSend: function() {
          $("#"+activity).html("Sending...");
        },
        // },// sends activity as key and invite_id as value
      }).done(function(data) { // If the request was successfull it calls this function *!*!*!* ATTENTION. USE latest JQuery library here. Old versions work with .suceess()
        if (data.result == "success") {
          $("#"+activity).html("You're in!");
          // alert("Well, that worked! We are as surprised as you are ... really!")
        };
      }).fail(function(data) { // if it fails there is a popup message telling you that something went wrong
        $("#"+activity).html("Try again");
        alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still code-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
      });

    });


    // // This defines the variable "form" from the html
    // var form = $('form#test-form');
    //
    // // This is the url where the google sheet web app is deployed
    // var url = 'https://script.google.com/macros/s/AKfycbxqnNz_97G6Xz-wlSNNOL1mbLbHHyQ9Dw0qEfn1Oz7NxdS0tWs/exec';
    //
    // // On submit the following function gets called
    // // "e" is the submit event that is being created when submitting
    // form.submit(function(e){
    //     e.preventDefault();
    //
    //   var xhr = new XMLHttpRequest(); // I think this one is not necessary anymore!
    //
    //   // Here wer use the ajax library to do a http get request to the webapp
    //   var jqxhr = $.ajax({
    //     url: url, // see above
    //     method: "GET",    // type of request
    //     dataType: "json", // format of the data that is being sent
    //     data: form.serializeObject(),   // takes the input data from the form and transforms it into the right format for a http get request
    //   }).done( function(data) {   // If the request was successfull it calls this function *!*!*!* ATTENTION. USE latest JQuery library here. Old versions work with .suceess()
    //     if (data.result == "success") {
    //       console.log("great success") ;
    //       window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/success.html"; // redirect to the "success" page
    //     };
    //   }).fail( function(data) { // if it fails there is a popup message telling you that something went wrong
    //     alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still coding-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
    //   });
    // });
  });
