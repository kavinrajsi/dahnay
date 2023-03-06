$(".menu-button").click(function (e) {
  e.stopPropagation();
  $(".menu-button").addClass("open");
  $("body").addClass("menu-active");
  $("body").append('<div class="backdrop"></div>');

});

$(document.body).click( function(e) {
  closeMenu();
});

function closeMenu(){
  console.log('close button');
  $(".menu-button").removeClass("open");
  $("body").removeClass("menu-active");
  $(".backdrop").remove();
}
