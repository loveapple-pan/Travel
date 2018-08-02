<template>
    <div>
        <div class="recommend-title">
            热销推荐
        </div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in recommendLists" :key="index">
                <img class="item-img" :src="item.imgUrl"/>
                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">
                        {{item.desc}}
                    </p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      recommendLists: this.recommendList
    }
  },
  watch: {
    recommendList: function (value) {
      this.recommendLists = value
    }
  }
}
</script>

<style lang="stylus" scoped>
.recommend-title
    line-height 0.8rem
    text-indent 0.2rem
    background #eee
.item
    overflow hidden
    display flex
    height 1.9rem
    .item-img
        width 1.7rem
        height 1.7rem
        padding 0.1rem
    .item-info
        flex 1
        padding 0.1rem
        .item-title
            line-height 0.54rem
            font-size 0.32rem
        .item-desc
            line-height 0.4rem
            color #ccc
        .item-button
            background #ff9300
            line-height 0.44rem
            padding 0.2rem
            margin-top 0.16rem
            border-radius 0.06rem
            color #fff
</style>
