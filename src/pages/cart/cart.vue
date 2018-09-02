<template>
  <div>
    <div class="home-box">
      <cart-shelf :title="'购物清单'"></cart-shelf>
    </div>
    <div class="home-box">
      <swiper-shelf :title="'相关推荐'"></swiper-shelf>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CartShelf from '@/components/CartShelf'
import SwiperShelf from '@/components/SwiperShelf'
export default {
  components: {
    CartShelf,
    SwiperShelf
  }
}
</script>

<style>
.home-box {
  width: 1220px;
  margin: 25px auto 0 auto;
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(240, 126, 126, 0.1);
  overflow: hidden;
}
</style>
