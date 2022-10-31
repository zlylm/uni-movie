<template>
  <view class="page">
    <view class="con-box">
      <view class="title">注册</view>
      <view class="input-box martop-40">
        <base-input v-model="mobile" placeholder="请输入手机号"></base-input>
      </view>
      <view class="input-box martop-40">
        <base-input v-model="password" type="password" placeholder="设置初始密码(6~12位)"></base-input>
      </view>
      <view class="input-box martop-40">
        <text class="send-code">获取验证码</text>
        <base-input v-model="password" maxlength="4" placeholder="请输入验证码"></base-input>
      </view>
      <view class="martop-40">
        <button class="btn" @click="login">注册</button>
      </view>
      <view class="other martop-40">
        <text @click="accountLogin">账号登录</text>
        <text>找回密码</text>
      </view>
    </view>
  </view>
</template>
<script>
import { reactive, toRefs, toRaw } from "vue";
import BaseInput from "./components/base-input.vue";
export default {
  components: {
    BaseInput
  },
  setup() {
    const userinfo = reactive({
      password: "",
      mobile: ""
    })
    const login = ()=> {
      console.log(toRaw(userinfo));
    }
    const test = (e)=> {
      console.log(e);
    }
    const handleList =  reactive({
      // 账号登录
      accountLogin: ()=> {
        uni.navigateBack(-1)
      }
    })
    return {
      ...toRefs(userinfo),
      ...toRefs(handleList),
      login,
      test
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>


