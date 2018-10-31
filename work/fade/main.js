$("#kitten").hover(function(){

    $(this).find("img").fadeOut();

}, function() {

    $(this).find("img").fadeIn();

});
