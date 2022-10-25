<template>
  <scroll-view class="scroll-view" scroll-x="true">
    <view class="type-box">
      <view 
        :class="['type-item', index == selIndex ? 'active':'']" 
        v-for="(item, index) in listData" :key="index" 
        @click="itemClick(item, index)"
      >{{ item.name }}</view>
    </view>
  </scroll-view>
</template>
<script>
import { ref, computed } from "vue";
export default {
  props: {
    list: {
      type: Array,
      default: () => []
    },
    setKey: {
      type: String,
      default: ''
    },
    selIndex: {
      type: Number,
      default: 0
    }
  },
  setup(props, { emit }) {
    const selIndex = ref(props.selIndex);

    function itemClick(item, index) {
      selIndex.value = index
      emit("change", {
        key: props.setKey,
        value: item.name,
        index
      })
    }
    const listData = computed(() => {
      if (props.list.length == 0) {
        return [{ name: '全部'}]
      }
      return (props.list[0].name!="全部") ? [
        { name: '全部'},
        ...props.list
      ] : props.list
    })
    return {
      itemClick,
      selIndex,
      listData
    };
  }
};
</script>
<style lang="scss" scoped>
.scroll-view {
  width: 100%;
  white-space: nowrap;
  .type-box {
    display: flex;
    padding: 10rpx;
    .type-item {
      padding: 6rpx 18rpx;
      border-radius: 30rpx;
      font-size: 28rpx;
      margin-right: 10rpx;
    }
  }
  .active {
    background-color: $uni-color-primary;
    color: #fff;
  }
}
</style>
