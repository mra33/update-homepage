
$(document).ready(function(){
      $('#slideshow').slick({
   autoplay: true,
    dots: true,
     fade: true,
     adaptiveHeight: true
});

$("#pricing").click (function(){
    setTimeout (function () {
        $("#move").show()
        $("#animation").fadeIn(1000)
        $("#animationHeading").fadeIn(1000)
       }, 2000);

    setTimeout (function () {
        $("#animation").animate({
       height: '150px',
        width: '150px'}, 2000)

     }, 2500);

       setTimeout (function () {
    $("#animation").animate({
      left: "-=100px"
        }, 1000)
       }, 4600);
    setTimeout (function () {
    $("#animation").animate({
      left: "+=100px"
        }, 1000)
       }, 5700);

     setTimeout (function () {
    $("#animationHeading").fadeOut(500)
    $("#bye").fadeIn(1000)

       }, 7000);

    setTimeout (function () {
    $("#animation").animate({
        top: "-=500px"
    }, 3000)
        $("#bye").animate({
        top: "-=500px"
    }, 3000)
       }, 8000);


    setTimeout (function () {
    $("#animation").css("opacity", ".7")
     $("#bye").css("opacity", ".7")
       }, 11000);


     setTimeout (function () {
    $("#animation").fadeOut (500)
    $("#bye").fadeOut(500)
       }, 12000);


    $("#prompt").hide();
    $("#curvedarrow").hide();
    $("#pricing").hide();
    $("#contactHeader").hide();
    $("#email").hide();
    $("#new").css("background-color","yellow");
    $("#hidden").fadeIn(1000);


});

$("#back").click(function () {
    $("#hidden").hide();
    $("#animation").hide();
    $("#animationHeading").hide();
    $("#animation").animate({
       height: '0px',
        width: '0px'}, 0);
     $("#animation").css("opacity", "1")
     $("#bye").css("opacity", "1")
    $("#animation").animate({
        top: "+=500px"
    }, 00)
        $("#bye").animate({
        top: "+=500px"
    }, 0);
    $("#bye").hide();
    $("#move").hide();
     $("#prompt").fadeIn(500);
    $("#curvedarrow").fadeIn(500);
    $("#pricing").fadeIn(500);
     $("#contactHeader").fadeIn(500);
    $("#email").fadeIn(500);
    $("#new").css("background-color","#00ff00");
});

$("#show").hover(function () {
$("#show").attr("src", "img/mieko2.png");
setTimeout (function () {
    $("#show").attr("src", "img/web-profile3.png")
  }, 3000);


});


});
