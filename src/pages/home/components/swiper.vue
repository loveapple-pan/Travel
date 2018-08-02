<template>
    <div class="wraper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperLists" :key="item.id">
              <img class="swiper-img" :src="item.imgUrl"/>
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        pagination: 'swiper-pagination',
        loop: true
      },
      swiperLists: this.swiperList
    }
  },
  watch: {
    swiperList: function (value) {
      this.swiperLists = value
    }
  }
}
</script>
<style lang="stylus" scoped>
.wraper >>> .swiper-pagination-bullet-active
  background #fff
.wraper
  height 0
  overflow hidden
  width 100%
  padding-bottom 26.66%
  background #ccc
  .swiper-img
    width 100%
</style>
