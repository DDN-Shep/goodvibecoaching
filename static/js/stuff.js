(function($) {
  var $window = $(window),
      $body = $('body');
  breakpoints({
    xlarge: ['1281px', '1680px'],
    large: ['981px', '1280px'],
    medium: ['737px', '980px'],
    small: ['481px', '736px'],
    xsmall: [null, '480px']
  });
  $window.on('load', function() {
    window.setTimeout(function() {
        $body.removeClass('is-preload');
    }, 100);
  });
  if (browser.mobile) $body.addClass('is-touch');
  $('#nav > ul').dropotron({
    alignment: ($body.hasClass('landing') ? 'center' : 'right'),
    hideDelay: 400
  });
  // $('<div id="titleBar">' + '<a href="#navPanel" class="toggle" />' + '<span class="title">' + $('#logo').html() + '</span>' + '</div>').appendTo($body);
  $('<div id="navPanel">' + '<nav>' + $('#nav').navList() + '</nav>' + '</div>').appendTo($body).panel({
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'left',
    target: $body,
    visibleClass: 'navPanel-visible'
  });
})(jQuery);
