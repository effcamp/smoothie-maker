<template>
  <div class="smoothie wrap">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteSmoothie(smoothie.id)">delete</i>
        <h2 class="indigo-text">{{smoothie.title}}</h2>
        <ul class="ingredients">
          <li v-for="(ing, i) in smoothie.ingredients" :key="i">
            <span class="chip">{{ ing}}</span>
          </li>
        </ul>
      </div>
      <span class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{name: 'editSmoothie',params: {smoothie_id: smoothie.id}}">
          <i class="material-icons edit">edit</i>
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Smoothie',
  props: ['smoothies'],
  methods: {
    deleteSmoothie(id) {
      // this.smoothies = this.smoothies.filter(smoothie => smoothie.id !== id);
      this.$emit('deleteSmoothie', id); //custom event listen in parent with @
    }
  }
};
</script>

<style>
.smoothie {
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
}
.smoothie h2 {
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.smoothie .ingredients {
  margin: 30px auto;
}
.smoothie .ingredients li {
  display: inline-block;
}
.smoothie .delete {
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
  padding: 5px;
}
.smoothie .delete:hover {
  color: black;
}
@media screen and (min-width: 650px) {
  .smoothie {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin: 20px auto;
  }
}
</style>
