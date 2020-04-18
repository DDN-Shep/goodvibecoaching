<template>
  <div class="carousel-wrapper">
    <section class="carousel">
      <image-carousel-article v-for="(i, ix) in images" :key="ix" :url="i.url" :title="i.title" />
      <image-carousel-article v-for="(i, ix) in images" :key="ix + 10" :url="i.url" :title="i.title" />
    </section>
    <div class="nav left" @mouseenter="onScrollLeft()" @mouseleave="onStopScroll()" />
    <div class="nav right" @mouseenter="onScrollRight()" @mouseleave="onStopScroll()" />
  </div>
</template>

<script>
import ImageCarouselArticle from '@/components/ImageCarouselArticle';

export default {
  components: {
    ImageCarouselArticle
  },
  data() {
    return {
      intervalId: null,
      images: [
        {
          url: '/images/01.jpg',
          title: ''
        },
        {
          url: '/images/02.jpg',
          title: ''
        },
        {
          url: '/images/03.jpg',
          title: ''
        },
        {
          url: '/images/04.jpg',
          title: ''
        },
        {
          url: '/images/05.jpg',
          title: ''
        }
      ]
    };
  },
  mounted() {
    // On window resize
    // $window.on('resize load', function() {
    //     if ($this.width() < $this.prop('scrollWidth')) $wrapper.removeClass('no-scroll');
    //     else $wrapper.addClass('no-scroll');
    // });

    const container = this.$el.querySelector('.carousel');

    window.$(container).poptrox({
      baseZIndex: 100001,
      useBodyOverflow: false,
      usePopupEasyClose: false,
      overlayColor: '#000000',
      overlayOpacity: 0.75,
      usePopupDefaultStyling: false,
      popupLoaderText: '',
      usePopupNav: true,
      usePopupCaption: true
    });
  },
  methods: {
    onStopScroll() {
      window.clearInterval(this.intervalId);
    },
    onScroll(offset) {
      this.intervalId = window.setInterval((offset) => {
        const container = this.$el.querySelector('.carousel');

        if (container) container.scrollLeft += offset;
      }, 10, offset);
    },
    onScrollLeft() {
      this.onScroll(-5);
    },
    onScrollRight() {
      this.onScroll(5);
    }
  }
};
</script>

<style lang="scss" scoped>
.carousel {
  overflow-x: hidden; // If not browser.mobile, do scrolling things
}
</style>
