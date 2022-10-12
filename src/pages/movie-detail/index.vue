<template>
    <view class="page">
        <view class="page-top" :style="infoStyle">
            <view class="m-info-top">
                <view class="img-box">
                    <image class="img" src="https://img.ixook.com/movie/Fi1MjeXVhaLF7A0XMWlEawyxolcK@public"></image>
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
            <movie-box :isTop="false">
                <template v-for="(item, index) in detail.cast" :key="index">
                    <movie-item imgKey="avatar" titleKey="name" :detail="item" style="margin-right:20rpx;"></movie-item>
                </template>
            </movie-box>
        </view>
    </view>
</template>
<script>
import { movieDetail } from "@/api/index";
import { set16ToRgb } from "@/utils";
import MovieBox from "@/components/movie-box.vue";
import MovieItem from "@/components/movie-item.vue";
export default {
    components: {
        MovieBox,
        MovieItem,
    },
    data () {
        return {
            detail: {}
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
      }
    },
    methods: {
        getDetail(id) {
           movieDetail(id).then(res => {
            console.log(res);
                this.detail = res;
           }) 
        }
    }
}
</script>
<style lang="scss" scoped>
@import 'index.scss';
</style>