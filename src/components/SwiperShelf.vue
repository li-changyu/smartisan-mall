<template>
  <div>
    <header class="title">
      <h5>{{title}}</h5>
      <div class="home-page">
        <a :class="{ disabled: isFirstList }" @click="clickLeft"></a>
        <a :class="{ disabled: !isFirstList }" @click="clickRight"></a>
      </div>
    </header>
    <div class="swiper-box">
      <ul class="hot-items" :style="{transform: 'translateX('+ rotateSize +'px)'}">
        <li class="item-four" v-for="(item, index) in items" :key="index">
          <mall-goods :item=item></mall-goods>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MallGoods from '@/components/MallGoods.vue'
export default {
  props: {
    title: String
  },
  components: {
    MallGoods
  },
  data () {
    return {
      isFirstList: true,
      rotateSize: 0,
      items: []
    }
  },
  created () {
    this.$axios.get('https://www.easy-mock.com/mock/5b8046284968ce01da373ae2/hot')
      .then((res) => {
        this.$data.items = res.data.data
        console.log(this.$data.items)
      })
  },
  methods: {
    clickLeft () {
      if (!this.isFirstList) {
        this.isFirstList = !this.isFirstList
        this.rotateSize = 0
      }
    },
    clickRight () {
      if (this.isFirstList) {
        this.isFirstList = !this.isFirstList
        this.rotateSize = -1220
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .title {
    font-size: 18px;
    height: 60px;
    line-height: 60px;
    display: block;
    position: relative;
    line-height: 60px;
    color: #666;
    background: #fafafa;
    border-bottom: 1px solid rgba(0,0,0,.1);
    h5 {
      padding-left: 25px;
    }
    .home-page {
      position: absolute;
      right: 10px;
      top: 6px;
      a {
        display: inline-block;
        width: 48px;
        height: 48px;
        background: url(/static/images/hot-arrow-right.31f3b3cd90b1f36ff2d4559fd36cf2f8.png);
        &:first-child {
          transform: rotateY(180deg);
        }
        &.disabled {
          background: url(/static/images/hot-arrow-right-disabled.bee91011d435258528bf79aeefb09315.png);
          cursor: not-allowed;
        }
      }
    }
  }
  .swiper-box {
    height: 429px;
    .hot-items {
      width: 2440px;
      transition: all .5s;
      .item-four {
        width: 305px;
        height: 429px;
        float: left;
        display: block;
        border-right: 1px solid rgba(0,0,0,.1);
      }
    }
  }
</style>
