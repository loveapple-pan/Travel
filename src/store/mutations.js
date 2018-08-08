export default {
  changeCity (state, city) {
    state.currentCity = city
    try {
      localStorage.setItem('city', city)
    } catch (e) {}
  }
}
