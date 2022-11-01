<template>
  <input
    :class="activeClass"
    v-model="inputVal"
    :type="type"
    :maxlength="maxlength"
    :focus="focus"
    @input="inputHandle"
    @focus="focusHandle"
    @blur="blurHandle"
    :placeholder="placeholder"
  >
</template>
<script>
import { ref, computed, watch } from "vue";
export default {
  props: {
    placeholder: {
      type: String,
      default: "请输入"
    },
    type: {
      type: String,
      default: "text"
    },
    modelValue: {
      type: [String, Number]
    },
    maxlength: {
      type: String,
      defalut: ""
    },
    focus: {
      type: Boolean,
      defalut: false
    }
  },
  setup(props, { emit }) {
    const inputVal = ref("");
    const isFocus = ref(false)
    const activeClass = computed(() => {
      return 'input-item ' +  (isFocus.value && 'active')
    })
    const inputHandle = e => {
      emit("update:modelValue", e.detail.value);
    };
    const focusHandle = e=> {
      isFocus.value = true
    }
    const blurHandle = e=> {
      isFocus.value = false
    }
    const initValue = (val) => {
      inputVal.value = val
    }
    watch(
      () => props.modelValue,
      (value) => {
        if (value == "") {
          inputVal.value = ""
        }
      }
    )
    return {
      inputVal,
      isFocus,
      activeClass,
      inputHandle,
      focusHandle,
      blurHandle,
      initValue
    };
  }
};
</script>
<style lang="scss" scoped>
.input-item {
  padding: 20rpx 0;
  border-bottom: solid 1rpx #eee;
  font-size: 28rpx;
  transition: border 1s;
  &.active {
    border-bottom: solid 1rpx $uni-color-primary;
  }
}
</style>
