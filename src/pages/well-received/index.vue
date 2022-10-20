<template>
  <view class="well-received">
    <type-movie v-for="(item, index) in listData" :key="index" :detail="item"></type-movie>
  </view>
</template>
<script>
import TypeMovie from "@/components/type-movie-item.vue";
import { theaterList } from "@/api/index";
export default {
  components: {
    TypeMovie
  },
  data() {
    return {
      listData: []
    };
  },
  onLoad() {
    this.getTheaterList();
  },
  methods: {
    getTheaterList() {
      let data = {
        page: 1,
        per_page: 20
      };
      theaterList(data).then(res => {
        this.listData = res;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
</style>

