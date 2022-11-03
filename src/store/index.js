// 页面路径：store/index.js
import { createStore } from 'vuex';
import { userinfoReq } from '@/api/user';

const setDefault = (key, defaultValue = "")=>{
  return uni.getStorageSync(key) || defaultValue
}
const jsonParse = (val)=>{
  try {
    return JSON.parse(val)
  } catch (error) {
    return null
  }
}

const store = createStore({
	state:{
    "tabbarIndex": setDefault('tabbarIndex', 0),
    "token": setDefault('token'),
    "userInfo": jsonParse(setDefault('userInfo')),
  },
  mutations: {
    setTabbarIndex(state, value) {
      state.tabbarIndex = value
      uni.setStorageSync('tabbarIndex', value)
    },
    setToken(state, value) {
      state.token = value
      uni.setStorageSync("token", value)
    },
    setUserInfo(state, value) {
      state.userInfo = value
      uni.setStorageSync("userInfo", JSON.stringify(value))
    }
  },
  actions: {
    // 清除用户信息
    clearUser({ commit }) {
      commit("setUserInfo", null)
      commit("setToken", null)
      uni.clearStorageSync()
    },
    // 获取用户信息
    getUserInfo({ commit }) {
      userinfoReq().then(res => {
        if (res) {
          commit('setUserInfo', res)
        }
      })
    }
  }
})

export default store