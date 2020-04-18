<template>
  <article>
    <a class="image" :href="url">
      <img :src="url" :alt="title">
    </a>
  </article>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
article > .image {
  cursor: pointer;
  outline: 0;
}
</style>
