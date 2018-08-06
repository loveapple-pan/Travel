<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                <div class="button-list">
                    <div class="button-wraper">
                        <div class="button">北京</div>
                    </div>
                </div>
            </div>
            <div class="area">
                <div class="title border-topbottom">热门城市</div>
                <div class="button-list">
                    <div class="button-wraper" v-for="item in hotCities" :key="item.id">
                        <div class="button">{{item.name}}</div>
                    </div>
                </div>
            </div>
            <div class="area" v-for="(item,value) of cities" :key="value" :ref="value">
                <div class="title border-topbottom">{{value}}</div>
                <div class="item-list">
                    <div class="item border-bottom" v-for="city in item" :key="city.id">{{city.name}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
export default {
  props: ['hotCities', 'cities', 'letter'],
  name: 'CityList',
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper)
  },
  watch: {
    letter: function () {
      this.scroll.scrollToElement(this.$refs[this.letter][0])
    }
  }
}
</script>

<style lang="stylus" scoped>
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    position absolute
    top 1.58rem
    right 0
    left 0
    bottom 0
    overflow hidden
    .title
        line-height 0.54rem
        background #eeeeee
        padding-left 0.2rem
        color #666
        font-size 0.26rem
    .button-list
        padding 0.1rem 0.6rem 0.1rem 0.1rem
        overflow hidden
        .button-wraper
            float left
            width 33.33%
            .button
                text-align center
                margin 0.1rem
                border 0.02rem solid #ccc
                padding 0.1rem 0
                border-radius 0.06rem
    .item-list
        .item
            line-height .76rem
            padding-left .2rem
</style>
