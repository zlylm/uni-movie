<template>
  <view class="movie-item">
    <view class="movie-item-top">
      <image mode="aspectFill" :src="detail.poster"></image>
      <text class="pinfen">{{ detail.rating }}分</text>
      <text v-if="isType" class="type">{{ detail.category }}</text>
    </view>
    <text class="title">{{ detail.title }}</text>
  </view>
</template>
<script>
export default {
  props: {
    detail: {
      type: Object,
      default: () => ({})
    },
    isType: {
      type: Boolean,
      default: false
    }
  }
}
</script>
<style lang="scss" scoped>
.movie-item {
  display: inline-block;
  width: 200rpx;
  &-top {
   
    height: 280rpx;
    position: relative;
    image {
      width: 100%;
      height: 280rpx;
      border-radius: $uni-border-radius-lg;
    }
    .pinfen {
      position: absolute;
      right: 10rpx;
      bottom: 10rpx;
      color: #ffa500;
      font-size: 26rpx;
    }
    .type {
      position: absolute;
      top: 10rpx;
      right: 10rpx;
      color: #fff;
      font-size: 22rpx;
      background-color: rgba(255,165,0,.7);
      padding: 4rpx 6rpx;
      border-radius: $uni-border-radius-base;
    }
  }
  .title {
    width: 100%;
    font-size: 30rpx;
    display: inline-block;
    overflow:hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-top: 6rpx;
  }
}
</style>
