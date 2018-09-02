<template>
  <div class="goods-item">
    <div class="item-info">
      <div class="item-img">
        <img :src="item.productImageBig">
      </div>
      <h4>{{item.productName}}</h4>
      <h6>{{item.sub_title}}</h6>
    </div>
    <div class="params-colors">
      <ul class="color-list">
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
        <li><a href="javascript:;"></a></li>
      </ul>
    </div>
    <div class="button-container">
      <button class="normal" @click="toItemPage">查看详情</button>
      <button class="confirm" @click="addToCart">加入购物车</button>
    </div>
    <div class="item-price">￥{{item.salePrice.toFixed(2)}}</div>
    <!-- 动画 -->
    <!-- <div class="ball-container">
      <transition-group name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
        <div class="ball">
          <div class="inner inner-hook">1</div>
        </div>
      </transition-group>
    </div> -->
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    item: Object
  },
  data () {
    return {
      showBall: false,
      event: {}
    }
  },
  methods: {
    ...mapMutations(['ADDTOCART']),
    toItemPage () {
      this.$router.push(`/item/${this.item.productId}`)
    },
    addToCart () {
      // 加入动画
      this.showBall = true
      this.event = event
      let info = { name: this.item.productName, price: this.item.salePrice, img: this.item.productImageBig, count: 1 }
      this.ADDTOCART(info)
      
    },
    // beforeDrop (this.event) {
    //   if (this.showBall) {
    //     let rect = event.getBoundingClientRect()

    //   }
    // }
  }
}
</script>

<style lang="scss">
.goods-item {
  position: relative;
  height: 100%;
  &:hover {
    box-shadow: inset 0 0 38px rgba(0, 0, 0, .08);
    .item-price {
      display: none;
    }
    .button-container {
      display: flex;
    }
  }
  .item-info {
    padding-top: 45px;
    .item-img {
      img {
        display: block;
        width: 216px;
        height: 216px;
        margin: 0 auto 20px auto;
        // padding: 45px 0 20px;
      }
    }
    h4 {
      line-height: 1.2;
      font-size: 14px;
      color: #333;
      font-weight: 700;
      margin: 0 8px;
      text-align: center;
    }
    h6 {
      overflow: hidden;
      padding-top: 15px;
      font-size: 12px;
      line-height: 1.2;
      white-space: nowrap;
      text-overflow: ellipsis;
      color: #999;
      text-align: center;
    }
  }
  .params-colors {
    margin-top: 15px;
    text-align: center;
    height: 14px;
    .color-list {
      display: inline-block;
      li {
        float: left;
        width: 14px;
        height: 14px;
        border: 1px solid #e5e5e5;
        border-radius: 50%;
        padding: 2px;
        transition: all .15s ease-out;
        margin: auto 5px;
        a {
          border-radius: 50%;
          display: block;
          width: 8px;
          height: 8px;
        }
        &:hover {
          box-shadow: inset 0 0 0 1px #b2b2b2;
          border-color: #b2b2b2;
        }
        &:nth-child(1) {
          a {
            background: #000;
          }
        }
        &:nth-child(2) {
          a {
            background: #eee;
          }
        }
      }
    }
  }
  .item-price {
    font-size: 18px;
    font-family: Arial;
    color: #d44d44;
    font-weight: 700;
    margin-top: 20px;
    text-align: center;
  }
  .button-container {
    display: none;
    margin-top: 20px;
    justify-content: center;
    button {
      height: 30px;
      width: 100px;
      font-size: 12px;
      border-radius: 4px;
      margin: 0 5px;
      &.normal {
        border: 1px solid #e1e1e1;
        background-color: #f9f9f9;
        color: #646464;
        background-image: linear-gradient(#fff, #f9f9f9);
      }
      &.confirm {
        border: 1px solid #5c81e3;
        background-color: #6f97e5;
        color: #fff;
        background-image: linear-gradient(#6f97e5,#527ed9);
      }
    }
    .normal:hover {
      box-shadow: inset 0 0 1px #cfcdcd;
    }
    .confirm:hover {
      box-shadow: inset 0 1px 1px #7696de, inset 0 0 2px #627dca, inset 0 -2px 3px #5a77c7, inset 0 0 100px rgba(48,77,147,.4)
    }
  }
}


.ball{
  position: fixed;
  left: 25px;
  bottom: 25px;
  z-index: 200;
  text-align: center;
  color: #fff;
}
.ball.drop-enter-active{
  transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
}
.ball.drop-enter-active .inner{
  transition: all 0.4s linear;
}
.ball .inner{
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgb(0, 160, 220);
}
</style>
