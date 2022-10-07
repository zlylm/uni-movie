
  <template name="skeleton">
  <view class="sk-container">
    <view class="container data-v-1badc801">
      <view class="top-bg data-v-1badc801">
        <view class="mengban data-v-1badc801"></view>
        <image class="img data-v-1badc801 sk-image" mode="scaleToFill"></image>
      </view>
      <view class="search data-v-1badc801">
        <view class="iconfont icon-search data-v-1badc801 sk-pseudo sk-pseudo-circle"></view>
        <text class="data-v-1badc801 sk-transparent sk-text-14-2857-713 sk-text">请输入影片名称</text>
      </view>
      <swiper circular="true" class="swiper data-v-1badc801" duration="500" interval="2000" autoplay="false" indicator-dots="true" current="0"></swiper>
      <view class="nav-list data-v-1badc801">
        <view class="nav-item data-v-1badc801">
          <text class="data-v-1badc801 iconfont icon-video sk-pseudo sk-pseudo-circle"></text>
          <text class="data-v-1badc801 sk-transparent sk-text-14-2857-172 sk-text" style="background-position-x: 50%;">热映中</text>
        </view>
        <view class="nav-item data-v-1badc801">
          <text class="data-v-1badc801 iconfont icon-level sk-pseudo sk-pseudo-circle"></text>
          <text class="data-v-1badc801 sk-transparent sk-text-14-2857-475 sk-text" style="background-position-x: 50%;">高分榜</text>
        </view>
        <view class="nav-item data-v-1badc801">
          <text class="data-v-1badc801 iconfont icon-trophy sk-pseudo sk-pseudo-circle"></text>
          <text class="data-v-1badc801 sk-transparent sk-text-14-2857-616 sk-text" style="background-position-x: 50%;">奖项</text>
        </view>
        <view class="nav-item data-v-1badc801">
          <text class="data-v-1badc801 iconfont icon-date sk-pseudo sk-pseudo-circle"></text>
          <text class="data-v-1badc801 sk-transparent sk-text-14-2857-994 sk-text" style="background-position-x: 50%;">那年今日</text>
        </view>
      </view>
      <view is="pages/index/components/movie-box" class="data-v-1badc801">
        <view class="movie-box box--movie-box data-v-fec370d4 box--data-v-fec370d4">
          <view class="movie-box-top box--movie-box-top data-v-fec370d4 box--data-v-fec370d4">
            <view class="title box--title data-v-fec370d4 box--data-v-fec370d4 sk-transparent sk-text-14-2857-887 sk-text sk-pseudo sk-pseudo-circle">热门推荐</view>
            <view class="right box--right data-v-fec370d4 box--data-v-fec370d4 sk-transparent">23部
              <text class="iconfont box--iconfont icon-arrow-right box--icon-arrow-right data-v-fec370d4 box--data-v-fec370d4 sk-pseudo sk-pseudo-circle"></text>
            </view>
          </view>
          <scroll-view class="scroll-view box--scroll-view data-v-fec370d4 box--data-v-fec370d4" scroll-x="true">
            <view is="components/movie-item" class="data-v-1badc801" style="margin-right:10px">
              <view class="movie-item item--movie-item data-v-47f93cc0 item--data-v-47f93cc0">
                <view class="movie-item-top item--movie-item-top data-v-47f93cc0 item--data-v-47f93cc0">
                  <image class="data-v-47f93cc0 item--data-v-47f93cc0 sk-image" mode="aspectFill"></image>
                  <text class="pinfen item--pinfen data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-553 sk-text">8.2分</text>
                </view>
                <text class="title item--title data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-992 sk-text">红海行动</text>
              </view>
            </view>
            <view is="components/movie-item" class="data-v-1badc801" style="margin-right:10px">
              <view class="movie-item item--movie-item data-v-47f93cc0 item--data-v-47f93cc0">
                <view class="movie-item-top item--movie-item-top data-v-47f93cc0 item--data-v-47f93cc0">
                  <image class="data-v-47f93cc0 item--data-v-47f93cc0 sk-image" mode="aspectFill"></image>
                  <text class="pinfen item--pinfen data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-22 sk-text">7.6分</text>
                </view>
                <text class="title item--title data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-629 sk-text">我和我的祖国</text>
              </view>
            </view>
            <view is="components/movie-item" class="data-v-1badc801" style="margin-right:10px">
              <view class="movie-item item--movie-item data-v-47f93cc0 item--data-v-47f93cc0">
                <view class="movie-item-top item--movie-item-top data-v-47f93cc0 item--data-v-47f93cc0">
                  <image class="data-v-47f93cc0 item--data-v-47f93cc0 sk-image" mode="aspectFill"></image>
                  <text class="pinfen item--pinfen data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-366 sk-text">6.6分</text>
                </view>
                <text class="title item--title data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-181 sk-text">中国机长</text>
              </view>
            </view>
            <view is="components/movie-item" class="data-v-1badc801" style="margin-right:10px">
              <view class="movie-item item--movie-item data-v-47f93cc0 item--data-v-47f93cc0">
                <view class="movie-item-top item--movie-item-top data-v-47f93cc0 item--data-v-47f93cc0">
                  <image class="data-v-47f93cc0 item--data-v-47f93cc0 sk-image" mode="aspectFill"></image>
                </view>
                <text class="title item--title data-v-47f93cc0 item--data-v-47f93cc0 sk-transparent sk-text-14-2857-261 sk-text">我和我的家乡</text>
              </view>
            </view>
          </scroll-view>
        </view>
      </view>
      <view is="pages/index/components/movie-box" class="data-v-1badc801">
        <view class="movie-box box--movie-box data-v-fec370d4 box--data-v-fec370d4">
          <view class="movie-box-top box--movie-box-top data-v-fec370d4 box--data-v-fec370d4">
            <view class="title box--title data-v-fec370d4 box--data-v-fec370d4 sk-transparent sk-text-14-2857-309 sk-text sk-pseudo sk-pseudo-circle">那年今日</view>
            <view class="right box--right data-v-fec370d4 box--data-v-fec370d4 sk-transparent">273部
              <text class="iconfont box--iconfont icon-arrow-right box--icon-arrow-right data-v-fec370d4 box--data-v-fec370d4 sk-pseudo sk-pseudo-circle"></text>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  
}
</script>
<style>
.sk-transparent {
    color: transparent !important;
  }
