<template>
  <div v-if="smoothie" class="edit-smoothie wrap">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
  </div>
</template>

<script>
import db from '@/firebase/init.js';

export default {
  name: 'editSmoothie',
  data: () => ({
    smoothie: null
  }),
  async created() {
    const smoothie = await db
      .collection('smoothies')
      .doc(this.$route.params.smoothie_id)
      .get();
    this.smoothie = smoothie.data();
    this.smoothie.id = smoothie.id;
  }
};
</script>

<style>
</style>
