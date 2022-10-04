<template>
  <view class="movie-box">
    <view class="movie-box-top">
      <view class="title">正在热映</view>
      <view class="right">25部

        <i class="iconfont icon-arrow-right"></i>
      </view>
    </view>
    <scroll-view class="scroll-view" scroll-x="true">
      <slot></slot>
    </scroll-view>
  </view>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
.movie-box {
  padding: 0 20rpx;
  border-radius: $uni-border-radius-lg;
  background-color: #fff;
  &-top {
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
  .scroll-view {
    width: 100%;
    white-space: nowrap;
    & ::v-deep .movie-item {
      margin-right: 20rpx;
    }
  }
}
</style>
