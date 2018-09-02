import Vuex from 'vuex'
import Vue from 'vue'
import {
  LOGIN,
  LOGOUT,
  ADDTOCART,
  DELCART
} from './mutation-types'

Vue.use(Vuex)

const state = {
  isLogin: false,
  cartLists: []
}

const mutations = {
  [LOGIN] (state) {
    state.isLogin = true
    // console.info('LOGIN:'+state.isLogin)
  },
  [LOGOUT] (state) {
    state.isLogin = false
  },
  [ADDTOCART] (state, payload) {
    let exist = state.cartLists.find(element => {
      return element.name == payload.name
    })
    if (!exist) {
      state.cartLists.push (payload)
    } else {
      exist.count++
    }
  },
  [DELCART] (state, payload) {
    state.cartLists.splice(payload.index, 1)
  }
}

const actions = {

}

const getters = {
  isItemsEmpty (state) {
    return (state.cartLists.length == 0)
  },
  totalItemsSum (state) {
    let totalNum = 0
    if ( state.cartLists.length > 0 ) {
      state.cartLists.forEach(element => {
        totalNum += element.count
      })
    }
    return totalNum
  },
  cartListsLength (state) {
    return state.cartLists.length
  },
  paymentNum (state) {
    let totalNum = 0
    state.cartLists.forEach(element => {
      totalNum += element.price * element.count
    })
    return totalNum
  },
  productNum (state) {
    let totalNum = 0
    state.cartLists.forEach(element => {
      totalNum += element.count
    })
    return totalNum    
  }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
  }
)
