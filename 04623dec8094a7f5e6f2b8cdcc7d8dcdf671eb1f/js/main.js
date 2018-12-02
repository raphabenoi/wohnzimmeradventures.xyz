// Variables
var audio = $("#mysound")[0];


// Functions

// Play music when hovering over title
$("#festival_title").click(function() {
  audio.play();
});

// Fade on scroll
$("body").scroll(function(){
 	  $("#warp").addClass("darker");
});


$(document).ready(function() {
  var invite_id = sessionStorage.getItem("invite_id");

  $("#id").html(invite_id);

});
