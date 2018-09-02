<template>
  <div class="footer">
    <div class="container">
      <div class="siteinfo">
        <ul class="nav-footer">
          <li v-for="(item, index) in footerInfo" :key="index">
            <h3>{{item[0]}}</h3>
            <ul>
              <li v-for="(subitem, index) in item.slice(1)" :key="index">{{subitem}}</li>
            </ul>
          </li>
        </ul>
        <ul class="service">
          <li class="tel">400-626-5666</li>
          <li class="time">周一到周日 9:00-18:00（仅收市话费）</li>
          <li class="online">
            <a>在线帮助</a>
          </li>
        </ul>
        <div class="language-switch">
          <div class="flag-en" :class="{active: isSwitch}">
            <span>English</span>
          </div>
          <div class="flag-cn" @click="switchLang">
            <span>中文</span>
            <i :class="{'rotate-triangle': isSwitch}"></i>
          </div>
        </div>
      </div>
      <div class="copyright">
        <h4>Copyright © , Smartisan Digital Co., Ltd. All Rights Reserved.</h4>
        <h5>北京锤子数码科技有限公司</h5>
        <ul>
          <li v-for="(item, index) in ['法律声明', '隐私条款', '开发者中心']" :key="index">
            {{item}}
          </li>
        </ul>
        <h6>
          <a>
            <span>京ICP备14041720号-1</span>
            <span>京ICP证140622号</span>
            <span>京公网安备11010502025474</span>
          </a>
          <a>
            <span>网络文化经营许可证京网文(2016)2284-266号</span>
          </a>
        </h6>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      footerInfo: [
        ['订单服务', '购买指南', '支付方式', '送货政策'],
        ['服务支持', '售后服务', '维修门店', '零售门店'],
        ['自助服务', '热点资讯', '预约购买', '订单物流'],
        ['媒体中心', '新闻动态', '官方视频', '图片资源'],
        ['关于公司', '公司简介', '加入我们', '荣获奖项'],
        ['关注我们', '新浪微博', '官方微信', '联系我们']
      ],
      isSwitch: false
    }
  },
  methods: {
    switchLang () {
      this.isSwitch = this.isSwitch ? false : true
    }
  }
}
</script>

<style lang="scss" scoped>
.rotate-triangle {
  transform: rotateZ(180deg);
}
.footer {
  width: 100%;
  background: #fafafa;
  border-top: 1px solid #e6e6e6;
  height: 353px;
  margin: 50px auto 0 auto;
  .container {
    position: relative;
    height: 100%;
    width: 1220px;
    margin: 0 auto;
    .siteinfo {
      height: 233px;
      padding: 100px 0 32px;
      border-bottom: 1px solid #e6e6e6;
      .nav-footer {
        > li {
          width: 149px;
          line-height: 1;
          float: left;
          h3 {
            color: #646464;
            font-size: 12px;
            padding: 0 0 14px;
            font-weight: 400;
          }
          li {
            cursor: pointer;
            color: #858585;
            font-size: 12px;
            padding: 6px 0;
            &:hover {
              color: #5079d9;
            }
          }
        }
      }
      .service {
        position: absolute;
        right: 0;
        overflow: hidden;
        .tel {
          font-size: 30px;
          line-height: 1;
          cursor: default;
          color: #646464;
          top: -2px;
          position: relative;
          text-align: right;
          // padding-right: 7px;
        }
        .time {
          font-size: 12px;
          line-height: 18px;
          color: #c3c3c3;
          text-align: right;
        }
        .online {
          float: right;
          width: 130px;
          height: 32px;
          line-height: 32px;
          background: linear-gradient(#fcfcfc,#f5f5f5);
          cursor: pointer;
          font-size: 14px;
          padding: 0 0 0 26px;
          margin-top: 8px;
          text-align: left;
          color: #5079d9;
          border: 1px solid #dcdcdc;
          border-radius: 5px;
          &::before {
            content: '?';
            text-align: center;
            line-height: 16px;
            color: #fff;
            display: inline-block;
            height: 16px;
            width: 16px;
            background: #4976df;
            border-radius: 50%;
            margin-right: 2px;
          }
          &:hover {
            background: #f3f3f3;
          }
        }
      }
      .language-switch {
        cursor: pointer;
        width: 118px;
        height: 50px;
        position: absolute;
        right: 0px;
        bottom: 50px;
        .flag-en {
          float: right;
          padding-bottom: 51px;
          margin-top: -51px;
          height: 100px;
          width: 103px;
          background: #f5f5f5;
          box-shadow: 0 2px 10px rgba(0,0,0,.2), 0 0 0 1px rgba(0,0,0,.04);
          border-radius: 5px;
          overflow: hidden;
          position: absolute;
          opacity: 0;
          &.active {
            opacity: 1;
            }
          span {
            text-align: center;
            line-height: 50px;
            display: inline-block;
            height: 50px;
            width: 103px;  
            background: #fff;
            border-bottom: 1px solid #e6e6e6;
            &:hover {
              background: #f5f5f5;
            }
            &::before {
              position: absolute;
              content: " ";
              width: 16px;
              height: 15px;
              background: url(/static/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png) 0 -29px no-repeat;
              background-size: 16px 80px;
              left: 6px;
              top: 17px;
            }          
          }
        }
        .flag-cn {
          text-align: center;
          line-height: 50px;
          position: absolute;
          z-index: 30;
          height: 50px;
          width: 103px;
          span:first-child {
            &::before {
              position: absolute;
              content: " ";
              width: 16px;
              height: 15px;
              background: url(/static/images/flag.afd0e7c69a7b9639cbfe7dde4ec0f3b0.png) 0 0 no-repeat;
              background-size: 16px 80px;
              left: 6px;
              top: 17px;
            }
          }
          i {
            transition: all .5s ease;
            display: inline-block;
            width: 6px;
            height: 3px;
            position: relative;
            top: -3px;
            left: 15px;
            &::before {
              position: absolute;
              top: -3px;
              left: 0px;
              content: '';
              display: inline-block;
              width: 0;
              height: 0;
              border: solid #000;
              border-bottom: 3px solid;
              border-left: 3px solid transparent;
              border-top: 3px solid transparent;
              border-right: 3px solid transparent;
            }
          }
        }
      }
    }
    .copyright {
      color: #434d55;
      font-size: 12px;
      padding: 40px 0;
      h4 {
        float: left;
      }
      h5 {
        margin-left: 3px;
        float: left;
      }
      > ul {
        margin-left: 12px;
        float: left;
        li {
          border-left: 1px solid #ccc;
          float: left;
          padding: 0 10px;
          color: #5079d9;
          cursor: pointer;
          &:hover {
            color: #395699;
          }
        }
      }
    h6 {
      font-size: 12px;
      color: #bdbdbd;
      clear: both;
      padding-top: 10px;
      a {
        color: #bdbdbd;
      }
    }
    }
  }
}
</style>
