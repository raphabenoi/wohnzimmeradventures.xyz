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

var form = $('form#test-form');
var url = 'https://script.google.com/macros/s/AKfycbxqnNz_97G6Xz-wlSNNOL1mbLbHHyQ9Dw0qEfn1Oz7NxdS0tWs/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: form.serializeObject()
  }).success(
    $(location).attr('href', 'http://www.wohnzimmeradventures.xyz/6ba57f6eca24bd9d83e557936ae4825dc7e0e84a/success.html')
  );
});
});
