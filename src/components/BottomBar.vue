<template>
  <div class="pr">
  <div class="product-fix-bar" :class="{notfixed: overScroll}">
    <div class="fix-bar-wrapper">
      <h1 class="bar-text">您已选择了</h1>
      <div class="bar-device-info">
        <h1>畅呼吸智能空气净化器超级除甲醛版</h1>
        <h2>标准版</h2>
      </div>
      <div class="bar-btn buy">现在购买</div>
      <div class="bar-btn add">加入购物车</div>
      <div class="no-discount-price">{{price | priceFormat}}</div>
      <div class="bar-price"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
  },
  data () {
    return {
      overScroll: true
    }
  },
  filters: {
    priceFormat (val) {
      val = val.toFixed(2)
      val = '￥' + val
      return val
    }
  },
  mounted () {
    window.addEventListener('scroll', this.barFixed)
  },
  methods: {
    barFixed () {
      let scrollY = window.scrollY
      let innerHeight = window.innerHeight
      let scrollHeight = document.body.scrollHeight
      // console.log(scrollY+innerHeight)
      // console.log(scrollHeight)
      this.overScroll = (scrollY + innerHeight > scrollHeight - 350)? true : false
    }
  }
}
</script>

<style lang="scss" scoped>
.product-fix-bar {
  &.notfixed {
  position: absolute;
  bottom: -50px;
  }
  position: fixed;
  z-index: 50;
  width: 100%;
  height: 60px;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fafafa;
  border-top: 1px solid #e3e3e3;
  box-shadow: 0 -1px 3px rgba(0,0,0,.04);
  .fix-bar-wrapper {
    width: 1220px;
    line-height: 20px;
    margin: 12px auto 0;
    .bar-text {
      width: 60px;
      color: #333;
      font-size: 12px;
      font-weight: 500;
      margin-right: 20px;
      float: left;
    }
    .bar-device-info {
      float: left;
      position: relative;
      margin-right: 20px;
      font-size: 14px;
      h1 {
        color: #333;
        font-weight: 400;
        color: #333;
      }
      h2 {
        font-size: 12px;
      color: #9d9d9d;
      font-weight: 400;
      }
    }
    .bar-btn {
      height: 38px;
      width: 118px;
      font-size: 12px;
      border-radius: 4px;
      margin: 0 5px;
      line-height: 38px;
      text-align: center;
      font-size: 14px;
      &.add {
        float: right;
        border: 1px solid #e1e1e1;
        background-color: #f9f9f9;
        color: #646464;
        background-image: linear-gradient(#fff, #f9f9f9);
      }
      &.buy {
        float: right;
        border: 1px solid #5c81e3;
        background-color: #6f97e5;
        color: #fff;
        background-image: linear-gradient(#6f97e5,#527ed9);
        text-shadow: 0 -1px 0 #4f70b3;
      }
    }
    .no-discount-price {
      float: right;
      padding-right: 10px;
      height: auto;
      font-size: 20px;
      font-weight: bolder;
      color: #d44d44;
      line-height: 40px;
    }
    .bar-price {
      height: auto;
    }
  }
}
</style>
