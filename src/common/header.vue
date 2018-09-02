<template>
  <div class="header-box">
    <header class="header">
        <div class="w header-container">
          <div class="nav-logo">
            <i class="icon"><router-link to="/" title="锤子科技官网">Smartisan</router-link></i>
          </div>
          <div class="nav-list">
            <ul >
              <li v-for="(item, index) in navLists" :key="index" class="nav-list-item">{{item}}</li>
            </ul>
          </div>
          <div class="nav-aside" :class="{fixed: overScroll && showNav}">
            <div class="user">
              <router-link to="/cart" v-if="this.$store.state.isLogin" class="loginIcon">个人中心</router-link>
              <router-link to="/login" v-if="!this.$store.state.isLogin" class="loginIcon">登录页面</router-link>
              <div class="nav-user-wrapper" v-if="login"></div>
            </div>
            <div class="shop" @mouseover="toggleHoverIn" @mouseleave="toggleHoverOut">
              <router-link to="/cart">
                购物中心
              </router-link>
              <i class="num">{{totalItemsSum}}</i>
              <div class="nav-shop-wrapper" v-show="hoverCart" @mouseover="toggleHoverIn">
                <div class="nav-shop-list">
                  <div class="cart-full" v-if="!isItemsEmpty">
                    <div class="cart-list-items">
                      <ul>
                        <li v-for="(item, index) in cartLists" :key="index">
                          <div class="item-thumb">
                            <img :src="item.img" alt="">
                          </div>
                          <div class="item-des">
                            <div class="cart-cell">
                              <h4>{{item.name}}</h4>
                              <p>标准版</p>
                              <h6>
                                <span>￥{{item.price.toFixed(2)}}</span>
                                <span>x{{item.count}}</span>
                              </h6>
                            </div>
                          </div>
                          <div class="del-btn del-item-btm" @click="DELCART({index: index})"></div>
                        </li>
                      </ul>
                    </div>
                    <div class="cart-total">
                      <p>共{{productNum}}件商品</p>
                      <h5>合计：<span>{{paymentNum}}</span></h5>
                      <button @click="toCartPage">去购物车</button>
                    </div>
                  </div>
                  <div class="cart-null" v-else>
                    <h3>购物车为空</h3>
                    <p>您还没有选购任何商品，现在前往商城选购吧!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </header>
    
    <div class="nav-sub">
      <div class="nav-sub-wrapper" :class="{fixed: overScroll && showNav}">
        <div class="w">
          <ul class="nav-sub-list">
            <li v-for="(item, index) in navSubList" :key="index">
              <router-link to="/">{{item}}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import NavCart from '@/components/NavCart'
