<template>
  <div>
    <div class="banner w">
      <swiper :options="swiperOption" ref="swiper" class="swiper">
        <swiper-slide v-for="(item, index) in bannerItems" :key="index" class="slide">
          <img :src="item.src" class="slide-img"/>
        </swiper-slide>
        <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
      </swiper>
    </div>

    <div class="home-box advertise-home-box">
      <s-advertise>
        <div class="img-box" v-for="(item, index) in advertiseItems.slice(0, 4)" :key="index">
          <img :src="item.src" class="advertise-img"/>
        </div>
      </s-advertise>
    </div>

    <div class="home-box">
      <swiper-shelf :title="subTitle[0]"></swiper-shelf>
    </div>

    <div class="home-box">
      <s-shelf :title="subTitle[1]" :goodsData="new_product"></s-shelf>
    </div>

    <div class="home-box">
      <s-shelf :title="subTitle[2]" :goodsData="handpick_product"></s-shelf>
    </div>

    <div class="home-box">
      <s-shelf :title="subTitle[3]" :goodsData="purifier"></s-shelf>
    </div>

    <div class="home-box">
      <s-shelf :title="subTitle[4]" :goodsData="derivative_product"></s-shelf>
    </div>

    <div class="home-box">
      <s-shelf :title="subTitle[5]" :goodsData="new_handpick"></s-shelf>
    </div>

    <div class="home-box advertise-home-box">
      <s-advertise>
        <div class="img-box" v-for="(item, index) in advertiseItems.slice(4, 8)" :key="index">
          <img :src="item.src" class="advertise-img"/>
        </div>
      </s-advertise>
    </div>
    
    <div class="home-box">
      <bottom-shelf :title="subTitle[6]" :data="bottomInfo[0]"></bottom-shelf>
    </div>
    
    <div class="home-box">
      <bottom-shelf :title="subTitle[7]" :data="bottomInfo[1]"></bottom-shelf>
    </div>

  </div>
</template>

