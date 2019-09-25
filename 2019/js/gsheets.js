// This is a function that will be called later and
// makes a series that is stored into an array
$(document).ready(function(){
  $.fn.serializeObject = function()
      {
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

    // This defines the variable "form" from the html
    var form = $('#test-form');

    // This is the url where the google sheet web app is deployed
    var url = 'https://script.google.com/macros/s/AKfycbxu72wq-TF7E2ZuJg2MFZmXz4e1tJ9HVcP_A_EvRL1OkRSd4wI/exec';

    // On submit the following function gets called
    // "e" is the submit event that is being created when submitting
    form.submit(function(e){
        e.preventDefault();

      var xhr = new XMLHttpRequest(); // I think this one is not necessary anymore!

      // Here wer use the ajax library to do a http get request to the webapp
      var jqxhr = $.ajax({
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
    });
    });