<template>
  <div class="container">
    <div class="row">
      <div class="one-half column">
        <div class="portait" />
      </div>
      <div class="one-half column">
        <div class="content">
          <nuxt-link to="/" class="button float-right">
            <i class="fas fa-long-arrow-alt-left fa-fw"></i> Back
          </nuxt-link>
          <p><b>Imagine a new version of You.</b></p>

          <p>A You that feels confident, empowered and aligned.</p>
          <p>A You that's on her path and owns her story,</p>
          <p>A You that has the inner worth and inner strength to pursue her utmost desires,</p>
          <p>A You that has that clarity and direction on what she REALLY wants and goes for it without anything holding her back.</p>

          <p>An empowered version of you is not as far away as you think!</p>
          <p>The Empowerment Coaching helps you get where you want to be in the most authentic and aligned way possible.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style lang="scss" scoped>
.portait {
  background-image: url('~assets/images/photo-1.jpg');
}
.content {
  vertical-align: top;
  text-align: left;
  padding: 1em;
}
</style>