.sk-text-14-2857-713 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.0000rpx;
    position: relative !important;
  }
.sk-text {
    background-origin: content-box !important;
    background-clip: content-box !important;
    background-color: transparent !important;
    color: transparent !important;
    background-repeat: repeat-y !important;
  }
.sk-text-14-2857-172 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-475 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-616 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-994 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: relative !important;
  }
.sk-text-14-2857-887 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-text-14-2857-553 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: absolute !important;
  }
.sk-text-14-2857-992 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-22 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: absolute !important;
  }
.sk-text-14-2857-629 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-366 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 33.6000rpx;
    position: absolute !important;
  }
.sk-text-14-2857-181 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-261 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 42.0000rpx;
    position: relative !important;
  }
.sk-text-14-2857-309 {
    background-image: linear-gradient(transparent 14.2857%, #EEEEEE 0%, #EEEEEE 85.7143%, transparent 0%) !important;
    background-size: 100% 36.4000rpx;
    position: relative !important;
  }
.sk-image {
    background: #EFEFEF !important;
  }
.sk-pseudo::before, .sk-pseudo::after {
      background: #EFEFEF !important;
      background-image: none !important;
      color: transparent !important;
      border-color: transparent !important;
    }
.sk-pseudo-rect::before, .sk-pseudo-rect::after {
      border-radius: 0 !important;
    }
.sk-pseudo-circle::before, .sk-pseudo-circle::after {
      border-radius: 50% !important;
    }
.sk-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: transparent;
  }
</style>


