import Vue from 'vue'
import VeeValidate, {Validator} from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'

const config = {
  locale: 'zh_CN',
  dictionary: {
    zh_CN: {
      messages: zh_CN.messages,
      attributes: {
        email:'邮箱',
        password:'密码',
        repassword:'密码',
        name: '账号',
        phone: '手机'
      }
   }
 }
}

Vue.use(VeeValidate,config)

Validator.extend('phone', {
  messages: {
    zh_CN:field => field + '必须是11位手机号码',
  },
  validate: value => {
    return value.length == 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
  }
})

Validator.extend('min3', {
  getMessage: (field) => field + '不小于三位数',
  validate: value => {
    return value.toString().length >=3
  }
})

