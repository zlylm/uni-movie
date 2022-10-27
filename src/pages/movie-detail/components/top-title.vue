<template>
  <view class="top-title">
    <view class="left">
      <text class="iconfont icon-back" @click="back"></text>
      <image class="img" v-if="img" :src="img"></image>
      <text class="title">{{ titleVal }}</text>
    </view>
    <view class="right">
      <text>想看</text>
      <text>看过</text>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    titleVal: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      default: ''
    }
  },
  setup() {
    const back = ()=> {
      uni.navigateBack(-1)
    }
    return {
      back
    }
  }
}
</script>
<style lang="scss" scoped>
  .top-title {
    position: fixed;
    top: 0;
    left:0;
    width: 100%;
    height: 100rpx;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    color: #fff;
    padding: 0 30rpx;
    box-sizing: border-box;
    .left {
      display: flex;
      align-items: center;
      .img {
        width: 50rpx;
        height: 68rpx;
        margin: 0 30rpx;
      }
      .title {
        font-size: 30rpx;
      }
    }
    .right {
      display: flex;
      align-items: center;
      text {
        display: inline-block;
        padding: 8rpx 18rpx;
        background-color: rgba(255, 255, 255, 0.5);
        font-size: 24rpx;
        border-radius: $uni-border-radius-base;
        margin-left: 20rpx;
      }
    }
  }
</style>

