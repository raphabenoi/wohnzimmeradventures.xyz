/* --------------------------------------------------------------------------------
TABLETOP PART – Make data from database_2019 available in "data"-object
-------------------------------------------------------------------------------- */

/** Url to the google sheed database_2019 */
var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1EXcq6EYbCVsPS_3L1R4z9FtqMwYwoHKgiLMx4TuIfm8/edit?usp=sharing';

/** The variable all the spreadsheet data will be stored in */
var data;

/** Function checks if ID exists and returns true if it does */
function is_invited(id){
  if(
    data.some( element => element.id === id) ||
    data.some( element => element.id.substring(0,9) + "1" === id ) ||   // for friends +1
    data.some( element => element.id.substring(0,9) + "2" === id )      // for friends +2
    ) {return true}
}

/** Function which checks if person with this ID has already subscribed */
function has_subscribed(id){
  if(data.some( element => element.subscribed === id)) {return true}
}

/** Function which is called when the DOM content has loaded */
function init() {
  Tabletop.init({
    key: publicSpreadsheetUrl,
    callback: showInfo,
    parseNumbers: true,
    simpleSheet: true
  })
}

/** Callback function called by the init() function */
function showInfo(input, tabletop) {
  // alert('Successfully processed!')
  // console.log(input);
  data = input;
}

/** Initiating Tabletop once loaded */
window.addEventListener('DOMContentLoaded', init)





/* --------------------------------------------------------------------------------
AJAX PART – Send information from FORM to subscribers_2019
-------------------------------------------------------------------------------- */


/** This is a function that will be called later and
 * makes a series that is stored into an array */
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


/** Waiting for the document to be ready */
$(document).ready(function(){

  /** This defines the variable "form" from the html */
  var form = $('#test-form');

  /** This is the url where the google sheet web app is deployed (writing to subsribers_2019) */
  var url = 'https://script.google.com/macros/s/AKfycbxu72wq-TF7E2ZuJg2MFZmXz4e1tJ9HVcP_A_EvRL1OkRSd4wI/exec';

  /** Creates own method for form validation:
   * Makes sure the ID exists */
  jQuery.validator.addMethod("exists", function(value, element) {
    return this.optional(element) || is_invited(value);
  }, "Sorry, this ID does not exist!");

  /** Makes sure this ID has not been used for subscribing before */
  jQuery.validator.addMethod("subscribed", function(value, element) {
    return this.optional(element) || !has_subscribed(value);
  }, "Mh … a person with this ID has already subscribed!");

  /** Makes sure Choose an option is not selected */
  jQuery.validator.addMethod("checkbox", function(value, element) {
    return this.optional(element) || value !== 'Choose an option';
  }, "Please choose an option");


  /** Main function of the form-validation plugin
   * Documentation: https://jqueryvalidation.org/ */
  $('#test-form').validate({
    /** Rules define what is required */
    rules: {
      id: {
        required: true,
        rangelength: [10, 10],
        exists: true,
        subscribed: true
      },
      first_name: 'required',
      last_name: 'required',
      email: {
        required: true,
        email: true,
      },
      attending: {
        required: true,
        checkbox: true
      }
    },
    /** Messages define the error messages that are shown if not valid */
    messages: {
      id: {
        required: 'Oh, we really need that one!',
        rangelength: 'ID should be 10 characters long'
      },
      first_name: 'Pretty sure your Mama gave you a name!',
      last_name: "Bademeister*innen*s need to know if you're worth marrying!",
      email: 'No tricks with the email field!',
      attending: "Can't leave without telling us :)"
    },
    /** Defines what should happen if the form is valid */
    submitHandler: function(f) {
      
      /** AJAX is used to do a HTTP GET request to the webapp (subsribers_2019 google sheet) */
      $.ajax({
        url: url, // see above
        method: "GET",    // type of request
        dataType: "json", // format of the data that is being sent
        data: form.serializeObject(),   // takes the input data from the form and transforms it into the right format for a http get request
        beforeSend: function() {
          $("#submit-form").val("Sending...");  // changes the submit button value
        },
      }).done( function(data) {   // If the request was successfull it calls this function *!*!*!* ATTENTION. USE latest JQuery library here. Old versions work with .suceess()
        if (data.result == "success") {
          $("#submit-form").val("You're in");   // changes submit button value
          // alert(`Hurray ${$("#first_name").val()}, you're now officially part of the 2019 edition of the WZA series. Get that swim suit dry-cleaned!`)
          window.location.href = "http://www.wohnzimmeradventures.xyz/2019/success.html"; // redirect to the "success" page
        };
      }).fail( function(data) { // if it fails there is a popup message telling you that something went wrong
        alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still coding-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
      });
    }

  });
});