<script>
import SAdvertise from '@/components/SAdvertise.vue'
import SwiperShelf from '@/components/SwiperShelf.vue'
import SShelf from '@/components/SShelf.vue'
import BottomShelf from '@/components/BottomShelf.vue'
export default {
  components: {
    SAdvertise,
    SwiperShelf,
    SShelf,
    BottomShelf
  },
  data () {
    return {
      swiperOption: {
        autoplay: true,
        speed: 400,
        effect: 'fade',
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      },
      subTitle: ['热门商品', '新品首发', '官方精选', '净化器及配件', '品牌周边', '品牌精选', '锤子应用', '论坛精选'],
      bannerItems: [
        {
          src: "https://resource.smartisan.com/resource/2/20180822jiaodiantu1.png",
          to: "https://www.smartisan.com/item/100051701"
        },
        {
          src: "https://resource.smartisan.com/resource/8/823shoujaio1.png",
          to: "https://www.smartisan.com/activity/sale/145"
        },
        {
          src: "https://resource.smartisan.com/resource/2/2018081801.png",
          to: "https://www.smartisan.com/item/100046409"
        }
      ],
      advertiseItems: [
        {
          src: "https://resource.smartisan.com/resource/a782c9d097df224f9f2704c00134b7ae.png",
          to: "https://www.smartisan.com/activity/sale/137"
        },
        {
          src: "https://resource.smartisan.com/resource/4a4b4215514937cca9b0bd4be9375b4f.jpg",
          to: "https://www.smartisan.com/item/100035113"
        },
        {
          src: "https://resource.smartisan.com/resource/06301f3e647b5f4f5bc00e12d5d3f8d1.jpg",
          to: "https://www.smartisan.com/item/100040601"
        },
        {
          src: "https://resource.smartisan.com/resource/94d558d8247d5a9df98f6f019bcbceae.jpg",
          to: "https://www.smartisan.com/service/#/tradein"
        },
        {
          src: "https://resource.smartisan.com/resource/f82c9e2774ce0e391a17f1b20c1e0c90.jpg",
          to: "https://www.smartisan.com/pr/#/video/conference-r1"
        },
        {
          src: "https://resource.smartisan.com/resource/5ea6f0905535d7b11258e9a0f9b1abeb.jpg",
          to: "https://www.smartisan.com/os/#/6-x"
        },
        {
          src: "https://resource.smartisan.com/resource/509151eb8ee49b5ffb3a8a7496c30924.jpg",
          to: "https://www.smartisan.com/pr/#/video/changhuxi-jinghuaqi"
        },
        {
          src: "https://resource.smartisan.com/resource/m/minibanner_03.jpg",
          to: "https://www.smartisan.com/pr/#/video/onestep-introduction"
        }
      ],
      new_product: [],
      handpick_product: [],
      purifier: [],
      derivative_product: [],
      new_handpick: [],
      bottomInfo: [
        {
          shelftype: "apps",
          items: [
            {
              name: "HandShaker",
              subTitle: "在 Mac 和 Windows 电脑上也可以方便自如地管理你在 Android 手机中的内容",
              android: true,
              ios: true,
              QRCode: null
            },
            {
              name: "锤子便签",
              subTitle: "雅致的信纸、精心调整的文字排版 这可能是最让人想写字的便签应用",
              android: true,
              ios: true,
              QRCode: "https://static.smartisanos.cn/index/assets/images/notes-download.28d2e2afb9271b4682dc5aa153da38bf.jpg"
            },
            {
              name: "锤子阅读",
              subTitle: "信息过载年代的干净阅读",
              android: true,
              ios: true,
              QRCode: "https://static.smartisanos.cn/index/assets/images/notes-download.28d2e2afb9271b4682dc5aa153da38bf.jpg"
            },
            {
              name: "锤子科技论坛",
              subTitle: "是一个科技论坛 不只是科技论坛",
              android: true,
              ios: false,
              QRCode: "https://static.smartisanos.cn/index/assets/images/notes-download.28d2e2afb9271b4682dc5aa153da38bf.jpg"
            },
          ]
        },
        {
          shelftype: "forum",
          items: [
            {
              name: "「坚果手机节」开幕",
              subTitle: "「坚果手机节」已经拉开帷幕，坚果 R1 最高直降 700 元",
              img: "https://resource.smartisan.com/resource/6db3fd0a843fd3392ede193d77b139a7.jpg"
            },
            {
              name: "[分享] 坚果R1带你直击火山口蓝色火焰",
              subTitle: "你需要有一台 坚果 R1",
              img: "https://resource.smartisan.com/resource/c9f44ba8ddaf52d653b43b6d0d785a49.jpg"
            },
            {
              name: "我来为 Smartisan OS 重绘图标",
              subTitle: "“模仿 Smartisan OS 的拟物化重绘图标，我也试着画了一些。”",
              img: "https://resource.smartisan.com/resource/d00bbc1b5fc369c6bca2475b1a89b6c9.png"
            },
            {
              name: "Smartisan 手机摄影教程合辑",
              subTitle: "构图、修图、光影……一次手机摄影的全面速成教学。",
              img: "https://resource.smartisan.com/resource/c819e2f96fdb67ce3c38e99386212222.png"
            }
          ]
        }
      ]
    }
  },
  created () {
    console.info(this.$store)
    this.$axios.get('https://www.easy-mock.com/mock/5b8046284968ce01da373ae2/hot')
      .then((res) => {
        this.$data.new_product = res.data.new_product
        this.$data.handpick_product = res.data.handpick_product
        this.$data.purifier = res.data.purifier
        this.$data.derivative_product = res.data.derivative_product
        this.$data.new_handpick = res.data.new_handpick
      })
  }
}
</script>

<style lang="scss" scoped>
.banner {
  .slide {
    height: 500px;
    border-radius: 10px;
    border-radius: 10px;
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(0,0,0,.14);
    border-radius: 8px;
    background: #fff;
    box-shadow: 0 3px 8px -6px rgba(0,0,0,.1);
    .slide-img {
      width: 100%;
      position: absolute;
      transform: translateY(-50%);
      top: 50%;
      cursor: pointer;
    }
  }
}
.home-box {
  width: 1220px;
  margin: 25px auto 0 auto;
  border: 1px solid rgba(0,0,0,.14);
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 8px -6px rgba(240, 126, 126, 0.1);
  overflow: hidden;
}
.advertise-home-box {
  .img-box {
    position: relative;
    width: 305px;
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
    .advertise-img {
      display: block;
      height: 100%;
      cursor: pointer;
    }
  }
}
</style>
