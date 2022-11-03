<template>
  <view class="title-box">
    <view class="title">{{ title }}</view>
    <view class="right" @click="gotoUrl">
      {{ dec }}
      <text class="iconfont icon-arrow-right"></text>
    </view>
  </view>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    dec: {
      type: String,
      default: ""
    },
    url: {
      type: String,
      default: ""
    }
  },
  setup(props) {
    const gotoUrl = () => {
      if (props.url && props.url != "") {
        uni.navigateTo({ url: props.url });
      }
    };
    return {
      gotoUrl
    };
  }
};
</script>
<style lang="scss" scoped>
.title-box {
  display: flex;
  padding: 20rpx 0;
  justify-content: space-between;
  color: #666;
  .title {
    font-size: 28rpx;
    position: relative;
    padding-left: 16rpx;
    &::before {
      content: "";
      width: 8rpx;
      height: 30rpx;
      position: absolute;
      top: 50%;
      left: 0;
      background-color: $uni-color-primary;
      transform: translateY(-50%);
    }
  }
  .right {
    font-size: 26rpx;
  }
}
</style>
