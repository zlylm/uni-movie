<template>
  <view class="movie-box">
      <view class="img-box">
        <image class="img" mode="aspectFill" :src="detail.poster"></image>
      </view>
      <view class="info">
        <view>{{ detail.title }}</view>
        <view>{{ detail.year }}</view>
        <view>{{ detail.category }}</view>
        <view>{{ detail.countries }}</view>
        <view class="fen">{{ detail.rating }}分</view>
      </view>
    </view>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      default: {}
    }
  }
}
</script>
<style lang="scss" scoped>
.movie-box {
  display: flex;
  margin: 30rpx;
  .img-box {
    width: 160rpx;
    height: 220rpx;
    border-radius: 8rpx;
    margin-right: 20rpx;
    overflow: hidden;
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info {
    position: relative;
    flex: 1;
    &>view {
      color: #666;
      font-size: 24rpx;
      margin-bottom: 16rpx;
    }
    &>view:first-child {
      color: #333;
      font-size: 34rpx;
      overflow:hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 400rpx;
    }
    .fen {
      position: absolute;
      top: 10rpx;
      right: 10rpx;
      color: #f16c00;
      font: {
        size: 28rpx;
        weight: bold;
      }
    }
  }
}
</style>


