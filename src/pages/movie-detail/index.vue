<template>
    <view class="page">
        <top-title :style="{...infoStyle, opacity: opacity}" :titleVal="detail.title" :img="miniImg"></top-title>
        <view class="page-top" :style="infoStyle">
            <view class="m-info-top">
                <view class="img-box">
                    <image class="img" :src="miniImg"></image>
                </view>
                
                <view class="m-info-top-right">
                    <view>{{ detail.title }}</view>
                    <view>{{ genresStr }}</view>
                    <view>{{ countries }}</view>
                    <view class="btns">
                        <view><text class="iconfont icon-love"></text>想看</view>
                        <view><text class="iconfont icon-star-fill"></text>看过</view>
                    </view>
                </view>
            </view>
            <view class="tag-list">
                <view class="tag-item" v-for="(item, index) in (detail.tags || [])" :key="index">
                    {{ item }}
                </view>
            </view>
            <view class="type-title">
                <view>剧情</view>
                <view>
                    <text class="iconfont icon-arrow-right"></text>
                </view>
            </view>
            <view class="juqing-content">{{ detail.summary }}</view>
            <view class="type-title">
                <view>演员</view>
                <view>
                    全部{{ detail.cast_count }}
                    <text class="iconfont icon-arrow-right"></text>
                </view>
            </view>
            <yan-yuan :list="detail.cast"></yan-yuan>
        </view>
        <view class="page-other">
            <xiang-ce :list="detail.photos"></xiang-ce>
            <Alike style="margin: 20rpx 0;" :list="detail.like_movies"></Alike>
        </view>
    </view>
</template>
<script>
import { movieDetail } from "@/api/index";
import { set16ToRgb, debounce } from "@/utils";
import MovieBox from "@/components/movie-box.vue";
import MovieItem from "@/components/movie-item.vue";
import YanYuan from "./components/yan-yuan.vue";
import XiangCe from "./components/xiang-ce.vue";
import Alike from "./components/alike.vue";
import TopTitle from "./components/top-title.vue";
export default {
    components: {
        MovieBox,
        MovieItem,
        YanYuan,
        XiangCe,
        Alike,
        TopTitle
    },
    data () {
        return {
            detail: {},
            opacity: 0, // 缩略导航 透明度
            timer: null
        }
    },
    onLoad: function (option) {
		  console.log(option.id); 
        this.getDetail(option.id)
	  },
    computed: {
      genresStr: function() {
        return this.detail.genres && this.detail.genres.join("/")
      },
      countries: function() {
        if (this.detail.countries) {
            return this.detail.countries.join("-") + "-" + this.detail.year
        }
      },
      infoStyle: function() {
        return {
          background: `${set16ToRgb(this.detail.bgcolor, 0.8)}`
        }
      },
      miniImg: function() {
        if (this.detail && this.detail.poster) {
          return this.detail.poster.small
        }
      }
    },
    methods: {
        getDetail(id) {
           movieDetail(id).then(res => {
            console.log(res);
                this.detail = res;
           }) 
        },
        renderTop(e) {
          let top = e.scrollTop;

          if (top < 201) {
            this.opacity = (top / 200).toFixed(1)
          }
        }
    },
    onPageScroll(e) {
      // if (this.timer) {
      //   clearTimeout(this.timer)
      // }
      // this.timer = setTimeout(() => {
      //   this.renderTop(e)
      // }, 120)

      this.renderTop(e)
    }
}
</script>
<style lang="scss" scoped>
@import 'index.scss';
</style>