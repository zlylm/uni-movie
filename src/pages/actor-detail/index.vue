<template>
  <view class="container">
    <view class="actor-top">
      <text class="back iconfont icon-back" @click="back"></text>
      <image class="bg" mode="top" :src="detail.avatar"></image>
      <text class="follow">关注</text>
      <view class="actor-top-info">
        <view>{{ detail.name }}</view>
        <view class="name-en">{{ detail.name_en }}</view>
        <view>
          <text>{{ detail.gender }}</text>-
          <text>{{ detail.country }}</text>
        </view>
      </view>
    </view>
    <view class="count-box item-style">
      <view>
        <view class="val">{{ detail.collection_count }}人</view>
        <view class="dec">已关注数</view>
      </view>
      <view>
        <view class="val">{{ detail.works_count || 0 }}部</view>
        <view class="dec">作品总数</view>
      </view>
      <view>
        <view class="val">{{ detail.role_count || 0 }}个</view>
        <view class="dec">掩饰角色</view>
      </view>
    </view>

    <view class="user-jianjie item-style">
      <item-title title="个人简介" dec="更多信息"></item-title>
      <view class="jianjie-con">
        {{ detail.summary }}
      </view>
    </view>
    
  </view>
</template>
<script>
import { getActorDetail } from '@/api/user';
import ItemTitle from "@/components/item-title.vue";
import { onShow } from '@dcloudio/uni-app';
import { reactive, ref } from 'vue';
export default {
  components: {
    ItemTitle
  },
  setup() {
    const detail = ref({})
    const back = ()=> {
      uni.navigateBack(-1)
    }
    const getDetail = (id)=> {
      let data = { id }
      getActorDetail(data).then(res => {
        console.log(res);
        detail.value = res
      })
    }
    onShow((option)=> {
      console.log(option);
      getDetail(1305577)
    })
    return {
      back,
      detail
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>

