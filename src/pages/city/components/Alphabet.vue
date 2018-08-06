<template>
    <div class="list">
        <div class="item" v-for="(item, key) in cities" :key="key" @click="handLeletterClick" v-move :ref="key">{{key}}</div>
    </div>
</template>

<script>
export default {
  props: ['cities'],
  name: 'CityAlphabet',
  data () {
    return {
      startY: 0,
      timer: null
    }
  },
  methods: {
    handLeletterClick (e) {
      let letter = e.target.innerHTML
      this.$emit('letterClick', letter)
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  computed: {
    letters () {
      const letters = []
      for (const key in this.cities) {
        letters.push(key)
      }
      return letters
    }
  },
  directives: {
    move: {
      inserted (el, binding, vnode) {
        let _this = vnode.context
        function onTouchStart () {
          el.start = true
        }
        function onTouchMoving (e) {
          if (el.start) {
            if (_this.timer) {
              //    函数节流   性能优化
              clearTimeout(_this.timer)
            }
            _this.timer = setTimeout(() => {
              let touchY = e.touches[0].clientY - 79
              let index = Math.floor((touchY - _this.startY) / 20) //   通过差值计算滑动的距离
              if (index >= 0 && index < _this.letters.length) {
                vnode.context.$emit('letterClick', _this.letters[index])
              }
            }, 16)
          }
        }

        function onTouchEnd () {
          el.start = false
        }
        el._touchStart = onTouchStart
        el._touchMoving = onTouchMoving
        el._touchEnd = onTouchEnd
        el.addEventListener('touchstart', onTouchStart)
        el.addEventListener('touchmove', onTouchMoving)
        el.addEventListener('touchend', onTouchEnd)
      },
      unbind (el, binding) {
        el.removeEventListener('touchstart', el._touchStart)
        el.removeEventListener('touchmove', el._touchMoving)
        el.removeEventListener('touchend', el._touchEnd)
        delete el._touchStart
        delete el._touchMoving
        delete el._touchEnd
        delete el.start
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    right 0
    top 1.58rem
    bottom 0
    width 0.4rem
    .item
        text-align center
        line-height 0.4rem
        color $bgColor
</style>
