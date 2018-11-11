<template>
  <div v-if="smoothie" class="edit-smoothie wrap">
    <h2>Edit {{ smoothie.title }} Smoothie</h2>
    <form @submit.prevent>
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" id="title" v-model="smoothie.title">
      </div>
      <div v-for=" (ing, i) in smoothie.ingredients" :key="i" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" id="ingredient" v-model="smoothie.ingredients[i]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient (use tab to add another):</label>
        <input
          type="text"
          name="add-ingredient"
          id="add-ingredient"
          @keydown.tab.prevent="addIng"
          v-model="ingredient"
        >
      </div>
      <div class="field center-align">
        <p v-if="feedback">{{ feedback }}</p>
        <button class="btn pink" @click="EditSmoothie">Edit Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init.js';

export default {
  name: 'editSmoothie',
  data: () => ({
    smoothie: null,
    ingredient: null,
    feedback: null
  }),
  async created() {
    const smoothie = await db
      .collection('smoothies')
      .doc(this.$route.params.smoothie_id)
      .get();
    this.smoothie = smoothie.data();
    this.smoothie.id = smoothie.id;
  },
  methods: {
    EditSmoothie() {
      if (
        this.title &&
        (this.smoothie.ingredients.length > 0 || this.ingredient)
      ) {
        this.feedback = null;
        if (this.ingredient) {
          this.smoothie.ingredients.push(this.ingredient);
        }
        // console.log(this.slug);

        db.collection('smoothies')
          .doc(this.smoothie.id)
          .update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients
          })
          .then(this.$router.replace('/'))
          .catch();
      } else {
        this.feedback = 'You must enter a smoothie title and ingredients';
      }
    },
    addIng() {
      if (this.ingredient) {
        this.smoothie.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a value to add an ingredient';
      }
    },
    deleteIng(ing) {
      this.smoothie.ingredients = this.smoothie.ingredients.filter(
        ingredient => ingredient !== ing
      );
    }
  }
};
</script>

<style>
.edit-smoothie {
  margin-top: 20px;
  padding: 20px;
}
.edit-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.edit-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.edit-smoothie p {
  color: red;
}
.edit-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  cursor: pointer;
  font-size: 1.4em;
  padding: 5px;
}
.edit-smoothie .delete:hover {
  color: black;
}
</style>
