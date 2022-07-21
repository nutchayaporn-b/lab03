<template>
  <nav style="display:flex; gap: 10px; justify-content: center;">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/co">Category & Organizer</router-link>
  </nav>
  <router-view />
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h4 {
  font-size: 20px;
}
</style>
