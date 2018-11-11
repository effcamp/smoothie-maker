<template>
  <div class="home">
    <Smoothie :smoothies="smoothies" class="smoothie" @deleteSmoothie="deleteSmoothie($event)"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Smoothie from '@/components/Smoothie.vue';
import db from '@/firebase/init';

export default {
  name: 'home',
  components: {
    Smoothie
  },
  data: () => ({
    smoothies: []
  }),
  methods: {
    async deleteSmoothie(id) {
      // delete from firestore
      db.collection('smoothies')
        .doc(id)
        .delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(
            smoothie => smoothie.id !== id
          );
        });
    }
  },
  async created() {
    const smoothies = await db.collection('smoothies').get();
    smoothies.forEach(doc => {
      // console.log(doc.data(), doc.id);
      let smoothie = doc.data();
      smoothie.id = doc.id;
      this.smoothies.push(smoothie);
    });
  }
};
</script>

<style>
</style>

