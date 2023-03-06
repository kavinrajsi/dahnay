var fixmeTop = 120;
$(window).scroll(function () {
  var currentScroll = $(window).scrollTop();
  if (currentScroll >= fixmeTop) {
    $('.navbar').css({
      position: 'fixed',
      top: '0',
    });
  } else {
    $('.navbar').css({
      position: 'fixed',
      top: '50px'
    });
  }
});
