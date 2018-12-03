/* --------------------------------------------------------------------------------
TABLETOP PART – Make data from database_LIST available in "data"-object
-------------------------------------------------------------------------------- */

// url to the spreadsheet
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1CfOJMcvIwCyWeFoaO4pzfQUoJ8RBCObpVTdTxPtRlhc/edit?usp=sharing';

// the variable all the spreadsheet data will be stored in
var data;

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
}

window.addEventListener('DOMContentLoaded', init)

// Define the function that will get called later to load new page
function loadPage(pwd) {

  // var hash = pwd;
  // hash = Sha1.hash(pwd);
  var url = "04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/hello.html";

  if(pwd == "spaceinvader") {
    window.location.href = url;
  }
  else {
    $("#password").attr("placeholder", "eeeh ... no!");
    $("#password").val("");
  }

}

var festival_name;

// function to check if somebody is invite
function is_invite(x) {
  let boolean = false;
  for (var i = 0; i < data.length; i++) {
    if(data[i]["id"] == x) {
      boolean = true;
      festival_name = data[i]["festival_name"];
    }
  }
  return boolean;
}

// When clicking the button
$(document).ready(function() {
  $("#loginbutton").on("click", function() {

    // Set variable with the invite_id of visitor
    var invite_id = $("#invite_id").val();

    // First check browser support for localStorage and localStorage
    if (typeof(Storage) !== "undefined") {
      // Create a new value pair in the localStorage with above variable invite_id
      localStorage.setItem("invite_id", invite_id);

    } else {
      alert("No localStorage() support! Please use another (newer or BETTER) browser!")
    }

    // Use setTimeout function to delay execution of the redirecting function
    // because otherwise the localStorage does not have the time to be set
    if(is_invite(invite_id)) {
      alert("Welcome back " + festival_name + "! Buckle up for a intergalactic space journey trough the galaxy of stolen dreams");
      localStorage.setItem("festival_name", festival_name);
      setTimeout(loadPage($("#password").val()), 4000);
    } else {
      $("#invite_id").attr("placeholder", "who are you?");
      $("#invite_id").val("");
    }
  });

  // If pressing the ENTER key
  $("#password").keypress(function(e) {
    if (e.which == 13) {

      // Set var// Set variable with the invite_id of visitor
      var invite_id = $("#invite_id").val();

      // First check browser support for localStorage and localStorage
      if (typeof(Storage) !== "undefined") {
        // Create a new value pair in the localStorage with above variable invite_id
        localStorage.setItem("invite_id", invite_id);

      } else {
        alert("No localStorage() support! Please use another (newer or BETTER) browser!")
      }

      // Use setTimeout function to delay execution of the redirecting function
      // because otherwise the localStorage does not have the time to be set
      if(is_invite(invite_id)) {
        alert("Welcome back " + festival_name + "! Buckle up for a intergalactic space journey trough the galaxy of stolen dreams");
        localStorage.setItem("festival_name", festival_name);
        setTimeout(loadPage($("#password").val()), 4000);
      } else {
        $("#invite_id").attr("placeholder", "who are you?");
        $("#invite_id").val("");
      }
    }
  });

  $("#password").focus();

});
