<template>
  <view class="">
    <diy-tabbar></diy-tabbar>
    <skeleton v-if="gujia"></skeleton>
    <view class="top">
      <type-view :list="categories" :selIndex="1" setKey="category" @change="typeChange"></type-view>
      <type-view :list="genreList" setKey="genre" @change="typeChange"></type-view>
      <type-view :list="years" setKey="year" @change="typeChange"></type-view>
      <type-view :list="countries" setKey="country" @change="typeChange"></type-view>
    </view>
    <view class="movie-list">
      <template v-for="(item, index) in movieList" :key="index">
        <movie-item class="movie-list-item" :detail="item"></movie-item>
      </template>
    </view>
  </view>
</template>

<script>
import skeleton from "./components/skeleton.vue";
import TypeView from "./components/type-view.vue";
import MovieItem from "@/components/movie-item.vue";
import { getCategories, getMovies } from "@/api/index";
import { onMounted, reactive, ref, toRefs, toRef, toRaw } from "vue";
import { onReachBottom } from "@dcloudio/uni-app";
export default {
  components: {
    TypeView,
    MovieItem,
    skeleton
  },
  setup() {
    const isBottom = ref(false);
    const gujia = ref(true);
    const search = reactive({ // 搜索条件
      page: 1,
      per_page: 20,
      category: "电影",
      genre: "全部",
      country: "全部",
      year: "全部"
    })
    const result = reactive({
      years: [],
      countries: [],
      categories: [],
      genreList: [],
      movieList:[]
    })
    // 获取菜单
    function getData() {
      getCategories().then(res => {
        if (res) {
          let { years, countries, categories } = res
          result.years = years
          result.countries = countries
          result.categories = categories
          result.genreList = categories[1]?categories[1].children:[]
        }
        gujia.value = false
      })
    }
    // 获取电影列表
    function getMoviesHandle() {
      getMovies(toRaw(search)).then(res => {
        if (res) {
          if (res.length > 0) {
            result.movieList = [...toRaw(result.movieList), ...res]
          } else {
            isBottom.value = true
          }
        }
      })
    }
    function typeChange(param) {
      search[param.key] = param.value
      search.page = 1
      result.movieList = []
      if(param.key == 'category') {
        result.genreList = result.categories[param.index].children
      }
      getMoviesHandle()
    }
    onMounted(() => {
      getData()
      getMoviesHandle()
    })
    onReachBottom(() => {
      if (!isBottom.value){
        search.page = search.page + 1
        getMoviesHandle()
      }
    })
    return {
      ...toRefs(result),
      gujia,
      typeChange
    }
  }
}
</script>

<style lang="scss" scoped>
.top {
  padding: 20rpx;
}
.movie-list {
  padding: 20rpx;
  padding-bottom: 120rpx;
  &-item {
    margin: 10rpx 18rpx;
   
  }
}
</style>