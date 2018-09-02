<template>
  <div class="wrapper">
    <div class="dialog">
      <div class="login" v-if="isLoginPage">
        <div class="title">
          <h4>使用 Smartisan ID 登录官网</h4>
        </div>
        <div class="content">
          <form class="login-form">
            <ul class="common-form">
              <li class="username">
                <span class="icon"></span>
                <input type="text" placeholder="用户名" v-validate="'required|min3'" name="name" v-model="name">
                <span class="err" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </li>
              <li class="password">
                <span class="icon"></span>
                <input type="password" placeholder="密码" v-validate="'required|min3'" name="password" v-model="password">
                <span class="err" v-show="errors.has('password')">{{ errors.first('password') }}</span>
              </li>
              <li class="remember">
                <div class="auto" @click="autoLogin">
                  <span role="checkbox"
                    class="checkbox"
                    :class="{'active': checkboxActive}">
                  </span>
                  自动登录
                </div>
                <a class="forgotpassword">忘记密码？</a>
                <a class="register-id" @click="toRegister">注册Smartisan ID</a>
              </li>
            </ul>
            <div class="btn-wrapper">
              <div class="btn" @click="login">登录</div>
            </div>
            <div class="info-wrapper">
              <ul>
                <li>
                  <ul class="login-ways">
                    <li class="text">其他账号登录：</li>
                    <li class="wechart"></li>
                    <li class="weibo"></li>
                    <li class="qq"></li>
                    <li class="alipay"></li>
                  </ul>
                </li>
                <li>
                  <a class="mobile">国际手机号登录</a>
                </li>
              </ul>
            </div>
          </form>
        </div>
      </div>
      <div class="register" v-else>
        <div class="title">
          <h4>注册 Smartisan ID</h4>
        </div>
        <div class="content">
          <form class="register-form">
            <ul class="common-form">
              <li class="area">
                <span class="icon"></span>
                <span>国家和地区</span>
                <span class="select">中国</span>
              </li>
              <li class="username">
                <span class="icon"></span>
                <input type="text" placeholder="用户名" v-validate="'required|min3'" name="name" v-model="name">
                <span class="err" v-show="errors.has('name')">{{ errors.first('name') }}</span>
              </li>
              <li class="password">
                <span class="icon"></span>
                <input type="password" placeholder="密码" v-validate="'required|min3'" name="password" v-model="password">
                <span class="err" v-show="errors.has('password')">{{ errors.first('password') }}</span>
              </li>
              <li class="repassword">
                <span class="icon"></span>
                <input type="password" placeholder="密码" v-validate="'required|min3'" name="repassword" v-model="repassword">
                <span class="err" v-show="errors.has('repassword')">{{ errors.first('repassword') }}</span>
              </li>
              <li class="confirm">
                <div class="auto">
                  <span
                    role="checkbox"
                    class="checkbox"
                    :class="{'active': confirmClickActive}"
                    @click="confirmClick">
                  </span>
                  我已阅读并同意遵守 <a>法律声明</a> 和 <a>隐私条款</a>
                </div>
              </li>
            </ul>
            <div class="btn-wrapper">
              <div class="btn" @click="register">注册</div>
            </div>
            <div class="tologin">
              <span>如果您已拥有 Smartisan ID，则可在此<a @click="toLogin">登录</a></span>
            </div>
          </form>
        </div>
      </div>
      <el-alert
        class="alert"
        :title="errmsg"
        :class="{show: showAlert}"
        type="warning"
        show-icon>
      </el-alert>
    </div>
    <div class="crwrapper">
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
import store from '@/store/index.js'
import { mapMutations } from 'vuex'
export default {
data() {
  return {
    isLoginPage: true,
    checkboxActive: true,
    confirmClickActive: false,
    name: '',
    password: '',
    repassword: '',
    errmsg:'',
    showAlert: false
  }
},
// computed: {
//   ...mapState(['isLogin']),
// },
methods: {
  ...mapMutations(['LOGIN']),
  toLogin () {
    this.name = ''
    this.password = ''
    this.isLoginPage = true
  },
  toRegister () {
    this.name = ''
    this.password = ''
    this.isLoginPage = false
  },
  autoLogin () {
    this.checkboxActive = !this.checkboxActive
  },
  confirmClick () {
    this.confirmClickActive = !this.confirmClickActive
  },
  login () {
    if (this.name == 123 && this.password == 123) {
      this.LOGIN()
      // console.info(this.$store.state.isLogin)
      this.$router.push({path: '/cart'})
    } else {
      this.errmsg = '账号或密码错误！测试账号：123，密码123'
      this.showAlert = true
      setTimeout(() => {
        this.showAlert = false
      }, 2000);
    }
  },
  register () {
    this.errmsg = '请使用测试账号：123，密码123'
    this.showAlert = true
    setTimeout(() => {
      this.showAlert = false
    }, 2000);
  }
}
}
</script>

