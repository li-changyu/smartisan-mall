<template>
  <div>
    <header class="title">
      <h5>{{title}}</h5>
    </header>
    <div class="box-inner" v-if="isItemsEmpty">
      <div class="empty-label">
        <h3>你的购物车还没有商品</h3>
        <router-link to="/" class="link-btn">现在选购</router-link>
      </div>
    </div>
    <div class="items-wrapper" v-else> 
      <!-- <ul class="items">
        <li v-for="(item, index) in cartLists" :key="index">{{item}}</li>
      </ul> -->
      <div class="cart-table-title">
        <span>商品信息</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>操作</span>
      </div>
      <div class="cart-table">
        <div class="item-list">
          <div class="cart-group">
            <div class="divide">
              <div class="item" v-for="(item, index) in cartLists" :key="index">
                <div class="items-thumb">
                  <img :src="item.img" alt="">
                </div>
                <div class="name">
                  <div class="name-wrapper">
                    <h1>{{item.name}}</h1>
                    <h2>默认</h2>
                  </div>
                </div>
                <div class="price">
                  <span>￥{{item.price.toFixed(2)}}</span>
                </div>
                <div class="num">
                  <span>{{item.count}}</span>
                </div>
                <div class="subtotal">
                  <span>￥{{(item.price*item.count).toFixed(2)}}</span>
                </div>
                <div class="operator">
                  <div class="del-btn" @click="DELCART({index: index})"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="cart-bottom-bg">
        <div class="cart-bar-operation"></div>
        <div class="shipping">
          <div class="shipping-box clearfix">
          <button>现在结算</button>
            <div class="shipping-total shipping-price">
              <h1>应付总额：<span>￥{{paymentNum.toFixed(2)}}</span></h1>
              <h2>应付总额不含运费</h2>
            </div>
            <div class="shipping-total shipping-num">
              <h1>已选择 <span>{{totalItemsSum}}</span> 件商品</h1>
              <h2>共计 {{totalItemsSum}} 件商品</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  props: {
    title: String
  },
  components: {

  },
  data () {
    return {
      
    }
  },
  computed: {
    ...mapGetters(['isItemsEmpty', 'totalItemsSum', 'paymentNum']),
    cartLists () {
      return this.$store.state.cartLists
    }
  },
  created () {
  },
  methods: {
    ...mapMutations(['DELCART'])
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
  .box-inner {
    padding-bottom: 91px;
    .empty-label {
      background: url(https://static.smartisanos.cn/index/assets/images/cart-empty@2x.f25b2c8c8168313d570820fe359998c5.png) no-repeat center;
      text-align: center;
      height: 435px;
      padding: 385px 0 0;
      h3 {
        font-size: 14px;
        line-height: 1.5;
        color: #8d8d8d;
        margin-bottom: 17px;
      }
      .link-btn {
        display: inline-block;
        border-radius: 6px;
        width: 140px;
        line-height: 46px;
        height: 46px;
        margin: 0 5px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        border: 1px solid #e1e1e1;
        color: #646464;
        background-color: #f9f9f9;
        background-image: linear-gradient(180deg,#fff,#f9f9f9);
        &:hover {
          background-color: #eee;
          background-image: linear-gradient(180deg,#f5f5f5,#eee);
        }
      }
    }
  }
  .items-wrapper {
    height: auto;
    // .items {
    //   width: 1220px;
    //   transition: all .5s;
    // }
    .cart-table-title {
      line-height: 38px;
      height: 38px;
      padding: 0 0 0 30px;
      font-size: 12px;
      background: #eee;
      border-bottom: 1px solid #dbdbdb;
      border-bottom-color: rgba(0,0,0,.08);
      display: flex;
      flex-direction: row;
      span {
        text-align: center;
        color: #838383;
        font-size: 12px;
        &:nth-child(1) {
          flex: 5;
          text-align: left;
        }
        &:nth-child(2) {
          flex: 1;
        }
        &:nth-child(3) {
          flex: 1;
        }
        &:nth-child(4) {
          flex: 1;
        }
        &:nth-child(5) {
          flex: 1;
        }
      }
    }
    .cart-table {
      .item-list {
        .cart-group {
          .divide {
            .item {
              position: relative;
              height: 140px;
              margin-left: 74px;
              display: flex;
              .items-thumb {
                flex: 11.5%;
                position: relative;
                // float: left;
                border-radius: 3px;
                img {
                  display: block;
                  width: 80px;
                  height: 80px;
                  margin: 30px auto;
                  border-radius: 3px;
                  overflow: hidden;
                  border: 1px solid #e1e1e1;
                }
              }
              .name {
                flex: 42.5%;
                display: table;
                height: 140px;
                .name-wrapper {
                  display: table-cell;
                  vertical-align: middle;
                }
                h1 {
                  color: #333;
                  font-size: 16px;
                }
                h2 {
                  color: #999;
                  font-size: 12px;
                }
              }
              .price {
                flex: 11.5%;
                line-height: 140px;
                font-size: 14px;
                text-align: center;

              }
              .num {
                flex: 11.5%;
                line-height: 140px;
                font-size: 14px;
                text-align: center;

              }
              .subtotal {
                flex: 11.5%;
                line-height: 140px;
                font-size: 14px;
                text-align: center;
                font-weight: 700;

              }
              .operator {
                flex: 11.5%;
                text-align: center;
                position: relative;
                div {
                  position: absolute;
                  left: 45%;
                  top: 43%;
                }
              }
            }
          }
        }
      }
    }
    .cart-bottom-bg {
      height: 80px;
      border-top: 1px solid #d9d9d9;
      border-radius: 0 0 8px 8px;
      .shipping {
        float: right;
        padding: 20px 30px;
        width: 525px;
        height: 80px;
        .shipping-box {
          height: auto;
          .shipping-total {
            float: right;
            padding: 0 15px;
            h1 {
              color: #323232;
              font-size: 14px;
              font-weight: 400;
              line-height: 20px;
            }
            h2 {
              font-size: 14px;
              color: #959595;
            }
            span {
              font-weight: 700;
              font-size: 18px;
            }
          }
          // .shipping-num {
            
          // }
          .shipping-price {
            border-left: 1px solid #e1e1e1;
          }
        }
        button {
          cursor: pointer;
          float: right;
          height: 48px;
          width: 128px;  
          border: 1px solid #5c81e3;
          background-color: #6f97e5;
          color: #fff;
          background-image: linear-gradient(#6f97e5,#527ed9);
          text-shadow: 0 -1px 0 #4f70b3;
          border-radius: 7px;
          line-height: 38px;
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
</style>
