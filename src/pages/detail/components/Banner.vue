<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg" alt="迪士尼">
            <div class="banner-info">
                <div class="banner-title">上海迪士尼乐园</div>
                <div class="banner-number"><span class="iconfont arrow-icon banner-icon">&#xe692;</span>  39</div>
            </div>
        </div>
        <common-gallary :imgs="imgs" v-show="showGallary" @close="handleGallaryClose"></common-gallary>
    </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  data () {
    return {
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1704/d2/d2a029bded2f6b4aa3.img.jpg_r_800x800_d0d2c749.jpg',
        'http://img1.qunarzz.com/sight/p0/1711/1e/1e5eaf5ac11a1dea3.img.jpg_r_800x800_e7892537.jpg'
      ],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  },
  components: {
    CommonGallary
  }
}
</script>

<style lang="stylus" scoped>
.banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
        width 100%
    .banner-info
        display flex
        position absolute
        right 0
        left 0
        bottom 0
        line-height 0.6rem
        color #fff
        background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
        .banner-title
            flex 1
            font-size 0.32rem
            padding 0 0.2rem
        .banner-number
            margin-top 0.14rem
            padding 0 0.4rem
            line-height 0.32rem
            height 0.32rem
            border-radius 0.2rem
            background rgba(0, 0, 0, 0.8)
            font-size 0.24rem
            .banner-icon
                font-size 0.24rem
</style>
