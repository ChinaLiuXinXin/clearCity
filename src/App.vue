<template>
  <div id="app">
    <router-view class="nav"></router-view>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.nav{
  height: 100%;
}

html{
  height: 100%;
}
body{
  height: 100%;
  background: #f3f6f3;
}
</style>
