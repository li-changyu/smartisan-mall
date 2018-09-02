<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/common/header'
import Footer from '@/common/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
