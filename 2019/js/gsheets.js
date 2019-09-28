// This is a function that will be called later and
// makes a series that is stored into an array
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



$(document).ready(function(){

  // This defines the variable "form" from the html
  var form = $('#test-form');

  // This is the url where the google sheet web app is deployed
  var url = 'https://script.google.com/macros/s/AKfycbxu72wq-TF7E2ZuJg2MFZmXz4e1tJ9HVcP_A_EvRL1OkRSd4wI/exec';

  $('#test-form').validate({
    rules: {
      id: {
        required: true,
        minlength: 9
      },
      first_name: 'required',
      last_name: 'required',
      email: {
        required: true,
        email: true,
      },
      attending: 'required'
    },
    messages: {
      id: {
        required: 'Oh, we really need that one!',
        minlength: 'ID should be 9 characters long'
      },
      first_name: 'Pretty sure your Mama gave you a name!',
      last_name: "Don't be ashamed <3",
      email: 'No tricks with the email field!',
      attending: "Don't be so mysterious!"
    },
    submitHandler: function(f) {
      
      // Here wer use the ajax library to do a http get request to the webapp
      $.ajax({
        url: url, // see above
        method: "GET",    // type of request
        dataType: "json", // format of the data that is being sent
        data: form.serializeObject(),   // takes the input data from the form and transforms it into the right format for a http get request
        beforeSend: function() {
          $("#submit-form").val("Sending...");
        },
      }).done( function(data) {   // If the request was successfull it calls this function *!*!*!* ATTENTION. USE latest JQuery library here. Old versions work with .suceess()
        if (data.result == "success") {
          $("#submit-form").val("You're in");
          // alert(`Hurray ${$("#first_name").val()}, you're now officially part of the 2019 edition of the WZA series. Get that swim suit dry-cleaned!`)
          window.location.href = "http://www.wohnzimmeradventures.xyz/2019/success.html"; // redirect to the "success" page
        };
      }).fail( function(data) { // if it fails there is a popup message telling you that something went wrong
        alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still coding-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
      });
    }

  });
});