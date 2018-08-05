<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
        <city-list :hotCities="hotCities" :cities="cities"></city-list>
        <city-alphabet :cities="cities"></city-alphabet>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import axios from 'axios'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  data () {
    return {
      hotCities: [],
      cities: {}
    }
  },
  mounted () {
    this.getCityInfo()
  },
  methods: {
    getCityInfo () {
      axios.get('/api/city.json').then(this.hadInfo)
    },
    hadInfo (res) {
      let data = res.data
      if (data.ret && data.data) {
        this.hotCities = data.data.hotCities
        this.cities = data.data.cities
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
