<template>
  <div>
    <div id="header">
      <h1 id="logo"><a href="/">Gravity</a></h1>
      <nav id="nav">
        <ul>
          <li style="white-space: nowrap;"><a href="/">Home</a></li>
          <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap;">
            <a href="#">Layouts</a>
            <ul class="" style="user-select: none; display: none; position: absolute;">
              <li style="white-space: nowrap;"><a href="left-sidebar" style="display: block;">Left Sidebar</a></li>
              <li style="white-space: nowrap;"><a href="right-sidebar" style="display: block;">Right Sidebar</a></li>
              <li style="white-space: nowrap;"><a href="no-sidebar" style="display: block;">No Sidebar</a></li>
              <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap;">
                <a href="#" style="display: block;">Submenu</a>
                <ul class="dropotron" style="user-select: none; display: none; position: absolute;">
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 1</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 2</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 3</a></li>
                  <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 4</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li style="white-space: nowrap;"><a href="elements">Elements</a></li>
          <li style="white-space: nowrap;"><a href="#" class="button alt">Sign up</a></li>
        </ul>
      </nav>
    </div>
    <section id="main">
      <div class="container">
        <header class="major">
          <h2>Left Sidebar</h2>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <div class="row gtr-200">
          <div class="col-4 col-12-medium">
            <section id="sidebar">
              <section>
                <h3>Magna Feugiat</h3>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit..</p>
                <footer>
                  <ul class="actions">
                    <li><a href="#" class="button small alt">Learn More</a></li>
                  </ul>
                </footer>
              </section>
              <hr>
              <section>
                <a href="#" class="image fit"><img src="images/pic04.jpg" alt=""></a>
                <h3>Amet Lorem Tempus</h3>
                <p>Sed tristique purus vitae volutpat commodo suscipit amet sed nibh. Proin a ullamcorper sed blandit. Sed tristique purus vitae volutpat commodo suscipit ullamcorper sed blandit lorem ipsum dolore.</p>
                <footer>
                  <ul class="actions">
                    <li><a href="#" class="button small alt">Learn More</a></li>
                  </ul>
                </footer>
              </section>
            </section>
          </div>
          <div class="col-8 col-12-medium imp-medium">
            <section id="content">
              <a href="#" class="image fit"><img src="images/pic03.jpg" alt=""></a>
              <h3>Dolore Amet Consequat</h3>
              <p>Aliquam massa urna, imperdiet sit amet mi non, bibendum euismod est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam quam, mollis at magna consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum est. Curabitur mi justo, tincidunt vel eros ullamcorper, porta cursus justo. Cras vel neque eros. Vestibulum diam.</p>
              <p>Vestibulum diam quam, mollis at consectetur non, malesuada quis augue. Morbi tincidunt pretium interdum. Morbi mattis elementum orci, nec dictum porta cursus justo. Quisque ultricies lorem in ligula condimentum, et egestas turpis sagittis. Cras ac nunc urna. Nullam eget lobortis purus. Phasellus vitae tortor non est placerat tristique.</p>
              <h3>Sed Magna Ornare</h3>
              <p>In vestibulum massa quis arcu lobortis tempus. Nam pretium arcu in odio vulputate luctus. Suspendisse euismod lorem eget lacinia fringilla. Sed sed felis justo. Nunc sodales elit in laoreet aliquam. Nam gravida, nisl sit amet iaculis porttitor, risus nisi rutrum metus.</p>
              <ul>
                <li>Faucibus orci lobortis ac adipiscing integer.</li>
                <li>Col accumsan arcu mi aliquet placerat.</li>
                <li>Lobortis vestibulum ut magna tempor massa nascetur.</li>
                <li>Blandit massa non blandit tempor interdum.</li>
                <li>Lacinia mattis arcu nascetur lobortis.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
    <div id="footer">
      <div class="container">
        <div class="row gtr-200 gtr-uniform">
          <section class="col-4 col-12-medium col-12-small">
            <header class="major">
              <h3>About</h3>
            </header>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta aliquam eius dolorem quod deserunt esse libero, dolorum temporibus, aliquid nemo vitae sit enim quas ipsam dicta et veritatis excepturi suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio incidunt, tempora quasi, impedit laudantium totam magna consequat.</p>
            <ul class="actions">
              <li><a href="#" class="button alt">Learn more</a></li>
            </ul>
          </section>
          <section class="col-4 col-6-medium col-12-small">
            <header class="major">
              <h3>Recent News</h3>
            </header>
            <ul class="updates">
              <li>
                <p><a href="#">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam voluptatem voluptas provident illum vitae ad, placeat ipsa, porro veritatis.</a></p>
                <span class="timestamp">4 hours ago</span>
              </li>
              <li>
                <p><a href="#">Veniam consectetur, fuga recusandae id voluptate obcaecati illo nisi atque aliquid facilis tempore, magni soluta sequi dicta reiciendis minima.</a></p>
                <span class="timestamp">4 hours ago</span>
              </li>
            </ul>
          </section>
          <section class="col-4 col-6-medium col-12-small">
            <header class="major">
              <h3>Contact</h3>
            </header>
            <ul class="labeled-icons">
              <li>
                <h4 class="icon solid fa-envelope"><span class="label">Email</span></h4>
                <a href="#">someone@untitled.tld</a>
              </li>
              <li>
                <h4 class="icon solid fa-phone"><span class="label">Phone</span></h4>
                (000) 000-0000 x12345
              </li>
              <li>
                <h4 class="icon solid fa-home"><span class="label">Address</span></h4>
                1234 Somewhere Road, Suite #543<br>Nashville, TN 00000
              </li>
              <li>
                <h4 class="icon brands fa-twitter"><span class="label">Twitter</span></h4>
                <a href="#">twitter.com/untitled</a>
              </li>
              <li>
                <h4 class="icon brands fa-facebook-f"><span class="label">Facebook</span></h4>
                <a href="#">facebook.com/untitled</a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div class="copyright"> © Untitled. All rights reserved. </div>
    </div>
    <script>(function($) {var $window = $(window),$body = $('body');breakpoints({xlarge: [ '1281px', '1680px' ],large: [ '981px', '1280px' ],medium: [ '737px', '980px' ],small: [ '481px', '736px' ],xsmall: [ null, '480px' ]});$window.on('load', function() {window.setTimeout(function() {$body.removeClass('is-preload');}, 100);});if (browser.mobile)$body.addClass('is-touch');$('#nav > ul').dropotron({alignment: ($body.hasClass('landing') ? 'center' : 'right'),hideDelay: 400});$('<div id="titleBar">' +'<a href="#navPanel" class="toggle" />' +'<span class="title">' + $('#logo').html() + '</span>' +'</div>').appendTo($body);$('<div id="navPanel">' +'<nav>' +$('#nav').navList() +'</nav>' +'</div>').appendTo($body).panel({delay: 500,hideOnClick: true,hideOnSwipe: true,resetScroll: true,resetForms: true,side: 'left',target: $body,visibleClass: 'navPanel-visible'});$('.carousel').each(function() {var $this = $(this);if (!browser.mobile) {$this.css('overflow-x', 'hidden');$this.wrap('<div class="carousel-wrapper" />');var $wrapper = $this.parent();var $navRight = $('<div class="nav right" />').insertAfter($this),$navLeft = $('<div class="nav left" />').insertAfter($this),intervalId;$navLeft.on('mouseenter', function() {intervalId = window.setInterval(function() {$this.scrollLeft( $this.scrollLeft() - 5 );}, 10);}).on('mouseleave', function() {window.clearInterval(intervalId);});$navRight.on('mouseenter', function() {intervalId = window.setInterval(function() {$this.scrollLeft( $this.scrollLeft() + 5 );}, 10);}).on('mouseleave', function() {window.clearInterval(intervalId);});$window.on('resize load', function() {if ($this.width() < $this.prop('scrollWidth'))$wrapper.removeClass('no-scroll'); else $wrapper.addClass('no-scroll');});}$this.poptrox({baseZIndex: 100001,useBodyOverflow: false,usePopupEasyClose: false,overlayColor: '#000000',overlayOpacity: 0.75,usePopupDefaultStyling: false,popupLoaderText: '',usePopupNav: true,usePopupCaption: true});breakpoints.on('<=small', function() {$this[0]._poptrox.usePopupCaption = false;$this[0]._poptrox.usePopupCloser = false;$this[0]._poptrox.windowMargin = 10;});breakpoints.on('>small', function() {$this[0]._poptrox.usePopupCaption = true;$this[0]._poptrox.usePopupCloser = true;$this[0]._poptrox.windowMargin = 50;});});})(jQuery);</script>
    <ul class="dropotron level-0" style="user-select: none; display: none; position: absolute; z-index: 1000;">
      <li style="white-space: nowrap;"><a href="left-sidebar" style="display: block;">Left Sidebar</a></li>
      <li style="white-space: nowrap;"><a href="right-sidebar" style="display: block;">Right Sidebar</a></li>
      <li style="white-space: nowrap;"><a href="no-sidebar" style="display: block;">No Sidebar</a></li>
      <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap;">
        <a href="#" style="display: block;">Submenu</a>
        <ul class="dropotron level-1" style="user-select: none; display: none; position: absolute; z-index: 1001;">
          <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 1</a></li>
          <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 2</a></li>
          <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 3</a></li>
          <li style="white-space: nowrap;"><a href="#" style="display: block;">Option 4</a></li>
        </ul>
      </li>
    </ul>
    <div id="titleBar"><a href="#navPanel" class="toggle" /><span class="title"><a href="/">Gravity</a></span></div>
    <div id="navPanel">
      <nav><a class="link depth-0" href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-0" />Home</a><a class="link depth-0" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-0" />Layouts</a><a class="link depth-1" href="left-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-1" />Left Sidebar</a><a class="link depth-1" href="right-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-1" />Right Sidebar</a><a class="link depth-1" href="no-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-1" />No Sidebar</a><a class="link depth-1" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-1" />Submenu</a><a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-2" />Option 1</a><a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-2" />Option 2</a><a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-2" />Option 3</a><a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-2" />Option 4</a><a class="link depth-0" href="elements" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-0" />Elements</a><a class="link depth-0" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);"><span class="indent-0" />Sign up</a></nav>
    </div>
  </div>
</template>
