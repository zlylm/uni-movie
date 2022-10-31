<template>
  <view class="page">
    <view class="con-box">
      <view class="title">登录</view>
      <view class="input-box martop-40">
        <base-input v-model="mobile" placeholder="请输入手机号"></base-input>
      </view>
      <view class="input-box martop-40">
        <base-input v-model="password" type="password" placeholder="请输入密码"></base-input>
      </view>
      <view class="martop-40">
        <button class="btn" @click="login">登录</button>
      </view>
      <view class="other martop-40">
        <text @click="acountRegister">账号注册</text>
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
    const handleList = reactive({
      acountRegister: ()=> {
        uni.navigateTo({ url: "/pages/user/register" })
      }
    })
    return {
      ...toRefs(userinfo),
      ...toRefs(handleList),
      login,
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

