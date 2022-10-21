<template>
  <view class="film">
    <view class="film-box" v-for="(item, index) in listData">
      <view class="content">
        <text class="title">{{ item.title }}</text>
        <text class="count">{{ item.play_count }} 次播放</text>
        <!-- <text class="time">{{ item.duration }}</text> -->
        <!-- <image lazy-load class="img" :src="item.poster"></image>
        <view class="play">
          <text class="iconfont icon-play"></text>
        </view> -->
        <video ref="video-list" :id="`film-video-${index}`" @play="changePlay($event, index)" class="video" :poster="item.poster" :src="item.sources[0].url"></video>
      </view>
      <view class="user">
        <view class="info">
          <image class="img" src="http://img.ixook.com/image/FqLCKsi6Edgr3tblHj4NifZrPP-K@avatar"></image>
          <text>兔子先生是吧</text>
        </view>
        <view class="right">
          <view><text class="iconfont icon-like"></text>{{ item.like_count }}</view>
          <view><text class="iconfont icon-comment"></text>{{ item.comment_count }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
import { getVideos } from "@/api/index";
export default {
  data() {
    return {
      listData: [],
      page: 1,
      isBottom: false,
      timer: null,
    };
  },
  onLoad() {
    this.getList();
  },
  onReachBottom() {
    if (!this.isBottom) {
      ++this.page
      this.getList()
    }
  },
  methods: {
    changePlay(e, index) {
      console.log();
      this.$refs['video-list'].forEach((item, idx) => {
        if (idx != index) {
          let id = `film-video-${idx}`
          uni.createVideoContext(id).pause(); //暂停视频播放事件
        }
      })
    },
    getList() {
      let data = {
        page: this.page,
        per_page: 20
      };
      getVideos(data).then(res => {
        if (res.length > 0) {
          this.listData = [...this.listData, ...res];
        } else {
          this.isBottom = true
        }
      });
    },
    stopNoView() {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          
        } else {
          console.log(entries[0]);
        }
      }, { threshold: .2 });
      console.log(observer);
      this.$refs['video-list'].forEach((item, idx) => {
        let id = `film-video-${idx}`
        // uni.createVideoContext(id).pause(); //暂停视频播放事件
        console.log(uni.createSelectorQuery().select(`#${id}`));
        
        // observer.observe(uni.createVideoContext(id))
      })
    }
  },
  // onPageScroll(e) {
  //     if (this.timer) {
  //       clearTimeout(this.timer)
  //     }
  //     this.timer = setTimeout(() => {
  //       this.stopNoView()
  //     }, 500)
  // }
}
</script>

<style lang="scss" scoped>
.film-box {
  padding: 30rpx;
  
  .content {
    width: 100%;
    height: 400rpx;
    background-color: #000;
    border-radius: 6rpx;
    position: relative;
    color: #fff;
    font-size: 26rpx;
    border-radius: 8rpx;
    overflow: hidden;
    text {
      z-index: 2;
    }
    .play {
      width: 120rpx;
      height: 120rpx;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 30rpx;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .title {
      position: absolute;
      top: 20rpx;
      left: 20rpx;
      font-size: 32rpx;
    }
    .count {
      position: absolute;
      top: 20rpx;
      right: 20rpx;
    }
    .time {
      position: absolute;
      bottom: 40rpx;
      right: 20rpx;
    }
    .img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .video {
      width: 100%;
    }
  }
  .user {
    display: flex;
    justify-content: space-between;
    .info {
      display: flex;
      align-items: center;
      .img {
        width: 80rpx;
        height: 80rpx;
      }
      text {
        font: {
          size: 28rpx;
          weight: bold;
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      view {
        font-size: 26rpx;
        margin-left: 20rpx;
        display: flex;
        align-items: center;
        .iconfont {
          margin-right: 10rpx;
        }
      }
    }
  }
}
</style>
