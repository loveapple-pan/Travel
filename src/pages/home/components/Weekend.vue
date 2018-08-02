<template>
    <div>
        <div class="recommend-title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in weekendLists" :key="index">
                <div class="item-img-wrap">
                    <img class="item-img" :src="item.imgUrl"/>
                </div>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      weekendLists: this.weekendList
    }
  },
  watch: {
    weekendList: function (value) {
      this.weekendLists = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
    margin-top 0.2rem
    line-height 0.8rem
    text-indent 0.2rem
    background #eee
    margin-bottom 0.1rem
.item-img-wrap
    height 0
    overflow hidden
    padding-bottom 33.9%
    .item-img
        width 100%
.item-info
    padding 0.1rem
    .item-title
        line-height 0.54rem
        font-size 0.32rem
    .item-desc
        line-height 0.4rem
        color #ccc
</style>
