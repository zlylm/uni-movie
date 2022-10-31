<template>
  <view class="tab-bar">
    <view 
      :class="['tab-bar-item',(selIndex == index) && 'active' ]" 
      v-for="(item, index) in navList" 
      :key="index" 
      @click="goto(item.url, index)"
    >
      <text :class="item.icon"></text>
      <view>{{ item.label }}</view>
    </view>
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";
import { useStore } from 'vuex';
export default {
  setup() {
    const store = useStore();
    const data = reactive({
      navList: [
        { label: '首页', url: '/pages/index/index', icon: 'iconfont icon-home' },
        { label: '分类', url: '/pages/classify/index', icon: 'iconfont icon-movie-fill' },
        { label: '短片', url: '/pages/short-film/index', icon: 'iconfont icon-video-fill' },
        { label: '我的', url: '/pages/my/index', icon: 'iconfont icon-user' },
      ],
      selIndex: store.state.tabbarIndex
    })
    const goto = (url, index)=> {
      uni.switchTab({ url })
      store.commit('setTabbarIndex', index)
    }
    return {
      ...toRefs(data),
      goto
    }
  }
}
</script>
<style lang="scss" scoped>
.tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 99;
  width: 100%;
  background-color: #fff;
  display: flex;
  font-size: 26rpx;
  padding: 8rpx 0;
  border-top: solid 1rpx #eee;
  &-item {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    color: #b7bac3;
    &.active {
      color: $uni-color-primary;
    }
    .iconfont {
      font-size: 48rpx;
    }
    &>view {
      width: 100%;
      text-align: center;
      margin-top: 6rpx;
    }
  }
}
</style>

