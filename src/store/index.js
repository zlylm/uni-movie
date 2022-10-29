// 页面路径：store/index.js
import { createStore } from 'vuex'
const store = createStore({
	state:{
		"tabbarIndex": uni.getStorageSync('tabbarIndex') || 0,
  },
  mutations: {
    setTabbarIndex(state, value) {
      state.tabbarIndex = value
      uni.setStorageSync('tabbarIndex', value)
    }
  }
})

export default store