export default {
  components: {
    NavCart
  },
  data () {
    return {
      navLists: ['在线商城', '坚果Pro 2s', '坚果 R1', '坚果TNT工作站', 'Smartisan OS', '欢喜云', '应用', '论坛', '荣誉与奖项'],
      navSubList: ['首页', '手机', '“足迹”系列', '官方配件', '空气净化类', '品牌周边', '第三方商品', '全部', '服务', '企业团购'],
      login: false,
      totalNum: 0,
      hoverCart: false,
      // goodsNum: 0,
      showNav: true,
      overScroll: false
    }
  },
  computed: {
    ...mapGetters(['isItemsEmpty', 'totalItemsSum', 'cartListsLength', 'paymentNum', 'productNum']),
    cartLists () {
      return this.$store.state.cartLists
    }
  },
  mounted () {
    window.addEventListener('scroll', this.navFixed)
  },
  methods: {
    ...mapMutations(['DELCART']),
    navFixed () {
      if (this.showNav) {
        let scrollTop = document.documentElement.scrollTop ||document.body.scrollTop
        this.overScroll = scrollTop > 100 ? true : false
      }
    },
    toCartPage () {
      this.$router.push('/cart')
    },
    toggleHoverIn () {
      console.log('in')
      this.hoverCart = true
    },
    toggleHoverOut () {
      console.log('out')
      this.hoverCart = false
    },
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: #1a1a1a;
  background-image: linear-gradient(#000, #121212);
  .header-container {
    position: relative;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .nav-logo {
      height: 100%;
      display: flex;
      align-items: center;
      .icon > a {
        background: url(/static/images/global-logo-red@2x.png) no-repeat;
        background-size: cover;
        display: block;
        width: 50px;
        height: 40px;
        text-indent: -9999px;
        background-position: 0 0;
      }
    }
  }
  .nav-list {
    display: flex;
    align-items: center;
    ul {
      line-height: 28px;
      vertical-align: bottom;
      :first-child {
        color: #fff !important;
      }
      .nav-list-item {
        cursor: pointer;
        color: #c8c8c8;
        float: left;
        padding: 0 22px;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .nav-aside {
    display: flex;
    align-items: center;
    &.fixed {
      position: fixed;
      left: 50%;
      margin-left: 520px;
      z-index: 20;
      height: 60px;
      top: -60px;
      transform: translate3d(0, 60px, 0);
      transition: transform .3s cubic-bezier(.165, .84, .44, 1);
    }
    .user {
      font-size: 0px;
      height: 20px;
      a {
        float: right;
        width: 20px;
        height: 20px;
          &::before {
            width: 20px;
            height: 20px;
            display: block;
            content: '';
            background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -155px 0;
          }
        }
    }
    .shop {
      height: 20px;
      margin-left: 21px;
      font-size: 0px;
      a {
        float:left;
        &::before {
          width: 30px;
          height: 20px;
          content: '';
          display: block;
          background: url(/static/images/account-icon@2x.32d87deb02b3d1c3cc5bcff0c26314ac.png) -150px -22px
        }
      }
      .num {
        cursor: default;
        float: left;
        font-size: 14px;
        text-align: center;
        line-height: 20px;
        color: white;
        display: block;
        height: 20px;
        width: 20px;
        border-radius: 10px;
        background: linear-gradient(#A4A4A4, #909090);
        box-shadow: inset 0 0 1px #838383, 0 1px 2px #838383;
      }
      .nav-shop-wrapper {
        top: 40px;
        right: 0px;
        position: absolute;
        padding-top: 38px;
        .nav-shop-list {
          &::before {
            display: block;
            content: '';
            width: 0;
            height: 0;
            border-bottom: 10px solid #fff;
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            position: absolute;
            top: -10px;
            right: 18px;
            z-index: 20;
          }
          position: relative;
          z-index: 10;
          background: #fff;
          border: 1px solid #d6d6d6;
          // border: 0 solid hsla(0,0%,100%,.01);
          border-radius: 8px;
          box-shadow: 0 0 0 1px rgba(0,0,0,.06), 0 20px 40px rgba(0,0,0,.15);
          // overflow: hidden;
          .cart-full {
            height: auto;
            width: 360px;
            .cart-list-items {
              ul {
                max-height: 544px;
                overflow-y: scroll;
                li {
                  position: relative;
                  height: 120px;
                  padding: 20px;
                  border-bottom: 1px solid #e1e1e1;
                  &:hover {
                    background-color: #f5f5f5;
                  }
                  &:last-child {
                    border-bottom: none;
                  }
                  .item-thumb {
                    position: relative;
                    float: left;
                    width: 80px;
                    height: 80px;
                    border-radius: 3px;
                    img {
                      display: block;
                      width: 80px;
                      height: 80px;
                      border-radius: 3px;
                      overflow: hidden;
                      border: 1px solid #e1e1e1;
                    }
                  }
                  .item-des {
                    margin-left: 98px;
                    display: table;
                    width: 205px;
                    height: 80px;
                    .cart-cell {
                      display: table-cell;
                      vertical-align: middle;
                      h4 {
                        width: 185px;
                        overflow: hidden;
                        word-break: keep-all;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                        font-size: 14px;
                        line-height: 16px;
                        margin-bottom: 10px;
                        font-weight: 400;
                      }
                      p {
                        position: relative;
                        display: inline-block;
                        // margin-right: 20px;
                        font-size: 14px;
                        line-height: 18px;
                        color: #999;
                      }
                      h6 {
                        font-size: 12px;
                        line-height: 14px;
                        margin-top: 15px;
                        span:first-child {
                          color: red;
                          font-size: 14px;
                          font-weight: 700;
                        }
                        span:last-child {
                          color: #cacaca;
                          margin-left: 10px;

                        }
                      }
                    }
                  }
                  .del-item-btm {
                    float: right;
                    position: absolute;
                    top: 55px;
                    right: 22px;
                  }
                }
              }
            }
            .cart-total {
              position: relative;
              padding: 20px;
              height: 80px;
              background: #fafafa;
              border-top: 1px solid #f0f0f0;
              border-radius: 0 0 8px 8px;
              box-shadow: inset 0 -1px 0 hsla(0,0%,100%,.5), 0 -3px 8px rgba(0,0,0,.04);
              background: linear-gradient(#fafafa,#f5f5f5);
              p {
                margin-bottom: 4px;
                line-height: 16px;
                font-size: 12px;
                color: #c1c1c1;
              }
              h5 {
                line-height: 20px;
                color: #333;
                font-size: 14px;
                color: #6f6f6f;
                span {
                  font-size: 18px;
                  color: #de4037;
                  display: inline-block;
                  font-weight: 700;
                }
              }
              button {
                cursor: pointer;
                position: absolute;
                right: 20px;
                top: 20px;
                height: 38px;
                width: 108px;  
                border: 1px solid #5c81e3;
                background-color: #6f97e5;
                color: #fff;
                background-image: linear-gradient(#6f97e5,#527ed9);
                text-shadow: 0 -1px 0 #4f70b3;
                border-radius: 4px;
                line-height: 38px;
                text-align: center;
                font-size: 14px;
              }
            }
          }
          .cart-null {
            width: 360px;
            height: 310px;
            padding-top: 180px;
            background: url(https://static.smartisanos.cn/index/assets/images/cart-empty@2x.7b507bed2442ffe0dc3e4a5cf3b370e7.png) no-repeat center;
            background-size: auto 62px;
            background-position-x: center;
            background-position-y: 90px;
            text-align: center;
            h3 {
              font-size: 18px;
              font-weight: 400;
              color: black;
              padding-bottom: 8px;
            }
            p {
              font-size: 12px;
              color: #bcbcbc;
            }
          }
        }
      }
    }
  }
}
.nav-sub {
  .nav-sub-wrapper {
    z-index: 10;
    height: 90px;
    padding: 31px 0;
    display: flex;
    align-items: center;
    &.fixed {
      z-index: 10;
      width: 100%;
      position: fixed;
      // top: 0px;
      margin: 0 auto;
      height: 60px;
      background: #f7f7f7;
      border-bottom: 1px solid #dadada;
      box-shadow: 0 2px 4px rgba(0,0,0,.04);
      background-image: linear-gradient(#fff,#f1f1f1);
      top: -60px;
      transform: translate3d(0, 60px, 0);
      transition: transform .3s cubic-bezier(.165, .84, .44, 1);
    }
    .nav-sub-list {
      overflow: hidden;
      li {
        float: left;
        padding: 0 15px;
        a {
          color: #666;
          &:hover {
            color: #5079d9;
          }
          }
          &::before {
            content: '';
            position: absolute;
            display: block;
            height: 2px;
            width: 2px;
            border-radius: 1px;
            background-color: gray;
            opacity: .3;
            top: 9px;
            left: -3px;
          }
        &:first-child {
          font-weight: 700;
          padding-left: 10px;
          &::before {
            height: 0;
          }
        }
      }
    }
  }
}
</style>
