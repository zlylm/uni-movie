// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{
    "tabbarIndex": uni.getStorageSync('tabbarIndex') || 0,
    "token": uni.getStorageSync("token") || ""
  },
  mutations: {
    setTabbarIndex(state, value) {
      state.tabbarIndex = value
      uni.setStorageSync('tabbarIndex', value)
    },
    setToken(state, value) {
      state.token = value
      uni.setStorageSync("token", value)
    }
  }
})

export default store