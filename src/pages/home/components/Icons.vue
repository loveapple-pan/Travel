<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="icon in page" :key="icon.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="icon.imgUrl" alt=""/>
                    </div>
                    <p class="icon-des">{{icon.des}}</p>
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      swiperOption: {
        autoplay: false
      },
      iconList: [
        {
          id: '001',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          des: '景点门票'
        },
        {
          id: '002',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          des: '自然风光'
        },
        {
          id: '003',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          des: '动植物园'
        },
        {
          id: '004',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          des: '一日游'
        },
        {
          id: '005',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
          des: '景点门票'
        },
        {
          id: '006',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
          des: '自然风光'
        },
        {
          id: '007',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
          des: '动植物园'
        },
        {
          id: '008',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          des: '一日游'
        },
        {
          id: '009',
          imgUrl:
            'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
          des: '常州必游'
        }
      ]
    }
  },
  computed: {
    pages () {
      let pages = []
      this.iconList.forEach((item, index) => {
        let page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
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
