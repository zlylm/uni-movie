<template>
  <view>
    <diy-tabbar></diy-tabbar>
    <view class="top">
      <view class="tou">
        <image class="img" src="https://test-h5.ixook.com/img/logo.3572ff19.png"></image>
      </view>
      <view @click="goLogin">立即登录</view>

      <view class="user-nav">
        <view v-for="(item, index) in userNavs" :key="index" class="user-nav-item">
          <view>{{ formatDefValue(tongjiObj[`${item.key}`]) }}</view>
          <view>{{ item.label }}</view>
        </view>
      </view>
    </view>

    <view class="nav-list">
      <view class="nav-list-item" v-for="(item, index) in menuList" :key="index">
        <text class="iconfont icon-egg"></text>
        <text>{{ item.label }}</text>
        <text class="iconfont icon-arrow-right"></text>
      </view>
    </view>
    
  </view>
</template>

<script>
import { reactive, toRefs, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import { collectionsCount, userinfo } from '@/api/user';
export default {
  setup() {
    const store = useStore()
    const data = reactive({
      userNavs: [
        { key: 'actor_count', label: '关注影人' },
        { key: 'role_count', label: '关注角色' },
        { key: 'review_count', label: '收藏影评' },
        { key: 'video_count', label: '收藏视频' },
      ],
      menuList: [
        { label: '意见反馈', url: '' },
        { label: '关于作者', url: '' },
        { label: '关于项目', url: '' },
        { label: '更新日志', url: '' },
        { label: '设置', url: '' },
      ],
      tongjiObj: {}
    })
    const formatDefValue = computed(() => {
      return (val) => {
        return val == 0 ? val : (val || '-')
      }
    })
    const goLogin = ()=> {
      uni.navigateTo({ url: '/pages/user/login' })
    }
    onMounted(() => {
      let { token } = store.state
      if (token && token!="") {
        collectionsCount().then(res =>{
          console.log(res);
          data.tongjiObj = res
        })
      }
      
    })
    return {
      ...toRefs(data),
      goLogin,
      formatDefValue
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 400rpx;
  background-color: $uni-color-primary;
  display: flex;
  align-items: center;
  padding: 0 30rpx;
  color: #fff;
  font-size: 32rpx;
  position: relative;
  .tou {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background-color: #fff;
    margin-right: 30rpx;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
  }
  .user-nav {
    width: calc(100% - 60rpx);
    padding: 30rpx 0;
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    border-radius: 12rpx;
    box-shadow: 0 6rpx 6rpx #eee;
    z-index: 2;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    color: #333;
    font-size: 28rpx;
    &-item {
      flex: 1;
      &>view {
        text-align: center;
        &:first-child {
          margin-bottom: 20rpx;
          color: $uni-color-primary;
          font-weight: bold;
        }
      }
      
    }
  }
}
.nav-list {
  width: calc(100% - 60rpx);
  margin: 30rpx auto;
  margin-top: 120rpx;
  background-color: #fff;
  border-radius: 12rpx;
  box-shadow: 0 0 6rpx #eee;
  padding: 0 30rpx;
  &-item {
    border-bottom: solid 1rpx #eee;
    padding: 30rpx 0;
    font-size: 30rpx;
    text:first-child {
      margin-right: 20rpx;
      color: $uni-color-primary;
      font-size: 36rpx;
    }
    text:last-child {
      float: right;
      color: #666;
    }
  }
}

</style>