<template>
  <div id="app">
    <router-view class="main"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
@import "./assets/style/index.scss";
#app {
  height: 100%;
  min-width: 1300px;
}
.main {
  background: #ededed;
}
</style>
