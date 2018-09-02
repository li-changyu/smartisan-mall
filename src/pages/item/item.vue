<template>
  <div class="product-content">
    <div class="product-main-wrapper">
      <div class="product-main">
        <div class="product-choose-info">
          <div class="product-view">
            <img :src="shopInfo.ali_image" alt="">
          </div>
          <div class="product-info">
            <div class="product-title">
              <h1>{{shopInfo.sku_mobile_title}}</h1>
              <h2> {{shopInfo.sku_mobile_sub_title}}</h2>
            </div>
            <div class="activities-wrapper clearfix">
              <span class="activities-title">促销活动</span>
              <div class="activity-list">
                <span>购新空净 赠价值 699 元活性炭滤芯</span>
              </div>
            </div>
            <div class="product-package-wrapper clearfix">
              <div class="product-package">
                <span>版本选择</span>
                <ul class="clearfix">
                  <li>
                    <div class="active">默认</div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="product-color">
              <span>颜色选择</span>
              <ul>
                <li>
                  <div class="clearfix">
                    <span></span>
                    <label>默认颜色</label>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="product-specs-wrapper">
      <div class="product-specs">
        <h1 class="header-bar">
          <span>技术规格</span>
        </h1>
        <div class="spec-container">
          <img :src="imgInfo" alt="">
        </div>
      </div>
    </div>
    <div class="product-recommend-wrapper">
      <div class="product-recommend">
        <h1 class="header-bar">
          <span>相关推荐</span>
        </h1>
        <ul class="recommend-container">
          <li class="recommend-item-four" v-for="(item, index) in items" :key="index">
            <mall-goods :item="item"></mall-goods>
          </li>
        </ul>
      </div>
    </div>
    <div class="product-tips-wrapper">
      <div class="product-tips-info">
        <span>*其他说明</span>
        <ul>
          <li>滤芯拆封、通电使用后不支持 7 日无理由退货</li>
        </ul>
      </div>
    </div>
    <!-- bottom-bar -->
    <bottom-bar :price="price"></bottom-bar>
  </div>
</template>

<script>
import MallGoods from '@/components/MallGoods'
import BottomBar from '@/components/BottomBar'
export default {
  created () {
    this.$axios.get('https://www.easy-mock.com/mock/5b8046284968ce01da373ae2/hot')
      .then((res) => {
        this.$data.items = res.data.data
      })
    this.$axios.get(`https://bird.ioliu.cn/v1/?url=https://www.smartisan.com/product/skus/${this.$route.params.id}?with_spu_sku=true&with_stock=true`)
      .then((res) => {
        this.$data.shopInfo = res.data.data.shop_info
        this.$data.imgInfo = res.data.data.shop_info.tpl_content.base.images.ali.url[0]
        this.$data.price = res.data.data.price
        console.log(res.data.data.price)
      })
  },
  data() {
    return {
      items: [],
      productInfo: {},
      shopInfo: {},
      imgInfo: "",
      price: 99
    }
  },
  components: {
    MallGoods,
    BottomBar
  },
}
</script>

<style lang="scss">
.product-content {
  background: #fff;
  .product-main-wrapper {
    width: 100%;
    background: #fcfcfc;
    border-bottom: 1px solid #e8e8e8;
    .product-main {
      position: relative;
      padding-top: 50px;
      width: 1220px;
      margin: 0 auto;
      .product-choose-info {
        display: flex;
        justify-content: center;
        .product-view {
          width: 610px;
          text-align: center;
          img {
            width: 500px;
            height: 500px;
          }
        }
        .product-info {
          width: 610px;
          .product-title {
            border-bottom: 1px solid rgba(0,0,0,.08);
            padding-bottom: 30px;
            h1 {
              font-size: 30px;
              color: #000;
              line-height: 1;
            }
            h2 {
              font-size: 14px;
              line-height: 25px;
              padding-top: 20px;
              color: #999;
            }
          }
          .activities-wrapper {
            padding: 30px 0;
            border-bottom: 1px solid rgba(0,0,0,.08);
            .activities-title {
              width: 85px;
              height: 28px;
              line-height: 28px;
              color: #666;
              font-size: 14px;
              float: left;
            }
            .activity-list {
              position: relative;
              float: left;
              width: 472px;
              height: 100%;
              top: 2px;
              span {
                color: gray;
              }
            }
          }
          .product-package-wrapper {
            margin-top: 30px;
            border-bottom: 1px dashed rgba(0, 0, 0, 0.08);
            .product-package {
              span {
                width: 85px;
                height: 70px;
                line-height: 70px;
                color: #666;
                font-size: 14px;
                float: left;
                box-sizing: border-box;
              }
              ul {
                // float: left;
                padding-top: 0;
                padding-bottom: 30px;
                li {
                  color: #999;
                  border: 1px solid #6a8fe6;
                  transition: none;
                  box-shadow: none;
                  position: relative;
                  width: 255px;
                  float: left;
                  border-radius: 7px;
                  cursor: pointer;
                  padding: 11px 0;
                  div {
                    height: 48px;
                    line-height: 48px;
                    text-align: center;
                    color: #323232;
                    font-size: 18px;
                    height: 100%;
                    font-weight: 700;
                  }
                }
              }
              
            }
          }
          .product-color {
            margin-top: 30px;
            >span {
              width: 85px;
              height: 34px;
              line-height: 34px;
              color: #666;
              font-size: 14px;
              float: left;
            }
            ul {
              li {
                position: relative;
                float: left;
                width: 172px;
                height: 38px;
                cursor: pointer;
                font-size: 0;
                padding-top: 1px;
                div {
                  span {
                    display: inline-block;
                    width: 36px;
                    height: 36px;
                    border-radius: 50%;
                    border: 3px solid #e1e1e1;
                  }
                  label {
                    font-size: 14px;
                    color: #333;
                    height: 36px;
                    line-height: 36px;
                    position: absolute;
                    left: 46px;
                    cursor: pointer;
                  }
                }
              }
            }
            
          }
        }
      }
    }
  }
  .product-specs-wrapper {
    height: auto;
    .product-specs {
      margin: 0 auto;
      width: 1220px;
      .spec-container {
        img {
          width: 1220px;
          height:auto;

        }
      }
    }
  }
  .product-recommend-wrapper {
    padding-bottom: 70px;
    border-bottom: 1px solid #e8e8e8;
    .product-recommend {
      .recommend-container {
        width: 1220px;
        margin: 0 auto;
        display:flex;
        justify-content: center;
        flex-flow: row wrap;
        .recommend-item-four {
          margin: 0 5px;
          width: 295px;
          height: 429px;
          border: 1px solid #e5e5e5;
          border-radius: 4px;
          transition: box-shadow .15s ease-out;
          cursor: pointer;
          >div {
            &:hover {
              border: 1px solid #dad9d9;
              box-shadow: none;
            }
          }
        }
      }
    }
  }
  .product-tips-wrapper {
    padding-top: 60px;
    .product-tips-info{
      width: 1220px;
      padding-bottom: 36px;
      margin: 0 auto;
      overflow: auto;
      span {
        width: 85px;
        height: 21px;
        line-height: 21px;
        font-size: 12px;
        float: left;
      }
      ul li {
        padding-left: 14px;
        line-height: 1.8;
        font-size: 12px;
        color: #999;
      }
    }
  }
}

.header-bar {
  width: 1220px;
  margin: 0 auto;
  font-size: 24px;
  font-weight: 700;
  color: #333;
  padding: 60px 0;
}
</style>
