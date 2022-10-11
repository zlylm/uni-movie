<template>
    <view class="page">
        <view class="page-top" :style="{background: detail.bgcolor}">
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
.page-top {
    padding: 20rpx;
    view {
        box-sizing: border-box;
    }
}
.m-info-top {
  display: flex;
  flex-wrap: nowrap;
  .img-box {
    width: 200rpx;
    height: 280rpx;
    overflow: hidden;
    margin-right: 20rpx;
    border-radius: $uni-border-radius-lg;
    .img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
  &-right {
    flex: 1;
    &>view {
        width: 100%;
    }
    &>view:first-child {
        font-size: 40rpx;
    }
    &>view:nth-child(2) {
        margin: 20rpx 0;
        font-size: 28rpx;
    }
    &>view:nth-child(3) {
        font-size: 26rpx;
    }
    &>view:last-child {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-between;
        margin-top: 20rpx;
        &>view {
            width: 45%;
            padding: 10rpx;
            background-color: rgba(0,0,0,.25);
            color: #fff;
            text-align: center;
            font-size: 24rpx;
            border-radius: $uni-border-radius-lg;
            display: flex;
            align-items: center;
            justify-content: center;
            .iconfont {
                margin-right: 6rpx;
            }
        }
    }
  }
}
.tag-list {
    margin: 20rpx 0;
    .tag-item {
        background-color: rgba(0,0,0,.25);
        padding: 12rpx 24rpx;
        display: inline-block;
        margin: 10rpx;
        font-size: 24rpx;
        color: #fff;
        border-radius: 24rpx;
    }
}
.type-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
    
    line-height: 40rpx;
    background-color: rgba(0,0,0,.25);
    margin: 20rpx 0;
    .iconfont {
        font-size: 24rpx;
    }
    &>view {
        font-size: 28rpx;
    }
}
.juqing-content {
    font-size: 28rpx;
    
    line-height: 40rpx;
}

</style>