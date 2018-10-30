//shake on hover and stop shake with delay when not hovered

var hoverTimeout;
var hoverTimeout2;
var hoverTimeout3;
var images = new Array ("image1", "image2","image3", "image4","image5", "image6", "image7","image8", "image9", "image10", "image11");
var VerticalImages = new Array ("vertical1","vertical2","vertical3","vertical4","vertical5","vertical6","vertical7","vertical8","vertical9","vertical10", "vertical11");
var length = images.length;
var mq = window.matchMedia( "(min-width: 800px)" );


$("#work").hover(function() {
    clearTimeout(hoverTimeout);
    $(this).addClass("animate1");
}, function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $self.removeClass("animate1");
    }, 1000);
});

$("#contact").hover(function() {
    clearTimeout(hoverTimeout2);
    $(this).addClass("animate2");
}, function() {
    var $self = $(this);
    hoverTimeout2 = setTimeout(function() {
        $self.removeClass("animate2");
    }, 1000);
});

$("#about").hover(function() {
    clearTimeout(hoverTimeout3);
    $(this).addClass("animate2");
}, function() {
    var $self = $(this);
    hoverTimeout3 = setTimeout(function() {
        $self.removeClass("animate2");
    }, 1000);
});


$("#random_button").click(function(){
	//for (var i=0; i < 100; i++){

	// $(".bgImage").addClass(".bgImage1");
	// $("#backgroundImage").toggleClass(classes.join());
	// $("#backgroundImage").addClass(classes[ Math.floor ( Math.random() * length ) ]);
	// $("#backgroundImage").switchClass(classes, classes[ Math.floor ( Math.random() * length ) ])

	// $(".bgImage").css("background-image", "url(images/Blob4_nobg.png)");
	// $(".bgImage").css("background-size", "150%");
	// $(".bgImage").css("background-position", "center");

	if (mq.matches){
	// get random image name
		var randImg = images[ Math.floor ( Math.random() * images.length ) ];
		$(".bgImage").css("background-image", "url(images/"+ randImg +  ".png)" );
	// $(".bgImage").css("background-size", "100vw");
	//$(".bgImage").css("background-position", "center center");
	}else{
		var randImgVertical = VerticalImages[Math.floor(Math.random()*VerticalImages.length)];
		$(".bgImage").css("background-image", "url(images/"+ randImgVertical + ".png)");
	}	
//}
});





