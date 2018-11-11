<template>
  <div class="add-smoothie wrap">
    <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
    <form @submit.prevent>
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" id="title" v-model="title">
      </div>
      <div v-for=" (ing, i) in ingredients" :key="i" class="field">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" id="ingredient" v-model="ingredients[i]">
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
        <button class="btn pink" @click="AddSmoothie">Add Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init.js';
import slugify from 'slugify';

export default {
  name: 'AddSmoothie',
  data: () => ({
    title: null,
    ingredient: null,
    ingredients: [],
    feedback: null
  }),
  methods: {
    AddSmoothie() {
      if (this.title && (this.ingredients.length > 0 || this.ingredient)) {
        this.feedback = null;
        if (this.ingredient) {
          this.ingredients.push(this.ingredient);
        }
        // console.log(this.slug);

        db.collection('smoothies')
          .add({
            title: this.title,
            ingredients: this.ingredients
          })
          .then(this.$router.replace('/'));
      } else {
        this.feedback = 'You must enter a smoothie title and ingredients';
      }
    },
    addIng() {
      if (this.ingredient) {
        this.ingredients.push(this.ingredient);
        this.ingredient = null;
        this.feedback = null;
      } else {
        this.feedback = 'You must enter a value to add an ingredient';
      }
    },
    deleteIng(ing) {
      this.ingredients = this.ingredients.filter(
        ingredient => ingredient !== ing
      );
    }
  }
};
</script>

<style>
.add-smoothie {
  margin-top: 20px;
  padding: 20px;
}
.add-smoothie h2 {
  font-size: 2em;
  margin: 20px auto;
}
.add-smoothie .field {
  margin: 20px auto;
  position: relative;
}
.add-smoothie p {
  color: red;
}
.add-smoothie .delete {
  position: absolute;
  right: 0;
  bottom: 16px;
  color: #aaa;
  cursor: pointer;
  font-size: 1.4em;
  padding: 5px;
}
.add-smoothie .delete:hover {
  color: black;
}
</style>

