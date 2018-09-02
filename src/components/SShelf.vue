<template>
  <div>
    <header class="title">
      <h5>{{title}}</h5>
    </header>
    <div class="items-wrapper">
      <ul class="items">
        <li class="first-item-four" v-if="goodsData[0]"><img :src="goodsData[0].productImageBig" class="first-img"></li>
        <li class="item-four" v-for="(item, index) in goodsData.slice(1)" :key="index">
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
    title: String,
    goodsData: Array
  },
  components: {
    MallGoods
  },
  data () {
    return {
      
    }
  },
  created () {
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
  }
  .items-wrapper {
    height: 858px;
    .items {
      width: 1220px;
      transition: all .5s;
      .first-item-four {
        position: relative;
        width: 50%;
        float: left;
        height: 429px;
        border-right: 1px solid rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(0,0,0,.1);
        &:hover {
          &::before {
            content: '';
            display: block;
            position: absolute;
            width: 100%;
            height: 100%;
            box-shadow: inset 0 0 38px rgba(0, 0, 0, .08);
            transition: all .15s ease;
          }
        }
        .first-img {
          width: 100%;
          height: 100%;
        }
      }
      .item-four {
        width: 25%;
        float: left;
        height: 429px;
        border-right: 1px solid rgba(0,0,0,.1);
        border-bottom: 1px solid rgba(0,0,0,.1);
      }
    }
  }
</style>
