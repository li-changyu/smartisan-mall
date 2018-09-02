<template>
  <div>
    <header class="title">
      <h5>{{title}}</h5>
    </header>
    <div class="items-wrapper">
      <ul class="items" v-if="data.shelftype === 'apps'"> 
        <li class="item-four" v-for="(item, index) in data.items" :key="index">
          <div class="app-content">
            <div class="app-image"></div>
            <div class="info">
              <h6>{{item.name}}</h6>
              <p>{{item.subTitle}}</p>
            </div>
            <div class="platform">
              <span class="android"></span>
              <span class="ios" v-if="item.ios"></span>
            </div>
          </div>
          <div class="operation">
            <div class="handshaker-buttons" v-if="!item.QRCode">
              <a class="win">下载windows版安装文件</a>
              <a class="mac">下载Mac版安装文件</a>
            </div>
            <div class="qrcode" v-if="item.QRCode">
              <div class="qr"></div>
              <p v-text="'扫二维码下载'+item.name"></p>
            </div>
            <a class="app-link" v-text="'进一步了解'+item.name"></a>
          </div>
        </li>
      </ul>

      <ul class="items forum" v-else>
        <li class="item-four" v-for="(item, index) in data.items" :key="index">
          <img :src="item.img">
          <h5>{{item.name}}</h5>
          <p>{{item.subTitle}}</p>
          <span>阅读全文</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MallGoods from '@/components/MallGoods.vue'
export default {
  props: ['title', 'data'],
  components: {
    MallGoods
  },
  data () {
    return {
      // items: []
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
    height: 324px;
    .items {
      width: 1220px;
      transition: all .5s;
      .item-four {
        position: relative;
        width: 25%;
        float: left;
        height: 324px;
        border-right: 1px solid rgba(0,0,0,.1);
        text-align: center;
        padding: 50px 30px 30px;
        &:nth-child(2) {
          .app-image {
          background-position: -189px 0;
          }
        }
        &:nth-child(3) {
          .app-image {
          background-position: -285px 0;
          }
        }
        &:nth-child(4) {
          .app-image {
          background-position: -375px 0;
          }
        }
      }
    }
  }
  .app-content {
    .app-image {
      margin: 0 auto;
      width: 96px;
      height: 96px;
      background-image: url(/static/images/app-icon-sprite.1220be4bfe4e02d3f616d62d1766ebb1.png);
      background-repeat: no-repeat;
      background-size: auto 90px;
    }
    .info {
      h6 {
        margin-top: 40px;
        font-size: 15px;
        line-height: 1;
        color: #333;
        font-weight: 700;
      }
      p {
        margin-top: 6px;
        font-size: 12px;
        line-height: 2;
        font-weight: 200;
        color: #999;
      }
    }
    .platform {
      position: absolute;
      bottom: 30px;
      display: flex;
      width: 244px;
      justify-content: center;
      .android {
        width: 16px;
        height: 16px;
        background: url(/static/images/android.png);
        background-size: 110%;
        margin: 0 5px;
      }
      .ios {
        width: 16px;
        height: 16px;
        background: url(/static/images/ios.png);
        background-size: 100%;
        margin: 0 5px;
        &::before {
          height: 10px;
          content: '';
          border-left: 1px solid #e1e1e1;
          position: absolute;
          left: 122px;
          top: 3px;
        }
      }
    }
  }
  .item-four {
    &:hover {
      transition: all .5s ease;
      box-shadow: inset 0 0 38px rgba(0, 0, 0, .08);
      .operation {
        opacity: 1;
      }
      .app-content {
        opacity: 0;
      }
    }
    .operation {
      position: absolute;
      padding: 20px 30px 30px;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      opacity: 0;
      .handshaker-buttons {
        padding: 82px 0 15px;
        a {
          &:hover {
            background: #6084d6;
          } 
          display: block;
          margin: 0 auto;
          margin-bottom: 20px;
          box-sizing: border-box;
          border: 1px solid transparent;
          border-radius: 6px;
          padding: 10px 20px;
          width: 210px;
          height: 50px;
          font-size: 14px;
          line-height: 25px;
          text-align: center;
          white-space: nowrap;
          color: #fff;
          background-color: #6f97e5;
          background-image: linear-gradient(#6f97e5,#527ed9);
          box-shadow: inset 0 1px 2px #7ea1e8;
          text-shadow: #4f70b3 0 -1px 0;
          cursor: pointer;
        }
        .win {
          &::before {
            content: '';
            display: inline-block;
            height: 20px;
            width: 20px;
            background-image: url(/static/images/windows.png);
            background-size: 100%;
            margin-right:6px;
            margin-bottom:-4px;
          }
        }
        .mac {
          &::before {
            content: '';
            display: inline-block;
            height: 20px;
            width: 20px;
            background-image: url(/static/images/ios.png);
            background-size: 100%;   
            margin-right:6px;
            margin-bottom:-4px;
          }
        }

      }
      .qrcode {
        width: 100%;
        .qr {
          margin: 64px auto 0;
          box-sizing: border-box;
          padding: 4px;
          width: 120px;
          height: 120px;
          background-image: url(/static/images/notes-download.28d2e2afb9271b4682dc5aa153da38bf.jpg);
          background-size: 100%;
        }
        p {
          margin-top: 35px;
          line-height: 1.2;
          color: #666;
        }
      }
      .app-link {
        position: absolute;
        display: inline-block;
        transform: translateX(50%);
        right: 50%;
        bottom: 40px;
        font-size: 12px;
        &::after {
          content: '';
          display: inline-block;
          width: 4px;
          height: 4px;
          border-top: 2px solid #5079d9;
          border-right: 2px solid #5079d9;
          transform: rotate(45deg);
          margin-top: 2px;
          margin-left: 2px;
        }
      }
    }
  }
  .forum {
    .item-four {
      padding-bottom: 30px;
      img {
        border-radius: 4px;
        width: 246px;
        height: 138px;
      }
      h5 {
        margin: 20px 0 12px;
        color: #333;
        width: 100%;
        font-size: 15px;
        line-height: 1;
        font-weight: 700;
      }
      p {
        font-size: 12px;
        color: #999;
        font-weight: 200;
        line-height: 18px;
        text-align: left;
      }
      span {
        cursor: pointer;
        position: absolute;
        left: 30px;
        margin-top: 10px;
        font-size: 12px;
        font-weight: 500;
        color: #5079d9;
        &::after {
          content: '';
          width: 4px;
          height: 4px;
          display: inline-block;
          border-right: 2px solid #5079d9;
          border-top: 2px solid #5079d9;
          transform: rotate(45deg);
          margin-top: 2px;
          margin-left: 2px;
        }
      }
    }
  }
</style>
