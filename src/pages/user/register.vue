<template>
  <view class="page">
    <code-modal v-model="codeModal" :phone="account" @codeSendSuccess="codeSendSuccess"></code-modal>
    <view class="con-box">
      <view class="title">注册</view>
      <view class="input-box martop-40">
        <base-input v-model="account" placeholder="请输入手机号"></base-input>
      </view>
      <view class="input-box martop-40">
        <base-input v-model="password" type="password" placeholder="设置初始密码(6~12位)"></base-input>
      </view>
      <view class="input-box martop-40">
        <text v-if="!seconds" class="send-code" @click="showCode">获取验证码</text>
        <text v-else class="send-code">{{ seconds }}s</text>
        <base-input v-model="code" maxlength="4" placeholder="请输入验证码"></base-input>
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
import { ref, reactive, toRefs, toRaw } from "vue";
import BaseInput from "./components/base-input.vue";
import CodeModal from "./components/code-modal.vue";
import { register } from "@/api/user";
export default {
  components: {
    BaseInput,
    CodeModal
  },
  setup() {
    const codeModal = ref(false);
    const seconds = ref(null)
    const userinfo = reactive({
      password: "",
      account: "",
      code: ""
    })
    const login = async ()=> {
      console.log(toRaw(userinfo));
      let data = toRaw(userinfo)
      let res = await register(data)
      if (res) {
        console.log(res);
        uni.showToast({
          icon: 'none',
          title: "注册成功"
        })
        setTimeout(() => {
          accountLogin()
        }, 1500)
      }
      
    }
    const showCode = (e)=> {
      if (userinfo.account == "") {
        uni.showToast({
          icon: 'none',
          title: "请输入手机号"
        })
        return
      }
      codeModal.value = true
    }
    const handleList =  reactive({
      // 账号登录
      accountLogin: ()=> {
        uni.navigateBack(-1)
      },
      // 图形验证码 验证成功
      codeSendSuccess: (msg)=> {
        seconds.value = 60
        let timer = setInterval(() => {
          if (seconds.value == 0) {
            clearInterval(timer)
            seconds.value = null
          } else {
            seconds.value--
          }
        }, 1000)
      }
    })
    return {
      ...toRefs(userinfo),
      ...toRefs(handleList),
      codeModal,
      login,
      showCode,
      seconds
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>


