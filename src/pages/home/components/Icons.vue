<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="icon in page" :key="icon.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="icon.imgUrl" alt=""/>
                    </div>
                    <p class="icon-des">{{icon.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconLists: this.iconList
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconLists.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  },
  watch: {
    iconList: function (value) {
      this.iconLists = value
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  padding-bottom 50%
  height 0
.icons
  width 100%
  height 0
  padding-bottom 50%
  overflow hidden
  margin-top 0.1rem
  .icon
    float left
    width 25%
    height 0
    padding-bottom 25%
    position relative
    overflow hidden
    .icon-img
      position absolute
      top 0
      left 0
      right 0
      bottom 0.44rem
      box-sizing border-box
      padding 0.1rem
      .icon-img-content
        display block
        height 100%
        margin 0 auto
    .icon-des
      position absolute
      left 0
      right 0
      bottom 0
      height 0.44rem
      line-height 0.44rem
      text-align center
      color $darkTextColor
      ellipsis()
</style>
