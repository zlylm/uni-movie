<template>
  <view class="page">
    <view class="con-box">
      <view class="title">登录</view>
      <view class="input-box martop-40">
        <base-input v-model="account" placeholder="请输入手机号"></base-input>
      </view>
      <view class="input-box martop-40">
        <base-input v-model="password" type="password" placeholder="请输入密码"></base-input>
      </view>
      <view class="martop-40">
        <button class="btn" @click="loginCommit" :loading="loginLoading" :disabled="loginLoading">登录</button>
      </view>
      <view class="other martop-40">
        <text @click="acountRegister">账号注册</text>
        <text>找回密码</text>
      </view>
    </view>
  </view>
</template>
<script>
import { reactive, ref, toRefs, toRaw } from "vue";
import BaseInput from "./components/base-input.vue";
import { login } from "@/api/user";
import { useStore } from 'vuex';
export default {
  components: {
    BaseInput
  },
  setup() {
    const store = useStore()
    const userinfo = reactive({
      password: "",
      account: ""
    })
    const loginLoading = ref(false)
    const loginCommit = async ()=> {
      let data = toRaw(userinfo)
      loginLoading.value = true
      let res = await login(data)
      if (res) {
        store.commit("setToken", 'Bearer ' + res.token)
      }
      loginLoading.value = false
      uni.switchTab({
        url: '/pages/index/index'
      })
    }
    const handleList = reactive({
      acountRegister: ()=> {
        uni.navigateTo({ url: "/pages/user/register" })
      }
    })
    return {
      ...toRefs(userinfo),
      ...toRefs(handleList),
      loginCommit,
      loginLoading
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