<style lang="scss" scoped>
.wrapper {
  transition: all .5s ease;
  height: 100%;
  min-height: 800px;
  position: relative;
  .dialog {
    display: flex;
    justify-content: center;
    .login {
      box-shadow: 0 9px 30px -6px rgba(0,0,0,.2), 0 18px 20px -10px rgba(0,0,0,.04), 0 18px 20px -10px rgba(0,0,0,.04), 0 10px 20px -10px rgba(0,0,0,.04);
      background: linear-gradient(#fff, #fff, #ececec);
      width: 452px;
      height: 552px;
      border: 1px solid #dadada;
      border-radius: 10px;
      margin-top: 70px;
      .title {
        position: relative;
        box-sizing: content-box;
        background-size: 160px;
        background-position: top center;
        background-repeat: no-repeat;
        background-image: url(https://static.smartisanos.cn/account.common/img/v2/logo/smartisan_4ada7fecea.png);
        height: 92px;
        margin: 23px 0 50px;
        padding: 75px 0 0;
        overflow: visible;
        h4 {
          position: absolute;
          bottom: 0;
          width: 100%;
          text-align: center;
          margin: 0;
          padding: 0;
          border-bottom: 0;
          line-height: 1em;
          height: auto;
          color: #333;
          font-weight: 400;
          font-size: 20px;
        }
      }
      .content {
        padding: 0 40px 22px;
        height: 310px;
        .login-form {
          .common-form {
            .username {
              margin-bottom: 15px;
              background: #fff;
              box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
              border: #ccc solid 1px;
              border-radius: 6px;
              font-size: 18px;
              height: 48px;
              line-height: 46px;
              opacity: .618;
              position: relative;
              &:hover {
                opacity: 1;
              }
              .icon {
                background: linear-gradient(#f8f8f8,#fafafa);
                border-radius: 6px 0 0 6px;
                border-right: solid 1px #ccc;
                box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
                float: left;
                height: 46px;
                width: 46px;
                overflow: hidden;
                background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
                background-position: -1px 0;
                cursor: pointer;
              }
              input {
                width: 293px;
                height: 20px;
                padding: 12px 12px 12px 15px;
              }
            }
            .password {
              margin-bottom: 15px;
              background: #fff;
              box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
              border: #ccc solid 1px;
              border-radius: 6px;
              font-size: 18px;
              height: 48px;
              line-height: 46px;
              opacity: .618;
              position: relative;
              &:hover {
                opacity: 1;
              }
              .icon {
                background: linear-gradient(#f8f8f8,#fafafa);
                border-radius: 6px 0 0 6px;
                border-right: solid 1px #ccc;
                box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
                float: left;
                height: 46px;
                width: 46px;
                overflow: hidden;
                background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
                background-position: -46px 0;
                cursor: pointer;
              }
              input {
                width: 293px;
                height: 20px;
                padding: 12px 12px 12px 15px;
              }
            }
            .remember {
              margin: 15px 5px 25px;
              height: 12px;
              .auto {
                color: #999;
                float: left;
                font-size: 12px;
                position: relative;
                cursor: pointer;
                span {
                  display: block;
                  background-size: 100%;
                  float: left;
                  position: relative;
                  left: -1px;
                  top: -1px;
                  width: 20px;
                  height: 20px;
                  background: url(https://static.smartisanos.cn/account.common/img/v2/checkbox_f49f6e4acf.png) 0 -18px;
                  &.active {
                  background: url(https://static.smartisanos.cn/account.common/img/v2/checkbox_f49f6e4acf.png) 0 2px;
                  }
                }
              }
              .forgotpassword {
                float: right;
                font-size: 12px;
                padding-left: 5px;
              }
              .register-id {
                float: right;
                font-size: 12px;
                padding-right: 5px;
                border-right: 1px solid #e1e1e1;
              }
            }
          }
          .btn-wrapper {
            margin-top: 30px;
            .btn {
              &:hover {
                background: #6084d6;
              } 
              width: 370px;
              height: 48px;
              display: block;
              margin-bottom: 20px;
              border: 1px solid transparent;
              border-radius: 6px;
              font-size: 18px;
              line-height: 48px;
              text-align: center;
              color: #fff;
              background-color: #6f97e5;
              background-image: linear-gradient(#6f97e5,#527ed9);
              box-shadow: inset 0 1px 2px #7ea1e8;
              text-shadow: #4f70b3 0 -1px 0;
              cursor: pointer;
            }
          }
          .info-wrapper {
            margin: 30px 0 0;
            padding-top: 23px;
            font-size: 12px;
            .login-ways {
              color: #999;
              li {
                float: left;
              }
              .wechart {
                margin-left: 10px;
                background: url(https://static.smartisanos.cn/account.common/img/v2/icons-hover_7b3065c847.png) 0 0;
                width: 20px;
                height: 17px;
              }
              .weibo {
                margin-left: 10px;
                background: url(https://static.smartisanos.cn/account.common/img/v2/icons-hover_7b3065c847.png) -30px 0;
                width: 20px;
                height: 17px;
              }
              .qq {
                margin-left: 10px;
                background: url(https://static.smartisanos.cn/account.common/img/v2/icons-hover_7b3065c847.png) -62px 0;
                width: 20px;
                height: 17px;

              }
              .alipay {
                margin-left: 10px;
                background: url(https://static.smartisanos.cn/account.common/img/v2/icons-hover_7b3065c847.png) -90px 0;
                width: 20px;
                height: 17px;

              }
            }
            .mobile {
              float: right;
              &::after {
                height: 6px;
                width: 6px;
                content: '';
                display: inline-block;
                border-right: 2px solid #5079d9;
                border-top: 2px solid #5079d9;
                transform: rotate(45deg);
              }
            }
          }
        }
      }
    }
    .register {
      width: 452px;
      // height: 552px;
      border: 1px solid #dadada;
      border-radius: 10px;
      margin-top: 60px;
    }
  }
  .register {
    overflow: hidden;
    box-shadow: 0 9px 30px -6px rgba(0,0,0,.2), 0 18px 20px -10px rgba(0,0,0,.04), 0 18px 20px -10px rgba(0,0,0,.04), 0 10px 20px -10px rgba(0,0,0,.04);
    background: linear-gradient(#fff, #fff, #ececec);
    .title {
      padding: 0;
      text-align: center;
      color: #666;
      border-bottom: 1px solid #dcdcdc;
      height: 62px;
      background: linear-gradient(#fff, #f5f5f5);
      h4 {
        font-weight: 700;
        font-size: 20px;
        line-height: 60px;
      }
    }
    .content {
      padding: 30px 40px 24px;
      .register-form {
        .common-form {
          .area {
            cursor: not-allowed;
            margin-bottom: 15px;
            background: #fff;
            box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
            border: #ccc solid 1px;
            border-radius: 6px;
            font-size: 14px;
            height: 48px;
            line-height: 46px;
            opacity: .618;
            position: relative;
            &:hover {
              opacity: 1;
            }
            .icon {
              background: linear-gradient(#f8f8f8,#fafafa);
              border-radius: 6px 0 0 6px;
              border-right: solid 1px #ccc;
              box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
              float: left;
              height: 46px;
              width: 46px;
              overflow: hidden;
              background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
              background-position: -193px 0;
              cursor: pointer;
            }
            input {
              width: 293px;
              height: 20px;
              padding: 12px 12px 12px 15px;
            }
            span {
              padding: 12px;
            }
            .select {
              // float: right;
              margin-left: 170px;
            }
          }
          .username {
            margin-bottom: 15px;
            background: #fff;
            box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
            border: #ccc solid 1px;
            border-radius: 6px;
            font-size: 18px;
            height: 48px;
            line-height: 46px;
            opacity: .618;
            position: relative;
            &:hover {
              opacity: 1;
            }
            .icon {
              background: linear-gradient(#f8f8f8,#fafafa);
              border-radius: 6px 0 0 6px;
              border-right: solid 1px #ccc;
              box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
              float: left;
              height: 46px;
              width: 46px;
              overflow: hidden;
              background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
              background-position: -1px 0;
              cursor: pointer;
            }
            input {
              width: 293px;
              height: 20px;
              padding: 12px 12px 12px 15px;
            }
          }
          .password {
            margin-bottom: 15px;
            background: #fff;
            box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
            border: #ccc solid 1px;
            border-radius: 6px;
            font-size: 18px;
            height: 48px;
            line-height: 46px;
            opacity: .618;
            position: relative;
            &:hover {
              opacity: 1;
            }
            .icon {
              background: linear-gradient(#f8f8f8,#fafafa);
              border-radius: 6px 0 0 6px;
              border-right: solid 1px #ccc;
              box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
              float: left;
              height: 46px;
              width: 46px;
              overflow: hidden;
              background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
              background-position: -46px 0;
              cursor: pointer;
            }
            input {
              width: 293px;
              height: 20px;
              padding: 12px 12px 12px 15px;
            }
          }
          .repassword {
            margin-bottom: 15px;
            background: #fff;
            box-shadow: 0 3px 5px -4px rgba(0,0,0,.4) inset, -1px 0 3px -2px rgba(0,0,0,.1) inset;
            border: #ccc solid 1px;
            border-radius: 6px;
            font-size: 18px;
            height: 48px;
            line-height: 46px;
            opacity: .618;
            position: relative;
            &:hover {
              opacity: 1;
            }
            .icon {
              background: linear-gradient(#f8f8f8,#fafafa);
              border-radius: 6px 0 0 6px;
              border-right: solid 1px #ccc;
              box-shadow: 1px 0 3px -1px rgba(0,0,0,.1);
              float: left;
              height: 46px;
              width: 46px;
              overflow: hidden;
              background-image: url(https://static.smartisanos.cn/account.common/img/dialog-input-icons_ff627ad6dc.png);
              background-position: -46px 0;
              cursor: pointer;
            }
            input {
              width: 293px;
              height: 20px;
              padding: 12px 12px 12px 15px;
            }
          }
          .confirm {
            margin: 15px 5px 25px;
            height: 12px;
            .auto {
              color: #999;
              float: left;
              font-size: 12px;
              position: relative;
              cursor: pointer;
              span {
                display: block;
                background-size: 100%;
                float: left;
                position: relative;
                left: -1px;
                top: -1px;
                width: 20px;
                height: 20px;
                background: url(https://static.smartisanos.cn/account.common/img/v2/checkbox_f49f6e4acf.png) 0 -18px;
                &.active {
                background: url(https://static.smartisanos.cn/account.common/img/v2/checkbox_f49f6e4acf.png) 0 2px;
                }
              }
            }
            .forgotpassword {
              float: right;
              font-size: 12px;
              padding-left: 5px;
            }
            .register-id {
              float: right;
              font-size: 12px;
              padding-right: 5px;
              border-right: 1px solid #e1e1e1;
            }
          }
        }
        .btn-wrapper {
          margin-top: 30px;
          .btn {
            &:hover {
              background: #6084d6;
            } 
            width: 370px;
            height: 48px;
            display: block;
            margin-bottom: 20px;
            border: 1px solid transparent;
            border-radius: 6px;
            font-size: 18px;
            line-height: 48px;
            text-align: center;
            color: #fff;
            background-color: #6f97e5;
            background-image: linear-gradient(#6f97e5,#527ed9);
            box-shadow: inset 0 1px 2px #7ea1e8;
            text-shadow: #4f70b3 0 -1px 0;
            cursor: pointer;
          }
        }
        .tologin {
          margin: 30px 0 0;
          padding-top: 23px;
          font-size: 12px;
          border-top: 1px solid #e1e1e1;
          text-align: center;
        }
      }
    }

  }
  .err {
    display: block;
    background: #d16d62;
    border-radius: 4px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    height: 26px;
    line-height: 26px;
    margin: 10px 0 0;
    padding: 0 10px;
    position: absolute;
    right: 10px;
    top: 0;
    z-index: 10;
  }
  .crwrapper {
    display: flex;
    justify-content: center;
    .copyright {
      position: absolute;
      bottom: 0;
      text-align: center;
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
  .alert {
    width: 200px;
    height: 100px;
    float: right;
    position: absolute;
    right: 50px;
    top: 70px;
    opacity: 0;
    transition: all 1s ease;
    &.show {
      opacity: 1;
    }
  }
}
</style>
