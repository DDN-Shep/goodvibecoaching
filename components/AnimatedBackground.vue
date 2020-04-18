<template>
  <video class="looping-petals" poster="poster.jpg" autoplay muted loop>
    <source src="/videos/non-spa-medium.mp4" type="video/mp4">
  </video>
</template>

<style scoped>
.looping-petals {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: auto;
  height: 100%;
}
</style>
