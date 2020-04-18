<template>
  <div>
    <ul class="dropotron level-0 center" style="user-select: none; position: absolute; z-index: 1000; left: 285.992px; top: 57px; opacity: 1; display: none;">
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
        <a href="/">
          <img src="/images/kris-sheppard-rose-gold.png" title="Kris Sheppard" height="40" style="margin-top: .25em" />
        </a>
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
