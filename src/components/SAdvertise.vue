<template>
  <div class="flex-box">
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.flex-box {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  height: 200px;
  width: 1220px;
}
</style>
