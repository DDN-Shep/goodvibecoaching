<template>
  <div class="wrapper">
    <div class="row">
      <div class="one-half column">
        <div class="portait" />
      </div>
      <div class="one-half column">
        <div class="content" style="position: relative;">

          <div class="calendly-inline-widget" data-url="https://calendly.com/kristinasheppard" />

          <nuxt-link to="/" class="button" style="position: absolute; bottom: 0; right: 1em; z-index: 9999;">
            <i class="fas fa-long-arrow-alt-left fa-fw" /> Back
          </nuxt-link>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  mounted() {
    if (window.Calendly) window.Calendly._autoLoadInlineWidgets();
  }
};
</script>

<style lang="scss" scoped>
.portait {
  background-image: url('/images/photo-2.jpg');
}
.content {
  vertical-align: top;
  text-align: center;
}
.calendly-inline-widget {
  min-width: 320px;
  max-width: 648px;
  height: 740px
}
</style>
