<template>
    <div>
        <div class="recommend-title">
            周末去哪
        </div>
        <ul>
            <li class="item border-bottom" v-for="(item,index) in recommendList" :key="index">
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
  data () {
    return {
      recommendList: [
        {
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: ' 浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: ' 浪漫大连首战，浪漫的海洋主题乐园'
        },
        {
          imgUrl:
            'http://img1.qunarzz.com/sight/source/1505/7d/df6ff468331c43.jpg_r_640x214_1f3783d0.jpg',
          title: '大连圣亚海洋世界',
          desc: ' 浪漫大连首战，浪漫的海洋主题乐园'
        }
      ]
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
    margin-bottom .1rem
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
