const state = {
  goodsList: [],
  goodsItem: {}
}
const mutations = {
  Update_goodsList(state, list) {
    state.goodsList = list
  },
  Update_goodsItem(state, item) {
    state.goodsItem = item
  }
}
const actions = {

}
const getters = {}


export default {
  state,
  mutations,
  actions,
  getters,
}