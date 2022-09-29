<template>
  <view class="content">
    <swiper
      class="swiper"
      circular
      :indicator-dots="indicatorDots"
      :autoplay="autoplay"
      :interval="interval"
      :duration="duration"
    >
      <swiper-item v-for="(item, index) in swiperList" :key="index">
        <view class="swiper-item">
          <image class="swiper-img" mode="scaleToFill" :src="item.banner"></image>
        </view>
      </swiper-item>
    </swiper>
    <view class="nav-list">
      <view class="nav-item" v-for="(item, index) in navList" :key="index">
        <i :class="['iconfont', item.icon]"></i>
        <text>{{ item.label }}</text>
      </view>
    </view>
  </view>
</template>

<script>
import { homeAllData } from "@/api/index";
export default {
  data() {
    return {
      title: "Hello",
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      swiperList: [],
      navList: [
        { label: '热映中', icon: 'icon-video' },
        { label: '高分榜', icon: 'icon-level' },
        { label: '奖项', icon: 'icon-trophy' },
        { label: '那年今日', icon: 'icon-date' },
      ],
    };
  },
  onLoad() {
    console.log(111);
    homeAllData().then(res => {
      console.log(res);
      let { swiper } = res;
      this.swiperList = swiper;
    });
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.content {
  padding: 30rpx;
}
.swiper {
  width: 100%;
  height: 400rpx;
  border-radius: 16rpx;
    overflow: hidden;
  &-img {
    width: 100%;
    height: 100%;
  }
  &-item {
    width: 100%;
    height: 100%;
  }
}
.nav-list {
  display: flex;
  .nav-item{
    flex: 1;
    text-align: center;
  }
}
</style>
