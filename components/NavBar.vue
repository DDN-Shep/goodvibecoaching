<template>
  <nav id="nav">
    <ul>
      <li style="white-space: nowrap;"><a href="/">Home</a></li>
      <li class="opener" style="user-select: none; cursor: pointer; white-space: nowrap; opacity: 1;">
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
</template>

<script>
</script>
