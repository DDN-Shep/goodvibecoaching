<template>
  <div class="container">
    <nuxt />
  </div>
</template>

<style lang="scss">
html,
body,
#__nuxt,
#__layout,
.container {
  height: 100%;
}
body {
  background-color: #f4f4f4;
  //color: #7da5a7;
}
.stylish-text {
  font-family: 'Dancing Script', 'Cormorant Garamond', serif;
}
.wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  overflow: hidden;
  background-color: #fff;
  border-radius: .25em;
  /* border-top-left-radius: 2.5rem;
  border-bottom-right-radius: 2.5rem;
  box-shadow: #ccc 0 0 1em; */
}
.column {
  display: table;

  .portait {
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 800px;
  }
  .content {
    display: table-cell;
    height: 800px;
  }
}
.fas, .far {

}
</style>
