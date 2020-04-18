<template>
  <div class="icon-grid">
    <div class="row gtr-uniform gtr-150">
      <icon-grid-item v-for="(i, ix) in items" :key="ix" :icon="i.icon" :title="i.title" :description="i.description" />
    </div>
  </div>
</template>

<script>
import IconGridItem from '@/components/IconGridItem';

export default {
  components: {
    IconGridItem
  },
  data() {
    return {
      items: [
        {
          icon: 'fa-briefcase',
          title: 'Sed feugiat',
          description: 'Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.'
        },
        {
          icon: 'fa-anchor',
          title: 'Et consequat',
          description: 'Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.'
        },
        {
          icon: 'fa-car',
          title: 'Nisl morbi',
          description: 'Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.'
        },
        {
          icon: 'fa-university',
          title: 'Consequat',
          description: 'Ante et vulputate et volutpat, eros pede semper est, vitae luctus metus libero eu augue morbi purus.'
        }
      ]
    };
  }
};
</script>
