<script>
export default {
  onLaunch: function() {
    console.log("App Launch");
    uni.hideTabBar();
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  },
  globalData: {
    tabbarIndex: 0
  }
};
</script>

<style>
@import "./static/iconfont/iconfont.css";
page {
  width: 100%;
  height: 100%;
}
.container {
  background-color: #f5f5f5;
  width: 100%;
  height: 100%;
}
/*每个页面公共css */
/* 解决小程序和app滚动条的问题 */
/* #ifdef MP-WEIXIN || APP-PLUS */
::-webkit-scrollbar {
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */

/* 解决H5 的问题 */
/* #ifdef H5 */
uni-scroll-view .uni-scroll-view::-webkit-scrollbar {
  /* 隐藏滚动条，但依旧具备可以滚动的功能 */
  display: none;
  width: 0 !important;
  height: 0 !important;
  -webkit-appearance: none;
  background: transparent;
  color: transparent;
}
/* #endif */

.page-view {
  padding: 30rpx;
}
view {
  box-sizing: border-box;
}
/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */
@font-face {
  font-family: "阿里巴巴普惠体 2.0 35 Thin";font-weight: 250;src: url("//at.alicdn.com/wf/webfont/cLhBs68WYnr0/uKBwU0XrBBfJdLWaqSAh8.woff2") format("woff2"),
  url("//at.alicdn.com/wf/webfont/cLhBs68WYnr0/6StCxWPw66bv5dNdtL9Cl.woff") format("woff");
  font-display: swap;
}
html, body, page {
  font-family: '阿里巴巴普惠体 2.0 35 Thin';
}
</style>