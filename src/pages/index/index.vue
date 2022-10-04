<template>
  <view class="container">
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
    <movie-box>
      <template v-for="(item, index) in hotList" :key="index">
        <movie-item :detail="item"></movie-item>
      </template>
    </movie-box>
  </view>
</template>

<script>
import { homeAllData } from "@/api/index";
import MovieBox from "./components/movie-box.vue";
import MovieItem from "@/components/movie-item.vue";
export default {
  components: {
    MovieBox,
    MovieItem
  },
  data() {
    return {
      title: "Hello",
      indicatorDots: true,
      autoplay: true,
      interval: 2000,
      duration: 500,
      swiperList: [],
      hotList:[],
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
      let { swiper, theater } = res;
      this.swiperList = swiper;
      this.hotList = theater.data;
    });
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
.container {
  padding: 30rpx;
  box-sizing: border-box;
}
.swiper {
  width: 100%;
  height: 400rpx;
  border-radius: $uni-border-radius-lg;
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
  background-color: #fff;
  margin: $uni-spacing-col-base 0;
  padding: 40rpx 0;
  border-radius: $uni-border-radius-lg;

  .nav-item{
    flex: 1;
    text-align: center;
    i {
      width: 80rpx;
      height: 80rpx;
      line-height: 80rpx;
      display: inline-block;
      font-size: 46rpx;
      border-radius: $uni-border-radius-lg;
    }
    &:nth-child(1) > i {
     color: #f8a52d;
        background: rgba(248,165,45,.15);
    }
    &:nth-child(2) > i {
      color: #ff4f4d;
      background: rgba(255,79,77,.15);
    }
    &:nth-child(3) > i {
      color: #41acff;
      background: rgba(65,172,255,.15);
    }
    &:nth-child(4) > i {
      color: #916dff;
      background: rgba(145,109,255,.15);
    }
    text {
      display: block;
      font-size: 26rpx;
      margin-top: 10rpx;
    }
  }
}
</style>
