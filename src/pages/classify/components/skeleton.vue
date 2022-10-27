<template>
  <view class="gujia">
    <view class="top-type" v-for="(item, index) in typeList" :key="index">
      <view v-for="(child, idx) in childList" :key="idx"></view>
    </view>
    <view class="movie">
      <view class="movie-item" v-for="(child, idx) in movieList" :key="idx"></view>
    </view>
  </view>
</template>
<script>
import { reactive, toRefs } from "vue";
export default {
  setup() {
    const listData = reactive({
      typeList: Array(4).fill(1),
      childList: Array(6).fill(1),
      movieList: Array(16).fill(1),
    });
    return {
      ...toRefs(listData)
    };
  }
};
</script>
<style lang="scss" scoped>
.gujia {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #fff;
  z-index: 2;
  padding: 20rpx;
  .top-type {
    display: flex;
    overflow: hidden;
    & > view {
      display: inline-block;
      width: 100rpx;
      height: 50rpx;
      background-color: #eee;
      margin-right: 20rpx;
      margin-bottom: 20rpx;
      border-radius: 30rpx;
    }
  }
  .movie {
    // padding: 20rpx;
    padding-bottom: 120rpx;
    &-item {
      display: inline-block;
      width: 200rpx;
      height: 280rpx;
      margin: 10rpx 18rpx;
      background-color: #eee;
    }
  }
}
</style>


