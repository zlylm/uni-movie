<template>
  <view class="modal" v-if="modelValue">
    <view class="modal-main">
      <view class="modal-main_title">请输入以下验证码数字</view>
      <image class="img" :src="yzmUrl"></image>
      <view class="m-list">
        <base-input ref="codeDom" type="number" class="input" :focus="true" v-model="imgCode" maxlength="4"></base-input>
        <view :class="codeList[index] && 'active'" v-for="(item, index) in mList" :key="index">{{ codeList[index] || "" }}</view>
      </view>
      <view class="btn" @click="exit">
       取消
      </view>
    </view>
  </view>
</template>
<script>
import { captcha , code } from "@/api/user";
import { onBeforeMount, ref, reactive, toRefs, computed, watch } from "vue";
import BaseInput from "./base-input.vue";
export default {
  props: ["modelValue", "phone"],
  components: {
    BaseInput
  },
  setup(props, { emit }) {
    const codeDom = ref(null)
    const yzmUrl = ref("")
    const data = reactive({
      mList: Array(4).fill(1),
      imgCode: ""
    })
    const codeList = computed(()=> {
      return data.imgCode.split("");
    })
    const getImg = async()=> {
      let res = await captcha()
      if (res) {
        yzmUrl.value = res
      }
    }
    const exit = e => {
      emit("update:modelValue", false);
    };
    const yanzhen = async ()=> {
      let param = {
        type: 'register',
        code: data.imgCode,
        phone: props.phone
      }
      let res = await code(param);
      data.imgCode = ""
      codeDom.value.initValue("")
      if (res) {
        exit()
        emit("codeSendSuccess")
      }
    }

    watch(
      () => {
        return data.imgCode
      }
      , (code) => {
      if (code.length == 4) {
        yanzhen()
      }
      
    })
    onBeforeMount(() =>{
      getImg()
    })
    return {
      yzmUrl,
      exit,
      codeList,
      ...toRefs(data),
      codeDom
    }
  }
}
</script>
<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  .modal-main {
    width: 560rpx;
    height: 460rpx;
    background-color: #fff;
    border-radius: 8rpx;
    padding: 30rpx;
    position: relative;
    &_title {
      text-align: center;
      margin: 20rpx 0; 
      color: #80848f;
    }
    .img {
      width: 300rpx;
      height: 80rpx;
      margin: 40rpx auto;
      display: block;
    }
    .m-list {
      display: flex;
      margin-top: 60rpx;
      position: relative;
      &>view {
        flex: 1;
        margin: 0 40rpx;
        border-bottom: solid 1rpx #80848f;
        text-align: center;
        padding-bottom: 20rpx;
        height: 60rpx;
        transition: border 0.5s;
      }
      .active {
        border-bottom: solid 1rpx $uni-color-primary;
      }
      .input {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
      }
    }
    .btn {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      padding: 20rpx 0;
      border-top: solid #eee 1rpx;
      text-align: center;
      letter-spacing: 4rpx;
      cursor: pointer;
    }
  }
}
</style>
