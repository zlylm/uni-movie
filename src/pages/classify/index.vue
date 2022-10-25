<template>
  <view class="page-view">
    <type-view :list="categories" :selIndex="1" setKey="category" @change="typeChange"></type-view>
    <type-view :list="genreList" setKey="genre" @change="typeChange"></type-view>
    <type-view :list="years" setKey="year" @change="typeChange"></type-view>
    <type-view :list="countries" setKey="country" @change="typeChange"></type-view>
  </view>
</template>

<script>
import TypeView from "./components/type-view.vue";
import { getCategories } from "@/api/index";
import { onMounted, reactive, toRefs } from "vue"
export default {
  components: {
    TypeView,
  },
  setup() {
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
      genreList: []
    })
    function getData() {
      getCategories().then(res => {
        if (res) {
          let { years, countries, categories } = res
          result.years = years
          result.countries = countries
          result.categories = categories
          result.genreList = categories[1]?categories[1].children:[]
        }
      })
    }
    function typeChange(param) {
      search[param.key] = param.value
      search.page = 1
      if(param.key == 'category') {
        result.genreList = result.categories[param.index].children
      }
      console.log(search);
      
    }
    onMounted(() => {
      getData()
    })
    return {
      ...toRefs(result),
      typeChange
    }
  }
}
</script>

<style>

</style>