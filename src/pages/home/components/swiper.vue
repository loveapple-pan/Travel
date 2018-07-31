<template>
    <div class="wraper">
        <swiper :options="swiperOption">
            <swiper-slide v-for="item in swiperList" :key="item.id"><img class="swiper-img" :src="item.imgUrl"/></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [
        {
          id: '1',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1806/3c/c72a1ccd4d7b2202.jpg_750x200_b88bbab4.jpg'
        },
        {
          id: '2',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1807/e7/d70d0830a9941b02.jpg_750x200_f8c7d2ad.jpg'
        }
      ]
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
