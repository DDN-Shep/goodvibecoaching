<template>
  <div class="is-touch">
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
          <h2>Elements</h2>
          <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
        </header>
        <section>
          <h3>Text</h3>
          <p>This is <b>bold</b> and this is <strong>strong</strong>. This is <i>italic</i> and this is <em>emphasized</em>. This is <sup>superscript</sup> text and this is <sub>subscript</sub> text. This is <u>underlined</u> and this is code: <code>for (;;) { ... }</code>. Finally, <a href="#">this is a link</a>.</p>
          <hr>
          <header>
            <h3>Heading with a Subtitle</h3>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
          <header>
            <h4>Heading with a Subtitle</h4>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </header>
          <p>Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integer non faucibus ornare mi ut ante amet placerat aliquet. Volutpat eu sed ante lacinia sapien lorem accumsan varius montes viverra nibh in adipiscing blandit tempus accumsan.</p>
          <hr>
          <h2>Heading Level 2</h2>
          <h3>Heading Level 3</h3>
          <h4>Heading Level 4</h4>
          <h5>Heading Level 5</h5>
          <h6>Heading Level 6</h6>
          <hr>
          <h4>Blockquote</h4>
          <blockquote>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan faucibus. Vestibulum ante ipsum primis in faucibus lorem ipsum dolor sit amet nullam adipiscing eu felis.</blockquote>
          <h4>Preformatted</h4>
          <pre><code>i = 0;

  while (!deck.isInOrder()) {
  print 'Iteration ' + i;
  deck.shuffle();
  i++;
  }

  print 'It took ' + i + ' iterations to sort the deck.';</code></pre>
        </section>
        <section>
          <h3>Lists</h3>
          <div class="row">
            <div class="col-6 col-12-medium">
              <h4>Unordered</h4>
              <ul>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Sagittis adipiscing lorem eleifend.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ul>
              <h4>Alternate</h4>
              <ul class="alt">
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Sagittis adipiscing lorem eleifend.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ul>
            </div>
            <div class="col-6 col-12-medium">
              <h4>Ordered</h4>
              <ol>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Etiam vel felis at lorem sed viverra.</li>
                <li>Felis enim feugiat dolore viverra.</li>
                <li>Dolor pulvinar etiam magna etiam.</li>
                <li>Etiam vel felis at lorem sed viverra.</li>
                <li>Felis enim feugiat dolore viverra.</li>
              </ol>
              <h4>Icons</h4>
              <ul class="icons">
                <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                <li><a href="#" class="icon brands fa-github"><span class="label">Github</span></a></li>
                <li><a href="#" class="icon brands fa-dribbble"><span class="label">Dribbble</span></a></li>
                <li><a href="#" class="icon brands fa-tumblr"><span class="label">Tumblr</span></a></li>
              </ul>
            </div>
          </div>
          <h4>Actions</h4>
          <ul class="actions">
            <li><a href="#" class="button primary">Default</a></li>
            <li><a href="#" class="button">Default</a></li>
            <li><a href="#" class="button alt">Default</a></li>
          </ul>
          <ul class="actions small">
            <li><a href="#" class="button primary small">Small</a></li>
            <li><a href="#" class="button small">Small</a></li>
            <li><a href="#" class="button alt small">Small</a></li>
          </ul>
          <div class="row">
            <div class="col-3 col-6-large col-12-medium">
              <ul class="actions stacked">
                <li><a href="#" class="button primary">Default</a></li>
                <li><a href="#" class="button">Default</a></li>
                <li><a href="#" class="button alt">Default</a></li>
              </ul>
            </div>
            <div class="col-3 col-6-large col-12-medium">
              <ul class="actions stacked">
                <li><a href="#" class="button primary small">Small</a></li>
                <li><a href="#" class="button small">Small</a></li>
                <li><a href="#" class="button alt small">Small</a></li>
              </ul>
            </div>
            <div class="col-3 col-6-large col-12-medium">
              <ul class="actions stacked">
                <li><a href="#" class="button primary fit">Default</a></li>
                <li><a href="#" class="button fit">Default</a></li>
                <li><a href="#" class="button alt fit">Default</a></li>
              </ul>
            </div>
            <div class="col-3 col-6-large col-12-medium">
              <ul class="actions stacked">
                <li><a href="#" class="button primary small fit">Small</a></li>
                <li><a href="#" class="button small fit">Small</a></li>
                <li><a href="#" class="button alt small fit">Small</a></li>
              </ul>
            </div>
          </div>
        </section>
        <section>
          <h3>Table</h3>
          <h4>Default</h4>
          <div class="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <h4>Alternate</h4>
          <div class="table-wrapper">
            <table class="alt">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Item 1</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 2</td>
                  <td>Vis ac commodo adipiscing arcu aliquet.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 3</td>
                  <td>Morbi faucibus arcu accumsan lorem.</td>
                  <td>29.99</td>
                </tr>
                <tr>
                  <td>Item 4</td>
                  <td>Vitae integer tempus condimentum.</td>
                  <td>19.99</td>
                </tr>
                <tr>
                  <td>Item 5</td>
                  <td>Ante turpis integer aliquet porttitor.</td>
                  <td>29.99</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="2" />
                  <td>100.00</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
        <section>
          <h3>Buttons</h3>
          <ul class="actions">
            <li><a href="#" class="button primary">Primary</a></li>
            <li><a href="#" class="button">Default</a></li>
            <li><a href="#" class="button alt">Alternate</a></li>
          </ul>
          <ul class="actions">
            <li><a href="#" class="button primary big">Big</a></li>
            <li><a href="#" class="button">Default</a></li>
            <li><a href="#" class="button alt small">Default</a></li>
          </ul>
          <div class="row">
            <div class="col-6 col-12-medium">
              <ul class="actions fit">
                <li><a href="#" class="button fit">Fit</a></li>
                <li><a href="#" class="button alt fit">Fit</a></li>
              </ul>
            </div>
            <div class="col-6 col-12-medium">
              <ul class="actions fit small">
                <li><a href="#" class="button fit small">Fit + Small</a></li>
                <li><a href="#" class="button alt fit small">Fit + Small</a></li>
              </ul>
            </div>
          </div>
          <ul class="actions">
            <li><a href="#" class="button primary icon solid fa-download">Icon</a></li>
            <li><a href="#" class="button icon solid fa-download">Icon</a></li>
            <li><a href="#" class="button alt icon solid fa-download">Icon</a></li>
          </ul>
          <ul class="actions">
            <li><span class="button primary disabled">Primary</span></li>
            <li><span class="button disabled">Default</span></li>
            <li><span class="button alt disabled">Alternate</span></li>
          </ul>
        </section>
        <section>
          <h3>Form</h3>
          <form method="post" action="#">
            <div class="row gtr-uniform gtr-50">
              <div class="col-6 col-12-small"><input id="name" type="text" name="name" value="" placeholder="Name"></div>
              <div class="col-6 col-12-small"><input id="email" type="email" name="email" value="" placeholder="Email"></div>
              <div class="col-12">
                <select id="category" name="category">
                  <option value="">- Category -</option>
                  <option value="1">Manufacturing</option>
                  <option value="1">Shipping</option>
                  <option value="1">Administration</option>
                  <option value="1">Human Resources</option>
                </select>
              </div>
              <div class="col-4 col-12-medium"><input id="priority-low" type="radio" name="priority" checked=""><label for="priority-low">Low Priority</label></div>
              <div class="col-4 col-12-medium"><input id="priority-normal" type="radio" name="priority"><label for="priority-normal">Normal Priority</label></div>
              <div class="col-4 col-12-medium"><input id="priority-high" type="radio" name="priority"><label for="priority-high">High Priority</label></div>
              <div class="col-6 col-12-medium"><input id="copy" type="checkbox" name="copy"><label for="copy">Email me a copy of this message</label></div>
              <div class="col-6 col-12-medium"><input id="human" type="checkbox" name="human" checked=""><label for="human">I am a human and not a robot</label></div>
              <div class="col-12">
                <textarea id="message" name="message" placeholder="Enter your message" rows="6" />
              </div>
              <div class="col-12">
                <ul class="actions">
                  <li><input type="submit" value="Send Message" class="primary"></li>
                  <li><input type="reset" value="Reset"></li>
                </ul>
              </div>
            </div>
          </form>
        </section>
        <section>
          <h3>Image</h3>
          <h4>Fit</h4>
          <div class="box alt">
            <div class="row gtr-50 gtr-uniform">
              <div class="col-12"><span class="image fit"><img src="images/pic03.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/01.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/02.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/03.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/04.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/05.jpg" alt=""></span></div>
              <div class="col-4"><span class="image fit"><img src="images/thumbs/01.jpg" alt=""></span></div>
            </div>
          </div>
          <h4>Left &amp; Right</h4>
          <p><span class="image left"><img src="images/pic05.jpg" alt=""></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent.</p>
          <p><span class="image right"><img src="images/pic05.jpg" alt=""></span>Fringilla nisl. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent. Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent Donec accumsan interdum nisi, quis tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent tincidunt felis sagittis eget. tempus euismod. Vestibulum ante ipsum primis in faucibus vestibulum. Blandit adipiscing eu felis iaculis volutpat ac adipiscing accumsan eu faucibus. Integer ac pellentesque praesent</p>
        </section>
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
    <div id="titleBar">
      <a href="#navPanel" class="toggle" />
      <span class="title">
        <a href="/">Gravity</a>
      </span>
    </div>
    <div id="navPanel">
      <nav>
        <a class="link depth-0" href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-0" />Home
        </a>
        <a class="link depth-0" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-0" />Layouts
        </a>
        <a class="link depth-1" href="left-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-1" />Left Sidebar
        </a>
        <a class="link depth-1" href="right-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-1" />Right Sidebar
        </a>
        <a class="link depth-1" href="no-sidebar" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-1" />No Sidebar
        </a>
        <a class="link depth-1" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-1" />Submenu
        </a>
        <a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-2" />Option 1
        </a>
        <a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-2" />Option 2
        </a>
        <a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-2" />Option 3
        </a>
        <a class="link depth-2" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-2" />Option 4
        </a>
        <a class="link depth-0" href="elements" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-0" />Elements
        </a>
        <a class="link depth-0" href="#" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
          <span class="indent-0" />Sign up
        </a>
      </nav>
    </div>
  </div>
</template>
