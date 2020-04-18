<template>
  <section class="col-3 col-6-large col-12-small">
    <i class="icon solid" :class="icon" />
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </section>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    }
  }
};
</script>
