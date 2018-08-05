<template>
    <div>
        <city-header></city-header>
        <city-search></city-search>
    </div>
</template>

<script>
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import axios from 'axios'
export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch
  },
  data() {
    return {
      hotCities: [],
      cities: {}
    }
  },
  mounted() {
    this.getCityInfo()
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.hadInfo)
    },
    hadInfo(data) {
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
