<template>
  <movie-box class="xiang-ce" title="相似影剧" :count="list.length || 0">
    <template v-for="(item, index) in list" :key="index">
      <movie-item :detail="item" style="margin-right:20rpx;"></movie-item>
    </template>
  </movie-box>
</template>
<script>
import MovieBox from "@/components/movie-box.vue";
import MovieItem from "@/components/movie-item.vue";
export default {
  // photos
  components: {
    MovieBox,
    MovieItem
  },
  props: {
    list: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style lang="scss" scoped>
// .xiang-ce {
//   .movie-item {
//     width: 130rpx;
//     &-top {
//       height: 180rpx;
//       .img {
//         height: 180rpx;
//       }
//     }
//   }
// }
</style>