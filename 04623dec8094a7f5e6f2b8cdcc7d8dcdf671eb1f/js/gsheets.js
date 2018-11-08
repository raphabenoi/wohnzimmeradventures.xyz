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

    var form = $('form#test-form'),
      url = 'https://script.google.com/macros/s/AKfycbxqnNz_97G6Xz-wlSNNOL1mbLbHHyQ9Dw0qEfn1Oz7NxdS0tWs/exec';

      form.submit(function(e){
        e.preventDefault();

      var xhr = new XMLHttpRequest();
      var jqxhr = $.ajax({
        url: url,
        method: "GET",
        dataType: "json",
        data: form.serializeObject(),

        // complete: window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/success.html",
        // success: window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/success.html",
        // error: window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/main.html"
      }).done( function(data) {
        if (data.result == "success") {
          console.log("great success") ;
          window.location.href = "http://www.wohnzimmeradventures.xyz/04623dec8094a7f5e6f2b8cdcc7d8dcdf671eb1f/success.html";
        };
      }).fail( function(data) {
        alert("Ups ... I guess we have a problem here! Could you try again with another browser, please? We're still coding-newbies. If it still doesn't work, please write us an email: wohnzimmeradventures@posteo.de")
      });
    });
    });
