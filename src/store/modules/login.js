const state = {
  isLogin: JSON.parse(window.localStorage.getItem('user')) ? true : false,
  user: JSON.parse(window.localStorage.getItem('user')) || {}
}
const mutations = {
  Update_isLogin(state, bez) {
    state.isLogin = bez
  },

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