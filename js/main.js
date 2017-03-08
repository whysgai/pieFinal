//------------------------------------------------------------------------------
//--------------------Scroll Magic Variables and setup--------------------------
var controller = new ScrollMagic.Controller();
var scene = new ScrollMagic.Scene({
  triggerElement: "#hero",
  duration: 1850
})
.setPin("#hero");
scene.triggerHook(0.0);
controller.addScene(scene);
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//----------------------------Pie Rotater---------------------------------------
function rotatePie(){
  $("#top").css({"transform": "rotate(" + (($(document.body).scrollTop() / $(document.body).height() * 360) + 247) + "deg)"});
}
//------------------------------------------------------------------------------

//------------------------------------------------------------------------------
//--------------------     Trigger on Doc Ready    -----------------------------
$(document).ready(function(){

  //Do not rotate pie until past header, "scene" is pegged to the hero
  scene.on("start", function (event) {
      // console.log("Hit start point of scene.");
      //when window scrolls, call rotatePie()
      $(window).scroll(rotatePie);
  });
  // while scrolling, if top of the window clears certain pixels,
  // hide and reveal different instCard elements
  $(window).on("scroll", function(event){
    if ($(this).scrollTop()<795){
      $(".instructions").addClass("hidden");
      $(".instructions:nth-of-type(1)").removeClass("hidden");
    }
    else if ($(this).scrollTop()<1395){
      $(".instructions").addClass("hidden");
      $(".instructions:nth-of-type(2)").removeClass("hidden");
    }
    else if ($(this).scrollTop()<2000){
      $(".instructions").addClass("hidden");
      $(".instructions:nth-of-type(3)").removeClass("hidden");
    }
    else {
      $(".instructions").addClass("hidden");
      $(".instructions:nth-of-type(4)").removeClass("hidden");
    }
  });
});





// $(window).on("scroll", function(event){
//   if ($(this).scrollTop()>0){
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(1)").removeClass("hidden");
//   }
//   if ($(this).scrollTop()>795){
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(2)").removeClass("hidden");
//   }
//   if ($(this).scrollTop()>1395){
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(3)").removeClass("hidden");
//   }
//   if ($(this).scrollTop()>2000){
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(4)").removeClass("hidden");
//   }
// });

//Works
// $(window).on("scroll", function(event){
//   if ($(this).scrollTop() > 0) {
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(1)").removeClass("hidden");
//   }
// });
// $(window).on("scroll", function(event){
//   if ($(this).scrollTop() > 795) {
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(2)").removeClass("hidden");
//   }
// });
// $(window).on("scroll", function(event){
//   if ($(this).scrollTop() > 1395) {
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(3)").removeClass("hidden");
//   }
// });
// $(window).on("scroll", function(event){
//   if ($(this).scrollTop() > 2000) {
//     $(".instructions").addClass("hidden");
//     $(".instructions:nth-of-type(4)").removeClass("hidden");
//   }
// });

// DOesn't work?
// if ($(window).scrollTop() > 0) {
//   $(".instCard").addClass("hidden");
//   $(".instCard:nth-of-type(1)").removeClass("hidden");
// }
// if ($(window).scrollTop() > 910) {
//   $(".instCard").addClass("hidden");
//   $(".instCard:nth-of-type(2)").removeClass("hidden");
// }
// else if ($(window).scrollTop() > 1700) {
//   $(".instCard").addClass("hidden");
//   $(".instCard:nth-of-type(3)").removeClass("hidden");
// }
// else if ($(window).scrollTop() > 2200) {
//   $(".instCard").addClass("hidden");
//   $(".instCard:nth-of-type(4)").removeClass("hidden");
// }
// else {
//   $(".instCard").addClass("hidden");
//   $(".instCard:nth-of-type(1)").removeClass("hidden");
// }

// $(document).ready(function() {
//   $(window).scroll(function() {
//     $("#top").css({"transform": "rotate(" + (($body.scrollTop() / bodyHeight * 360) + 270) + "deg)"});
//   });
// });
