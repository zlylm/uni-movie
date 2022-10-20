<template>
  <view class="top-fen">
    <type-movie v-for="(item, index) in listData" :key="index" :detail="item"></type-movie>
  </view>
</template>
<script>
import TypeMovie from "@/components/type-movie-item.vue";
import { topList } from "@/api/index";
export default {
  components: {
    TypeMovie
  },
  data() {
    return {
      listData: [],
      page: 1,
      isBottom: false
    };
  },
  onLoad() {
    this.getTopList();
  },
  onReachBottom() {
    if (!this.isBottom) {
      ++this.page
      this.getTopList()
    }
  },
  methods: {
    getTopList() {
      let data = {
        page: this.page,
        per_page: 20
      };
      topList(data).then(res => {
        if (res.length > 0) {
          this.listData = [...this.listData, ...res];
        } else {
          this.isBottom = true
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

