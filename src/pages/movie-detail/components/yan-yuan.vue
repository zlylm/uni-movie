<template>
  <scroll-view class="scroll-view" scroll-x="true">
    <template v-for="(item, index) in list" :key="index">
        <movie-item class="movie-item" imgKey="avatar" decKey="profession" titleKey="name" :detail="item"></movie-item>
    </template>
  </scroll-view>
</template>
<script>
import MovieItem from "@/components/movie-item.vue";
export default {
  components: {
    MovieItem
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-view {
  width: 100%;
  white-space: nowrap;
  color: #fff;
  .movie-item {
    margin-right: 20rpx;
  }
}
</style>