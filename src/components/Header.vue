<template>
  <header class="navbar">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content wrap">
        <router-link :to="{name: 'home'}" class="nav-title">{{ title }}</router-link>
        <router-link
          :to="{name: 'addSmoothie'}"
          tag="a"
          class="btn-floating btn-large halfway-fab pink"
        >
          <i class="material-icons">add</i>
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    title: 'Smoothie Maker',
    test: 1
  })
};
</script>

<style>
</style>
