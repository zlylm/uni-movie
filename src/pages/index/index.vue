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
          <image class="swiper-img" :src="item.banner"></image>
        </view>
      </swiper-item>
    </swiper>
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
      swiperList: []
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
  .icon {
    color: red;
  }
}
</style>
